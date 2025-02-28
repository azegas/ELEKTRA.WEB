import { Component, inject } from '@angular/core';
import { WeatherforecastService } from './services/weatherforecast.service';
import { CalculationstService } from './services/calculations.service';
import { WelcomeService } from './services/welcome.service';
import { DevicesService } from './services/devices.service';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoggerService } from './services/logger/logger.service';
import { ButtonDemo } from './components/button-demo.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule, // purely for json pipe in template (probably has more stuff in it)
    TranslateModule,
    ButtonDemo
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ELEKTRA.WEB';

  // TODO add interfaces/types instead of any
  weatherForecasts: any[] = [];
  calculations: any[] = [];
  devices: any[] = [];
  welcome: string = '';

  weatherForecastService = inject(WeatherforecastService);
  calculationstService = inject(CalculationstService);
  devicesService = inject(DevicesService);
  welcomeService = inject(WelcomeService);

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

    this.devicesService.get().subscribe((devices) => {
      this.devices = devices;
    });

    this.welcomeService.get().subscribe((welcome) => {
      this.welcome = welcome;
    });
  }

  ngOnInit() {
    this.logger.info('AppComponent initialized');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
