import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class MovieServiceService {

  constructor(private db: AngularFireDatabase) { }

  getMovies() {
    return this.db.list('/movieData/movies');
  }

  addMovie(movieToAdd: Movie) {
    console.log('poopy butt', movieToAdd);
    this.getMovies().push(movieToAdd);
    
  }

}
