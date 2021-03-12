import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// COMPONENTS
import { PatientComponent } from './components/patient/patient.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { PatientTableComponent } from './components/patient-table/patient-table.component';
import { PatientFormAddressComponent } from './components/patient-form-address/patient-form-address.component';
// THIRD PARTY
import { FlexLayoutModule } from '@angular/flex-layout';
//MATERIAL
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';






const material = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatDialogModule

];
@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientTableComponent,
    HomeComponent,
    PatientDetailComponent,
    PatientFormAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...material
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
