import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

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
