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
  public demo: boolean = false;

  constructor(
    private marketauxDataService: MarketauxDataService,
    private alphavantageDataSerivce: AlphavantageDataSerivce
  ) {}

  ngOnInit(): void {}

  public handleSearchValue(value: any) {
    if (value === 'DEMO') {
      this.handleDemoData();
    }

    if (value instanceof Object && !(value instanceof Array)) {
      this.searchValue = value.strings;
    } else {
      this.searchValue = value;
    }

    this.onSearch();
  }

  public onSearch() {
    this.marketauxDataService.getData(this.searchValue).subscribe((data) => {
      this.newsData = data;
    });
    this.stockData = [];
    this.searchValue.forEach((element: any) => {
      this.alphavantageDataSerivce.getData(element).subscribe((data) => {
        this.stockData.push(Object.values(data['Time Series (Daily)'])[0]);
        this.stockData[this.stockData.length - 1]['symbol'] =
          data['Meta Data']['2. Symbol'];
      });
    });
  }

  public handleNav(event: NavTypes) {
    this.currentView = event;
  }

  private handleDemoData() {
    this.newsData = {
      data: [
        {
          published_at: '2024-02-29T18:38:11.000000Z',
          image_url:
            'https://media.zenfs.com/en/Benzinga/0122385956a40ba41f3820e031dcff6e',
          title:
            "Elon Musk Challenges Microsoft's DEI Initiatives Spark Backlash As Trillion-Dollar Company Acknowledges Pay Equity 'Legitimately Influences Total Pay'",
          description:
            "Microsoft Corp.'s (NASDAQ:MSFT) 2023 Global Diversity & Inclusion report revealed a contentious issue: disparities in pay — particularly where white employees are paid less than their counterparts in the name of “pay equity.” Microsoft acknowledged the discrepancy, attributing it to factors that legitimately influence total pay.” It reveals that all racial and ethnic minority groups combined earn $1.007 for every $1 earned by white employees in the U.S. with the same job title, level and tenure.",
          url: 'https://finance.yahoo.com/news/elon-musk-challenges-microsofts-dei-183811685.html?.tsrc=rss',
          source: 'finance.yahoo.com',
        },
        {
          published_at: '2024-02-29T18:34:10.000000Z',
          image_url:
            'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1463681745/image_1463681745.jpg?io=getty-c-w1536',
          title:
            'VSDA: Uninterrupted Double-Digit Dividend Growth ETF Alternative (NASDAQ:VSDA)',
          description:
            'VictoryShares Dividend Accelerator rivals SCHD and DGRO in the space of uninterrupted double-digit dividend growth ETFs. Learn more about VSDA ETF here.',
          url: 'https://seekingalpha.com/article/4674883-vsda-uninterrupted-double-digit-dividend-growth-etf-alternative',
          source: 'seekingalpha.com',
        },
        {
          published_at: '"2024-02-29T18:26:42.000000Z"',
          image_url:
            'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/598522080/image_598522080.jpg?io=getty-c-w1536',
          title:
            'DIA: For The AI Fatigued, The Dow Jones Industrials May Offer A Haven',
          description:
            'Dow Jones Industrial Average has lagged behind S&P 500 and Nasdaq 100 due to differences in composition. Read more to see our analysis on DIA.',
          url: 'https://seekingalpha.com/article/4674878-dia-for-the-ai-fatigued-the-dow-jones-industrials-may-offer-a-haven',
          source: 'seekingalpha.com',
        },
      ],
    };
    this.stockData = [
      {
        '1. open': '184.1600',
        '2. high': '185.1300',
        '3. low': '182.6200',
        '4. close': '184.8700',
        '5. volume': '3641378',
        symbol: 'MSFT',
      },
      {
        '1. open': '200.1600',
        '2. high': '220.1300',
        '3. low': '190.6200',
        '4. close': '210.8700',
        '5. volume': '242424',
        symbol: 'AAPL',
      },
      {
        '1. open': '150.1600',
        '2. high': '165.1300',
        '3. low': '146.6200',
        '4. close': '164.8700',
        '5. volume': '532534',
        symbol: 'TSLA',
      },
    ];
  }

  public onDemoData() {
    this.handleDemoData();
    this.demo = true;
  }

  public getStockName(index: number) {
    return this.stockData[index].symbol;
  }
}
