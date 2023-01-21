import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './root/app.component';
import { FormsModule } from '@angular/forms';
import { CarListComponent } from './car-list/car-list.component';
import { CarOneComponent } from './car-one/car-one.component';
import { CarAddComponent } from './car-add/car-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarOneComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
