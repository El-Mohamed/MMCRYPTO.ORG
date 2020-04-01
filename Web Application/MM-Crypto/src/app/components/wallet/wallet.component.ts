import { Component, OnInit } from '@angular/core';
import { MmcryptoService, Wallet } from 'src/app/services/mmcrypto.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  public allItems: Wallet[];

  constructor(private service: MmcryptoService) { }

  ngOnInit(): void {
    this.updateWallets();
  }

  async updateWallets() {
    try {
      this.allItems = await this.service.getWallets();
      console.log(this.allItems);
    }
    catch (error) {
      console.log("Error")
    }
  }

}
