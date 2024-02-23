import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeagencyComponent } from './youtubeagency.component';

describe('YoutubeagencyComponent', () => {
  let component: YoutubeagencyComponent;
  let fixture: ComponentFixture<YoutubeagencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeagencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeagencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
