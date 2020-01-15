import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car';
  token = localStorage.getItem("token");
  isLogin=true;
 constructor(){
  if(this.token)
  {
    this.isLogin=false;
  }

 }
  
  
}
