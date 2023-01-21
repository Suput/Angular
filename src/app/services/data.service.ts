import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  cars: Car[] = [];
  constructor(private httpClient: HttpClient) {
    this.update_cars();
  }

  get_cars() {
    return this.cars;
  }

  update_cars() {
    const url = environment.database_url + "cars.json";
    this.httpClient.get(url).subscribe(
      (cars: any) => {
        this.cars = [];
        for (let elem in Object.keys(cars)) {
          const key = Object.keys(cars)[elem];
          const car = cars[key]
          this.cars.push(car);
        }
        console.log(this.cars);
      }
    )
  }

  add_car(new_car: Car) {
    const url = environment.database_url + "cars.json";
    let new_id = this.cars.at(this.cars.length - 1)?.id;
    if (new_id) {
      new_car.id = new_id + 1;
    }
    this.httpClient.post(url, new_car).subscribe();

    this.update_cars();
  }

  get_car_by_id(id: number) {
    for (let i = 0; i < this.cars.length; i++) {
      const car = this.cars[i];
      if (car.id == id) {
        return car;
      }
    }
    return null;
  }

  get_test_data() {
    return this.httpClient.get('assets/test.json');
  }
}
