import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { PriceChartComponent } from './components/price-chart/price-chart.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { CurrencyCalculatorComponent } from './components/currency-calculator/currency-calculator.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';

// Prime NG
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { SpinnerModule } from 'primeng/spinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';

// Other
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CurrencyCalculatorComponent,
    WalletComponent,
    NotFoundComponent,
    HomeComponent,
    FormComponent,
    PriceChartComponent,
    PriceTableComponent,
    CurrencyCalculatorComponent,
    CurrencyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    // PrimeNG
    TableModule,
    ProgressBarModule,
    DropdownModule,
    SpinnerModule,
    InputTextModule,
    ButtonModule,
    DataViewModule,
    // Other
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
