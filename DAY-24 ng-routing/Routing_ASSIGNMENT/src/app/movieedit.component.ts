import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-movieedit',
  template: `
    <p>movieedit works!</p>
    <hr />
    <a [routerLink]="['/movieslist']" style="text-decoration: none;"
      ><h2>Back to Movie List</h2></a
    >
    <hr />
    <p>
      {{ selectMovie | json }}
    </p>
  `,
  styles: [],
})
export class MovieeditComponent implements OnInit {
  selectMovie: any;
  constructor(private mv: MovieService, private ar: ActivatedRoute) {}

  ngOnInit() {
    this.selectMovie = this.mv.getSelectedMovies(
      this.ar.snapshot.params['selectedMovieId']
    );
  }
}
