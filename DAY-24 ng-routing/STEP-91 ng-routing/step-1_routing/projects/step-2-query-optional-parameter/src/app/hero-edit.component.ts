import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <h2>Hero to Updates {{ heroToEdit }}</h2>
    <h2>Updated Power is:{{ powerToEdit }}</h2>
  `,
})
export class heroEditComponent implements OnInit {
  heroToEdit: any;
  powerToEdit: any;
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.heroToEdit = this.ar.snapshot.params['hname'];
    this.ar.params.subscribe((rparam) => {
      this.powerToEdit = rparam['power'];
    });
  }
}
