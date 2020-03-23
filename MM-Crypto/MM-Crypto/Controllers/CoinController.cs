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
    public class CoinController : ControllerBase
    {
        private readonly CryptoContext context;

        public CoinController(CryptoContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Coin> GetAllCoins()
        {
            return context.Coins.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetCoinById(int Id)
        {
            var coin = context.Coins.Find(Id);

            if (coin == null)
                return NotFound();

            return Ok(coin);
        }

        [Route("{id}")]
        [HttpDelete]

        public IActionResult DeleteCoinById(int id)
        {
            var coin = context.Coins.Find(id);

            if (coin == null)
                return NotFound();

            context.Coins.Remove(coin);
            context.SaveChanges();

            // Default 404 if delete was successful
            return NoContent();
        }
    }
}