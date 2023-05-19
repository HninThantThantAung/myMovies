import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if(token){
      return true;
    }else {
      return false;
    }
  }
  setToken(){
    localStorage.setItem('token', '123456789')
  }
}
