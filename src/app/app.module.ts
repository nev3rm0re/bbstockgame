import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockDisplayComponent } from './stock-display/stock-display.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { StockDayComponent } from './stock-day/stock-day.component';

@NgModule({
  declarations: [
    AppComponent,
    StockDisplayComponent,
    StockItemComponent,
    StockDayComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
