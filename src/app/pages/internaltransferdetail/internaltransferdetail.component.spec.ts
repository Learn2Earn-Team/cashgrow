import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaltransferdetailComponent } from './internaltransferdetail.component';

describe('InternaltransferdetailComponent', () => {
  let component: InternaltransferdetailComponent;
  let fixture: ComponentFixture<InternaltransferdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternaltransferdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternaltransferdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
