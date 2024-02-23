import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysocialComponent } from './buysocial.component';

describe('BuysocialComponent', () => {
  let component: BuysocialComponent;
  let fixture: ComponentFixture<BuysocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuysocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuysocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
