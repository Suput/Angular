import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-phones-info',
  templateUrl: './phones-info.component.html',
  styleUrls: ['./phones-info.component.css']
})
export class PhonesInfoComponent implements OnInit {
  phone: any;
  private subscription: Subscription;
  constructor (
    private activateRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.subscription = activateRoute.params.subscribe(
      params => {
        let id = params['id'];
        let data = this.dataService.getData();
        console.log(id);
        console.log(data);
        for(let i = 0; i < data.length; i++)
        {
          if (data[i].id == id) {
            this.phone = data[i];
            break;
          }
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
