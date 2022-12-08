import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  items: string[] = [];

  name: string = "";

  constructor (
    private dataService: DataService
  ) {
    this.items = this.dataService.getData();
  }

  ngOnInit(): void { }

  addItem(name: string): void {
    this.dataService.addData(name);
    this.name = '';
  }
}
