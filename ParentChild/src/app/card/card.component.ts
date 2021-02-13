import { Component, OnInit, Input } from '@angular/core';
import { MyrouterService } from '../myrouter.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('type') typename : string=''; 

  constructor(private myRouterService : MyrouterService) { }

  ngOnInit(): void {
  }

  editCard(){
   this.myRouterService.openEditView(this.typename);
  }

}
