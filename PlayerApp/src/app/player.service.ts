import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Player } from './player';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  url : string = 'http://localhost:3000/api/v1/players'; 
  players : Array<Player> = [] ;
  playerSubject : BehaviorSubject<Array<Player>>
  
  constructor(private httpclient : HttpClient, private authService : AuthenticationService) {
         this.playerSubject = new BehaviorSubject([]);
   }

   getAllPlayers(){
    let token = this.authService.fetchToken();
    return this.httpclient.get<Player[]>(this.url,
     {
      headers : new HttpHeaders().set('Authorization',`Bearer ${token}`)
     }).subscribe(
       (resp) => {
          this.players = resp;
          this.playerSubject.next(this.players);
          console.log(this.players);
       },
       (err) =>{
         this.playerSubject.error(err);
       }
     )

   } 
  
   viewPlayers() : BehaviorSubject<Player[]>{
    //  let token = this.authService.fetchToken();
    //  return this.httpclient.get<Player[]>(this.url,
    //   {
    //    headers : new HttpHeaders().set('Authorization',`Bearer ${token}`)
    //   });
    return this.playerSubject;
   }

   addPlayer(play : Player) : Observable<Player>{
    let token = this.authService.fetchToken();
    return this.httpclient.post<Player>(this.url,play,
      {
        headers : new HttpHeaders().set('Authorization',`Bearer ${token}`)
       }).do(
         (addedPlayer) => {
           this.players.push(addedPlayer);
           this.playerSubject.next(this.players);
         })
   }

   deletePlayer(id : any)
   {
     let token = this.authService.fetchToken();
     return this.httpclient.delete(`http://localhost:3000/api/v1/players/${id}`,
     {
       headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)
     });
   }

   updatePlayer(player : Player): Observable<Player>{
    let token = this.authService.fetchToken();
    return this.httpclient.put<Player>(`http://localhost:3000/api/v1/players/${player.id}`,player,
      {
        headers : new HttpHeaders().set('Authorization',`Bearer ${token}`)
       });
   }
 

}
