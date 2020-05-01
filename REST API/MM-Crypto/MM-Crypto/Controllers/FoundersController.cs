using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace MM_Crypto.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class FoundersController : ControllerBase
    {
        private readonly CryptoContext context;

        public FoundersController(CryptoContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Founder> GetAllFounders(int? page, int lenght = 100)
        {
            IQueryable<Founder> query = context.Founders;

            // Paging
            if (page.HasValue)
                query = query.Skip(page.Value * lenght);

            query = query.Take(lenght);

            // Response Headers
            Response.Headers.Add("X-Total-Count", query.Count().ToString());

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
        public IActionResult InsertFounder([FromBody] Founder newFounder)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            context.Founders.Add(newFounder);
            context.SaveChanges();
            return Created("", newFounder);
        }

        [HttpPut]
        public IActionResult UpdateFounder([FromBody] Founder updateFouder)
        {
            var originalFounder = context.Founders.Find(updateFouder.ID);

            if (originalFounder == null)
                return NotFound();

            originalFounder.FirstName = updateFouder.FirstName;
            originalFounder.LastName = updateFouder.LastName;

            context.SaveChanges();
            return Ok(originalFounder);
        }
    }
}