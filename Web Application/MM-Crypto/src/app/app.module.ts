import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'primeng/spinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { WalletComponent } from './components/wallet/wallet.component';
import { DataViewModule } from 'primeng/dataview';
import { ChartModule } from 'primeng/chart';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { InformationComponent } from './components/information/information.component';
import { FormComponent } from './components/form/form.component';
import { PriceChartComponent } from './components/price-chart/price-chart.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { CurrencyCalculatorComponent } from './components/currency-calculator/currency-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CurrencyCalculatorComponent,
    WalletComponent,
    NotFoundComponent,
    HomeComponent,
    InformationComponent,
    FormComponent,
    PriceChartComponent,
    PriceTableComponent,
    CurrencyCalculatorComponent
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
    ChartModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
