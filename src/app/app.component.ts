import { Component, inject } from '@angular/core';
import { WeatherforecastService } from './services/weatherforecast.service';
import { CalculationstService } from './services/calculations.service';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [
    CommonModule // purely for json pipe in template (probably has more stuff in it)
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ELEKTRA.WEB';

  // TODO add interfaces/types instead of any
  weatherForecasts: any[] = [];
  calculations: any[] = [];

  weatherForecastService = inject(WeatherforecastService);
  calculationstService = inject(CalculationstService);

  constructor() {
    console.log('ENV:', environment.env);

    this.weatherForecastService.get().subscribe((weatherForecasts) => {
      // assigning a value from the web api to the property weatherForecasts that we have above
      // and that property can be used in the html file of this component
      this.weatherForecasts = weatherForecasts;
    });

    this.calculationstService.get().subscribe((calculations) => {
      this.calculations = calculations;
    });
  }
}
