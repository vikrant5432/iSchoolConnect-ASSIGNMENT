import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Form in Angular</h2>
    <hr />
    <app-reactive-form-group> </app-reactive-form-group>
    <app-reactive-form-builder></app-reactive-form-builder>
  `,
})
export class AppComponent {
  title = 'STEPS-1_reactive-form';
}
