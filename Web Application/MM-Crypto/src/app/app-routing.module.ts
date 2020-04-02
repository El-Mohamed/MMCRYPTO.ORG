import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceComponent } from './components/price/price.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { HistoryComponent } from './components/history/history.component';


const routes: Routes = [
  { path: "Price", component: PriceComponent },
  { path: "Calculator", component: CalculatorComponent },
  { path: "Wallet", component: WalletComponent },
  { path: 'History/:id', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
