import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../../../services/logger/logger.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-calculation-form',
  imports: [
    ButtonModule,
    FormsModule, // to be able to use[(ngModel)] in html
  ],
  templateUrl: './calculation-form.component.html',
  styleUrl: './calculation-form.component.css',
})
export class CalculationFormComponent {
  deviceName: string = '';
  watts: string = '';

  deviceToPost = {
    deviceName: 'Device 1',
    watt: 350,
  };

  setValue() {
    this.logger.debug('deviceName: ' + this.deviceName);
    this.logger.debug('watts: ' + this.watts);
    // this.deviceName = 'Mikrobange';
    // this.watts = '500';
  }

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.info('Calculation-form component initialized');
  }
}
