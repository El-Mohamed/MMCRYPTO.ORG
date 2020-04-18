import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { PriceChartComponent } from './components/price-chart/price-chart.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { CurrencyCalculatorComponent } from './components/currency-calculator/currency-calculator.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { WalletDetailsComponent } from './components/wallet-details/wallet-details.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "ranking", component: PriceTableComponent },
  { path: "calculator", component: CurrencyCalculatorComponent },
  { path: "wallet", component: WalletDetailsComponent },
  { path: "information", component: CurrencyDetailsComponent },
  { path: "form", component: FormComponent },
  { path: 'chart/:id', component: PriceChartComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
