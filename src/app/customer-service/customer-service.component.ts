import { Component, OnInit } from '@angular/core';
import {CustomerregisterService} from '../customerregister.service';
@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css']
})
export class CustomerServiceComponent implements OnInit {

  constructor(private cust_services1:CustomerregisterService) { }

  ngOnInit() 
  {
    
  }

  onClickSubmit(data)
  {
    this.cust_services1.customerServiceRequest(data);
  }

}
