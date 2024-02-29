import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-stock-data',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule],
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.scss'],
})
export class StockDataComponent implements OnInit {
  @Input() stockData: any;
  @Input() stockName: any;

  constructor() {}

  ngOnInit(): void {}
}
