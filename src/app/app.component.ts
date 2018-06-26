import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  currntUrl: string;

  // Constructor
  constructor (private route: Router) {
      route.events.subscribe((_: NavigationEnd) => this.currntUrl = _.url);

  }
}
