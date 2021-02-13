import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userArray : User[] = [];
  userUrl : string = 'http://localhost:3000/users' ;

  constructor(private httpclient :HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.httpclient.get<User[]>(this.userUrl);
  }
}
