import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MmcryptoService {

  constructor(private http: HttpClient) { }

  public getWallets() {
    return this.http.get<Wallet[]>("https://localhost:44362/api/wallets?page=0&length=10").toPromise();
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
