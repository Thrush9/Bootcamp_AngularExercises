import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditviewComponent } from '../editview/editview.component';


@Component({
  selector: 'app-editopener',
  templateUrl: './editopener.component.html',
  styleUrls: ['./editopener.component.css']
})
export class EditopenerComponent implements OnInit {

  constructor(private matDialog : MatDialog, private activatedRoute : ActivatedRoute) {
    const type = this.activatedRoute.snapshot.paramMap.get('typeId');
    const dialog = this.matDialog.open(EditviewComponent,{data: type});
   }

  ngOnInit(): void {
  }

}
