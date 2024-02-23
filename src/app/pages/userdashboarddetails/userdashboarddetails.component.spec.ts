import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboarddetailsComponent } from './userdashboarddetails.component';

describe('UserdashboarddetailsComponent', () => {
  let component: UserdashboarddetailsComponent;
  let fixture: ComponentFixture<UserdashboarddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdashboarddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdashboarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
