import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceComponent } from './components/price/price.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { HistoryComponent } from './components/history/history.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "price", component: PriceComponent },
  { path: "calculator", component: CalculatorComponent },
  { path: "wallet", component: WalletComponent },
  { path: "information", component: InformationComponent },
  { path: "form", component: FormComponent },
  { path: 'history/:id', component: HistoryComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
