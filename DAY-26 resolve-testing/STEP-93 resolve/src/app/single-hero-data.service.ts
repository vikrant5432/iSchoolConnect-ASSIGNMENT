import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { HeroesService } from './heroes.service';

@Injectable()
// generic datatype
export class singleHeroDataService implements Resolve<any> {
  constructor(private hs: HeroesService) {}
  resolve(router: ActivatedRouteSnapshot) {
    return this.hs.getSelectedHero(router.params['selectedHeroId']);
  }
}
