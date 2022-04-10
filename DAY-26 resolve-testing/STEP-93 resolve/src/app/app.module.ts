import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './master.component';
import { DetailComponent } from './detail.component';
import { HeroesService } from './heroes.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { homeComponent } from './home.component';
import { heroResolverService } from './hero.resolver.service';
import { singleHeroDataService } from './single-hero-data.service';

@NgModule({
  declarations: [AppComponent, MasterComponent, DetailComponent, homeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: homeComponent,
      },
      {
        path: 'list',
        component: MasterComponent,
        // route resolver
        resolve: { herodata: heroResolverService },
      },
      {
        path: 'hero/:selectedHeroId',
        component: DetailComponent,
        resolve: { singleherodata: singleHeroDataService },
      },
    ]),
  ],
  providers: [HeroesService, heroResolverService, singleHeroDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
