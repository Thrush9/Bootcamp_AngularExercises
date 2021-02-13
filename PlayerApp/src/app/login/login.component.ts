import { Component, OnInit } from '@angular/core';
import { MyrouterService } from '../myrouter.service'
import { AuthenticationService } from '../authentication.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform : FormGroup;
  username = new  FormControl('');
  password = new FormControl('');
  error : string='';
  token : string='';
  constructor(private myRouterService : MyrouterService , private authService : AuthenticationService ) {
   this.loginform = new FormGroup({
      username : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
   });
   }

  ngOnInit(): void {
  }

  getDashboard(){
    if(this.loginform.valid)
    {
      let map = this.loginform.value;
      this.authService.validateUser(map).subscribe(
        (resp) => {
           this.token = JSON.parse(JSON.stringify(resp)).token;
          this.authService.storeToken(this.token);
          this.myRouterService.openDashboard();
        },
        (error) => {
          if(error.status == 403)
          this.error = "Authentication Failed";
        }
      );
      
    } else{
      this.error = "Invalid Login Credentials"
    }
  }

}
