import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllaproveddepositComponent } from './allaproveddeposit.component';

describe('AllaproveddepositComponent', () => {
  let component: AllaproveddepositComponent;
  let fixture: ComponentFixture<AllaproveddepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllaproveddepositComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllaproveddepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
