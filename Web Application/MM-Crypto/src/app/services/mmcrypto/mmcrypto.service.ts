import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MmcryptoAuthService, Auth0Token } from '../mmcrypto-auth/mmcrypto-auth.service';


@Injectable({
  providedIn: 'root'
})
export class MmcryptoService
{

  private walletsURL = 'https://localhost:44362/api/v1/wallets';
  private assetsURL = 'https://localhost:44362/api/v1/assets';
  private httpOptions;

  private Auth0Token: Auth0Token;

  constructor(private http: HttpClient, private apiAuth: MmcryptoAuthService)
  {
    this.GetToken();
  }

  // Auth For API

  public GetToken()
  {
    this.apiAuth.RequestNewToken().subscribe(
      (data: Auth0Token) =>
      {
        this.Auth0Token = data;
        this.SetHttpHeaders();
      },
      (error: HttpErrorResponse) => console.log(error)
    );
  }

  private SetHttpHeaders()
  {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.Auth0Token.access_token,
        'Content-Type': 'application/json'
      })
    };
  }

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
    return this.http.post<any>(this.walletsURL, wallet, this.httpOptions);
  }

  public PutWallet(wallet: Wallet)
  {
    return this.http.put<Wallet>(this.walletsURL, wallet, this.httpOptions);
  }

  public DeleteWallet(Id: number)
  {
    return this.http.delete(this.walletsURL + '/' + Id, this.httpOptions);
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
    return this.http.post<any>(this.assetsURL, coin, this.httpOptions);
  }

  public PutAsset(asset: Asset)
  {
    return this.http.put<Asset>(this.assetsURL, asset, this.httpOptions);
  }

  public DeleteAsset(Id: number)
  {
    return this.http.delete(this.assetsURL + '/' + Id, this.httpOptions);
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
