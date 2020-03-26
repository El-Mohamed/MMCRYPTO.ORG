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

            Founder RyanTaylor = new Founder() { FirstName = "Ryan", LastName = "Taylor", Gender = 'M' };
            Founder JamesBurden = new Founder() { FirstName = "James", LastName = "Burden", Gender = 'M' };
            Founder ZookoWilcox = new Founder() { FirstName = "Zooko", LastName = "Wilcox-O'Hearn", Gender = 'M' };
            Founder DavidMazières = new Founder() { FirstName = "David", LastName = "Mazières", Gender = 'M' };


            Coin BTC = new Coin() { Symbol = "BTC", Name = "Bitcoin", Founder = SatoshiNakamoto, Website = "http://www.bitcoin.org/", Fork = null };
            Coin ETH = new Coin() { Symbol = "ETH", Name = "Ethereum", Founder = VitalikButerin, Website = "http://www.ethereum.org/", Fork = null };
            Coin XRP = new Coin() { Symbol = "XRP", Name = "Ripple", Founder = ChrisLarsen, Website = "http://www.ripple.com/", Fork = null };
            Coin BSV = new Coin() { Symbol = "BSV", Name = "Bitcoin SV", Founder = CraigWright, Website = "http://www.bitcoinsv.io/", Fork = null };
            Coin LTC = new Coin() { Symbol = "LTC", Name = "Litecoin", Founder = CharlesLee, Website = "http://www.litecoin.org/", Fork = BTC };
            Coin BCH = new Coin() { Symbol = "BCH", Name = "Bitcoin Cash", Founder = SatoshiNakamoto, Website = "https://www.bitcoincash.org/", Fork = BTC };
            Coin DASH = new Coin() { Symbol = "DASH", Name = "Dash", Founder = RyanTaylor, Website = "https://www.dash.org/", Fork = BTC };
            Coin PIVX = new Coin() { Symbol = "PIVX", Name = "PIVX", Founder = JamesBurden, Website = "https://pivx.org/", Fork = DASH };
            Coin ZEC = new Coin() { Symbol = "ZEC", Name = "Zcash", Founder = ZookoWilcox, Website = "https://z.cash/", Fork = BTC };
            Coin XLM = new Coin() { Symbol = "XLM", Name = "Stellar", Founder = DavidMazières, Website = "https://www.stellar.org/", Fork = XRP };

            BTC.HardForks = new List<Coin> { LTC, DASH, ZEC, BCH };
            ETH.HardForks = new List<Coin> { };
            XRP.HardForks = new List<Coin> { XLM };
            BSV.HardForks = new List<Coin> { };
            LTC.HardForks = new List<Coin> { };
            BCH.HardForks = new List<Coin> { };
            DASH.HardForks = new List<Coin> { PIVX };
            PIVX.HardForks = new List<Coin> { };
            ZEC.HardForks = new List<Coin> { };
            XLM.HardForks = new List<Coin> { };


            Wallet LegderNanoS = new Wallet() { Brand = "Ledger", Model = "Nano S", Price = 59, Website = "https://www.ledger.com/" };
            Wallet TrezorOne = new Wallet() { Brand = "Trezor", Model = "One", Price = 59, Website = "http://www.trezor.io/" };

            if (!context.Founders.Any())
            {
                context.Founders.Add(SatoshiNakamoto);
                context.Founders.Add(VitalikButerin);
                context.Founders.Add(ChrisLarsen);
                context.Founders.Add(CraigWright);
                context.Founders.Add(CharlesLee);
                context.Founders.Add(RyanTaylor);
                context.Founders.Add(JamesBurden);
                context.Founders.Add(ZookoWilcox);
                context.Founders.Add(DavidMazières);

            }

            if (!context.Coins.Any())
            {
                context.Coins.Add(BTC);
                context.Coins.Add(ETH);
                context.Coins.Add(XRP);
                context.Coins.Add(BSV);
                context.Coins.Add(LTC);
                context.Coins.Add(BCH);
                context.Coins.Add(DASH);
                context.Coins.Add(PIVX);
                context.Coins.Add(ZEC);
                context.Coins.Add(XLM);
            }

            if (!context.Wallets.Any())
            {
                context.Wallets.Add(LegderNanoS);
                context.Wallets.Add(TrezorOne);
            }

            context.SaveChanges();
        }
    }
}
