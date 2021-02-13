import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  userArray : User[] = [];

  usersurl : string = 'http://localhost:3000/users';
  
  constructor(private httpcli : HttpClient) { }

  registerUser(user : User) : Observable<User>
  {
   return  this.httpcli.post<User>(this.usersurl,user);
  }

}
