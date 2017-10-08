import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.css']
})
export class PatientformComponent implements OnInit {


  form;
  message;
  messageClass;
  processing = false;
  emailValid;
  emailMessage;
  ageValid;
  ageMessage;
  phoneValid;
  phoneMessage;

  constructor( private formBuilder: FormBuilder,
    private authService : AuthserviceService,
    private router: Router) {
      this.createForm();
     }

    createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(5), 
        Validators.maxLength(30),
        this.validateEmail
      ])],
      firstname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
      ])],
      lastname: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(1), 
        Validators.maxLength(20), 
      ])],
      age: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(1), 
        Validators.maxLength(2), 
      ])],
      DOB: ['', Validators.compose([
        Validators.required 
        //Validators.minLength(8), 
        //Validators.maxLength(35), 
      ])],
      gender: ['', Validators.compose([
        Validators.required 
        //Validators.minLength(8), 
        //Validators.maxLength(35),
      ])],
      phone: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(10), 
        Validators.maxLength(10), 
      ])],
      freetext: ['', Validators.compose([
        Validators.minLength(0), 
        Validators.maxLength(1000), 
      ])]
    }); 
  }


    disableForm() {
    this.form.controls['email'].disable();
    this.form.controls['firstname'].disable();
    this.form.controls['lastname'].disable();
    this.form.controls['age'].disable();
    this.form.controls['DOB'].disable();
    this.form.controls['gender'].disable();
    this.form.controls['phone'].disable();
    this.form.controls['freetext'].disable();
  }


  enableForm() {
    this.form.controls['email'].enable();
    this.form.controls['firstname'].enable();
    this.form.controls['lastname'].enable();
    this.form.controls['age'].enable();
    this.form.controls['DOB'].enable();
    this.form.controls['gender'].enable();
    this.form.controls['phone'].enable();
    this.form.controls['freetext'].enable();
  }


  validateEmail(controls) {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validateEmail': true } 
    }
  }

  onRegisterSubmit() {
    this.processing = true; 
    this.disableForm(); 
    

    const user = {
      email: this.form.get('email').value, 
      firstname: this.form.get('firstname').value, 
      lastname: this.form.get('lastname').value, 
      age: this.form.get('age').value,
      DOB: this.form.get('DOB').value,
      gender: this.form.get('gender').value,
      phone: this.form.get('phone').value,
      freetext: this.form.get('freetext').value,
    }
        
    this.authService.registerPatient(user).subscribe(data => {
      console.log("data came");
      if (data.success) {  
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 3000);
        console.log("saved");
      } else {
        this.messageClass = 'alert alert-danger';
        this.processing = false;
        this.message = data.message;
        this.enableForm();
        console.log(data.message);
      }
    });
  }

  checkEmail() {
    this.authService.checkEmail(this.form.get('email').value).subscribe(data => {
      if (!data.success) {
        this.emailValid = false; 
        this.emailMessage = data.message; 
      } else {
        this.emailValid = true; 
        this.emailMessage = data.message; 
      }
    });
  }

  checkAge(event) {
      if (event.target.value<=0 || event.target.value>=100) {
        this.ageValid = false; 
        this.ageMessage = "Enter Correct Age";
      } else {
        this.ageValid = true; 
        this.ageMessage = "Valid Age"; 
      }
  }

  checkPhone(event) {
      if (event.target.value<1000000000 || event.target.value>9999999999) {
        this.phoneValid = false; 
        this.phoneMessage = "Enter 10 digit Phone Number"; 
      } else {
        this.phoneValid = true; 
        this.phoneMessage = "Valid Phone Number"; 
      }
  }

  ngOnInit() {
  }

}
