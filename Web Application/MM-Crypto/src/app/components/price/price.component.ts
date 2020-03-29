import { Component, OnInit } from '@angular/core';
import { CoincapService, CoinCapAsset } from 'src/app/services/coincap.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  AllCoinCapAssets: CoinCapAsset[] = [];

  constructor(private service: CoincapService) {

    this.service.updatePrice();

    setTimeout(() => {
      this.AllCoinCapAssets = this.service.AllCoinCappAssets;
    }, 2000);
  }

  ngOnInit(): void { }

}
