import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Block1Component } from './block1/block1.component';
import { AppRoutingModule } from './app-routing.module';
import { Page2Component } from './page2/page2.component';
import { Block2Component } from './block2/block2.component';


@NgModule({
  declarations: [
    AppComponent,
    Block1Component,
    Page2Component,
    Block2Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
