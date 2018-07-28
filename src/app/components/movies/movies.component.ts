import { omdbapi } from './../../../environments/keys';
import { OmdbapiService } from './../../services/omdbapi.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() moviesList;

  constructor(
    private omdbSvc: OmdbapiService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('movies, OnInit:', this.moviesList);
    
  }

  seeMovieDetails(imdbID: string) {
    this.omdbSvc.getMovieByImdbId(imdbID).subscribe(movie => {
      if(movie) {
        const temp = JSON.parse(movie._body);
        console.log('get by imdbID:', temp);
      }
    })
  }

  addMovieToCoollection(imdbID: string) {
    console.log(imdbID);
    this.seeMovieDetails(imdbID);
  }

  navigateToMovieDetail(imdbID: string) {
    this.router.navigate([`movie/${imdbID}`]);
  }




}
