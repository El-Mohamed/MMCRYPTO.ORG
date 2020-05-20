import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceChartComponent } from './components/price-chart/price-chart.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { CurrencyCalculatorComponent } from './components/currency-calculator/currency-calculator.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WalletDetailsComponent } from './components/wallet-details/wallet-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { ApiNavigationComponent } from './components/api-navigation/api-navigation.component';
import { ApiEditorComponent } from './components/api-editor/api-editor.component';

// Prime NG
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { SpinnerModule } from 'primeng/spinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';

// Other
import { NgApexchartsModule } from "ng-apexcharts";

// Firebase
import { AngularFireModule } from '@angular/fire';
import { TokenGenratorComponent } from './components/token-genrator/token-genrator.component';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CurrencyCalculatorComponent,
    NotFoundComponent,
    HomeComponent,
    PriceChartComponent,
    PriceTableComponent,
    CurrencyCalculatorComponent,
    AssetDetailsComponent,
    ApiNavigationComponent,
    WalletDetailsComponent,
    ApiEditorComponent,
    TokenGenratorComponent
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
    ToastModule,
    // Other
    NgApexchartsModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
