import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-playeradd',
  templateUrl: './playeradd.component.html',
  styleUrls: ['./playeradd.component.css']
})
export class PlayeraddComponent implements OnInit {

  player : Player;
  players : Array<Player> =[];
  constructor(private playerService: PlayerService,private matsnackbar: MatSnackBar) { 
    this.player = new Player();
  }
  ngOnInit(): void {
  }

  addPlayer(){
    this.players.push(this.player);
    this.playerService.addPlayer(this.player).subscribe( 
      (resp) => {
      console.log("Added Player " + resp.name);
      },
      (error) =>{
        console.log("Error Occured");
        const pos = this.players.findIndex((play)=> play.id == this.player.id);
        this.players.splice(pos,1);
      }
    )
    this.player = new Player();
  }

}
