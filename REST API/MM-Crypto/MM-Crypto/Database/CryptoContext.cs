using Microsoft.EntityFrameworkCore;

namespace MM_Crypto
{
    public class CryptoContext : DbContext
    {
        public DbSet<Asset> Assets { get; set; }
        public DbSet<Founder> Founders { get; set; }
        public DbSet<Wallet> Wallets { get; set; }
        public DbSet<WalletAsset> WalletCoin { get; set; }

        public CryptoContext(DbContextOptions<CryptoContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Many-to-many relationships

            modelBuilder.Entity<WalletAsset>()
                 .HasKey(w => new { w.WalletId, w.AssetId });

            modelBuilder.Entity<WalletAsset>()
                .HasOne(pt => pt.Wallet)
                .WithMany(p => p.SupportedAssets)
                .HasForeignKey(pt => pt.WalletId);

            modelBuilder.Entity<WalletAsset>()
                .HasOne(pt => pt.Asset)
                .WithMany(t => t.SupportedWallets)
                .HasForeignKey(pt => pt.AssetId);
        }
    }
}
