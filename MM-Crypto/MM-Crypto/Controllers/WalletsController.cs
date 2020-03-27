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
    }
}