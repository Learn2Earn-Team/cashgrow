import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrewardComponent } from './getreward.component';

describe('GetrewardComponent', () => {
  let component: GetrewardComponent;
  let fixture: ComponentFixture<GetrewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetrewardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetrewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
