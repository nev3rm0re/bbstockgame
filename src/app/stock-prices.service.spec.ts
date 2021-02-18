import { TestBed } from '@angular/core/testing';

import { StockPricesService } from './stock-prices.service';

describe('StockPricesService', () => {
  let service: StockPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
