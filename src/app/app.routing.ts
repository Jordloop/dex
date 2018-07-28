import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SearchMovieApiComponent } from './components/search-movie-api/search-movie-api.component';

const appRoutes: Routes= [
    {
        path: '',
        component: SearchMovieApiComponent 
    },    
    {
        path: 'movie/:imdbID',
        component: MovieDetailComponent  
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);