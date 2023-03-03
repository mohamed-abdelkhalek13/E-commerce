import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersdashboardComponent } from './ordersdashboard.component';

describe('OrdersdashboardComponent', () => {
  let component: OrdersdashboardComponent;
  let fixture: ComponentFixture<OrdersdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
