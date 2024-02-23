import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialorderComponent } from './socialorder.component';

describe('SocialorderComponent', () => {
  let component: SocialorderComponent;
  let fixture: ComponentFixture<SocialorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
