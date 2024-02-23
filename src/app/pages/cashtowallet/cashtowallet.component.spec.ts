import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashtowalletComponent } from './cashtowallet.component';

describe('CashtowalletComponent', () => {
  let component: CashtowalletComponent;
  let fixture: ComponentFixture<CashtowalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashtowalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashtowalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
