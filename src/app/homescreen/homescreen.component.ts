import { AlphavantageDataSerivce } from './../alphavantagedata.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketauxDataService } from '../marketauxdata.service';
import {
  NavTypes,
  NavigationComponent,
} from '../navigation/navigation.component';
import { NewsTileComponent } from '../news-tile/news-tile.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StockDataComponent } from '../stock-data/stock-data.component';

@Component({
  selector: 'app-homescreen',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    NewsTileComponent,
    FavoritesComponent,
    MatInputModule,
    MatButtonModule,
    StockDataComponent,
  ],
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss'],
})
export class HomescreenComponent implements OnInit {
  public newsData!: any;
  private searchValue!: any;
  public stockData: Array<any> = [];
  public currentView: NavTypes = 'News';

  constructor(
    private marketauxDataService: MarketauxDataService,
    private alphavantageDataSerivce: AlphavantageDataSerivce
  ) {}

  ngOnInit(): void {}

  public handleSearchValue(value: any) {
    if (value instanceof Object && !(value instanceof Array)) {
      this.searchValue = value.strings;
    } else {
      this.searchValue = value;
    }
  }

  public onSearch() {
    this.marketauxDataService.getData(this.searchValue).subscribe((data) => {
      this.newsData = data;
    });

    // this.searchValue.forEach((element: any) => {
    //   this.alphavantageDataSerivce.getData(element).subscribe((data) => {
    //     console.log('data: ', data);
    //     this.stockData.push(Object.values(data['Time Series (Daily)'])[0]);
    //   });
    // });

    this.stockData = [
      {
        '1. open': '184.1600',
        '2. high': '185.1300',
        '3. low': '182.6200',
        '4. close': '184.8700',
        '5. volume': '3641378',
      },
      {
        '1. open': '200.1600',
        '2. high': '220.1300',
        '3. low': '190.6200',
        '4. close': '210.8700',
        '5. volume': '242424',
      },
      {
        '1. open': '150.1600',
        '2. high': '165.1300',
        '3. low': '146.6200',
        '4. close': '164.8700',
        '5. volume': '532534',
      },
    ];
  }

  public handleNav(event: NavTypes) {
    this.currentView = event;
  }
}
