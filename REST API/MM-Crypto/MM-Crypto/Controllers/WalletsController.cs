using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace MM_Crypto.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class WalletsController : ControllerBase
    {
        private readonly CryptoContext context;

        public WalletsController(CryptoContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Wallet> GetAllWallets(string sort,string category, string brand, int? page, int length = 20, string dir="asc")
        {
            IQueryable<Wallet> query = context.Wallets;

            // Filter
            if (!string.IsNullOrWhiteSpace(category))
                query = query.Where(w => w.Categorie == category);
            if (!string.IsNullOrWhiteSpace(brand))
                query = query.Where(w => w.Brand == brand);

            // Sort
            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "brand":
                        if (dir == "asc")
                            query = query.OrderBy(w => w.Brand);
                        else if (dir == "desc")
                            query.OrderByDescending(w => w.Brand);
                        break;

                    case "price":
                        if (dir == "asc")
                            query = query.OrderBy(w => w.Price);
                        else if (dir == "desc")
                            query.OrderByDescending(w => w.Price);
                        break;
                }
            }

            // Paging
            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);

            // Response Headers
            Response.Headers.Add("X-Total-Count", query.Count().ToString());

            return query.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetWalletById(int Id)
        {
            var wallet = context.Wallets
                .SingleOrDefault(c => c.ID == Id);

            if (wallet == null)
                return NotFound();

            return Ok(wallet);
        }

        [Route("{id}/coins")]
        [HttpGet]
        public IActionResult GetSupportedCoins(int Id)
        {
            var walletIncludingCoins = context.Wallets.Include(c => c.SupportedCoins).ThenInclude(row => row.Coin).First(c => c.ID == Id);
            var supportedCoins = walletIncludingCoins.SupportedCoins.Select(row => row.Coin);

            if (supportedCoins == null)
                return NotFound();

            return Ok(supportedCoins);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteWalletById(int id)
        {
            var wallet = context.Wallets.Find(id);

            if (wallet == null)
                return NotFound();

            context.Wallets.Remove(wallet);
            context.SaveChanges();

            // Default 404 if delete was successful
            return NoContent();
        }

        [HttpPost]
        public IActionResult CreateWallet([FromBody] Wallet newWallet)
        {
            context.Wallets.Add(newWallet);
            context.SaveChanges();
            return Created("", newWallet);
        }

        [HttpPut]
        public IActionResult UpdateWallet([FromBody] Wallet updateWallet)
        {
            var originalWallet = context.Wallets.Find(updateWallet.ID);

            if (originalWallet == null)
                return NotFound();

            originalWallet.Brand = updateWallet.Brand;
            originalWallet.Model = updateWallet.Model;
            originalWallet.Website = updateWallet.Website;
            originalWallet.Price = updateWallet.Price;
            originalWallet.ImageURL = updateWallet.ImageURL;
            originalWallet.Categorie = updateWallet.Categorie;

            context.SaveChanges();
            return Ok(originalWallet);
        }
    }
}