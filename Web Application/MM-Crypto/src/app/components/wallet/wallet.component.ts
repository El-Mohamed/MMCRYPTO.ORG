import { Component, OnInit } from '@angular/core';

export interface Wallet {
  id: number;
  brand: string;
  model: string;
  website: string;
  price: number;
  imageURL: string;
  categorie: string;
}

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  public allItems: Wallet[] = [
    {
      id: 1,
      brand: "Ledger",
      model: "Nano S",
      website: "https://shop.ledger.com/products/ledger-nano-s",
      price: 59,
      imageURL: "https://cdn.shopify.com/s/files/1/2974/4858/products/lns-black-open_large.png",
      categorie: "Hardware"
    },

    {
      id: 1,
      brand: "Ledger",
      model: "Nano S",
      website: "https://shop.ledger.com/products/ledger-nano-s",
      price: 59,
      imageURL: "https://cdn.shopify.com/s/files/1/2974/4858/products/lns-black-open_large.png",
      categorie: "Hardware"
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
