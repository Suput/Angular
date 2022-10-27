import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondaryComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
