import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ToastModule, ToastBroadcasterAdapter } from 'yntoast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastModule
  ],
  providers: [
    ToastBroadcasterAdapter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
