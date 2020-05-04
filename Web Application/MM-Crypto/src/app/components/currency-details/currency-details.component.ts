import { Component, OnInit } from '@angular/core';
import { MmCryptoService, Asset } from 'src/app/services/mm-crypto/mm-crypto.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit
{

  AllAssets: Asset[] = [];

  constructor(private service: MmCryptoService) { }

  ngOnInit(): void
  {
    this.ReadAssets();
  }

  async ReadAssets()
  {
    try {
      this.AllAssets = await this.service.GetAssets();
    }
    catch (error) {
      console.log('Error');
    }
  }
}
