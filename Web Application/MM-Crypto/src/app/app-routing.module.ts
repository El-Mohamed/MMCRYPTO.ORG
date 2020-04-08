import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { FormComponent } from './components/form/form.component';
import { PriceChartComponent } from './components/price-chart/price-chart.component';
import { PriceTableComponent } from './components/price-table/price-table.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "price", component: PriceTableComponent },
  { path: "calculator", component: CalculatorComponent },
  { path: "wallet", component: WalletComponent },
  { path: "information", component: InformationComponent },
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
