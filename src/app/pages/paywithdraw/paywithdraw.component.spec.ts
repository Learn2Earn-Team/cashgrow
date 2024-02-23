import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaywithdrawComponent } from './paywithdraw.component';

describe('PaywithdrawComponent', () => {
  let component: PaywithdrawComponent;
  let fixture: ComponentFixture<PaywithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaywithdrawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaywithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
