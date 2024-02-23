import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvedioComponent } from './allvedio.component';

describe('AllvedioComponent', () => {
  let component: AllvedioComponent;
  let fixture: ComponentFixture<AllvedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllvedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllvedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
