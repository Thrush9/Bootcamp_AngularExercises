import { Component } from '@angular/core';
import { FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'companyApp';

  uname : FormControl;
  upass : FormControl;
  flag = true;

  constructor(){
    this.uname = new FormControl('',Validators.required);
    this.upass = new FormControl('',Validators.minLength(9));
  }

  validateUsername() : string{
  let result = '' ;
    if(this.uname.touched && this.uname.invalid){
      result = "Username can't be empty";
    }
    return result;
  }

  validatePassword(){
    let result = '' ;
    if(this.upass.touched && this.upass.hasError('minlength')){
      result = "Password must have 9 characters";
    }
    return result;
  }

  validate(){
    if(this.upass.valid && this.uname.valid){
     this.flag = false;
    } else {
      this.flag = true;
    }

  }
}
