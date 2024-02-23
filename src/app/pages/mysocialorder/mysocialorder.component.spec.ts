import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysocialorderComponent } from './mysocialorder.component';

describe('MysocialorderComponent', () => {
  let component: MysocialorderComponent;
  let fixture: ComponentFixture<MysocialorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysocialorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysocialorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
