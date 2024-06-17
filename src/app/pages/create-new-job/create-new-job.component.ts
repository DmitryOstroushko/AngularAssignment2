import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css']
})
export class CreateNewJobComponent implements OnInit {

  jobObj: any = {
    "Id": 0,
    "Company": 0,
    "CreateDate": new Date(),
    "JobName": "",
    "Category": 0,
    "JobDescription": ""
  };

  categoryList: any [] = [
    "Front end",
    "Back end", 
    "Full stack",
    "Database administrator",
    "DevOps"
  ];

  companyList: any [] = [];

  constructor(private jobSrv: JobService) {
    const userData = localStorage.getItem('jobLoginUser');
    if (userData != null) {
      const data = JSON.parse(userData);
      this.jobObj.EmployerId = data.employerId;
    }
  }

  ngOnInit(): void { 
    this.getCompanyList();
  }

  getCompanyList() {
    this.jobSrv.getCompanyList().subscribe((res: any) => {
      this.companyList = res.data;
    })
  }
  
  createJob() {
    this.jobSrv.createNewJob(this.jobObj).subscribe((res: any) => {
      if (res.result) {
        alert('Post Created Success');
      } else {
        alert(res.message());
      }
    })
  }

}
