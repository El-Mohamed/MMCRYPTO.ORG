using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            var coin = context.Coins
                .Include(c => c.Founder)
                .SingleOrDefault(c => c.ID == Id);

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

        [HttpPost]
        public IActionResult CreateCoin([FromBody] Coin newCoin)
        {
            context.Coins.Add(newCoin);
            context.SaveChanges();
            return Created("", newCoin);
        }

        [HttpPut]
        public IActionResult UpdateCoin([FromBody] Coin updateCoin)
        {
            var originalCoin = context.Coins.Find(updateCoin.ID);

            if (originalCoin == null)
                return NotFound();

            originalCoin.Name = updateCoin.Name;
            originalCoin.Founder = updateCoin.Founder;
            originalCoin.Website = updateCoin.Website;

            context.SaveChanges();
            return Ok(originalCoin);
        }
    }
}