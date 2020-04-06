import { Component, OnInit } from '@angular/core';
import { Wallet, Coin, MmcryptoService } from 'src/app/services/mmcrypto.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  WalletToPost: any = {
    brand: "Ledger",
    model: "Nano S",
    website: "https://shop.ledger.com/products/ledger-nano-s",
    price: 59,
    imageURL: "https://cdn.shopify.com/s/files/1/2974/4858/products/lns-black-open_large.png",
    categorie: "Hardware"
  };

  CoinToPost: any = {
    symbol: "BTC",
    name: "Bitcoin",
    founder: {
      firstName: "Satoshi",
      lastName: "Nakamotor",
      gender: "M"
    },
    website: "http://www.bitcoin.org/",
    fork: null
  };

  constructor(private service: MmcryptoService) {
  }

  ngOnInit(): void {

  }

}
