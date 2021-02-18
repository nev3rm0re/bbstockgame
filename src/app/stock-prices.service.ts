import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StockJson } from './stock-json';
import { HttpClient } from '@angular/common/http';
import { StockData } from './stock-data';

@Injectable({
  providedIn: 'root',
})
export class StockPricesService {
  private _stocks: BehaviorSubject<Array<StockData>> = new BehaviorSubject<
    Array<StockData>
  >([]);

  public readonly stocks: Observable<
    Array<StockData>
  > = this._stocks.asObservable();
  constructor(private http: HttpClient) {
    this.loadDayZeroData();
  }

  private loadDayZeroData(): void {
    // Use local JSON for now to avoid CORS issues
    this.http.get('data/stocks.json').subscribe(
      (data: Array<StockJson>) => {
        this._stocks.next(this.convertJsonToData(data));
      },
      (error) => {
        this._stocks.next([
          {
            symbol: 'N/A',
            name: 'Stock data unavailable: ' + error.message,
            price: 0,
            initialPrice: 0,
            increase: 0,
          },
        ]);
      }
    );
  }

  convertJsonToData(data: Array<StockJson>): Array<StockData> {
    return data.map<StockData>((stockjson) => {
      return {
        ...stockjson,
        increase: 0,
        initialPrice: stockjson.price,
      };
    });
  }

  getNextDay(): Array<StockData> {
    const nextDayStocks = this._stocks.value.map((data) => {
      const newPrice: number =
        // this is slightly offset (-10% - +11%) to make increase/decrease more
        // or less the same in value and avoid price eventually stopping at 0.05
        Math.round(data.price * (90 + Math.random() * 21)) / 100;
      return {
        ...data,
        price: newPrice,
        increase: Math.round(100 * (newPrice - data.initialPrice)) / 100,
      };
    });
    this._stocks.next(nextDayStocks);
    return nextDayStocks;
  }
}
