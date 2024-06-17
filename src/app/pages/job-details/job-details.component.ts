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

  constructor(private activateRoute: ActivatedRoute, private jobSrv: JobService) { 
    const userData = localStorage.getItem('jobLoginUser');
    if (userData == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(userData);
    }
    
    this.activateRoute.params.subscribe((res: any) => {
      debugger;
      this.activeJobId = res.jobid;
      this.getJobDetail();
    })
  }

  getJobDetail() {
    this.jobSrv.getJobListingById(this.activeJobId).subscribe((res: any) => {
      this.jobObj = res.data;
    })
  }

  updateJob() {
    this.jobSrv.updateJob(this.jobObj).subscribe((res: any) => {
      if (res.result) {
        alert("You have successfully updated a job");
      } else {
        alert(res.message());
      }
    })
  }

  deleteJob() {
    this.jobSrv.deleteJob(this.activeJobId).subscribe((res: any) => {
      if (res.result) {
        alert("You have deleted updated a job");
      } else {
        alert(res.message());
      }
    })
  }

}
