import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyrouterService } from './myrouter.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardlayerGuard implements CanActivate {

  constructor(private myRouterService : MyrouterService){

  }

  canActivate( route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let flag  = sessionStorage.getItem("loggedUser");
      if(flag == 'Valid'){
        return true;
      } else {
        alert("Invalid Account");
        this.myRouterService.openLogin();
        return false;
      }
  }
  
}
