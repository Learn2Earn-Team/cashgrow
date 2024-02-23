import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpostviewComponent } from './userpostview.component';

describe('UserpostviewComponent', () => {
  let component: UserpostviewComponent;
  let fixture: ComponentFixture<UserpostviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpostviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpostviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
