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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PriceComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    HttpClientModule,
    TableModule,
    RouterModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
