import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  welcome: string = "Hello World!";
  persentage: number = 0.145;
  myDate = Date.now();

  value: number;
}
