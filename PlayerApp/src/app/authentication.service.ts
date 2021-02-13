import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpclient : HttpClient) { }

  validateUser(user : any) {
    return (this.httpclient.post("http://localhost:3000/auth/v1",user));
  }

  storeToken(token :string ){
    sessionStorage.setItem("mytoken",token);
  }

  fetchToken(){
    return sessionStorage.getItem("mytoken");
  }

  isTokenValid(token : string) : Promise<boolean> {
    return this.httpclient.post("http://localhost:3000/auth/v1/isAuthenticated",{},
           {
            headers : new HttpHeaders().set('Authorization',`Bearer ${token}`)  
           }).map((res)=> 
               { 
                 return JSON.parse(JSON.stringify(res)).isAuthenticated; 
               }).toPromise();
  }
}
