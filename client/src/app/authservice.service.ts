import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class AuthserviceService {

  domain = environment.domain;
  authToken;
  user;
  options;

  constructor(
    private http: Http
  ) { }

  createAuthenticationHeaders() {
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  }


  registerPatient(user) {
    console.log("registerUser function");
    return this.http.post(this.domain +'validation/register', user).map(res => res.json());
  }

  getPatient() {
    console.log("getPatient function");
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'validation/details', this.options).map(res => res.json());
  }

    getSearchedPatient(value) {
    console.log("getSearchedPatient function");
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'validation/patientdetail'+value, this.options).map(res => res.json());
  }

   checkEmail(email) {
    return this.http.get(this.domain + 'validation/checkEmail/' + email).map(res => res.json());
  }

}
