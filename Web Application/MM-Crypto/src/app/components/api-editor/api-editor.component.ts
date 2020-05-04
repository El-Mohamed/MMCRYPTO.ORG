import { Component, OnInit } from '@angular/core';
import { MmCryptoService, Wallet, Asset } from 'src/app/services/mm-crypto/mm-crypto.service';
import { SelectItem } from 'primeng/api/selectitem';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-api-editor',
  templateUrl: './api-editor.component.html',
  styleUrls: ['./api-editor.component.css'],
  providers: [MessageService]
})
export class ApiEditorComponent implements OnInit
{

  CRUDActions: SelectItem[] =
    [
      { label: 'POST', value: 'POST' },
      { label: 'PUT', value: 'PUT' },
      { label: 'DELETE', value: 'DELETE' }
    ];

  SelectedCRUDAction = 'PUT';

  Models: SelectItem[] =
    [
      { label: 'Asset', value: 'Asset' },
      { label: 'Wallet', value: 'Wallet' }
    ];

  SelectedModel = 'Wallet';

  WalletToPost: any = {
    brand: 'Ledger',
    model: 'Nano S',
    website: 'https://shop.ledger.com/products/ledger-nano-s',
    price: 59,
    imageURL: 'https://cdn.shopify.com/s/files/1/2974/4858/products/lns-black-open_large.png',
    category: 'Hardware'
  };

  WalletToPut: Wallet = {
    id: 1,
    brand: 'Ledger',
    model: 'Nano S',
    website: 'https://shop.ledger.com/products/ledger-nano-s',
    price: 59,
    imageURL: 'https://cdn.shopify.com/s/files/1/2974/4858/products/lns-black-open_large.png',
    category: 'Hardware'
  };

  AssetToPost: any = {
    symbol: 'BTC',
    name: 'Bitcoin',
    founder: {
      firstName: 'Satoshi',
      lastName: 'Nakamotor',
      gender: 'M'
    },
    website: 'http://www.bitcoin.org/',
    fork: null
  };

  AssetToPut: Asset = {
    id: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    founder: {
      id: 1,
      firstName: 'Satoshi',
      lastName: 'Nakamotor',
      gender: 'M'
    },
    website: 'http://www.bitcoin.org/',
    fork: null
  };

  constructor(private service: MmCryptoService, private messageService: MessageService)
  {
  }

  ngOnInit(): void
  {

  }

  // Toast Messages

  SuccesToast(statusCode: string)
  {
    this.messageService.add({ severity: 'success', summary: statusCode, detail: 'Request was succesfull' });
  }

  ErrorToast(key: string, errorDescription: string)
  {
    const messageDetail = key + ' : ' + errorDescription;
    this.messageService.add({ severity: 'error', summary: '400 - Bad Request', detail: messageDetail });
  }

  HandleError(errorResponse: HttpErrorResponse)
  {
    // console.log(errorResponse.error.status);
    // console.log(errorResponse);

    const allRequestErrors = errorResponse.error.errors;

    for (const key of Object.keys(allRequestErrors)) {

      // console.log(key, allRequestErrors[key]);
      const allErrorsOfKey = allRequestErrors[key];

      allErrorsOfKey.forEach(keyError =>
      {
        this.ErrorToast(key, keyError);
        // console.log(keyError);
      });
    }
  }

  // Wallet CRUD

  async ReadWallet(id: number)
  {
    try {
      this.WalletToPut = await this.service.GetWalletById(id);
    }
    catch (e) {

    }
  }

  PerformWalletPOST()
  {
    this.service.PostWallet(this.WalletToPost).subscribe(
      data => this.SuccesToast('204 - Created'),
      (error: HttpErrorResponse) => this.HandleError(error)
    );
  }

  PerformWalletPUT()
  {
    this.service.PutWallet(this.WalletToPut).subscribe(
      data => this.SuccesToast('200 - OK'),
      (error: HttpErrorResponse) => this.HandleError(error)
    );
  }

  PerformWalletDELETE(Id: number)
  {
    this.service.DeleteWallet(Id).subscribe(
      data => this.SuccesToast('204 - Not Content'),
      (error: HttpErrorResponse) => this.HandleError(error)
    );
  }

  // Asset CRUD

  async ReadAsset(id: number)
  {
    try {
      this.AssetToPut = await this.service.GetAssetById(id);
    }
    catch (e) {

    }
  }

  PerformAssetPOST()
  {
    this.service.PostAsset(this.AssetToPost).subscribe(
      data => this.SuccesToast('204 - Created'),
      (error: HttpErrorResponse) => this.HandleError(error)
    );
  }

  PerformAssetPUT()
  {
    this.service.PutAsset(this.AssetToPut).subscribe(
      data => this.SuccesToast('200 - OK'),
      (error: HttpErrorResponse) => this.HandleError(error)
    );
  }

  PeformAssetDELETE(Id: number)
  {
    this.service.DeleteAsset(Id).subscribe(
      data => this.SuccesToast('204 - Not Content'),
      (error: HttpErrorResponse) => this.HandleError(error)
    );
  }
}
