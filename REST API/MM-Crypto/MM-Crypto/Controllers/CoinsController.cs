using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace MM_Crypto.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CoinsController : ControllerBase
    {
        private readonly CryptoContext context;

        public CoinsController(CryptoContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Asset> GetAllCoins(string sort, int? page, int length = 20, string dir = "asc")
        {
            IQueryable<Asset> query = context.Assets;

            // Sort
            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "name":
                        if (dir == "asc")
                            query = query.OrderBy(c => c.Name);
                        else if (dir == "desc")
                            query.OrderByDescending(c => c.Name);
                        break;

                    case "symbol":
                        if (dir == "asc")
                            query = query.OrderBy(c => c.Symbol);
                        else if (dir == "desc")
                            query.OrderByDescending(c => c.Symbol);
                        break;
                }
            }

            // Paging
            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);

            query = query
                .Include(c => c.Founder)
                .Include(c => c.Fork);

            // Response Headers
            Response.Headers.Add("X-Total-Count", query.Count().ToString());

            return query.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetCoinById(int Id)
        {
            var coin = context.Assets
                .Include(c => c.Founder)
                .Include(c => c.Fork)
                .SingleOrDefault(c => c.ID == Id);

            if (coin == null)
                return NotFound();

            return Ok(coin);
        }

        [Route("{id}/founder")]
        [HttpGet]
        public IActionResult GetFounderFromCoin(int Id)
        {
            var coin = context.Assets
                .Include(c => c.Founder)
                .SingleOrDefault(c => c.ID == Id);

            if (coin == null)
                return NotFound();

            var founder = context.Founders.Find(coin.Founder.ID);

            if (founder == null)
                return NotFound();

            return Ok(founder);
        }

        [Route("{id}/hardforks")]
        [HttpGet]
        public IActionResult GetHardForksFromCoin(int Id)
        {
            var coin = context.Assets
                .Include(c => c.HardForks)
                .SingleOrDefault(c => c.ID == Id);

            if (coin == null)
                return NotFound();

            return Ok(coin.HardForks);
        }

        [Route("{id}/wallets")]
        [HttpGet]
        public IActionResult GetSupportedWallets(int Id)
        {
            var coinIncludingWallets = context.Assets.Include(c => c.SupportedWallets).ThenInclude(row => row.Wallet).First(c => c.ID == Id);
            var supportedWallets = coinIncludingWallets.SupportedWallets.Select(row => row.Wallet);

            if (supportedWallets == null)
                return NotFound();

            return Ok(supportedWallets);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteCoinById(int id)
        {
            var coin = context.Assets.Find(id);

            if (coin == null)
                return NotFound();

            var forks = context.Assets.Where(c => c.Fork.ID == coin.ID).ToList();

            if (forks.Count > 0)
                return NotFound();

            context.Assets.Remove(coin);
            context.SaveChanges();

            // Default 404 if delete was successful
            return NoContent();
        }

        [HttpPost]
        public IActionResult CreateCoin([FromBody] Asset newCoin)
        {
            context.Assets.Add(newCoin);
            context.SaveChanges();
            return Created("", newCoin);
        }

        [HttpPut]
        public IActionResult UpdateCoin([FromBody] Asset updateCoin)
        {
            var originalCoin = context.Assets.Find(updateCoin.ID);

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