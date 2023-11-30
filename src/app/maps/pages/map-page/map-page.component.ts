import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styles: [
  ]
})
export class MapPageComponent {

  constructor(private placesService: PlacesService) { }

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }

}
