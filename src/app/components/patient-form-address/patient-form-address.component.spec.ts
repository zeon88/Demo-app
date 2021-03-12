import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFormAddressComponent } from './patient-form-address.component';

describe('PatientFormAddressComponent', () => {
  let component: PatientFormAddressComponent;
  let fixture: ComponentFixture<PatientFormAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFormAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
