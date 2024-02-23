import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawhistoryComponent } from './withdrawhistory.component';

describe('WithdrawhistoryComponent', () => {
  let component: WithdrawhistoryComponent;
  let fixture: ComponentFixture<WithdrawhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
