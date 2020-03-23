using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MM_Crypto
{
    public class Coin
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public Founder Founder { get; set; }
        public string Website { get; set; }
    }
}
