import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MmcryptoService
{

  private walletsURL = 'https://localhost:44362/api/v1/wallets';
  private coinsURL = 'https://localhost:44362/api/v1/assets';

  constructor(private http: HttpClient) { }

  public GetWallets()
  {
    return this.http.get<Wallet[]>(this.walletsURL).toPromise();
  }

  public GetWalletById(id: number)
  {
    return this.http.get<Wallet>(this.walletsURL + '/' + id).toPromise();
  }

  public PostWallet(wallet: any)
  {
    this.http.post<any>(this.walletsURL, wallet).subscribe(
      data => console.log('POST SUCCESFULLY', data),
      error => console.log('POST FAILED', error)
    );
  }

  public PutWallet(wallet: Wallet)
  {
    return this.http.put<Wallet>(this.walletsURL, wallet).subscribe(
      data => console.log('PUT SUCCESFULLY', data),
      error => console.log('PUT FAILED', error)
    );
  }

  public DeleteWallet(Id: number)
  {
    this.http.delete(this.walletsURL + '/' + Id).subscribe(
      data => console.log('DELETE SUCCESFULLY', data),
      error => console.log('DELETE FAILED', error)
    );
  }

  public GetAssets()
  {
    return this.http.get<Asset[]>(this.coinsURL).toPromise();
  }

  public GetAssetById(id: number)
  {
    return this.http.get<Asset>(this.coinsURL + '/' + id).toPromise();
  }

  public PostAsset(coin: any)
  {
    this.http.post<any>(this.coinsURL, coin).subscribe(
      data => console.log('POST SUCCESFULLY', data),
      error => console.log('POST FAILED', error)
    );
  }

  public DeleteAsset(Id: number)
  {
    this.http.delete(this.coinsURL + '/' + Id).subscribe(
      data => console.log('DELETE SUCCESFULLY', data),
      error => console.log('DELETE FAILED', error)
    );
  }

  public PutAsset(asset: Asset)
  {
    return this.http.put<Asset>(this.coinsURL, asset).subscribe(
      data => console.log('PUT SUCCESFULLY', data),
      error => console.log('PUT FAILED', error)
    );
  }
}

export interface Wallet
{
  id: number;
  brand: string;
  model: string;
  website: string;
  price: number;
  imageURL: string;
  category: string;
}

export interface Founder
{
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
}

export interface Asset
{
  id: number;
  symbol: string;
  name: string;
  founder: Founder;
  website: string;
  fork?: Asset;
}