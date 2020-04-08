import { Component, OnInit } from '@angular/core';
import { CoincapService, CoinCapAsset, CoinCapData } from 'src/app/services/coincap.service';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})
export class PriceTableComponent implements OnInit {

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
      this.symbolsToLowerCase();
    }
    catch (error) {
      console.log("Error")
    }
  }

  private symbolsToLowerCase() {
    this.AllCoinCapAssets.forEach(element => {
      element.symbol = element.symbol.toLocaleLowerCase();
      // https://static.coincap.io/assets/icons/btc@2x.png
      // Image URLs use lowercase
    });
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
