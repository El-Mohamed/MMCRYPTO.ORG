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
    public class WalletsController : ControllerBase
    {
        private readonly CryptoContext context;

        public WalletsController(CryptoContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult GetAllWallets()
        {
            var allWallets = context.Wallets.ToList();              
            return Ok(allWallets);
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