import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyrouterService } from './myrouter.service'
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardLayerGuard implements CanActivate {
  
  constructor(private myRouterService : MyrouterService , private authService : AuthenticationService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let token : any = this.authService.fetchToken();
    let result = this.authService.isTokenValid(token);    
    result.then(
       (res) => { if(!res)
                  this.myRouterService.openLogin();
                })

      return result;
  }
  
}
