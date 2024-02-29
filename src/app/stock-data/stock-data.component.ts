import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.scss'],
})
export class StockDataComponent implements OnInit {
  @Input() stockData: any;

  constructor() {}

  ngOnInit(): void {}
}
