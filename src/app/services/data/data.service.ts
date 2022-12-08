import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[];

  getData(): any[] {
    return this.data;
  }

  addData(name: string): void {
    let last_id = this.data[this.data.length - 1].id;
    let new_id = last_id + 1;
    this.data.push(
      {
        id: new_id,
        name: name
      }
    );
    let data_str = JSON.stringify(this.data);
    localStorage.setItem('data', data_str);
  }

  constructor() {
    let datals = localStorage.getItem('data');
    if (datals === null || datals === undefined) {
      this.data = [
        {
          id: 123124,
          name: "Apple iPhone XR"
        },
        {
          id: 123125,
          name: "Samsung Galaxy S9"
        },
        {
          id: 123126,
          name: "Nokia 9"
        }
      ];
      let data_str = JSON.stringify(this.data);
      localStorage.setItem('data', data_str);
    } else {
      let datals_parsed = JSON.parse(datals);
      this.data = datals_parsed;
    }
  }
}
