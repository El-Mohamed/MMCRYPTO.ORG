import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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

  private URL = 'https://mm-crypto.eu.auth0.com/oauth/token';

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
