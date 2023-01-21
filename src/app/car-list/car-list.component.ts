import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private data_service: DataService) {}

  ngOnInit(): void {}

  get_cars() {
    this.cars = this.data_service.get_cars();
  }
}
