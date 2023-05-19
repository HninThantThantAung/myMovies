import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getPopularMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1');
  }
  getNowPlayingMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1');
  }
  getUpComingMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1');
  }
  getTopRatedMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1');
  }
  // getMoviesOverview(movieId: number){
  //   return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`)
  // }
  getMoviesOverview(id: number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`);
  }
}
