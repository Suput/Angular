import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css'],
})
export class TempComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mylist = ['str1', 'str2', 'str3', 'str4'];
  title: string = 'test';
  condition: boolean = false;

  toggleCondition(): void {
    // if (this.condition === true) {
    //   this.condition = false;
    // } else {
    //   this.condition = true;
    // }
    // if (this.condition) {
    //   this.condition = false;
    // } else {
    //   this.condition = true;
    // }
    this.condition = !this.condition;
  }
}
