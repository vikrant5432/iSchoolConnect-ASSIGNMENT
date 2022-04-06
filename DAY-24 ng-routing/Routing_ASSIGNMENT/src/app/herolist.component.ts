import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-herolist',
  template: `
    <h1>Hero List</h1>
    <hr />
    <a [routerLink]="'/hero'" style="text-decoration: none;"
      ><h4>Back to Hero Page</h4></a
    >
    <hr />
    <div class="container">
      <div>
        <h3><a [routerLink]="['/addhero']">Add Hero</a></h3>
      </div>
      <div>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>S1 #</th>
              <th>Title</th>
              <th>Full Name</th>
              <th>power</th>
              <th>edit</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let hero of heroslist">
              <td>{{ hero.id }}</td>
              <td>{{ hero.name }}</td>
              <td>{{ hero.biography['full-name'] }}</td>
              <td>{{ hero.powerstats.power }}</td>
              <td>
                <a [routerLink]="['/edithero', hero.id]">Click for edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [],
})
export class HerolistComponent implements OnInit {
  heroslist: any;
  constructor(private hr: HeroesService) {}

  ngOnInit() {
    this.heroslist = this.hr.getHeroes();
  }
}
