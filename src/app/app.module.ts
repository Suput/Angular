import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildSetComponent } from './child-set/child-set.component';
import { ChildOutComponent } from './child-out/child-out.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildSetComponent,
    ChildOutComponent,
    PipesExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
