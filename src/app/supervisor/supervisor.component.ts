import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
class Supervisor
{
  uname:String;
   psw:String;
}
@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
  user = new Supervisor();

  constructor(private router:Router ) { }
  back()
  {
   
   this.router.navigate(['/admin']);
  }
  ngOnInit() {
  }

}
