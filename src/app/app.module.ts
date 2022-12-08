import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PhonesComponent } from './phones/phones.component';
import { ItemComponent } from './item/item.component';
import { ItemInfoComponent } from './item-info/item-info.component';
import { ItemStatComponent } from './item-stat/item-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PhonesComponent,
    ItemComponent,
    ItemInfoComponent,
    ItemStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
