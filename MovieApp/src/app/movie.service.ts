import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieurl : string = "https://api.themoviedb.org/3/movie/top_rated?api_key=290ad93c35b99a2abb6dfc7be33bc78f";

 constructor(private httpclient : HttpClient) { }

 getTopRatedMovies() 
 {
   return  this.httpclient.get(this.movieurl); 
 }
}
