import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: ` <h2>Change done</h2> `,
})
export class heroChangeComponent implements OnInit {
  heroToEdit: any;
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.ar.params.subscribe((rparam) => {
      this.heroToEdit = rparam['power'];
      console.log(this.heroToEdit);
    });
  }
}
