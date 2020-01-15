import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isAuthenticated(): boolean {
    const tokenData = JSON.parse(localStorage.getItem('token'));
    if(tokenData && tokenData.token)
    {
      return true;
    }
    return false;
  
  }

}
