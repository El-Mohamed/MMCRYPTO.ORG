import { Component, OnInit } from '@angular/core';
import { MmCryptoAuthService, Auth0Token } from 'src/app/services/mm-crypto-auth/mm-crypto-auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-token-genrator',
  templateUrl: './token-genrator.component.html',
  styleUrls: ['./token-genrator.component.css']
})
export class TokenGenratorComponent implements OnInit
{
  GeneratedToken: Auth0Token = {
    access_token: "",
    expires_in: 0,
    token_type: ""
  };

  constructor(private apiAuth: MmCryptoAuthService) { }

  ngOnInit(): void
  {
  }

  GenerateToken()
  {
    this.apiAuth.RequestNewToken().subscribe(
      (data: Auth0Token) =>
      {
        this.GeneratedToken = data;
      },
      (error: HttpErrorResponse) =>
      {
        console.log(error);
        alert("Error");
      }
    );
  }
}
