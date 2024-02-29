import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
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
export class FavoritesComponent implements OnInit {
  public stringArrayForm!: any;
  public demoData: string[] = ['AAPL', 'GOOGL', 'MSFT'];
  public menuOpen: boolean = false;

  @Input() demo: boolean = false;
  @Output() searchValue = new EventEmitter<string[] | string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.demo) {
      this.onDemoData();
    }

    this.stringArrayForm = this.formBuilder.group({
      strings: this.formBuilder.array([]),
    });
  }
  get strings(): FormArray {
    return this.stringArrayForm.get('strings') as FormArray;
  }

  addString() {
    this.strings.push(this.formBuilder.control(''));
  }

  removeString(index: number) {
    this.strings.removeAt(index);
  }

  onSubmit() {
    this.searchValue.emit(this.stringArrayForm.value);
    this.menuOpen = false;
  }

  onDemoData() {
    this.searchValue.emit('DEMO');
    this.demo = true;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
