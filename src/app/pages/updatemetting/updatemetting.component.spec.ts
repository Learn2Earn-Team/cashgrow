import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemettingComponent } from './updatemetting.component';

describe('UpdatemettingComponent', () => {
  let component: UpdatemettingComponent;
  let fixture: ComponentFixture<UpdatemettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatemettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
