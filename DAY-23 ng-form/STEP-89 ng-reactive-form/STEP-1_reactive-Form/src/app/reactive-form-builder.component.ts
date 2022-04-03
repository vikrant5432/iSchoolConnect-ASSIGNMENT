import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

//name
//age
//mail
@Component({
  selector: 'app-reactive-form-builder',
  template: `
    <h2>Reactive Form Builder</h2>

    <!-- validate -->
    <form [formGroup]="userform">
      <!-- referance and name -->
      <div class="mb-3">
        <label for="uname" class="form-label">User Name:-</label>
        <!-- template referance help the angular to understand that we are taking input -->
        <input
          type="text"
          id="uname"
          class="form-control"
          formControlName="username"
        />
        <span
          class="form-text"
          *ngIf="
            userform.get('username').touched && userform.get('username').invalid
          "
          >Please enter your name</span
        >
      </div>
      <div class="mb-3">
        <label for="uage" class="form-label">User Age:-</label>
        <input
          type="number"
          id="uage"
          class="form-control"
          formControlName="userage"
        />
        <span
          class="form-text"
          *ngIf="
            userform.get('userage').touched && userform.get('userage').invalid
          "
          >Please enter your age. It must be between 18 to 70</span
        >
      </div>
      <div class="mb-3">
        <label for="umail" class="form-label">User Email:-</label>
        <input
          type="mail"
          id="umail"
          class="form-control"
          formControlName="usermail"
        />
        <span
          class="form-text"
          *ngIf="
            userform.get('usermail').touched && userform.get('usermail').invalid
          "
          >Please enter a valid mail id</span
        >
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
      <hr />
      <button class="btn btn-success" (click)="generateUserName()">
        Generate User Name
      </button>
      <button class="btn btn-warning" (click)="generateUserData()">
        Generate User Date
      </button>
    </form>
    <p>{{ log | json }}</p>
    <!-- 2 way data binding -->
    <!-- <ul>
      <li>User name:</li>
      <li>User age:</li>
      <li>User Email:</li>
    </ul> -->
    <ul>
      <li *ngIf="userform.get('username').touched">User Name:-Touched</li>
      <li *ngIf="userform.get('username').untouched">User Name:-Untouched</li>
      <li *ngIf="userform.get('username').pristine">User Name:-pristine</li>
      <li *ngIf="userform.get('username').dirty">User Name:-dirty</li>
      <li *ngIf="userform.get('username').valid">User Name:-valid</li>
      <li *ngIf="userform.get('username').invalid">User Name:-invalid</li>
    </ul>
    <ul>
      <li *ngIf="userform.get('userage').touched">User Age:-Touched</li>
      <li *ngIf="userform.get('userage').untouched">User Age:-Untouched</li>
      <li *ngIf="userform.get('userage').pristine">User Age:-pristine</li>
      <li *ngIf="userform.get('userage').dirty">User Age:-dirty</li>
      <li *ngIf="userform.get('userage').valid">User Age:-valid</li>
      <li *ngIf="userform.get('userage').invalid">User Age:-invalid</li>
    </ul>
    <ul>
      <li *ngIf="userform.get('usermail').touched">User Mail:-Touched</li>
      <li *ngIf="userform.get('usermail').untouched">User Mail:-Untouched</li>
      <li *ngIf="userform.get('usermail').pristine">User Mail:-pristine</li>
      <li *ngIf="userform.get('usermail').dirty">User Mail:-dirty</li>
      <li *ngIf="userform.get('usermail').valid">User Mail:-valid</li>
      <li *ngIf="userform.get('usermail').invalid">User Mail:-invalid</li>
    </ul>
    <ul>
      <li *ngIf="userform.touched">User Form is Touched</li>
      <li *ngIf="userform.untouched">User Form is Untouched</li>
      <li *ngIf="userform.pristine">User Form is Pristine</li>
      <li *ngIf="userform.dirty">User Form is Dirty</li>
      <li *ngIf="userform.valid">User Form is Valid</li>
      <li *ngIf="userform.invalid">User Form is Invalid</li>
    </ul>
  `,
  styles: [
    `
      /* predefine class for css */
      input.ng-valid {
        border: 2px solid greenyellow;
      }
      input.ng-invalid.ng-touched {
        border: 2px solid crimson;
      }
    `,
  ],
})
export class reactiveFormBuilder implements OnInit {
  userform: any;
  log: any;

  constructor(private fb: FormBuilder) {}
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  ngOnInit(): void {
    this.userform = this.fb.group({
      username: ['', Validators.required],
      usermail: ['', [Validators.required, Validators.pattern('.+@.+')]],
      userage: [
        '',
        [Validators.required, Validators.min(18), Validators.max(90)],
      ],
    });
    this.userform.valueChanges.subscribe((res: any) => (this.log = res));
  }

  generateUserName() {
    this.userform.patchValue({
      username: 'Bruce',
    });
  }
  generateUserData() {
    this.userform.setValue({
      username: 'Spiderman',
      userage: 21,
      usermail: 'bruce@wayne.com',
    });
  }
}
