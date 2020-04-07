import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MmcryptoService {

  private walletsURL = "https://localhost:44362/api/v1/wallets";
  private coinsURL = "https://localhost:44362/api/v1/coins"

  constructor(private http: HttpClient) { }

  public getWallets() {
    return this.http.get<Wallet[]>(this.walletsURL).toPromise();
  }

  public postWallet(wallet: any) {
    this.http.post<any>(this.walletsURL, wallet).subscribe();
  }

  public getCoins() {
    return this.http.get<Coin[]>(this.coinsURL).toPromise();
  }

  public postCoin(coin: any) {
    this.http.post<any>(this.coinsURL, coin).subscribe();
  }
}

export interface Wallet {
  id: number;
  brand: string;
  model: string;
  website: string;
  price: number;
  imageURL: string;
  categorie: string;
}

export interface Founder {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
}

export interface Coin {
  id: number;
  symbol: string;
  name: string;
  founder: Founder;
  website: string;
  fork?: Coin;
}