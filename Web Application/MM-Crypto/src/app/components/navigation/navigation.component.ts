import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor() { }

  ngOnInit(): void {

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Prices', icon: 'pi pi-fw pi-chart-line', routerLink: 'Price' },
      { label: 'Information', icon: 'pi pi-fw pi-info-circle' },
      { label: 'Calculators', icon: 'pi pi-fw pi-money-bill' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.activeItem = this.items[0];
  }

}