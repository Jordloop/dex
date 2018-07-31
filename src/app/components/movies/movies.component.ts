import { Movie } from './../../models/movie';
import { MovieServiceService } from './../../services/movie-service.service';
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
  movieToAdd: Movie;

  constructor(
    private omdbSvc: OmdbapiService,
    private router: Router,
    private movieSvc: MovieServiceService
  ) { }

  ngOnInit() {
    console.log('movies, OnInit:', this.moviesList);
  }

  addMovieToCollection(imdbID) {
    this.getMovieByImdbID(imdbID);
  }

  getMovieByImdbID(imdbID: string) {
    this.omdbSvc.getMovieByImdbId(imdbID).subscribe(movie => {
      if(movie) {
        const parsedMovie = JSON.parse(movie._body);
        console.log(parsedMovie);
        
        this.movieToAdd = new Movie( parsedMovie.Title,
                          parsedMovie.Released,
                          parsedMovie.Rated,
                          parsedMovie.Runtime,
                          parsedMovie.Genre,
                          parsedMovie.Director,
                          parsedMovie.Plot,
                          parsedMovie.Poster,
                          parsedMovie.imdbRating,
                          parsedMovie.imdbID,
                          parsedMovie.Production )
        console.log((this.movieToAdd));
        this.movieSvc.addMovie(this.movieToAdd);
        
      }
    })
  }

  navigateToMovieDetail(imdbID: string) {
    this.router.navigate([`movie/${imdbID}`]);
  }



}
