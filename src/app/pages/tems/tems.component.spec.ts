import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemsComponent } from './tems.component';

describe('TemsComponent', () => {
  let component: TemsComponent;
  let fixture: ComponentFixture<TemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
