import { Component } from '@angular/core';
import { CalculationFormComponent } from '../calculation-form/calculation-form.component';


@Component({
  selector: 'app-landing-page',
  imports: [CalculationFormComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  title = 'LANDING PAGE';

  ngOnInit() {
    console.log('Landing Page Component initialized');
  }
}
