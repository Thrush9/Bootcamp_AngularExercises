import { Component, OnInit ,Input } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditplayerComponent } from '../editplayer/editplayer.component';


@Component({
  selector: 'app-playercard',
  templateUrl: './playercard.component.html',
  styleUrls: ['./playercard.component.css']
})
export class PlayercardComponent implements OnInit {

  @Input() player : Player;
  players : Array<Player> =[];
  constructor(private playerService : PlayerService,private matsnackbar : MatSnackBar ,
    private matdialog : MatDialog) { 
    this.player = new Player();
  }

  ngOnInit(): void {
  }

  editPlayer(player:Player) {
    const ref = this.matdialog.open(EditplayerComponent,{data : {edit : player}});
   }
 
   deletePlayer(id: string) {
     const ind= this.players.findIndex( (player)=> player.id==id);
     let delPlayer:any = this.players.filter(p => p.id == id);
     this.players.splice(ind,1);
     this.playerService.deletePlayer(id).subscribe(
       (res)=>
       {
          this.matsnackbar.open("Record Deleted",'Ok',{duration:2000}) ;
       },
       (err)=>
       {
         this.players.push(delPlayer);
       }
     )
   }

}
