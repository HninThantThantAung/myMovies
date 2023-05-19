import { Component } from '@angular/core';
import { Movies, Result } from '../movies/movies_model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  constructor(private apiservice: ApiService, private activatedRoute: ActivatedRoute){}

  popularMovies?: Result[];
  topRatedMovies?: Result[];
  upcomingMovies?: Result[];
  nowPlayingMovies?: Result[];
  movieOverview?: any;

  movieId: number = 1;
  m_backdrop_path: string = '';
  m_overview: string = '';

  private moviesSub = new Subscription();

  ngOnInit(){
    this.moviesSub.add(this.apiservice.getPopularMovies().subscribe({
      next: (response: Movies)=> {
        this.popularMovies = response.results;
        console.log("overview popular movies response >>>", this.popularMovies);
      },
      error: (error) => {
        console.log(error.status); 
      }
    }))
    this.moviesSub.add(this.apiservice.getTopRatedMovies().subscribe({
      next: (response: Movies)=> {
        this.topRatedMovies = response.results;
        console.log("verview top rated movies response >>>", this.topRatedMovies);
      },
      error: (error) => {
        console.log(error.status); 
      }
    }))
    this.moviesSub.add(this.apiservice.getNowPlayingMovies().subscribe({
      next: (response: Movies)=> {
        this.nowPlayingMovies = response.results;
        console.log("verview now playing movies response >>>", this.nowPlayingMovies);
      },
      error: (error) => {
        console.log(error.status); 
      }
    }))
    this.moviesSub.add(this.apiservice.getUpComingMovies().subscribe({
      next: (response: Movies)=> {
        this.upcomingMovies = response.results;
        console.log("verview upcoming movies response >>>", this.upcomingMovies);
      },
      error: (error) => {
        console.log(error.status); 
      }
    }))

    console.log("PARAM >>>", this.activatedRoute.snapshot.params['id']);
    this.movieId = this.activatedRoute.snapshot.params['id'];
    console.log("PARAM >>>", this.movieId);
    
    this.moviesSub.add(this.apiservice.getMoviesOverview(this.movieId).subscribe({
      next: (response: Movies)=> {
        this.movieOverview = response;
        console.log("verview movies response >>>", this.movieOverview);
      },
      error: (error) => {
        console.log(error.status); 
      }
    }))
  }
  ngOnDestroy(){
    this.moviesSub.unsubscribe();
  }
}
