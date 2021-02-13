import { Component, OnInit } from '@angular/core';
import { MyrouteService } from  '../myroute.service';
import { User } from '../user'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User;

  constructor(private myRouteService : MyrouteService) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  showDetails(){
    this.myRouteService.openHome();
  }

  validateLogin(){
    
  }
}

