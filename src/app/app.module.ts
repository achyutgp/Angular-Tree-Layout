import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSnackBarModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    HelloComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
