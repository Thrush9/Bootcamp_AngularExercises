import { Component, OnInit } from '@angular/core';
import { MyrouterService } from '../myrouter.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform : FormGroup;
  user = new  FormControl('');
  pass = new FormControl('');
  userError : string='';
  error : string='';

  constructor(private myRouterService :MyrouterService) {
   this.loginform = new FormGroup({
      user : new FormControl('',Validators.required),
      pass : new FormControl('',Validators.required)
   });
   }

  ngOnInit(): void {
  }

  getDashboard(){
    if(this.loginform.valid){
      let map = this.loginform.value;
      if (map["user"].toString().includes('@stackroute.in')){
         sessionStorage.setItem("loggedUser","Valid")
      } else {
         sessionStorage.setItem("loggedUser","Invalid")
      }
      this.myRouterService.openDashboard();
    } else{
      this.error = "Invalid Login Credentials"
    }
  }

}
