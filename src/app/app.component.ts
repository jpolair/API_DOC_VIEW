import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader] // chnage to slider to change effect
})
export class AppComponent {

  constructor() {}

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
