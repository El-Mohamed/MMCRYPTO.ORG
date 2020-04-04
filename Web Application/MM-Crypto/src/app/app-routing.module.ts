import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceComponent } from './components/price/price.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { HistoryComponent } from './components/history/history.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: "price", component: PriceComponent },
  { path: "calculator", component: CalculatorComponent },
  { path: "wallet", component: WalletComponent },
  { path: 'history/:id', component: HistoryComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
