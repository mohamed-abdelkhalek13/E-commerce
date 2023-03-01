import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatdialogComponent } from './catdialog.component';

describe('CatdialogComponent', () => {
  let component: CatdialogComponent;
  let fixture: ComponentFixture<CatdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
