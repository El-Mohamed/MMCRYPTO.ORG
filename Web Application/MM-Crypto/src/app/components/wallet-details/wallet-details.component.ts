import { Component, OnInit } from '@angular/core';
import { MmcryptoService, Wallet } from 'src/app/services/mmcrypto/mmcrypto.service';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.css']
})
export class WalletDetailsComponent implements OnInit
{

  AllWallets: Wallet[] = [];

  SortMode: SelectItem[] =
    [
      { label: 'Ascending ', value: 'asc' },
      { label: 'Descending ', value: 'desc' },
    ];

  SelectedSortMode: string = 'asc';

  PageLenght: SelectItem[] =
    [
      { label: '10', value: '10' },
      { label: '15', value: '15' },
      { label: '25', value: '25' },
      { label: '50', value: '50' },
      { label: '100', value: '100' },
    ];

  SelectedPageLength: string = '15';

  CurrentPageNumber: number = 1;
  KeyWord: string = 'Search Here';


  constructor(private service: MmcryptoService) { }

  ngOnInit(): void
  {
    this.updateWallets();
  }

  async updateWallets()
  {
    try {
      this.AllWallets = await this.service.GetWalletsWithQuery(this.CurrentPageNumber.toString(), this.SelectedPageLength, this.SelectedSortMode, 'brand');
    }
    catch (error) {
      console.log('Error');
    }
  }

  UpdatePageNumber(command: number)
  {
    if (!(this.CurrentPageNumber == 1 && command == -1)) {
      this.CurrentPageNumber += command;
      this.updateWallets();
    }
  }

}
