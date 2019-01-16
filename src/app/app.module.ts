import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
