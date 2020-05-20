import { Component, OnInit } from '@angular/core';
import { MmCryptoService, Asset } from 'src/app/services/mm-crypto/mm-crypto.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit
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
