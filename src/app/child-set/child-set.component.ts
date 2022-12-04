import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-set',
  templateUrl: './child-set.component.html',
  styleUrls: ['./child-set.component.css']
})
export class ChildSetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() userName: string = "";
  _userAge: number = -1;

  @Input()
  set userAge(age: number) {
    if (age < 0)
        this._userAge = 0;
    else if (age > 100)
        this._userAge = 100;
    else
        this._userAge = age;
  }
  get userAge() { 
    return this._userAge; 
  }
}
