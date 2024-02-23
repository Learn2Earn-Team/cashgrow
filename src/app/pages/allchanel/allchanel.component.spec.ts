import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllchanelComponent } from './allchanel.component';

describe('AllchanelComponent', () => {
  let component: AllchanelComponent;
  let fixture: ComponentFixture<AllchanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllchanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllchanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
