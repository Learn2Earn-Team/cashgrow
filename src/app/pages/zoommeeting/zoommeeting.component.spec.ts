import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoommeetingComponent } from './zoommeeting.component';

describe('ZoommeetingComponent', () => {
  let component: ZoommeetingComponent;
  let fixture: ComponentFixture<ZoommeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoommeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoommeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
