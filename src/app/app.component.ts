import { Component, inject } from '@angular/core';
import { WeatherforecastService } from './services/weatherforecast.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ELEKTRA.WEB';
  weatherForecasts: any[] = [];

  weatherForecastService = inject(WeatherforecastService);

  constructor() {
    console.log('ENV:', environment.env);

    this.weatherForecastService.get().subscribe(weatherForecasts => {
      // assigning a value from the web api to the property weatherForecasts that we have above
      // and that property can be used in the html file of this component
      this.weatherForecasts = weatherForecasts;
    });
  }
}
