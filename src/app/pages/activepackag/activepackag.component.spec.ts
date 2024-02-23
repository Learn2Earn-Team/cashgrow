import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivepackagComponent } from './activepackag.component';

describe('ActivepackagComponent', () => {
  let component: ActivepackagComponent;
  let fixture: ComponentFixture<ActivepackagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivepackagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivepackagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
