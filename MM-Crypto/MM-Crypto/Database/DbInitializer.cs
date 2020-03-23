using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MM_Crypto
{
    public class DbInitializer
    {
        public static void Initialize(CryptoContext context)
        {
            // Create database if not exsist
            context.Database.EnsureCreated();

            Founder SatoshiNakamoto = new Founder() { FirstName = "Satoshi", LastName = "Nakamotor", Gender = 'M' };
            Founder VitalikButerin = new Founder() { FirstName = "Vitalik", LastName = "Buterin", Gender = 'M' };
            Founder ChrisLarsen = new Founder() { FirstName = "Chris", LastName = "Larsen", Gender = 'M' };
            Founder CraigWright = new Founder() { FirstName = "Craig", LastName = "Wright", Gender = 'M' };
            Founder CharlesLee = new Founder() { FirstName = "Charles", LastName = "Lee", Gender = 'M' };

            Coin BTC = new Coin() { Name="Bitcoin", Founder= SatoshiNakamoto, Website= "http://www.bitcoin.org/" };
            Coin ETH = new Coin() { Name = "Ethereum", Founder = VitalikButerin, Website = "http://www.ethereum.org/" };
            Coin XRP = new Coin() { Name = "Ripple", Founder = ChrisLarsen, Website = "http://www.ripple.com/" };
            Coin BSV = new Coin() { Name = "Bitcoin SV", Founder = CraigWright, Website = "http://www.bitcoinsv.io/" };
            Coin LTC = new Coin() { Name = "Litecoin", Founder = CharlesLee, Website = "http://www.litecoin.org/" };

            Wallet LegderNanoS = new Wallet() { Brand = "Ledger", Model = "Nano S", Price = 59, Website = "https://www.ledger.com/" };
            Wallet TrezorOne = new Wallet() { Brand = "Trezor", Model = "One", Price = 59, Website = "http://www.trezor.io/" };

            if(!context.Founders.Any())
            {
                context.Founders.Add(SatoshiNakamoto);
                context.Founders.Add(VitalikButerin);
                context.Founders.Add(ChrisLarsen);
                context.Founders.Add(CraigWright);
                context.Founders.Add(CharlesLee);
            }

            if(!context.Coins.Any())
            {
                context.Coins.Add(BTC);
                context.Coins.Add(ETH);
                context.Coins.Add(XRP);
                context.Coins.Add(BSV);
                context.Coins.Add(LTC);
            }

            if(!context.Wallets.Any())
            {
                context.Wallets.Add(LegderNanoS);
                context.Wallets.Add(TrezorOne);
            }

            context.SaveChanges();
        }
    }
}
