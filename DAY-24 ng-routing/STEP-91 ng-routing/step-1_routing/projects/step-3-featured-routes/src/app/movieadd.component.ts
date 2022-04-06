import { Component, OnInit } from '@angular/core';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-movieadd',
  template: `
    <p>movieadd works!</p>
    <hr />
    <a [routerLink]="['/movieslist']" style="text-decoration: none;"
      ><h4>Back to Movie List</h4></a
    >

    <hr />
    <div class="container">
      <div>
        <h1>Add Movie</h1>
        <form name="userForm" #userForm="ngForm">
          <div class="mb-3">
            <label for="username" class="form-label">User Name</label>
            <input
              #uname="ngModel"
              [(ngModel)]="newMovieData.id"
              type="email"
              class="form-control"
              id="username"
              name="uname"
            />
          </div>
          <div class="mb-3">
            <label for="usermail" class="form-label">User email</label>
            <input
              #umail="ngModel"
              [(ngModel)]="newMovieData.title"
              type="email"
              class="form-control"
              id="usermail"
              name="umail"
            />
          </div>
          <button (click)="addNewMovie()" type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class MovieaddComponent implements OnInit {
  newMovieData: any = {
    id: '',
    title: '',
  };
  constructor(private mv: MovieService) {}

  ngOnInit() {}
  addNewMovie() {}
}
