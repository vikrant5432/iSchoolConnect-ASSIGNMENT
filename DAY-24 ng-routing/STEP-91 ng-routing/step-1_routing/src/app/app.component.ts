import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Routing 101 : {{ version }}</h1>
    <!-- don't use it -->
    <!-- <ul>
      <li><a href="">Home</a></li>
      <li><a href="batman">batman</a></li>
      <li><a href="superman">superman</a></li>
      <li><a href="aquaman">aquaman</a></li>
      <li><a href="flash">flash</a></li>
      <li><a href="superman">superman</a></li>
      <li><a href="wonderwomen">wonderwomen</a></li>
    </ul> -->

    <!--   avoid using this -->
    <!-- <ul>
      <li><a routerLink="">Home</a></li>
      <li><a routerLink="batman">batman</a></li>
      <li><a routerLink="superman">superman</a></li>
      <li><a routerLink="aquaman">aquaman</a></li>
      <li><a routerLink="flash">flash</a></li>
      <li><a routerLink="superman">superman</a></li>
      <li><a routerLink="wonderwomen">wonderwomen</a></li>
    </ul> -->

    <!-- using the routerLink as directive -->
    <!-- with it we can pass the parameters -->

    <!-- parameter change -->
    <input #qrt type="range" (input)="setQuantity = qrt.value" />
    <ul>
      <li><a [routerLink]="['']">Home</a></li>
      <li><a [routerLink]="['batman']">batman without Parameter</a></li>
      <li><a [routerLink]="['batman', setQuantity]">batman</a></li>
      <li><a [routerLink]="['superman']">superman</a></li>
      <li><a [routerLink]="['aquaman']">aquaman</a></li>
      <li><a [routerLink]="['flash']">flash</a></li>
      <li><a [routerLink]="['cyborg']">cyborg</a></li>
      <li><a [routerLink]="['superman']">superman</a></li>
      <li><a [routerLink]="['wonderwomen']">wonderwomen</a></li>
    </ul>

    <router-outlet></router-outlet>
  `,
  // styles: []
})
export class AppComponent {
  title = 'step-1_routing';
  version = 0;
  setQuantity = '0';
  constructor() {
    this.version = Math.round(Math.random() * 1000);
  }
}
