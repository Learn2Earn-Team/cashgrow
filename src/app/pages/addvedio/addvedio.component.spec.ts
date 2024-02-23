import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvedioComponent } from './addvedio.component';

describe('AddvedioComponent', () => {
  let component: AddvedioComponent;
  let fixture: ComponentFixture<AddvedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddvedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
