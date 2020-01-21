import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponentComponent } from './first-component/first-component.component';
import * as http from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    http.HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
