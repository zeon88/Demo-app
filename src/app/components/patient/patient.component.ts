import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressType } from './../../enums/address-type';
import { Patients } from './../../models/patients.model';
import { Doctor } from './../../models/doctor.model';
import { DataManagerService } from './../../services/data-manager.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  @Input() set patient(value: Patients) {
    if (value) {
      this.patientUpdate = value;
    }
  }
  patientUpdate: Patients
  form: FormGroup;
  doctors: Doctor[]
  types = AddressType;
  areaCode = '';
  showVat: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataManagerService: DataManagerService
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      doctorId: ['', Validators.required],
      vatCode: [''],
      addresses: this.formBuilder.array([])
    });

  }

  ngOnInit(): void {
    if (this.patientUpdate) {
      this.form.patchValue(this.patientUpdate, { emitEvent: false });
      this.form.disable();
    } else {
      this.form.controls['birthDate'].valueChanges.subscribe(x => {
        this.olderThan(x) ? this.showVat = true : this.showVat = false;
      })
    }
    this.prepareDoctorsData();

  }

  submitForm() {
    this.dataManagerService.addPatient(this.form.getRawValue() as Patient);
    this.dataManagerService.patientsApi.subscribe(x => {
      if (x) {
        this.form.reset;
        this.router.navigate(['/home'])
      }
    })
  }

  private olderThan(date: Date): boolean {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age >= 18) {
      return true;
    }
    return false;
  }

  private prepareDoctorsData() {
    this.dataManagerService.getDoctors().subscribe(x => {
      this.doctors = x
    })
  }

}
