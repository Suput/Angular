import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  age: number = 1232130;
  name: string = "Tom";

  clicks: number = 0;
  increase_decrease(increased: boolean){
      increased == true ? this.clicks++ : this.clicks--;
  }
}
