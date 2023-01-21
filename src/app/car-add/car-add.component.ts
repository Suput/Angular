import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  new_car_marka: string = '';
  new_car_model: string = '';
  new_car_date: string = '';
  new_car_price: number = 0;

  constructor(private data_service: DataService) { }

  ngOnInit(): void {}

  add_new_car() {
    const new_car: Car = {
      id: -1,
      marka: this.new_car_marka,
      model: this.new_car_model,
      creation_date: this.new_car_date,
      price: this.new_car_price,
    };
    this.data_service.add_car(new_car);
  }
}
