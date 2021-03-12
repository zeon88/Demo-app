import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Address } from '../models/address.model';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/patient.model';
import { Patients } from '../models/patients.model';


const doctors: Doctor[] = [
  {
    id: 1,
    firstName: "Gregory",
    lastName: "House",
    title: "MD"
  },
  {
    id: 2,
    firstName: "Elizabeth",
    lastName: "Blackwell",
    title: "MD"

  },
  {
    id: 3,
    firstName: "Joseph",
    lastName: "Lister",
    title: "Surgeon"
  },
  {
    id: 4,
    firstName: "Eduard",
    lastName: "Jenner",
    title: "Immunologist"
  }
]
const addresses: Address[] = [
  {
    type: 'Home',
    phone: '+38906418214',
    street: 'Test Street',
    city: 'Washington',
    zipCode: 321,
    country: 'Serbia'
  }

]
const patients: Patients[] = [
  {
    id: 112801,
    firstName: 'John',
    lastName: 'Smit',
    doctorId:1,
    addresses: addresses,
    birthDate: new Date(),
    registeredDate: new Date(),
    email: 'john@gmail.com',
  },
  {
    id: 701121,
    firstName: 'Peter',
    lastName: 'Miles',
    doctorId:2,
    addresses: addresses,
    birthDate: new Date(),
    registeredDate: new Date(),
    email: 'peterZelko@gmail.com',
  },
  {
    id: 112801,
    firstName: 'Douglas',
    lastName: 'Really',
    doctorId:1,
    addresses: addresses,
    birthDate: new Date(),
    registeredDate: new Date(),
    email: 'douglas@gmail.com',
  },
  {
    id: 701121,
    firstName: 'Adam',
    lastName: 'Johnson',
    doctorId:2,
    addresses: addresses,
    birthDate: new Date(),
    registeredDate: new Date(),
    email: 'adam@gmail.com',
  }, {
    id: 112801,
    firstName: 'Peter',
    lastName: 'Jackson',
    doctorId:1,
    addresses: addresses,
    birthDate: new Date(),
    registeredDate: new Date(),
    email: 'peter@gmail.com',
  },
  {
    id: 701121,
    firstName: 'Kevin',
    lastName: 'Hudson',
    doctorId:2,
    addresses: addresses,
    birthDate: new Date(),
    registeredDate: new Date(),
    email: 'kevino@gmail.com',
  }

]

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  patientsApi = new BehaviorSubject<Patients[]>(patients);
  constructor() { }

  addPatient(patient: Patient) {
    if (patient) {
      // generated random user id and random registeredDate
      let randomId = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      const patientUpdate: Patients = { ...patient, registeredDate: new Date(), id: randomId }
      patients.push(patientUpdate)
    }
    this.patientsApi.next(patients);
  }

  getDoctors(): Observable<Doctor[]> {
    return of(doctors)
  }
}
