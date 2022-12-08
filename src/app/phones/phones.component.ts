import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  items: any[] = [];

  name: string = "";

  constructor (
    private dataService: DataService,
    private router: Router
  ) {
    this.items = this.dataService.getData();
  }

  ngOnInit(): void { }

  addItem(name: string): void {
    this.dataService.addData(name);
    this.name = '';
  }

  show_info(item_id: number): void {
    console.log(item_id);
    this.router.navigate(
      ['/phones', item_id]
    );
  }
}
