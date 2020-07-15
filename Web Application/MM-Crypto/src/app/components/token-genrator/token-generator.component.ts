import { Component, OnInit } from '@angular/core';
import { MmCryptoAuthService } from 'src/app/services/mm-crypto-auth/mm-crypto-auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Auth0Token } from 'src/app/services/mm-crypto-auth/auth0token.model';


@Component({
  selector: 'app-token-genrator',
  templateUrl: './token-generator.component.html',
  styleUrls: ['./token-generator.component.css'],
  providers: [MessageService]
})
export class TokenGeneratorComponent implements OnInit
{
  GeneratedToken: Auth0Token = {
    access_token: '',
    expires_in: 0,
    token_type: ''
  };

  constructor(private apiAuth: MmCryptoAuthService, private messageService: MessageService) { }

  ngOnInit(): void
  {
  }

  SuccessToast()
  {
    this.messageService.add({ severity: 'success', summary: 'Succes', detail: 'Request was successful' });
  }

  ErrorToast()
  {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Request was failed' });
  }

  GenerateToken()
  {
    this.apiAuth.RequestNewToken().subscribe(
      (data: Auth0Token) =>
      {
        this.GeneratedToken = data;
        this.SuccessToast();
      },
      (error: HttpErrorResponse) =>
      {
        console.log(error);
        this.ErrorToast();
      }
    );
  }
}
