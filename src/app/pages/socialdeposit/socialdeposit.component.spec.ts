import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialdepositComponent } from './socialdeposit.component';

describe('SocialdepositComponent', () => {
  let component: SocialdepositComponent;
  let fixture: ComponentFixture<SocialdepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialdepositComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
