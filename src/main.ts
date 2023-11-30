import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybG9zY3Y4NCIsImEiOiJjbGNjMXphOGUxYWg4M29xcnd2bHlsZmhsIn0.Q1FXW9OFpY6wTTNOPeJc3Q';

if (!navigator.geolocation) {
  alert('Navegador no soporta la geolocalización');
  throw new Error("Navegador no soporta la geolocalización");
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
