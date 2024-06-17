import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userObj: any = {
    "Id": 0,
    "Login": "",
    "Password": "",
    "Created": new Date(),
    "PasswordUpdate": new Date(),
    "AgreementAccepted": new Date(),
    "IsLocked": false,
    "IsInactive": false,
    "EmailAddress": "",
    "PhoneNumber": "",
    "FullName": "",
    "ForceChangePassword": false,
    "PrefferredLanguage": ""
  }

  languageList: any [] = [];

  constructor(private jobSrv: JobService) { }

  register() {
    this.jobSrv.register(this.userObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    })
  }

  ngOnInit(): void {
    this.getLanguges();
  }

  getLanguges() {
    this.jobSrv.getLanguageList().subscribe((res: any) => {
      this.languageList = res.data;
    })
  }
  
}



