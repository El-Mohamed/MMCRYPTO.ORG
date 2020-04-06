import { Component, OnInit } from '@angular/core';
import { MmcryptoService, Coin } from 'src/app/services/mmcrypto.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  AllCoins: Coin[] = [];

  constructor(private service: MmcryptoService) { }

  ngOnInit(): void {
    this.updateCoins();
  }

  async updateCoins() {
    try {
      this.AllCoins = await this.service.getCoins();
    }
    catch (error) {
      console.log("Error")
    }
  }
}
