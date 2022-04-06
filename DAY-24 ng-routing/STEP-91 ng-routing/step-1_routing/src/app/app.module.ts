import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatmanComponent } from './batman.component';
import { SupermanComponent } from './superman.component';
import { AquamanComponent } from './aquaman.component';
import { FlashComponent } from './flash.component';
import { CyborgComponent } from './cyborg.component';
import { NotfoundComponent } from './notfound.component';
import { WonderwomenComponent } from './wonderwomen.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NotFoundError } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    BatmanComponent,
    SupermanComponent,
    AquamanComponent,
    FlashComponent,
    CyborgComponent,
    NotfoundComponent,
    WonderwomenComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    //forRoot work like if-else command so that why always but the notfound in the end and make the path in sequance order
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'batman', component: BatmanComponent },
      { path: 'batman/:qrt', component: BatmanComponent },
      { path: 'superman', component: SupermanComponent },
      { path: 'flash', component: FlashComponent },
      // { path: 'cyborg', component: CyborgComponent },
      { path: 'cyborg', redirectTo: 'flash' },
      { path: 'wonderwomen', component: WonderwomenComponent },
      { path: 'aquaman', component: AquamanComponent },
      { path: '**', component: NotfoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
