using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MM_Crypto
{
    public class Asset
    {
        public int ID { get; set; }

        [MaxLength(5)]
        public string? Symbol { get; set; }

        [Required]
        public string? Name { get; set; }

        [Required]
        public Founder Founder { get; set; }

        [Required]
        [Url]
        public string? Website { get; set; }

        public Asset Fork { get; set; }

        [JsonIgnore]
        public ICollection<Asset> HardForks { get; set; }

        [JsonIgnore]
        public ICollection<WalletAsset> SupportedWallets { get; set; }
    }
}
