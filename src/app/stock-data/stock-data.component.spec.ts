import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDataComponent } from './stock-data.component';

describe('StockDataComponent', () => {
  let component: StockDataComponent;
  let fixture: ComponentFixture<StockDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StockDataComponent]
    });
    fixture = TestBed.createComponent(StockDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
