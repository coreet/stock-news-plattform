import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomescreenComponent } from './homescreen/homescreen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomescreenComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stock-news-plattform';
}
