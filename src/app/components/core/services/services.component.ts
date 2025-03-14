import { Component, inject } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { WeatherforecastService } from '../../../services/weatherforecast.service';
import { CalculationstService } from '../../../services/calculations.service';
import { WelcomeService } from '../../../services/welcome.service';
import { DevicesService } from '../../../services/devices.service';
import { environment } from '../../../../environments/environment';
import { LoggerService } from '../../../services/logger/logger.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-services',
  imports: [
    ButtonModule,
    FloatLabelModule,
    TranslateModule,
    CommonModule, // purely for json pipe in template (probably has more stuff in it)
    FormsModule, // to be able to use[(ngModel)] in html
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  // TODO add interfaces/types instead of any, use them in services also
  weatherForecasts: any[] = [];
  calculations: any[] = [];
  devices: any[] = [];
  singleDevice: any = {};
  welcome: string = '';

  deviceName: string = '';
  watts: string = '';

  deviceToPost = {
    deviceName: 'Device 1',
    watt: 350,
  };

  weatherForecastService = inject(WeatherforecastService);
  calculationstService = inject(CalculationstService);
  devicesService = inject(DevicesService);
  welcomeService = inject(WelcomeService);

  setValue() {
    this.logger.debug('deviceName: ' + this.deviceName);
    this.logger.debug('watts: ' + this.watts);
    // this.deviceName = 'Mikrobange';
    // this.watts = '500';
  }

  constructor(
    private logger: LoggerService
  ) {
    this.logger.debug('HELOOOOOOOOOOO: ' + environment.PRODUCTION);
    this.logger.info('PRODUCTION: ' + environment.PRODUCTION);
    this.logger.warn('LOG_LEVEL: ' + environment.LOG_LEVEL);
    this.logger.error('ENV: ' + environment.env);

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

    this.devicesService.getSingle(1).subscribe((singleDevice) => {
      this.singleDevice = singleDevice;
    });

    this.welcomeService.get().subscribe((welcome) => {
      this.welcome = welcome;
    });

    // this.devicesService.post(this.deviceToPost).subscribe(() => {});
  }

  ngOnInit() {
    this.logger.info('Services component initialized');
  }
}