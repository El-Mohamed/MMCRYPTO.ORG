import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CoincapService, CoinCapAsset } from 'src/app/services/coincap.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  AllItems: SelectItem[] = [];
  SelectedItem1: CoinCapAsset;
  SelectedItem2: CoinCapAsset;

  Amount1: number;
  Amount2: number;

  private ratio: number;
  private tempSelectedItem1: CoinCapAsset;
  private tempSelectedItem2: CoinCapAsset;
  private allCoinCapAssets: CoinCapAsset[] = [];

  constructor(private service: CoincapService) {

    this.service.updatePrice();

    this.AllItems.push({ label: 'Select Coin', value: null });

    setTimeout(() => {
      this.allCoinCapAssets = this.service.AllCoinCappAssets;
      this.allCoinCapAssets.forEach(element => {
        this.AllItems.push({ label: element.name, value: element })
      });
    }, 2000);
  }

  ngOnInit(): void { }

  Convert(): void {
    if (this.SelectedItem1 != null && this.SelectedItem1 != null && this.Amount1 != null) {
      this.ratio = parseFloat(this.SelectedItem1.priceUsd) / parseFloat(this.SelectedItem2.priceUsd);
      this.Amount2 = this.Amount1 * this.ratio;
    }
  }

  Swap(): void {
    this.tempSelectedItem1 = this.SelectedItem1;
    this.tempSelectedItem2 = this.SelectedItem2;

    this.SelectedItem1 = this.tempSelectedItem2;
    this.SelectedItem2 = this.tempSelectedItem1;

    this.Convert();
  }

}
