import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveddepositComponent } from './aproveddeposit.component';

describe('AproveddepositComponent', () => {
  let component: AproveddepositComponent;
  let fixture: ComponentFixture<AproveddepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproveddepositComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AproveddepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
