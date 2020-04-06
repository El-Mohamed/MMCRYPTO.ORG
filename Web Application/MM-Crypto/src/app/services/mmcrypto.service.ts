import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MmcryptoService {

  constructor(private http: HttpClient) { }

  public getWallets() {
    return this.http.get<Wallet[]>("https://localhost:44362/api/v1/wallets?page=0&length=10").toPromise();
  }

  public getCoins() {
    return this.http.get<Coin[]>("https://localhost:44362/api/v1/coins").toPromise();
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