using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

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


            Asset BTC = new Asset() { Symbol = "BTC", Name = "Bitcoin", Founder = SatoshiNakamoto, Website = "http://www.bitcoin.org/", Fork = null };
            Asset ETH = new Asset() { Symbol = "ETH", Name = "Ethereum", Founder = VitalikButerin, Website = "http://www.ethereum.org/", Fork = null };
            Asset XRP = new Asset() { Symbol = "XRP", Name = "Ripple", Founder = ChrisLarsen, Website = "http://www.ripple.com/", Fork = null };
            Asset BSV = new Asset() { Symbol = "BSV", Name = "Bitcoin SV", Founder = CraigWright, Website = "http://www.bitcoinsv.io/", Fork = null };
            Asset LTC = new Asset() { Symbol = "LTC", Name = "Litecoin", Founder = CharlesLee, Website = "http://www.litecoin.org/", Fork = BTC };
            Asset BCH = new Asset() { Symbol = "BCH", Name = "Bitcoin Cash", Founder = SatoshiNakamoto, Website = "https://www.bitcoincash.org/", Fork = BTC };
            Asset DASH = new Asset() { Symbol = "DASH", Name = "Dash", Founder = RyanTaylor, Website = "https://www.dash.org/", Fork = BTC };
            Asset PIVX = new Asset() { Symbol = "PIVX", Name = "PIVX", Founder = JamesBurden, Website = "https://pivx.org/", Fork = DASH };
            Asset ZEC = new Asset() { Symbol = "ZEC", Name = "Zcash", Founder = ZookoWilcox, Website = "https://z.cash/", Fork = BTC };
            Asset XLM = new Asset() { Symbol = "XLM", Name = "Stellar", Founder = DavidMazières, Website = "https://www.stellar.org/", Fork = XRP };

            BTC.HardForks = new List<Asset> { LTC, DASH, ZEC, BCH };
            ETH.HardForks = new List<Asset> { };
            XRP.HardForks = new List<Asset> { XLM };
            BSV.HardForks = new List<Asset> { };
            LTC.HardForks = new List<Asset> { };
            BCH.HardForks = new List<Asset> { };
            DASH.HardForks = new List<Asset> { PIVX };
            PIVX.HardForks = new List<Asset> { };
            ZEC.HardForks = new List<Asset> { };
            XLM.HardForks = new List<Asset> { };


            Wallet LegderNanoS = new Wallet()
            {
                Brand = "Ledger",
                Model = "Nano S",
                Price = 59,
                Website = "https://shop.ledger.com/products/ledger-nano-s",
                ImageURL = "https://cdn.shopify.com/s/files/1/2974/4858/products/lns-black-open_large.png",
                Category = "Hardware"
            };

            Wallet LegderNanoX = new Wallet()
            {
                Brand = "Ledger",
                Model = "Nano X",
                Price = 119,
                Website = "https://shop.ledger.com/products/ledger-nano-x",
                ImageURL = "https://cdn.shopify.com/s/files/1/2974/4858/products/ledger-nano-x-open_grande_eb0d186e-2c75-4687-9c85-1b6eb6e224d1_large.png",
                Category = "Hardware"
            };

            Wallet TrezorOne = new Wallet()
            {
                Brand = "Trezor",
                Model = "One",
                Price = 59,
                Website = "https://shop.trezor.io/product/trezor-one-white",
                ImageURL = "https://shop.trezor.io/static/img/product/T1_white.png",
                Category = "Hardware"
            };

            Wallet TrezorModelT = new Wallet()
            {
                Brand = "Trezor",
                Model = "Model T",
                Price = 180,
                Website = "https://shop.trezor.io/product/trezor-model-t",
                ImageURL = "https://shop.trezor.io/static/img/product/T2.jpg",
                Category = "Hardware"
            };

            Wallet Exodus = new Wallet()
            {
                Brand = "Exodus",
                Model = "Mobile Wallet",
                Price = 0,
                Website = "https://www.exodus.io/mobile",
                ImageURL = "https://www.exodus.io/mobile/img/header-img2-lsize.png",
                Category = "Software"
            };

            LegderNanoS.SupportedAssets = new List<WalletAsset>() { };
            LegderNanoX.SupportedAssets = new List<WalletAsset>() { };
            TrezorOne.SupportedAssets = new List<WalletAsset>() { };
            TrezorModelT.SupportedAssets = new List<WalletAsset>() { };
            Exodus.SupportedAssets = new List<WalletAsset>() { };

            var supportedWallets1 = new List<Wallet>() { LegderNanoS, LegderNanoX };
            var supportedWallets2 = new List<Wallet>() { Exodus };

            BTC.SupportedWallets = CreateRelations(BTC, supportedWallets1, context);
            ETH.SupportedWallets = CreateRelations(ETH, supportedWallets1, context);
            XRP.SupportedWallets = CreateRelations(XRP, supportedWallets2, context);
            BSV.SupportedWallets = new List<WalletAsset>() { };
            LTC.SupportedWallets = new List<WalletAsset>() { };
            BCH.SupportedWallets = new List<WalletAsset>() { };
            DASH.SupportedWallets = new List<WalletAsset>() { };
            PIVX.SupportedWallets = new List<WalletAsset>() { };
            ZEC.SupportedWallets = new List<WalletAsset>() { };
            XLM.SupportedWallets = new List<WalletAsset>() { };

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

            if (!context.Assets.Any())
            {
                context.Assets.Add(BTC);
                context.Assets.Add(ETH);
                context.Assets.Add(XRP);
                context.Assets.Add(BSV);
                context.Assets.Add(LTC);
                context.Assets.Add(BCH);
                context.Assets.Add(DASH);
                context.Assets.Add(PIVX);
                context.Assets.Add(ZEC);
                context.Assets.Add(XLM);
            }

            if (!context.Wallets.Any())
            {
                context.Wallets.Add(LegderNanoS);
                context.Wallets.Add(LegderNanoX);
                context.Wallets.Add(TrezorOne);
                context.Wallets.Add(TrezorModelT);
                context.Wallets.Add(Exodus);
            }



            context.SaveChanges();
        }


        public static List<WalletAsset> CreateRelations(Asset coin, List<Wallet> allSupportedWallets, CryptoContext context)
        {
            List<WalletAsset> allRelations = new List<WalletAsset>();

            foreach (var wallet in allSupportedWallets)
            {
                var relation = new WalletAsset() { Wallet = wallet, Asset = coin };

                context.AddOrUpdate(relation);
                allRelations.Add(relation);
            }

            return allRelations;
        }

        public static List<WalletAsset> CreateRelations(Wallet wallet, List<Asset> allSupportedCoins, CryptoContext context)
        {
            List<WalletAsset> allRelations = new List<WalletAsset>();

            foreach (var coin in allSupportedCoins)
            {
                var relation = new WalletAsset() { Wallet = wallet, Asset = coin };

                context.AddOrUpdate(relation);
                allRelations.Add(relation);
            }

            return allRelations;
        }
    }
}

