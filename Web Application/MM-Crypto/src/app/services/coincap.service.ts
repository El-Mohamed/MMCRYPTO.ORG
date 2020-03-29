import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoincapService {

  AllCoinCappAssets: CoinCapAsset[] = [];
  private coinCapData: CoinCapData;

  constructor(private http: HttpClient) { }

  private getData() {
    return this.http.get<CoinCapData>('https://api.coincap.io/v2/assets').toPromise();
  }

  async updatePrice() {
    try {
      this.coinCapData = await this.getData();
      this.AllCoinCappAssets = this.coinCapData.data;
    }
    catch (error) {
      console.log("Error")
    }
  }
}

export interface CoinCapAsset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface CoinCapData {
  data: CoinCapAsset[];
}