import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroedit',
  template: `
    <p>heroedit works!</p>
    <hr />
    <a [routerLink]="['/heroeslist']"><h2>Back to Hero List</h2></a>
    <hr />
    <div class="container">
      <div>
        <form name="updateHeroForm" #updateHeroForm="ngForm">
          <div class="mb-3">
            <label for="update_hname" class="form-label"
              >Change hero Name:-</label
            >
            <input
              #hname="ngModel"
              type="text"
              id="update_hname"
              [(ngModel)]="updateHero.name"
              class="form-control"
              name="hname"
            />
          </div>
          <div class="mb-3">
            <label for="update_hbio" class="form-label"
              >Change hero BioGraphy:-</label
            >
            <input
              #hbio="ngModel"
              [(ngModel)]="updateHero.biography.publisher"
              type="text"
              id="update_hbio"
              class="form-control"
              name="hbio"
            />
          </div>
          <div class="mb-3">
            <label for="update_hpow" class="form-label"
              >Change hero Power:-</label
            >
            <input
              #hpower="ngModel"
              [(ngModel)]="updateHero.powerstats.power"
              type="text"
              id="update_hpow"
              class="form-control"
              name="hpower"
            />
          </div>
          <!-- <button
            type="submit"
            class="btn btn-primary"
          > -->
          <a
            [routerLink]="[
              'heroChange',
              updateHero.powerstats.power,
              updateHero.name
            ]"
            >Update</a
          >
          <!-- </button> -->
        </form>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class HeroeditComponent implements OnInit {
  updateHero: any;
  constructor(private hr: HeroesService, private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.updateHero = this.hr.getSelectedHero(
      this.ar.snapshot.params['selectHeroId']
    );
    console.log(this.updateHero);
  }
  // console.log(this.updateHero);
}
