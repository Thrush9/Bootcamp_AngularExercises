import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movieArray : Movie[];
  change : any;

  constructor(private movieService :MovieService) {
    this.movieArray = [];
  }

  ngOnInit(): void {
    this.showTopRatedMovies();
  }

  showTopRatedMovies(){
   this.movieService.getTopRatedMovies().subscribe(
     (resp) => { this.movieArray = JSON.parse(JSON.stringify(resp)).results }
   ); 
  }

}
