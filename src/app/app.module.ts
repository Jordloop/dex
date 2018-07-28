import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchMovieApiComponent } from './components/search-movie-api/search-movie-api.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionsDetailComponent } from './components/collections-detail/collections-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchMovieApiComponent,
    MoviesComponent,
    MovieDetailComponent,
    MovieEditComponent,
    CollectionsComponent,
    CollectionsDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
