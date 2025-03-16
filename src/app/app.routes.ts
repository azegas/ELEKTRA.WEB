import { Routes } from '@angular/router';
import { CalculationPageComponent } from './components/core/calculation-page/calculation-page.component';
import { LandingPageComponent } from './components/core/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'calculation', component: CalculationPageComponent },
];
