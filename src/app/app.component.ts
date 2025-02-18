import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherforecastService } from './weatherforecast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ELEKTRA.WEB';
  weatherForecasts: any[] = [];

  weatherForecastService = inject(WeatherforecastService);

  constructor() {
    this.weatherForecastService.get().subscribe(weatherForecasts => {
      // assigning a value from the web api to the property weatherForecasts that we have above
      // and that property can be used in the html file of this component
      this.weatherForecasts = weatherForecasts;
    });
  }
}
