import { Component, OnInit } from '@angular/core';
import { CoincapService, CoinCapAsset } from 'src/app/services/coincap.service';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  AllCoinCapAssets: CoinCapAsset[] = [];

  Columns = [
    { field: 'rank', header: 'Rank' },
    { field: 'name', header: 'Name' },
    { field: 'price', header: 'Price' },
    { field: 'volumeUsd24Hr', header: 'Volume' },
    { field: 'changePercent24Hr', header: 'Change' }
  ];

  constructor(private service: CoincapService) {

    this.service.updatePrice();

    setTimeout(() => {
      this.AllCoinCapAssets = this.service.AllCoinCappAssets;
    }, 2000);
  }

  ngOnInit(): void { }

  customSort(event: SortEvent) {
    console.log("sorting...")
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
      return (event.order * result);
    });
  }
}
