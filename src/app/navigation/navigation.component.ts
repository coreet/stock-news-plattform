import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('menuAnimation', [
      state(
        'collapsed',
        style({
          height: '0',
          display: 'none',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          display: 'block',
        })
      ),
      transition('collapsed => expanded', [animate('0.3s ease-out')]),
      transition('expanded => collapsed', [animate('0.3s ease-in')]),
    ]),
  ],
})
export class NavigationComponent {
  @Output() navToggle = new EventEmitter();
  public menuOpen: boolean = false;
  constructor() {}

  onToggleSidenav(type: NavTypes) {
    this.navToggle.emit(type);
    this.menuOpen = !this.menuOpen;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

export type NavTypes = 'News' | 'Favorites' | 'Profile';
