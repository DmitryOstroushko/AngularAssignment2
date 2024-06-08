import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  apiEndPoint: String = 'https://freeapi.miniprojectideas.com/api/JobPortal/';

  constructor(private http: HttpClient) { }

  registerEmployer(obj: any) {
    return this.http.post(this.apiEndPoint + 'AddNewEmployer', obj)
  }

  registerAsJobSeeker(obj: any) {
    return this.http.post(this.apiEndPoint + 'AddNewJobSeeker', obj)
  }

  login(obj: any) {
    return this.http.post(this.apiEndPoint + 'Login', obj)
  }

}
