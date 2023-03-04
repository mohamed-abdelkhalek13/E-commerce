import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestproductsComponent } from './bestproducts.component';

describe('BestproductsComponent', () => {
  let component: BestproductsComponent;
  let fixture: ComponentFixture<BestproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestproductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BestproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
