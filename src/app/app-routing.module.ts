import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './car-add/car-add.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarOneComponent } from './car-one/car-one.component';

const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'car/add', component: CarAddComponent },
  { path: 'car/:id', component: CarOneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
