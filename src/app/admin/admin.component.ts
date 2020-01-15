import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

class Adminuser
{
  uname:String;
   psw:String;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user = new Adminuser();
   
  constructor(private router:Router) { }
   back()
   {
    
    this.router.navigate(['/customer']);
   }
  ngOnInit() {
  }


}
