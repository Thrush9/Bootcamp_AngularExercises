import { Injectable } from '@angular/core';
import { Router } from '@angular/router' ;


@Injectable({
  providedIn: 'root'
})
export class MyrouteService {

  constructor(private routerObj : Router) { }

  openHome(){
    this.routerObj.navigate(['home']);
  }

  openDashboard(){
    this.routerObj.navigate(['dashboard']);
  }

  openLogin(){
    this.routerObj.navigate(['login']);
  }

  openList(){
    this.routerObj.navigate(['dashboard/listview']);
  }

  openGrid(){
    this.routerObj.navigate(['dashboard/gridview']);
  }

}
