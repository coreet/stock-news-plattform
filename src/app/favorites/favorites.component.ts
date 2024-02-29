import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public stringArrayForm!: any;
  public demoData: string[] = ['AAPL', 'GOOGL', 'MSFT'];
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
  }

  onDemoData() {
    this.searchValue.emit('DEMO');
    this.demo = true;
  }
}
