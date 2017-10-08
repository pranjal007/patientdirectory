import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { PatientformComponent } from '../patientform/patientform.component';
import { PatientlistComponent } from '../patientlist/patientlist.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // Default Route
  },
  {
    path: 'submit',
    component: PatientformComponent 
  },
  {
    path: 'directory',
    component: PatientlistComponent 
  },
  { path: '**', component: HomeComponent } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
