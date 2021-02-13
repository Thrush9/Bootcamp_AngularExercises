import { Component, OnInit } from '@angular/core';
import { User } from '../user'; 
import { LoginserviceService } from '../loginservice.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userObj : User;
  displayObj : string  = ""; 

  constructor(private loginService : LoginserviceService) {
    this.userObj = new User();
   }

  ngOnInit(): void {
  }

  showDetails(){
    alert("going to login");
    this.displayObj = " Username : " + this.userObj.username + " Password : " + this.userObj.password;
  }

  addUser(){
   this.loginService.registerUser(this.userObj).subscribe(
     (resp) => console.log(" Registered User : " + resp.username)
   )
   this.userObj = new User();
  }

}
