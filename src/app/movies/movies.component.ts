import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Movies, Result } from './movies_model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  ploading = true;
  tloading = true;
  uloading = true;
  nloading = true;
  totalCount = 3;


  showimage?: boolean;
  popularMovies? : Result[];
  topRatedMovies? : Result[];
  upcomingMovies? : Result[];
  nowPlayingMovies? : Result[];
  movieId: number = 1;

  private moviesSub = new Subscription();

  constructor(private router: Router,private api: ApiService){}
  ngOnInit(){
    this.moviesSub.add(this.getPMovies());
    this.moviesSub.add(this.getNMovies());
    this.moviesSub.add(this.getUMovies());
    this.moviesSub.add(this.getTMovies());

  }

  getPMovies(){
    this.api.getPopularMovies().subscribe({
      next: (response: Movies) =>{
        console.log("popular movies response >>>", response.results);
        this.popularMovies = response.results;
        this.ploading = false;
      },
      error: (error) => {
        console.log(error.status);
        
      }
    })
  }
  getNMovies(){
    this.api.getNowPlayingMovies().subscribe({
      next: (response: Movies) => {
        console.log("now playing movies response >>>", response.results);
        this.nowPlayingMovies = response.results;
        this.nloading = false;
      },
      error: (error) => {
        console.log(error.status);
        
      }
    })
  }
  getUMovies(){
    this.api.getUpComingMovies().subscribe({
      next: (response: Movies) => {
        console.log("upcoming movies response >>>", response.results);
        this.upcomingMovies = response.results;
        this.uloading = false;
      },
      error: (error) => {
        console.log(error.status);
        
      }
    })
  }
  getTMovies(){
    this.api.getTopRatedMovies().subscribe({
      next: (response: Movies) => {
        console.log("top rated movies response >>>", response.results);
        this.topRatedMovies = response.results;
        this.tloading = false; 
      },
      error: (error) => {
        console.log(error.status);
        
      }
    })
  }

  overview(movieid: number){
    this.movieId = movieid;
    console.log("movieId >>", this.movieId);
    this.router.navigateByUrl('movies/'+ this.movieId)
  }

  ngOnDestroy(): void{
    this.moviesSub.unsubscribe();
  }

}
