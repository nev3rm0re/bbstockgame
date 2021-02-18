import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockJson } from '../stock-json';
import { StockPricesService } from '../stock-prices.service';

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css'],
})
export class StockDisplayComponent implements OnInit {
  stocks$: Observable<StockJson[]>;
  interval: any;
  day: number = 0;

  constructor(private stockPricesService: StockPricesService) {}

  ngOnInit(): void {
    this.stocks$ = this.stockPricesService.stocks;
  }

  onAdvance(): void {
    if (this.interval) {
      this.interval = clearInterval(this.interval);
    } else {
      this.advanceDay();
      this.interval = setInterval(() => this.advanceDay(), 700);
    }
  }

  advanceDay(): void {
    this.day = this.day + 1;
    this.stockPricesService.getNextDay();
  }
}
