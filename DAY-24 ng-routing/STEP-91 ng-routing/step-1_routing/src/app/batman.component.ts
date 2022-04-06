import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-batman',
  template: `
    <h1>batman works!</h1>
    <h2>Quantity: {{ quantity || 0 }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae
      deserunt pariatur odit odio corporis voluptatum reprehenderit porro,
      repellat quasi ducimus provident placeat, fugiat ipsa rem officia possimus
      omnis necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Pariatur ullam sapiente commodi cupiditate ex repellendus. Non sunt
      adipisci ab minus laboriosam deserunt similique eligendi eos
      necessitatibus tenetur, officiis sequi aliquid!
    </p>
  `,
  styles: [],
})
export class BatmanComponent implements OnInit {
  quantity: any;
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    //snapshot will take the routes as whole and then with params we will take parameters which has name as 'qrt' here
    this.quantity = this.ar.snapshot.params['qrt'];
  }
}
