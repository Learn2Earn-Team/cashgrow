import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookagencyComponent } from './facebookagency.component';

describe('FacebookagencyComponent', () => {
  let component: FacebookagencyComponent;
  let fixture: ComponentFixture<FacebookagencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookagencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookagencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
