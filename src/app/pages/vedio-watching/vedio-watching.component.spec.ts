import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioWatchingComponent } from './vedio-watching.component';

describe('VedioWatchingComponent', () => {
  let component: VedioWatchingComponent;
  let fixture: ComponentFixture<VedioWatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VedioWatchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VedioWatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
