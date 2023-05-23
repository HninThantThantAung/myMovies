import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string = "";
  password:string = "";
  wrong: string = "";

  constructor(private router: Router, private authservice: AuthService){}

  logIn(){
    
    // console.log("login >>>", event.isTrusted); 
    console.log(this.username);
    console.log(this.password);
    if(
      (this.username == "Hnin Thant Thant Aung" && this.password == "123456") ||
      (this.username == "Thant Thant" && this.password == "123")
    ){
      this.router.navigateByUrl("/movies");
      this.authservice.setToken();
    }
    else{
      this.wrong = "Check your username or password";
    }
    
  }

}
