import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-detail',
  template: `
    <p>detail works!</p>
    <a [routerLink]="['']" queryParamsHandling="preserve"
      >Back to Master Page</a
    >
    <h2>{{ selectHero.name }}</h2>
    <img
      [src]="'assets/' + selectHero.image.url"
      [alt]="selectHero.name"
      width="150"
    />
    <p>
      {{ selectHero | json }}
    </p>

    <a [routerLink]="['edit', selectHero.powerstats.power, selectHero.name]"
      >Edit {{ selectHero.name }}</a
    >

    <br />
    <input
      min="0"
      max="100"
      type="range"
      [(ngModel)]="selectHero.powerstats.power"
    />
    <br />
    <a [routerLink]="['edit', selectHero.powerstats.power, selectHero.name]"
      >set Power of {{ selectHero.name }}</a
    >
    <!-- <h3>filter Heros by:-{{ masterFilterOn }}</h3> -->
    <hr />
    <h3>User name iS: {{ username }}</h3>
    <h4>User location: {{ city }}</h4>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class DetailComponent implements OnInit {
  selectHero: any;
  username = 'guest';
  city = 'nodes';
  // masterFilterOn: any;
  constructor(private hs: HeroesService, private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectHero = this.hs.getSelectedHero(
      this.ar.snapshot.queryParams['hid']
    );
    // this.masterFilterOn = this.hs.getSelectedHero(
    //   this.ar.snapshot.queryParams['filterOn']
    // );
    console.log(this.selectHero);
    this.username = this.ar.snapshot.params['username'];
    this.city = this.ar.snapshot.params['city'];
  }
}
