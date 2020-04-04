using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MM_Crypto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoundersController : ControllerBase
    {
        private readonly CryptoContext context;

        public FoundersController(CryptoContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Founder> GetAllFounders(  int? page, int lenght = 2)
        {
            IQueryable<Founder> query = context.Founders;

            if (page.HasValue)
                query = query.Skip(page.Value * lenght);
            
            query = query.Take(lenght);

            return query.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetFounderById(int Id)
        {
            var founder = context.Founders.SingleOrDefault(f => f.ID == Id);

            if (founder == null)
                return NotFound();

            return Ok(founder);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteFounderById(int id)
        {
            var founder = context.Founders.Find(id);

            if (founder == null)
                return NotFound();

            context.Founders.Remove(founder);
            context.SaveChanges();

            // Default 404 if delete was successful
            return NoContent();
        }

        [HttpPost]
        public IActionResult CreateFounder([FromBody] Founder newFounder)
        {
            context.Founders.Add(newFounder);
            context.SaveChanges();
            return Created("", newFounder);
        }
    }
}