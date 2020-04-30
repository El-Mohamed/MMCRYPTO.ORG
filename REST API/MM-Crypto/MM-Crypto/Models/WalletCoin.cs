namespace MM_Crypto
{
    /// <summary>
    /// Entity class to represent the join table
    /// </summary>

    public class WalletCoin
    {
        public int WalletId { get; set; }
        public int AssetId { get; set; }
        public Asset Asset { get; set; }
        public Wallet Wallet { get; set; }
    }
}
