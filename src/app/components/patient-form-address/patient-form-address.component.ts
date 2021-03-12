import { Address } from './../../models/address.model';
import { Patients } from './../../models/patients.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressType } from 'src/app/enums/address-type';

@Component({
  selector: 'app-patient-form-address',
  templateUrl: './patient-form-address.component.html',
  styleUrls: ['./patient-form-address.component.scss']
})
export class PatientFormAddressComponent implements OnInit {

  @Input() Form: FormGroup;
  @Input() patient: Patients;

  types = AddressType;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    if (this.patient) {
      this.updateFormAddress(this.patient.addresses[0])
      this.addressesFormArray().disable();
    } else {
      this.createDefaultAddress();
    }

  }

  createAddressGroup() {
    return this.formBuilder.group({
      type: ['', Validators.required],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      name: [''],

    });
  }

  createDefaultAddress() {
    const formGroup = this.formBuilder.group({
      type: [{ value: 'Home', disabled: true }, Validators.required],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      name: [''],

    });
    this.addressesFormArray().push(formGroup)
  }


  addressesFormArray(): FormArray {
    return this.Form.get("addresses") as FormArray
  }

  addAddress() {
    this.addressesFormArray().push(this.createAddressGroup());
  }

  removeAddress(i: number) {
    this.addressesFormArray().removeAt(i);
  }

  private updateFormAddress(address: Address) {
    const formGroup = this.formBuilder.group({
      type: [address.type, Validators.required],
      phone: [address.phone, Validators.required],
      street: [address.street, Validators.required],
      city: [address.city, Validators.required],
      zipCode: [address.zipCode, Validators.required],
      country: [address.city, Validators.required],
      name: [address.name],
    })
    this.addressesFormArray().push(formGroup);

  }
}
