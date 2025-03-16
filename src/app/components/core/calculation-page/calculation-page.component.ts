import { Component } from '@angular/core';
import { CalculationFormComponent } from '../calculation-form/calculation-form.component';

@Component({
  selector: 'app-calculation-page',
  imports: [CalculationFormComponent],
  templateUrl: './calculation-page.component.html',
  styleUrl: './calculation-page.component.css',
})
export class CalculationPageComponent {}
