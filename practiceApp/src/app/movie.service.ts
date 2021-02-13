import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movies';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

   movieurl : string = "https://api.themoviedb.org/3/movie/top_rated?api_key=290ad93c35b99a2abb6dfc7be33bc78f";

   url:string='https://cricapi.com/api/matches/d8kH6mmJecTYKL6tCEUZtH7D9lY2';

  constructor(private httpclient : HttpClient) { }

  getTopRatedMovies() 
  {
    return  this.httpclient.get(this.movieurl); 
  }

}
