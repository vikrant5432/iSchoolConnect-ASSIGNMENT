import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroadd',
  template: `
    <p>movie works!</p>
    <hr />
    <ul>
      <li>
        <a [routerLink]="['']" style="text-decoration: none;">back to Home</a>
      </li>
      <a [routerLink]="['/movieslist']" style="text-decoration: none;"
        ><h2>Movie List</h2></a
      >
    </ul>
  `,
  styles: [],
})
export class MovieComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
