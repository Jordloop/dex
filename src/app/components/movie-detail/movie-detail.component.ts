import { OmdbapiService } from './../../services/omdbapi.service';
import { routing } from './../../app.routing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  imdbID: string;
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private omdbSvc: OmdbapiService
  ) { }

  ngOnInit() {
    this.getImdbIDByRoute();
    this.getMovieByImdbID(this.imdbID);
  }

  getImdbIDByRoute() {
    this.route.params.forEach((param) => {
      if (param)
        this.imdbID = (param['imdbID']);
    });
  }

  getMovieByImdbID(imdbID: string) {
    this.omdbSvc.getMovieByImdbId(imdbID).subscribe(movie => {
      if(movie) {
        this.movie = JSON.parse(movie._body);

        console.log((this.movie));
      }
    })
  }

  addMovieToCollection(imdbID) {
    console.log('movie-detail.addMovie', imdbID);
  }

}
