using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MM_Crypto
{
    public class Coin
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

        public Coin Fork { get; set; }

        [JsonIgnore]
        public ICollection<Coin> HardForks { get; set; }
    }
}
