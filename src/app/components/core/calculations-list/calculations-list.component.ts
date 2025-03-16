import { Component } from '@angular/core';
import { CalculationCardComponent } from '../calculation-card/calculation-card.component';
import { CalculationsService } from '../../../services/calculations.service';
import { Calculation } from '../../../models/calculation';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-calculations-list',
  imports: [CalculationCardComponent, ProgressSpinnerModule],
  templateUrl: './calculations-list.component.html',
  styleUrl: './calculations-list.component.css',
})
export class CalculationsListComponent {
  calculations: Calculation[] = [];
  loading = true;

  constructor(
    private calculationService: CalculationsService,
    private messageService: MessageService
  ) {
    this.loadCalculations();
  }

  loadCalculations() {
    this.calculationService.get().subscribe({
      next: (data) => {
        this.calculations = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load calculations',
        });
      },
    });
  }
}
