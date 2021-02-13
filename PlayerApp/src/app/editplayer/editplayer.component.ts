import { Component, OnInit, Inject } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
 
@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditplayerComponent implements OnInit {

  editplayer : Player;
  constructor(private playerService : PlayerService,
              public matdialogref : MatDialogRef<EditplayerComponent>,
              @Inject(MAT_DIALOG_DATA) public data : any) {
                this.editplayer = new Player();
               }

  ngOnInit(): void {
    this.editplayer = this.data["edit"];
  }

  updatedata(){
   this.playerService.updatePlayer(this.editplayer).subscribe(
    (resp) => {
      console.log("Edited Player " + resp.name);
    })
    this.matdialogref.close();
  }
  
  close(){
    this.matdialogref.close();
  }
}
