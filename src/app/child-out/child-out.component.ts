import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-out',
  templateUrl: './child-out.component.html',
  styleUrls: ['./child-out.component.css']
})
export class ChildOutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased: boolean) {
      this.onChanged.emit(increased);
  }
}
