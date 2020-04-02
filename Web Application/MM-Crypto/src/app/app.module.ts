import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { PriceComponent } from './components/price/price.component'
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'primeng/spinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { WalletComponent } from './components/wallet/wallet.component';
import { DataViewModule } from 'primeng/dataview';
import { HistoryComponent } from './components/history/history.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PriceComponent,
    CalculatorComponent,
    WalletComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    HttpClientModule,
    TableModule,
    RouterModule,
    ProgressBarModule,
    DropdownModule,
    FormsModule,
    SpinnerModule,
    InputTextModule,
    ButtonModule,
    DataViewModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
