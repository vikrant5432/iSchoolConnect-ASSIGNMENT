import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-master',
  template: `
    <p>master works!</p>

    <table>
      <thead>
        <tr>
          <th>S1 #</th>
          <th>Title</th>
          <th>Full Name</th>
          <th>More Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let hero of heroeslist">
          <td>{{ hero.id }}</td>
          <td>{{ hero.name }}</td>
          <td>{{ hero.biography['full-name'] }}</td>
          <td>
            <a [routerLink]="['hero', hero.id]">Click for Detail</a>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class MasterComponent implements OnInit {
  heroeslist: any;
  constructor(private hr: HeroesService) {}

  ngOnInit(): void {
    this.heroeslist = this.hr.getHeroes();
  }
}
