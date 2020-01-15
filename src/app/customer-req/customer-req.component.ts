import { Component, OnInit } from '@angular/core';
import { CustomerregisterService } from '../customerregister.service';
@Component({
  selector: 'app-customer-req',
  templateUrl: './customer-req.component.html',
  styleUrls: ['./customer-req.component.css']
})
export class CustomerReqComponent implements OnInit {

  public data: any;
  model:string="";
  modelno:string="";
  engintype:string="";
  rcno:string="";

  avale:any;

  constructor(private cust_service: CustomerregisterService) { }

  ngOnInit() {
    this.getData();
    this.availableEmp();
  }

  getData() {
    
    this.cust_service.getDatareq().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
  detail(reqid)
  {
   console.log(reqid);
   this.cust_service.getDatarequest(reqid).
    subscribe((res) => {
    console.log(res);
    this.model=res[0].model;
    this.modelno=res[0].modelno;
    this.engintype=res[0].engintype;
    this.rcno=res[0].rcno;
    //this.data = res;
  });
}
availableEmp()
{
  this.cust_service.getAvalEmp().
  subscribe((res)=>{
    console.log(res);
    this.avale=res;
  })
 
}



}
