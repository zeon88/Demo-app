import { Patients } from './../../models/patients.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {
  patient: Patients
  constructor(@Inject(MAT_DIALOG_DATA) public data: Patients) {
    data ? this.patient = data : null;
  }

  ngOnInit(): void {
  }

}
