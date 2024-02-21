import { Component, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketauxDataService } from '../marketauxdata.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { NewsTileComponent } from '../news-tile/news-tile.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
  ],
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss'],
})
export class HomescreenComponent implements OnInit {
  public newsData!: any;
  private searchValue!: string;
  constructor(private marketauxDataService: MarketauxDataService) {}

  ngOnInit(): void {}

  public handleSearchValue(value: any) {
    this.searchValue = value;
  }

  public onSearch() {
    this.marketauxDataService
      .getData(['TSLA', 'AMZN', 'MSFT'])
      .subscribe((data) => {
        this.newsData = data;
        console.log(this.newsData);
      });
  }
}
