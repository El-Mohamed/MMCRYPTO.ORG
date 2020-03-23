using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MM_Crypto
{
    public class CryptoContext: DbContext
    {
        public CryptoContext(DbContextOptions<CryptoContext> options) : base(options)
        {

        }

        public DbSet<Coin> Coins { get; set; }
        public DbSet<Founder> Founders { get; set; }
        public DbSet<Wallet> Wallets { get; set; }
    }
}
