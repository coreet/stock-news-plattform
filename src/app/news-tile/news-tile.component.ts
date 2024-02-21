import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-tile.component.html',
  styleUrls: ['./news-tile.component.scss'],
})
export class NewsTileComponent {
  @Input() news: any;
}
