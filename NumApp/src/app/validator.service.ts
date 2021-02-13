import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { 
    console.log('Validator Service Instantiated');
  }

  verifyCredentials(username :string,password : string) : string{
    if(username == null || username == "" )
      return "Username can't be empty"; 
    else if(password == null || password == "" )
      return "Password can't be empty"; 
    else if (password.length > 6)
      return "Incorrect Password";
    else
      return "";
  }
}
