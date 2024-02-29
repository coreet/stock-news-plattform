import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-news-tile',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './news-tile.component.html',
  styleUrls: ['./news-tile.component.scss'],
})
export class NewsTileComponent {
  @Input() news: any;

  openLink(link: string) {
    window.open(link, '_blank');
  }

  getImageUrl(imageUrl: string) {
    return `url(${imageUrl})`;
  }
}
