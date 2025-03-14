import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../../../services/logger/logger.service';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculation-form',
  imports: [InputNumberModule, CommonModule, ButtonModule, FormsModule],
  templateUrl: './calculation-form.component.html',
  styleUrl: './calculation-form.component.css',
})
export class CalculationFormComponent {
  cost_per_kwh: number = 0.22;
  user_watts: number = 0;
  kilowatts: number = 0;
  hourly_cost: number = 0;
  daily_cost: number = 0;
  weekly_cost: number = 0;
  monthly_cost: number = 0;
  yearly_cost: number = 0;

  calculateKilowatts(user_watts: number) {
    this.kilowatts = user_watts / 1000;
  }

  calculateHourlyCost(kilowatts: number) {
    this.hourly_cost = kilowatts * this.cost_per_kwh;
  }
  calculateDailyCost(hourly_cost: number) {
    this.daily_cost = hourly_cost * 24;50
  }

  calculateWeeklyCost(daily_cost: number) {
    this.weekly_cost = daily_cost * 7;
  }

  calculateMonthlyCost(daily_cost: number) {
    this.monthly_cost = daily_cost * 30;
  }

  calculateYearlyCost(daily_cost: number) {
    this.yearly_cost = daily_cost * 365;
  }

  makeCalculations() {
    this.calculateKilowatts(this.user_watts);
    this.calculateHourlyCost(this.kilowatts);
    this.calculateDailyCost(this.hourly_cost);
    this.calculateWeeklyCost(this.daily_cost);
    this.calculateMonthlyCost(this.daily_cost);
    this.calculateYearlyCost(this.daily_cost);
  }

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.info('Calculation-form component initialized');
  }
}
