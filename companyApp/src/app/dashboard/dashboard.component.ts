import { Component, OnInit } from '@angular/core';
import { MyrouteService } from  '../myroute.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private myRoteService : MyrouteService) { }

  ngOnInit(): void {
    this.showList();
  }

  showList(){
    this.myRoteService.openList();
  }

  showGrid(){
    this.myRoteService.openGrid();
  }
}
