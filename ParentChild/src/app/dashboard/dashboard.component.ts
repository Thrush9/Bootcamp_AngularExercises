import { Component, OnInit } from '@angular/core';
import { MyrouterService } from '../myrouter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private myRouterService : MyrouterService) { }

  ngOnInit(): void {
  }

  getListView() {
    this.myRouterService.openListView();
  }

  getGridView(){
    this.myRouterService.openGridView();
  }

}
