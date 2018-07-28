import { OmdbapiService } from './../../services/omdbapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-movie-api',
  templateUrl: './search-movie-api.component.html',
  styleUrls: ['./search-movie-api.component.css']
})
export class SearchMovieApiComponent implements OnInit {
  movieList: any = null;
  submitted: boolean = false;

  constructor(private omdbSvc: OmdbapiService) { }

  ngOnInit() {
  }

  onSubmit(title) {
    let movieTitle = title.value.title;
    // console.log('title', movieTitle);
    
    const result = this.searchForMovie(movieTitle);
    this.submitted = !this.submitted;
    
  }

  searchForMovie(title: string) {
    this.omdbSvc.searchMoviesByTitle(title).subscribe(movie => {
      if(movie){
        const almostMovieList = JSON.parse(movie._body);
        this.movieList = almostMovieList.Search;
        // console.log('movieList', this.movieList);
      }
    })
  }
}
