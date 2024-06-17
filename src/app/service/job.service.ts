import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  //todo: delete apiEndPoint
  apiEndPoint: String = 'https://freeapi.miniprojectideas.com/api/JobPortal/';
  
  apiLocalEndPoint: String = 'https://localhost:7058/api/careercloud/'
  serviceEndPoint: any = {
    'login': "security/v1/login/",
    'register': "security/v1/register",
    'languageList': "system/v1/languagecode",
    'companyList': "company/v1/profile",
    'jobAccess': 'company/v1/job'
  }

  constructor(private http: HttpClient) { }


  login(obj: any) {
    return this.http.post(this.apiLocalEndPoint + this.serviceEndPoint.login + obj.UserName, obj);
  }

  register(obj: any) {
    return this.http.post(this.apiLocalEndPoint + this.serviceEndPoint.register, obj)
  }

  getLanguageList() {
    return this.http.get(this.apiLocalEndPoint + this.serviceEndPoint.languageList)
  }

  getCompanyList() {
    return this.http.get(this.apiLocalEndPoint + this.serviceEndPoint.companyList)
  }

  createNewJob(obj: any) {
    return this.http.post(this.apiLocalEndPoint + this.serviceEndPoint.jobAccess, obj)
  }

  updateJob(obj: any) {
    return this.http.put(this.apiLocalEndPoint + this.serviceEndPoint.jobAccess + '/' + obj.Id, obj)
  }

  deleteJob(jobId: any) {
    return this.http.delete(this.apiLocalEndPoint + this.serviceEndPoint.jobAccess + '/' + jobId)
  }

  getActiveJobs() {
    return this.http.get(this.apiLocalEndPoint + this.serviceEndPoint.jobAccess)
  }

  getJobListingById(jobid: number) {
    return this.http.get(this.apiLocalEndPoint + this.serviceEndPoint.jobAccess + '/' + jobid)
  }

}
