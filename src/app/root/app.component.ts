import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: number = 10;
  surname: string = '';
  private val: string = 'Enter your Name';

  func(): void {
    console.log(this.name);
    console.log(this.surname);
    console.log(this.val);
    let temp = this.test();
    console.log(temp);
    return;
  }

  test(): number {
    return 40;
  }

  temp() {}

  test2(): void {
    if (this.name === 9) {
      console.log('У вас 9 жизней');
    } else if (this.name >= 10) {
      console.log('У вас много жизней');
    } else {
      console.log('У вас мало жизней');
    }

    // let res = -1;
    // if (this.name === 9) {
    //   res = 9;
    //   console.log("fffff");
    // } else {
    //   res = 100;
    // }

    let t: boolean = true;

    if (!t) {
      console.log("All right");
    } else {
      console.log("All bad");
    }

    let res = (this.name === 9) ? 9 : 100;
  }
}
// JS
// '9' == 9 -> true
// !=
// > <
// => <=

// JS
// '9' === 9 -> false
// !==
