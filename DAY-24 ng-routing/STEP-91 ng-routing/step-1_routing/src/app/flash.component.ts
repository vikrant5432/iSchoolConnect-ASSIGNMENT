import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash',
  template: `
    <h1>flash works!</h1>
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
export class FlashComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
