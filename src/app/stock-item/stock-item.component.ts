import { Component, Input, OnInit } from '@angular/core';
import { StockData } from '../stock-data';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  constructor() {}

  @Input()
  stock: StockData;

  ngOnInit(): void {}
}
