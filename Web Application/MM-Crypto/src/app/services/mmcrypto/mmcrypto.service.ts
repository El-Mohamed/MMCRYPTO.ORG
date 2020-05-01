import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MmcryptoService
{

  private walletsURL = 'https://localhost:44362/api/v1/wallets';
  private assetsURL = 'https://localhost:44362/api/v1/assets';

  constructor(private http: HttpClient) { }

  // WALLET CRUD

  public GetWallets()
  {
    return this.http.get<Wallet[]>(this.walletsURL).toPromise();
  }

  public GetWalletsWithQuery(page: string, length: string, dir: string, sort: string = 'brand')
  {
    return this.http.get<Wallet[]>(`https://localhost:44362/api/v1/wallets/?page=${ page }&length=${ length }&dir=${ dir }&sort=${ sort }`).toPromise();
  }

  public GetWalletById(id: number)
  {
    return this.http.get<Wallet>(this.walletsURL + '/' + id).toPromise();
  }

  public PostWallet(wallet: any)
  {
    return this.http.post<any>(this.walletsURL, wallet);
  }

  public PutWallet(wallet: Wallet)
  {
    return this.http.put<Wallet>(this.walletsURL, wallet);
  }

  public DeleteWallet(Id: number)
  {
    return this.http.delete(this.walletsURL + '/' + Id);
  }

  // ASSET CRUD

  public GetAssets()
  {
    return this.http.get<Asset[]>(this.assetsURL).toPromise();
  }

  public GetAssetById(id: number)
  {
    return this.http.get<Asset>(this.assetsURL + '/' + id).toPromise();
  }

  public PostAsset(coin: any)
  {
    return this.http.post<any>(this.assetsURL, coin);
  }

  public PutAsset(asset: Asset)
  {
    return this.http.put<Asset>(this.assetsURL, asset);
  }

  public DeleteAsset(Id: number)
  {
    return this.http.delete(this.assetsURL + '/' + Id);
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