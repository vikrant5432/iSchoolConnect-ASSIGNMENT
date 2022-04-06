import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroadd',
  template: `
    <p>heroadd works!</p>
    <hr />
    <a [routerLink]="['/heroeslist']" style="text-decoration: none;"
      ><h4>Back to Hero List</h4></a
    >

    <hr />
    <div class="container">
      <div>
        <h1>Add Hero</h1>
        <form name="userForm" #userForm="ngForm">
          <div class="mb-3">
            <label for="username" class="form-label">Hero Name</label>
            <input
              #uname="ngModel"
              [(ngModel)]="newUserData.username"
              type="email"
              class="form-control"
              id="username"
              name="uname"
            />
          </div>
          <div class="mb-3">
            <label for="usermail" class="form-label">Hero Biography</label>
            <input
              #umail="ngModel"
              [(ngModel)]="newUserData.userbio"
              type="email"
              class="form-control"
              id="usermail"
              name="umail"
            />
          </div>
          <div class="mb-3">
            <label for="usercity" class="form-label">Hero Power</label>
            <input
              #ucity="ngModel"
              [(ngModel)]="newUserData.userpower"
              type="email"
              class="form-control"
              id="usercity"
              name="ucity"
            />
          </div>
          <button (click)="addNewUser()" type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class HeroaddComponent implements OnInit {
  newUserData: any = {
    username: '',
    userbio: '',
    userpower: '',
  };
  constructor(private hr: HeroesService) {}

  ngOnInit() {}
  addNewUser() {}
}
