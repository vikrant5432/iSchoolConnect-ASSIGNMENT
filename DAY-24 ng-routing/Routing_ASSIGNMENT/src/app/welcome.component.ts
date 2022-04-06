import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <p>welcome works!</p>
    <ul>
      <li><a [routerLink]="['hero']"> Hero</a></li>
      <li><a [routerLink]="['movie']">Movie</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
