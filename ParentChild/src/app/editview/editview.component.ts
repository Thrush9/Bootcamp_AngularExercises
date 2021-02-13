import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editview',
  templateUrl: './editview.component.html',
  styleUrls: ['./editview.component.css']
})
export class EditviewComponent implements OnInit {
  
  type : string="";

  constructor(public matdialogref : MatDialogRef<EditviewComponent>,
              @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.type = this.data;
  }

  close(){
    this.matdialogref.close();
  }

}
