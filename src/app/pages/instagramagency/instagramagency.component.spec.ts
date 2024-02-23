import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramagencyComponent } from './instagramagency.component';

describe('InstagramagencyComponent', () => {
  let component: InstagramagencyComponent;
  let fixture: ComponentFixture<InstagramagencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramagencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramagencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
