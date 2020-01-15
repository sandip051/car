import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerregisterService } from '../customerregister.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { SplitInterpolation } from '@angular/compiler';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  public data: any;
  public empid: any;
 supname:string;
 email:string;
 contact:string;
  constructor(private cust_service: CustomerregisterService) { }

  delete(id) {
    console.log(id);
    this.empid = id;
  }
  edituser(id)
  {
  this.cust_service.getDatabyid(id).subscribe((res) => {
    console.log(res);
    this.empid = id;
    this.supname=res[0].supname;
    this.email=res[0].email;
    this.contact=res[0].contact;
  });
  }

  clear() {
    this.empid = "";
    console.log(this.empid);
  }
  // getAll emp
  getEmp() {
    this.cust_service.getData().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
  // end
  deleteEmp() {
    if (this.empid != "" && this.empid != undefined && this.empid != null) {
      this.cust_service.deleteEmp(this.empid);
      this.getEmp();
    }


  }
  onClickSubmit(data)
  {
    if (this.empid != "" && this.empid != undefined && this.empid != null) 
    {
      data.supid=this.empid;
      
      console.log(data);
      this.cust_service.updateEmp(data);
      this.getEmp();
    }
   

  }
  
  ngOnInit() {
    this.getEmp();


  }


}




