import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CoincapService, CoinCapAsset } from 'src/app/services/coincap.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  AllItems: SelectItem[];
  SelectedItem: CoinCapAsset;
  SelectedItem2: CoinCapAsset;

  Amount1: number;
  Amount2: number;
  private ratio: number;

  private allCoinCapAssets: CoinCapAsset[] = [];

  constructor(private service: CoincapService) {

    this.service.updatePrice();

    this.AllItems = [
      { label: 'Select Coin', value: null },
    ];

    setTimeout(() => {
      this.allCoinCapAssets = this.service.AllCoinCappAssets;
      this.allCoinCapAssets.forEach(element => {
        this.AllItems.push({ label: element.name, value: element })
      });
    }, 2000);
  }

  ngOnInit(): void { }

  Updatevalue() {
    if (this.SelectedItem != null && this.SelectedItem != null) {
      this.ratio = parseFloat(this.SelectedItem.priceUsd) / parseFloat(this.SelectedItem2.priceUsd);
      this.Amount2 = this.Amount1 * this.ratio;
    }
  }
}
