import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonushistoryComponent } from './bonushistory.component';

describe('BonushistoryComponent', () => {
  let component: BonushistoryComponent;
  let fixture: ComponentFixture<BonushistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonushistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonushistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
