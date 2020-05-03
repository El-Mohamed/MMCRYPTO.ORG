import { Component, OnInit } from '@angular/core';
import { MmcryptoService, Asset } from 'src/app/services/mmcrypto/mmcrypto.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit
{

  AllAssets: Asset[] = [];

  constructor(private service: MmcryptoService) { }

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
