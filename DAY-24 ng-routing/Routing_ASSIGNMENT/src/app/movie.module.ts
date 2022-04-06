import { NgModule } from '@angular/core';
import { MovieaddComponent } from './movieadd.component';
import { MovieeditComponent } from './movieedit.component';
import { MovielistComponent } from './movielist.component';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';
import { BrowserModule } from '@angular/platform-browser';
import { MovieService } from './movies.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieComponent,
    MovieaddComponent,
    MovieeditComponent,
    MovielistComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'movie', component: MovieComponent },
      { path: 'movieslist', component: MovielistComponent },
      { path: 'addmovie', component: MovieaddComponent },
      { path: 'editmovie/:selectedMovieId', component: MovieeditComponent },
    ]),
    BrowserModule,
    FormsModule,
  ],
  providers: [MovieService],

  exports: [
    MovieComponent,
    MovieaddComponent,
    MovieeditComponent,
    MovielistComponent,
  ],
})
export class MovieModule {}
