import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { contentChildComp } from './contentchild.component';
import { viewChildrenComp } from './viewChildren.component';

class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Main Component: POWER : {{ appPower }}</h1>
    <button (click)="increaseChildPower()">Increase Power</button>
    <button (click)="decreaseChildPower()">Decrease Power</button>
    <button (click)="showHide()">hide child</button>
    <app-child #cComp *ngIf="show"></app-child>

    <hr />
    <hr />
    <hr />
    <h1>ViewChildren</h1>
    <viewChildren></viewChildren>
    <viewChildren text="Connect"></viewChildren>
    <viewChildren text="Global"></viewChildren>
    <hr />
    <hr />
    <hr />
    <hr />
    <h1>Content Child</h1>
    <joke [joke]="jokes">
      <span class="setup">{{ jokes.setup }}?</span>
      <h1 class="punchline">{{ jokes.punchline }}</h1>
    </joke>
  `,
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  title = 'STEPS-1_life-cycle';
  appPower = 0;
  show = true;

  //viewChild
  @ViewChild('cComp') cc: any;

  //view Children
  @ViewChildren(viewChildrenComp) print: QueryList<viewChildrenComp>;
  constructor() {
    console.log('appComponent contructor is called');
    console.log(this.print);
    this.appPower = 3;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('appComponent ngOnInit is called');
  }
  increaseChildPower() {
    this.cc.increasePower();
  }
  decreaseChildPower() {
    this.cc.decreasePower();
  }
  showHide() {
    this.show = !this.show;
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.print.forEach((printInstance) => console.log(printInstance));
  }

  jokes: Joke = new Joke(
    'A kid threw a lump of cheddar at me',
    'I thought ‘That’s not very mature’'
  );

  //content Child
  @ContentChild(contentChildComp) jokeContentChild: contentChildComp;
  //content Children
  @ContentChildren(contentChildComp)
  jokeContentChildren: QueryList<contentChildComp>;
  ngAfterContentInit(): void {
    console.log(
      `ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`
    );
    this.jokeContentChildren.forEach((joke) => console.log(joke));
  }
}
