import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PriceChartComponent } from './components/price-chart/price-chart.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { CurrencyCalculatorComponent } from './components/currency-calculator/currency-calculator.component';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { WalletDetailsComponent } from './components/wallet-details/wallet-details.component';
import { ApiEditorComponent } from './components/api-editor/api-editor.component';
import { TokenGeneratorComponent } from './components/token-genrator/token-generator.component';
import {AuthGuard} from './other/auth-guard.guard';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "ranking", component: PriceTableComponent },
  { path: "calculator", component: CurrencyCalculatorComponent },
  { path: "wallet-details", component: WalletDetailsComponent },
  { path: "asset-details", component: AssetDetailsComponent },
  { path: "api-editor", component: ApiEditorComponent, canActivate: [AuthGuard] },
  { path: "token-generator", component: TokenGeneratorComponent },
  { path: 'chart/:id', component: PriceChartComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
