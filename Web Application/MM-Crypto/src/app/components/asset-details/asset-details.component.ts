import { Component, OnInit } from '@angular/core';
import { MmCryptoService, Asset } from 'src/app/services/mm-crypto/mm-crypto.service';
import * as allData from 'src/app/data/assets.json';

@Component({
  selector: 'app-currency-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit
{
  UseAPICalls: boolean = false;

  AllAssets: Asset[] = [];

  constructor(private service: MmCryptoService) { }

  ngOnInit(): void
  {
    this.UpdateData();
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

  UpdateData()
  {
    if (this.UseAPICalls) {
      this.ReadAssets();
    }
    else {
      // Use Local JSON File
      this.AllAssets = (allData as any).default;
    }
  }
}
