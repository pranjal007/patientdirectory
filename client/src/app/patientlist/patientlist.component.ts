import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient.model';
import { AuthserviceService } from '../authservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  form;
  patientlist : Patient[];
  modal:Patient;
  p:Patient[];

  constructor(private authService : AuthserviceService,private formBuilder: FormBuilder,) { 

    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(30) 
      ])],
    });
  }

  ngOnInit() {
    this.showList();
  }

  showList(){
      this.authService.getPatient().subscribe(data => {
      console.log("data came");
      if (data.success) {  
        this.patientlist = data.user;
        console.log(this.patientlist);
      } else {
        console.log(data.message);
      }
    });
  }

  search(event)
  {
    console.log(event.target.value);
    console.log(event);
    if(event.target.value && event.type=="keyup"){
    this.authService.getSearchedPatient(event.target.value).subscribe(data => {
      console.log("data came");
      if (data.success) {  
        this.patientlist = data.user;
        console.log(this.patientlist);
      } else {
        console.log(data.message);
      }
    });
  }
  else if(!event.target.value || (event.type=="keyup" && !event.target.value)){
    this.showList();
  }
}

modalData(i:number){
  console.log("modal nuber"+i);
  
  this.modal=this.patientlist[i];
  console.log(this.modal);
}

}
