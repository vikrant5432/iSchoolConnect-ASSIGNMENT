import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Justic League works!</h1>
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
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
