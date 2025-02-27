import { Component, inject } from '@angular/core';
import { WeatherforecastService } from './services/weatherforecast.service';
import { CalculationstService } from './services/calculations.service';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { LoggerService } from './services/logger/logger.service';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule, // purely for json pipe in template (probably has more stuff in it)
    TranslateModule,
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

  constructor(
    private translate: TranslateService,
    private logger: LoggerService
  ) {
    this.logger.debug('HELOOOOOOOOOOO: ' + environment.PRODUCTION);
    this.logger.info('PRODUCTION: ' + environment.PRODUCTION);
    this.logger.warn('LOG_LEVEL: ' + environment.LOG_LEVEL);
    this.logger.error('ENV: ' + environment.env);

    this.translate.addLangs(['lt', 'en']);
    this.translate.setDefaultLang('en');

    this.weatherForecastService.get().subscribe((weatherForecasts) => {
      // assigning a value from the web api to the property weatherForecasts that we have above
      // and that property can be used in the html file of this component
      this.weatherForecasts = weatherForecasts;
    });

    this.calculationstService.get().subscribe((calculations) => {
      this.calculations = calculations;
    });
  }

  ngOnInit() {
    this.logger.info('AppComponent initialized');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
