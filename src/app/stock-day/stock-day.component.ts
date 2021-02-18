import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-day',
  templateUrl: './stock-day.component.html',
  styleUrls: ['./stock-day.component.css'],
})
export class StockDayComponent implements OnInit {
  constructor() {}

  private _day: number = 0;
  currentDate: number;

  @Input()
  set day(value: number) {
    this._day = value;
    this.currentDate = new Date().setDate(this.startDate.getDate() + this.day);
  }

  get day(): number {
    return this._day;
  }

  startDate: Date = new Date();

  ngOnInit(): void {}
}
