import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancedepositeComponent } from './financedeposite.component';

describe('FinancedepositeComponent', () => {
  let component: FinancedepositeComponent;
  let fixture: ComponentFixture<FinancedepositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancedepositeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancedepositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
