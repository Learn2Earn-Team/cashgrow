import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BydatereporttotalComponent } from './bydatereporttotal.component';

describe('BydatereporttotalComponent', () => {
  let component: BydatereporttotalComponent;
  let fixture: ComponentFixture<BydatereporttotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BydatereporttotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BydatereporttotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
