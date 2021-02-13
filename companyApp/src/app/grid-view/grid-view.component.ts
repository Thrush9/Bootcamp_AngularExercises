import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service'

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  userObj : User[] = [] ;
  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.loginService.getUsers().subscribe(
      (resp) => this.userObj = resp
    )
  }

}
