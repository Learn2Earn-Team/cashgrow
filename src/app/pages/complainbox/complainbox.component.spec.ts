import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainboxComponent } from './complainbox.component';

describe('ComplainboxComponent', () => {
  let component: ComplainboxComponent;
  let fixture: ComponentFixture<ComplainboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
