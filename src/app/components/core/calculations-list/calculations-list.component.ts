import { Component } from '@angular/core';
import { CalculationCardComponent } from '../calculation-card/calculation-card.component';
import { CalculationsService } from '../../../services/calculations.service';
import { Calculation } from '../../../models/calculation';

@Component({
  selector: 'app-calculations-list',
  imports: [CalculationCardComponent],
  templateUrl: './calculations-list.component.html',
  styleUrl: './calculations-list.component.css',
})
export class CalculationsListComponent {
  calculations: Calculation[] = [];

  constructor(private calculationService: CalculationsService) {
    this.calculationService.get().subscribe((data) => {
      this.calculations = data;
    });
  }
}
