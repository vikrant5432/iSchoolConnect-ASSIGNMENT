import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-master',
  template: `
    <p>master works!</p>

    <input type="search" [(ngModel)]="selectBy" />
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
        <tr *ngFor="let hero of heroeslist | herofilter: selectBy">
          <td>{{ hero.id }}</td>
          <td>{{ hero.name }}</td>
          <td>{{ hero.biography['full-name'] }}</td>
          <td>
            <a
              [routerLink]="['hero', { username: 'vikrant', city: 'banglore' }]"
              [queryParams]="{ hid: hero.id, filterOn: selectBy }"
              >Click for Detail</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class MasterComponent implements OnInit {
  heroeslist: any;
  selectBy: any = '';
  constructor(private hr: HeroesService, private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.heroeslist = this.hr.getHeroes();
    this.selectBy = this.ar.snapshot.queryParams['filterOn'];
  }
}
