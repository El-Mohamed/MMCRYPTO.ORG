import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CoincapService, CoinCapAsset, CoinCapData } from 'src/app/services/coincap/coincap.service';

@Component({
  selector: 'app-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.css']
})
export class CurrencyCalculatorComponent implements OnInit
{

  AllItems: SelectItem[] = [];
  SelectedItem1: CoinCapAsset;
  SelectedItem2: CoinCapAsset;

  Amount1: number;
  Amount2: number;
  Ratio: number;

  private tempSelectedItem1: CoinCapAsset;
  private tempSelectedItem2: CoinCapAsset;
  private allCoinCapAssets: CoinCapAsset[] = [];
  private coinCapData: CoinCapData;

  constructor(private service: CoincapService)
  {
    this.AllItems.push({ label: 'Select Coin', value: null });
  }

  ngOnInit(): void
  {
    this.updatePrices();
  }

  private createSelectItems()
  {
    this.allCoinCapAssets.forEach(element =>
    {
      this.AllItems.push({ label: element.name, value: element });
    });
  }

  async updatePrices()
  {
    try {
      this.coinCapData = await this.service.getAssets();
      this.allCoinCapAssets = this.coinCapData.data;
      this.createSelectItems();
    }
    catch (error) {
      console.log('Error');
    }
  }

  Convert(): void
  {
    if (this.SelectedItem1 != null && this.SelectedItem2 != null) {
      this.Ratio = parseFloat(this.SelectedItem1.priceUsd) / parseFloat(this.SelectedItem2.priceUsd);
      this.Amount2 = this.Amount1 * this.Ratio;
    }
  }

  SwapCurrencies(): void
  {
    this.tempSelectedItem1 = this.SelectedItem1;
    this.tempSelectedItem2 = this.SelectedItem2;

    this.SelectedItem1 = this.tempSelectedItem2;
    this.SelectedItem2 = this.tempSelectedItem1;

    this.Convert();
  }
}
