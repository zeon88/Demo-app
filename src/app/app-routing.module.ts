import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientTableComponent } from './components/patient-table/patient-table.component';
import { PatientComponent } from './components/patient/patient.component';
import { HomeComponent } from './components/home/home.component';




const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'patient',
      component: PatientComponent
    },
    {
      path: 'patients',
      component: PatientTableComponent
    }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
