import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Heros List</h1>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'step-1_master-detail';
}
