import { Component, OnInit } from '@angular/core';
import { CoincapService, CoinCapAsset, CoinCapData } from 'src/app/services/coincap.service';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  AllCoinCapAssets: CoinCapAsset[] = [];
  CoinCapData: CoinCapData;

  Columns = [
    { field: 'rank', header: 'Rank' },
    { field: 'name', header: 'Name' },
    { field: 'priceUsd', header: 'Price' },
    { field: 'volumeUsd24Hr', header: 'Volume' },
    { field: 'changePercent24Hr', header: 'Change' }
  ];

  constructor(private service: CoincapService) { }

  ngOnInit(): void {
    this.updatePrices();
  }

  async updatePrices() {
    try {
      this.CoinCapData = await this.service.getAssets();
      this.AllCoinCapAssets = this.CoinCapData.data;
    }
    catch (error) {
      console.log("Error")
    }
  }

  sortTable(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];

      let temp1 = parseFloat(value1);
      let temp2 = parseFloat(value2);
      let result = null;

      if (isNaN(temp1) || isNaN(temp2)) {
        result = value1.localeCompare(value2);
      }
      else {
        value1 = parseFloat(value1);
        value2 = parseFloat(value2);

        if (value1 > value2)
          result = 1;
        else if (value1 < value2)
          result = -1;
      }

      return (event.order * result);
    });
  }
}
