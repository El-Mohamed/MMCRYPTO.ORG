import { Component, OnInit } from '@angular/core';
import { MmCryptoAuthService, Auth0Token } from 'src/app/services/mm-crypto-auth/mm-crypto-auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-token-genrator',
  templateUrl: './token-genrator.component.html',
  styleUrls: ['./token-genrator.component.css'],
  providers: [MessageService]
})
export class TokenGenratorComponent implements OnInit
{
  GeneratedToken: Auth0Token = {
    access_token: "",
    expires_in: 0,
    token_type: ""
  };

  constructor(private apiAuth: MmCryptoAuthService, private messageService: MessageService) { }

  ngOnInit(): void
  {
  }

  SuccesToast()
  {
    this.messageService.add({ severity: 'success', summary: "Succes", detail: 'Request was succesfull' });
  }

  ErrorToast()
  {
    this.messageService.add({ severity: 'error', summary: "Error", detail: 'Request was failed' });
  }

  GenerateToken()
  {
    this.apiAuth.RequestNewToken().subscribe(
      (data: Auth0Token) =>
      {
        this.GeneratedToken = data;
        this.SuccesToast();
      },
      (error: HttpErrorResponse) =>
      {
        console.log(error);
        this.ErrorToast();
      }
    );
  }
}
