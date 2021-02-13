import { Component, OnInit } from '@angular/core';
import { User } from '../User'
import { ValidatorService } from '../validator.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userObj : User;
  errorObj : string = '';
  
  constructor(private validator : ValidatorService) { 
    this.userObj = new User();
  }

  ngOnInit(): void {
  }

  validate() : void {
    this.errorObj = this.validator.verifyCredentials(this.userObj.username,this.userObj.password) ;
  }

}
