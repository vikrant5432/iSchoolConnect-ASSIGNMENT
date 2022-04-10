import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Title is: {{ title | ischool: 'hi' }}</li>
      <li>User name is: {{ username }}</li>
      <li>User age is: {{ userage }}</li>
      <!-- <button (click)="increase()">click to increase age</button> -->
    </ul>
  `,
})
export class AppComponent {
  title = 'testing';
  username = 'vikrant';
  userage = 18;
  increase() {
    this.userage = this.userage + 1;
  }
}
