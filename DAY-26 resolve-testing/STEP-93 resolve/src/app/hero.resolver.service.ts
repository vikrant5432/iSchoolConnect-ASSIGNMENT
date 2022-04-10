import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HeroesService } from './heroes.service';

@Injectable()
export class heroResolverService implements Resolve<any> {
  constructor(private hr: HeroesService) {}
  resolve() {
    return this.hr.getHeroes();
  }
}
