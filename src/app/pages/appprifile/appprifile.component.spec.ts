import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppprifileComponent } from './appprifile.component';

describe('AppprifileComponent', () => {
  let component: AppprifileComponent;
  let fixture: ComponentFixture<AppprifileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppprifileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppprifileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
