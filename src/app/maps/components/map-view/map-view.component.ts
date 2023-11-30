import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import mapboxgl, { Marker, Popup } from 'mapbox-gl';
import { PlacesService, MapService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor(private placesService: PlacesService,
    private mapService: MapService) { }

  ngAfterViewInit(): void {

    if (!this.placesService.useLocation) throw new Error("No hay placeService.userLocatio");


    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.placesService.useLocation,
      zoom: 14,
    });

    const popup = new Popup()
      .setHTML(`
    <h6>Aquí estoy</h6>
    <span>Estoy en este lugar del mundo.</span>
    `);

    new Marker({ color: 'red' })
      .setLngLat(this.placesService.useLocation)
      .setPopup(popup)
      .addTo(map)

    this.mapService.setMap(map);

  }

}
