using Microsoft.EntityFrameworkCore;

namespace MM_Crypto
{
    public class CryptoContext : DbContext
    {
        public CryptoContext(DbContextOptions<CryptoContext> options) : base(options)
        {

        }

        public DbSet<Coin> Coins { get; set; }
        public DbSet<Founder> Founders { get; set; }
        public DbSet<Wallet> Wallets { get; set; }
    }
}
