import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MmCryptoAuthService
{

  private body: any = {
    client_id: environment.auth0ApiConfig.client_id,
    client_secret: environment.auth0ApiConfig.client_secret,
    audience: environment.auth0ApiConfig.audience,
    grant_type: environment.auth0ApiConfig.grant_type
  };

  private URL = 'https://mm-crypto.eu.auth0.com/oauth/token';

  constructor(private http: HttpClient) { }

  public RequestNewToken()
  {
    return this.http.post(this.URL, this.body);

  }

}


