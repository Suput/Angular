import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-car-one',
  templateUrl: './car-one.component.html',
  styleUrls: ['./car-one.component.css'],
})
export class CarOneComponent implements OnInit {
  car: Car | null = null;

  constructor(
    private activated_route: ActivatedRoute,
    private data_service: DataService) {
    let subscription = activated_route.params.subscribe(
      (params) => {
        const id = params['id'];
        this.car = data_service.get_car_by_id(id);
      }
    );
  }

  ngOnInit(): void {}
}
