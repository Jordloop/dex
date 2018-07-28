import { environment } from './../../environments/environment';
import { omdbapi } from './../../environments/keys';
import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class OmdbapiService {

  baseURL = "http://www.omdbapi.com/";

  constructor(private http: Http) { }

  getMovieByTitle(title: string) {
    return this.http.get(`${this.baseURL}?apikey=${omdbapi}&t=${title}`);
  }

  getMovieByImdbId(imdbId: string) {
    return this.http.get(`${this.baseURL}?apikey=${omdbapi}&i=${imdbId}`);
  }

  searchMoviesByTitle(title: string) {
    return this.http.get(`${this.baseURL}?apikey=${omdbapi}&s=${title}`);
  }

}
