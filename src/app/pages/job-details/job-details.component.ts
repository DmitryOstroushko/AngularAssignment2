import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {

  activeJobId: number = 0;
  jobObj: any;
  userInfo: any;
  isLoggedIn: boolean = false;
  jobApplicationObj = {
    "ApplicationId": 0,
    "JobId": 0,
    "JobSeekerId": 0,
    "AppliedDate": new Date(),
    "ApplicationStatus": "New"
  }

  constructor(private activateRoute: ActivatedRoute, private jobSrv: JobService) { 
    const userData = localStorage.getItem('jobLoginUser');
    if (userData == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(userData);
      this.jobApplicationObj.JobSeekerId = this.userInfo.jobSeekerId;
    }
    
    this.activateRoute.params.subscribe((res: any) => {
      debugger;
      this.activeJobId = res.jobid;
      this.getJobDetail();
      this.jobApplicationObj.JobId = this.activeJobId;
    })
  }

  getJobDetail() {
    this.jobSrv.getJobListingById(this.activeJobId).subscribe((res: any) => {
      this.jobObj = res.data;
    })
  }

  apply() {
    this.jobSrv.sendJobApplication(this.jobApplicationObj).subscribe((res: any) => {
      if (res.result) {
        alert("You have successfully applied for a job");
      } else {
        alert(res.message());
      }
    })
  }
}
