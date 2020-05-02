import { Injectable } from '@angular/core';
import { MmcryptoService } from '../mmcrypto/mmcrypto.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MmcryptoAuthService
{

  private Body: any = {
    client_id: 'A6dsM7rTUaRee6Ld89c1kqqVL3q8Kw04',
    client_secret: 'V3vE5wqkwHjAilvfnG0-z0pNNfu3t5r-deoEPr6tGEYKEc3Jzxv37YqBo6LdtEfB',
    audience: 'https://localhost:44362/',
    grant_type: 'client_credentials'
  };

  private URL: string = "https://mm-crypto.eu.auth0.com/oauth/token";

  constructor(private http: HttpClient) { }

  public RequestNewToken()
  {
    return this.http.post(this.URL, this.Body);
  }

}

export interface Auth0Token
{
  access_token: string;
  expires_in: number;
  token_type: string;
}