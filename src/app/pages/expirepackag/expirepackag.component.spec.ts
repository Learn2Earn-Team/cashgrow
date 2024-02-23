import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirepackagComponent } from './expirepackag.component';

describe('ExpirepackagComponent', () => {
  let component: ExpirepackagComponent;
  let fixture: ComponentFixture<ExpirepackagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpirepackagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpirepackagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
