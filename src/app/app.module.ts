import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatDialogRef,
  MatListModule,
  MatProgressBarModule,
} from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponentComponent } from './first-component/first-component.component';
import * as http from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    http.HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
