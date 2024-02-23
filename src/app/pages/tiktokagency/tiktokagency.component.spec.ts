import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokagencyComponent } from './tiktokagency.component';

describe('TiktokagencyComponent', () => {
  let component: TiktokagencyComponent;
  let fixture: ComponentFixture<TiktokagencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiktokagencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiktokagencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
