import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
})
export class CarlistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cars = [
    { name: 'toyota', model: 'makr2' },
    { name: 'nissan', model: 'gtr 35' },
    { name: 'lada', model: 'vesta sport' },
    { name: 'lada', model: 'niva short' },
  ];

  // check(): void {
  //   let user = localStorage.getItem("user");
  //   if (user === null) {
  //     console.log('Вы не вошли');
  //   } else {
  //     let temp = JSON.parse(user);
  //     console.log('username ' + temp.username);
  //     console.log('firstname ' + temp.firstname);
  //     console.log('surname ' + temp.surname);
  //   }
  // }
}
