import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashwalletdetailsComponent } from './cashwalletdetails.component';

describe('CashwalletdetailsComponent', () => {
  let component: CashwalletdetailsComponent;
  let fixture: ComponentFixture<CashwalletdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashwalletdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashwalletdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
