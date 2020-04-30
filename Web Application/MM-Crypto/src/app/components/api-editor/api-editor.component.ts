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


  async ReadWallet(id: number)
  {
    try {
      this.WalletToPut = await this.service.GetWalletById(id);
    }
    catch (e) {

    }
  }

  async ReadAsset(id: number)
  {
    try {
      this.AssetToPut = await this.service.GetAssetById(id);
    }
    catch (e) {

    }
  }

  DeleteWallet(Id: number)
  {
    this.service.DeleteWallet(Id);
  }

  PerformWalletPost()
  {
    this.service.PostWallet(this.WalletToPost);
  }

  DeleteCoin(Id: number)
  {
    this.service.DeleteAsset(Id);
  }

  PerformCoinPost()
  {
    this.service.PostAsset(this.AssetToPost);
  }

  PerformAssetPut()
  {
    // TODO
  }

  PerformWalletPut()
  {
    // TODO
  }

}
