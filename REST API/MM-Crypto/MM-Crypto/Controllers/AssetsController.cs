using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace MM_Crypto.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class AssetsController : ControllerBase
    {
        private readonly CryptoContext context;

        public AssetsController(CryptoContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Asset> GetAllAssets(string sort, int? page, int length = 20, string dir = "asc")
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
        public IActionResult GetAssetById(int Id)
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
        public IActionResult GetFounderFromAsset(int Id)
        {
            var asset = context.Assets
                .Include(c => c.Founder)
                .SingleOrDefault(c => c.ID == Id);

            if (asset == null)
                return NotFound();

            var founder = context.Founders.Find(asset.Founder.ID);

            if (founder == null)
                return NotFound();

            return Ok(founder);
        }

        [Route("{id}/hardforks")]
        [HttpGet]
        public IActionResult GetHardForksFromAsset(int Id)
        {
            var asset = context.Assets
                .Include(c => c.HardForks)
                .SingleOrDefault(c => c.ID == Id);

            if (asset == null)
                return NotFound();

            return Ok(asset.HardForks);
        }

        [Route("{id}/wallets")]
        [HttpGet]
        public IActionResult GetSupportedWallets(int Id)
        {
            var assetIncludingWallets = context.Assets.Include(c => c.SupportedWallets).ThenInclude(row => row.Wallet).First(c => c.ID == Id);
            var supportedWallets = assetIncludingWallets.SupportedWallets.Select(row => row.Wallet);

            if (supportedWallets == null)
                return NotFound();

            return Ok(supportedWallets);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteAssetById(int id)
        {
            var asset = context.Assets.Find(id);

            if (asset == null)
                return NotFound();

            var forks = context.Assets.Where(c => c.Fork.ID == asset.ID).ToList();

            if (forks.Count > 0)
                return NotFound();

            context.Assets.Remove(asset);
            context.SaveChanges();

            // Default 404 if delete was successful
            return NoContent();
        }

        [HttpPost]
        public IActionResult InsertAsset([FromBody] Asset newAsset)
        {
            context.Assets.Add(newAsset);
            context.SaveChanges();
            return Created("", newAsset);
        }

        [HttpPut]
        public IActionResult UpdateAsset([FromBody] Asset updateAsset)
        {
            var originalCoin = context.Assets.Find(updateAsset.ID);

            if (originalCoin == null)
                return NotFound();

            originalCoin.Name = updateAsset.Name;
            originalCoin.Founder = updateAsset.Founder;
            originalCoin.Website = updateAsset.Website;

            context.SaveChanges();
            return Ok(originalCoin);
        }
    }
}