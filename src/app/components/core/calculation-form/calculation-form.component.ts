import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../../../services/logger/logger.service';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { CalculationsListComponent } from '../calculations-list/calculations-list.component';
import { CalculationsService } from '../../../services/calculations.service';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-calculation-form',
  imports: [
    InputNumberModule,
    InputTextModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    CalculationsListComponent,
  ],
  templateUrl: './calculation-form.component.html',
  styleUrl: './calculation-form.component.css',
})
export class CalculationFormComponent {
  calculationService = inject(CalculationsService);

  device_name: string = '';
  cost_per_kwh: number = 0.22;
  user_watts: number = 0;

  kilowatts: number = 0;
  hourly_cost: number = 0;
  daily_cost: number = 0;
  weekly_cost: number = 0;
  monthly_cost: number = 0;
  yearly_cost: number = 0;

  calculateKilowatts(user_watts: number) {
    this.kilowatts = parseFloat((user_watts / 1000).toFixed(2));
  }

  calculateHourlyCost(kilowatts: number) {
    this.hourly_cost = parseFloat((kilowatts * this.cost_per_kwh).toFixed(2));
  }

  calculateDailyCost(hourly_cost: number) {
    this.daily_cost = parseFloat((hourly_cost * 24).toFixed(2));
  }

  calculateWeeklyCost(daily_cost: number) {
    this.weekly_cost = parseFloat((daily_cost * 7).toFixed(2));
  }

  calculateMonthlyCost(daily_cost: number) {
    this.monthly_cost = parseFloat((daily_cost * 30).toFixed(2));
  }

  calculateYearlyCost(daily_cost: number) {
    this.yearly_cost = parseFloat((daily_cost * 365).toFixed(2));
  }

  makeCalculations() {
    this.calculateKilowatts(this.user_watts);
    this.calculateHourlyCost(this.kilowatts);
    this.calculateDailyCost(this.hourly_cost);
    this.calculateWeeklyCost(this.daily_cost);
    this.calculateMonthlyCost(this.daily_cost);
    this.calculateYearlyCost(this.daily_cost);
  }

  saveCalculations() {
    const calculationData = {
      deviceName: this.device_name,
      electricityCost: 0.22,
      watts: this.user_watts,
      kilowatts: this.kilowatts,
      hourlyCost: this.hourly_cost,
      dailyCost: this.daily_cost,
      weeklyCost: this.weekly_cost,
      monthlyCost: this.monthly_cost,
      yearlyCost: this.yearly_cost,
      createdAt: new Date(),
    };

    this.calculationService.post(calculationData).subscribe({
      next: (response) => {
        console.log('Calculation saved successfully:', response);
        alert('Calculations saved!');
      },
      error: (error) => {
        console.error('Error saving calculation:', error);
        alert('Failed to save calculations. Please try again.');
      },
    });
  }

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.info('Calculation-form component initialized');
  }
}
