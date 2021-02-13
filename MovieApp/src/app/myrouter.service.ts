import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MyrouterService {

  constructor(private myRouter : Router) { }

  openHome(){
    this.myRouter.navigate(['home']);
  }

  openLogin(){
    this.myRouter.navigate(['login']);
  }

  openDashboard(){
    this.myRouter.navigate(['dashboard']);
  }
}
