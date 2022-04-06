import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroadd',
  template: `
    <p>hero works!</p>
    <ul>
      <li>
        <a [routerLink]="['']" style="text-decoration: none;">back to Home</a>
      </li>
      <a [routerLink]="['/heroeslist']" style="text-decoration: none;"
        ><h2>Hero List</h2></a
      >
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
