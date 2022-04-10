import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-detail',
  template: `
    <p>detail works!</p>
    <a [routerLink]="['/list']">Back to Master Page</a>
    <h2>{{ selectHero.name }}</h2>
    <img
      [src]="'assets/' + selectHero.image.url"
      [alt]="selectHero.name"
      width="150"
    />
    <p>
      {{ selectHero | json }}
    </p>

    <!-- <a [routerLink]="['edit', selectHero.powerstats.power, selectHero.name]"
      >Edit {{ selectHero.name }}</a
    >

    <br /> -->
    <!-- <input
      min="0"
      max="100"
      type="range"
      [(ngModel)]="selectHero.powerstats.power"
    />
    <br />
    <a [routerLink]="['edit', selectHero.powerstats.power, selectHero.name]"
      >set Power of {{ selectHero.name }}</a
    >

    <hr />
    <router-outlet></router-outlet> -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class DetailComponent implements OnInit {
  selectHero: any;
  constructor(private hs: HeroesService, private ar: ActivatedRoute) {}

  ngOnInit(): void {
    // this.selectHero = this.hs.getSelectedHero(
    //   this.ar.snapshot.params['selectedHeroId']
    // );
    this.ar.data.subscribe((res) => {
      this.selectHero = res['singleherodata'];
    });
  }
}
