import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template:'<h1>Header HelloWorld </h1>',
styles:['h1{ color:   red; }'],
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
