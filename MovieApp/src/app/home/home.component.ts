import { Component, OnInit } from '@angular/core';
import { MyrouterService } from '../myrouter.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myRouterService : MyrouterService) { }

  ngOnInit(): void {
  }

  getLogin(){
   this.myRouterService.openLogin();
  }

}
