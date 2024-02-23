import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsocialComponent } from './promotionsocial.component';

describe('PromotionsocialComponent', () => {
  let component: PromotionsocialComponent;
  let fixture: ComponentFixture<PromotionsocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
