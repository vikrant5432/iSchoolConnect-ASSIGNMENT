import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-movielist',
  template: `
    <p>movielist works!</p>
    <hr />
    <a [routerLink]="'/movie'" style="text-decoration: none;"
      ><h4>Back to Movie Page</h4></a
    >
    <hr />
    <div class="container">
      <div>
        <h3>
          <a [routerLink]="['/addmovie']" style="text-decoration: none;"
            >Add Movie</a
          >
        </h3>
      </div>
      <div>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>S1 #</th>
              <th>Movie</th>
              <th>edit</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let movie of movieslist; index as idx">
              <td>{{ idx + 1 }}</td>
              <td>{{ movie.title }}</td>
              <td>
                <a [routerLink]="['/editmovie', idx + 1]">Click for edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [],
})
export class MovielistComponent implements OnInit {
  movieslist: any;
  constructor(private mv: MovieService) {}

  ngOnInit() {
    this.movieslist = this.mv.getMovies();
  }
}
