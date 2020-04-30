import { Component, OnInit } from '@angular/core';
import { MmcryptoService, Wallet, Asset } from 'src/app/services/mmcrypto/mmcrypto.service';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-api-editor',
  templateUrl: './api-editor.component.html',
  styleUrls: ['./api-editor.component.css']
})
export class ApiEditorComponent implements OnInit
{

  CRUDActions: SelectItem[] =
    [
      { label: 'POST', value: 'POST' },
      { label: 'PUT', value: 'PUT' },
      { label: 'DELETE', value: 'DELETE' }
    ];

  SelectedCRUDAction: string = 'PUT';

  Models: SelectItem[] =
    [
      { label: 'Asset', value: 'Asset' },
      { label: 'Wallet', value: 'Wallet' }
    ];

  SelectedModel: string = 'Wallet';

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

  constructor(private service: MmcryptoService)
  {
  }

  ngOnInit(): void
  {

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
      data => console.log('POST SUCCESFULLY', data),
      error => console.log('POST FAILED', error)
    );
  }

  PerformWalletPUT()
  {
    this.service.PutWallet(this.WalletToPut).subscribe(
      data => console.log('PUT SUCCESFULLY', data),
      error => console.log('PUT FAILED', error)
    );
  }

  PerformWalletDELETE(Id: number)
  {
    this.service.DeleteWallet(Id).subscribe(
      data => console.log('DELETE SUCCESFULLY', data),
      error => console.log('DELETE FAILED', error)
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
      data => console.log('POST SUCCESFULLY', data),
      error => console.log('POST FAILED', error)
    );
  }

  PerformAssetPUT()
  {
    this.service.PutAsset(this.AssetToPut).subscribe(
      data => console.log('PUT SUCCESFULLY', data),
      error => console.log('PUT FAILED', error)
    );
  }

  PeformAssetDELETE(Id: number)
  {
    this.service.DeleteAsset(Id).subscribe(
      data => console.log('DELETE SUCCESFULLY', data),
      error => console.log('DELETE FAILED', error)
    );
  }
}
