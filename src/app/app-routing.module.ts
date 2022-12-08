import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemInfoComponent } from './item-info/item-info.component';
import { ItemStatComponent } from './item-stat/item-stat.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { PhonesComponent } from './phones/phones.component';

// const itemRoutes: Routes = [
//   { path: 'details', component: ItemInfoComponent },
//   { path: 'stat', component: ItemStatComponent },
// ];

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'phones', component: PhonesComponent },
  { path: 'item/:model_id', component: ItemComponent },
  {
    path: 'item/:model_id',
    component: ItemComponent,
    children: [
      { path: 'info', component: ItemInfoComponent },
      { path: 'stat', component: ItemStatComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
