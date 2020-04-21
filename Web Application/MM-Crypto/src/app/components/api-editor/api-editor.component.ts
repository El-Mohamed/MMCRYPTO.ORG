import { Component, OnInit } from '@angular/core';
import { MmcryptoService } from 'src/app/services/mmcrypto/mmcrypto.service';
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

  SelectedCRUDAction: string = 'POST';

  Models: SelectItem[] =
    [
      { label: 'Coin', value: 'Coin' },
      { label: 'Wallet', value: 'Wallet' }
    ];

  SelectedModel: string = 'Coin';

  WalletToPost: any = {
    brand: 'Ledger',
    model: 'Nano S',
    website: 'https://shop.ledger.com/products/ledger-nano-s',
    price: 59,
    imageURL: 'https://cdn.shopify.com/s/files/1/2974/4858/products/lns-black-open_large.png',
    categorie: 'Hardware'
  };

  CoinToPost: any = {
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

  constructor(private service: MmcryptoService)
  {
  }

  ngOnInit(): void
  {

  }

  DeleteWallet(Id: number)
  {
    this.service.deleteWallet(Id);
  }

  PerformWalletPost()
  {
    this.service.postWallet(this.WalletToPost);
  }

  DeleteCoin(Id: number)
  {
    this.service.deleteCoin(Id);
  }

  PerformCoinPost()
  {
    this.service.postCoin(this.CoinToPost);
  }

}
