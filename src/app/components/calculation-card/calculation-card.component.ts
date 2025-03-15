import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Calculation } from '../../models/calculation';

@Component({
  selector: 'app-calculation-card',
  imports: [],
  templateUrl: './calculation-card.component.html',
  styleUrl: './calculation-card.component.css',
})
export class CalculationCardComponent {
  @Input() value = '';
  @Input() calculation: Calculation | undefined;
}
