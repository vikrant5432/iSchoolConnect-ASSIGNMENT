import { NgModule } from '@angular/core';
import { HeroaddComponent } from './heroadd.component';
import { HeroeditComponent } from './heroedit.component';
import { HerolistComponent } from './herolist.component';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroesService } from './heroes.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { heroChangeComponent } from './heroChange.component';

@NgModule({
  declarations: [
    HeroaddComponent,
    HeroeditComponent,
    HerolistComponent,
    HeroComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'hero', component: HeroComponent },
      { path: 'heroeslist', component: HerolistComponent },
      { path: 'addhero', component: HeroaddComponent },
      {
        path: 'edithero/:selectHeroId',
        component: HeroeditComponent,
        children: [
          { path: 'heroChange/:power/:name', component: heroChangeComponent },
        ],
      },
    ]),
    BrowserModule,
    FormsModule,
  ],
  providers: [HeroesService],
  exports: [
    HeroComponent,
    HeroaddComponent,
    HeroeditComponent,
    HerolistComponent,
  ],
})
export class HeroModule {}
