import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerspageComponent } from './followerspage.component';

describe('FollowerspageComponent', () => {
  let component: FollowerspageComponent;
  let fixture: ComponentFixture<FollowerspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowerspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
