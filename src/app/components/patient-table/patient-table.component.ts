import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map, mergeMap, flatMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Patients } from 'src/app/models/patients.model';
import { PatientDetailComponent } from '../patient-detail/patient-detail.component';
import { DataManagerService } from './../../services/data-manager.service';
import { TableData } from '../../models/table-data.model';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.scss']
})
export class PatientTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'registeredDate',
    'doctorFirstName',
    'doctorLastName',
    'email',
    'phone',
    'street',
    'city',
    'zipCode',
    'country',
    'details'
  ];
  dataSource = new MatTableDataSource<TableData>();;
  patientDetail: Patients[];

  constructor(
    private dialog: MatDialog,
    private dataManagerService: DataManagerService) { }

  ngOnInit(): void {

    this.getTableData();
  }

  goToDetails(data: TableData) {
    const patient = this.patientDetail.find(x => x.id === data.id)
    this.dialog.open(PatientDetailComponent, {
      width: '700px',
      height: '780px',
      data: <Patients>patient
    })
  }

  private getTableData() {
    let doctors = [];
    this.dataManagerService.getDoctors()
      .pipe(
        mergeMap(doctorsApi => {
          doctors = doctorsApi;
          return this.dataManagerService.patientsApi
        }),
        map(patients => {
          this.patientDetail = patients;
          const tableDisplayData: TableData[] = [];
          let tableData = {} as TableData;
          patients.forEach(patient => {
            const doctor = doctors.find(x => x.id === patient.doctorId)
            const address = patient.addresses.find(x => x.type.toLowerCase() === 'home')
            if (address) {
              tableData = {
                id: patient.id,
                firstName: patient.firstName,
                lastName: patient.lastName,
                doctorFirstName: doctor.firstName,
                doctorLastName: doctor.lastName,
                registeredDate: patient.registeredDate,
                phone: address.phone,
                email: patient.email,
                city: address.city,
                street: address.street,
                zipCode: address.zipCode,
                country: address.country
              }
            }
            tableDisplayData.push(tableData);
          })
          return tableDisplayData
        })
      ).subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }
}
