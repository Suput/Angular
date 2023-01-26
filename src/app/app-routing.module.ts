import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './car-add/car-add.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarOneComponent } from './car-one/car-one.component';
import { CubeComponent } from './cube/cube.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'car/add', component: CarAddComponent },
  { path: 'car/:id', component: CarOneComponent },
  { path: 'cube', component: CubeComponent },
  { path: 'model', component: ModelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
