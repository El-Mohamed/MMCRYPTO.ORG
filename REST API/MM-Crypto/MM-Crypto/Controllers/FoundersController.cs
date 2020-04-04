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

    }
}