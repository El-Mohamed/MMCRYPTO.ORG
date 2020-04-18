import { Component, OnInit } from '@angular/core';
import { MmcryptoService, Wallet } from 'src/app/services/mmcrypto.service';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.css']
})
export class WalletDetailsComponent implements OnInit
{

  public allItems: Wallet[];

  constructor(private service: MmcryptoService) { }

  ngOnInit(): void
  {
    this.updateWallets();
  }

  async updateWallets()
  {
    try {
      this.allItems = await this.service.getWallets();
    }
    catch (error) {
      console.log('Error');
    }
  }

}
