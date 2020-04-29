using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MM_Crypto
{
    public class Wallet
    {
        public int ID { get; set; }

        [Required]
        public string? Brand { get; set; }

        [Required]
        public string? Model { get; set; }

        [Required]
        [Url]
        public string? Website { get; set; }

        [Required]
        [Range(0, 1000)]
        public int? Price { get; set; }

        [Required]
        [Url]
        public string? ImageURL { get; set; }

        [Required]
        public string? Categorie { get; set; }
        
        [JsonIgnore]
        public ICollection<WalletCoin> SupportedCoins { get; set; }
    }
}
