import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts = [
    {
      title: 'Nissan выпустила новый двигатель',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.',
      time: '15.12.2022 10:00',
    },
    {
      title: 'Пожар на складе ОБИ',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.',
      time: '13.12.2022 22:00',
    },
    {
      title: 'Зима близко',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.',
      time: '13.12.2022 05:00',
    },
    {
      title: 'Вы всю жизнь делали ЭТО неправильно. Надо просто...',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam id eos iure quia. Eius, at? Obcaecati iure, nobis quae accusamus asperiores ipsam error? Corrupti iure dolorem magni dicta nostrum debitis.',
      time: '12.12.2022 13:40',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
