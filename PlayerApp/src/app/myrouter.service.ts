import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyrouterService {

  constructor(private myRouter : Router) { }

  openLogin(){
    this.myRouter.navigate(['login']);
  }

  openDashboard(){
    this.myRouter.navigate(['dashboard']);
  }
}
