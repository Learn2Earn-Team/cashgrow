import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchanelComponent } from './addchanel.component';

describe('AddchanelComponent', () => {
  let component: AddchanelComponent;
  let fixture: ComponentFixture<AddchanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddchanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddchanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
