import { Component, OnInit } from '@angular/core';
import { CustomerregisterService } from '../customerregister.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  public data: any;
  constructor(private cust_service: CustomerregisterService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    
    this.cust_service.getapoi().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

}
