import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveddepositeComponent } from './approveddeposite.component';

describe('ApproveddepositeComponent', () => {
  let component: ApproveddepositeComponent;
  let fixture: ComponentFixture<ApproveddepositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveddepositeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveddepositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
