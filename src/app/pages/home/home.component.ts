import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoryList: any [] = [
    "Front end",
    "Back end", 
    "Full stack",
    "Database administrator",
    "DevOps"
  ];

  companyList: any [] = [];

  constructor(private jobSrv: JobService) { }

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList() {
    this.jobSrv.getCompanyList().subscribe((res: any) => {
      this.companyList = res.data;
    })
  }

}
