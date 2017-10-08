import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthserviceService } from './authservice.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { PatientformComponent } from './patientform/patientform.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientformComponent,
    PatientlistComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    FlashMessagesModule,
    AppRoutingModule
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
