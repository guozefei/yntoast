import { Component } from '@angular/core';
import * as $ from 'jquery';
import { ToastBroadcasterAdapter } from 'yntoast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private broadcaster: ToastBroadcasterAdapter
  ) {

  }
  toast() {
    this.broadcaster.broadcast('ynote.toast', 'haha');
  }
 }