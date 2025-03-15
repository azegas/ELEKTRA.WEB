import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Calculation } from '../../../models/calculation';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-calculation-card',
  imports: [TooltipModule],
  templateUrl: './calculation-card.component.html',
  styleUrl: './calculation-card.component.css',
})
export class CalculationCardComponent {
  @Input() receivedCalculation: Calculation | undefined;
}
