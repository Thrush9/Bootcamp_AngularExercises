import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditplayerComponent } from '../editplayer/editplayer.component';

@Component({
  selector: 'app-playerview',
  templateUrl: './playerview.component.html',
  styleUrls: ['./playerview.component.css']
})
export class PlayerviewComponent implements OnInit {

  player : Player;
  players : Array<Player> =[];
  constructor(private playerService : PlayerService,private matsnackbar : MatSnackBar ,
    private matdialog : MatDialog) { 
    this.player = new Player();
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(){
    this.playerService.getAllPlayers();2s
    this.playerService.viewPlayers().subscribe(
      (resp) => { 
                this.players = resp;
                }
    )
  }
 
}
