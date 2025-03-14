import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/core/landing-page/landing-page.component';
import { ServicesComponent } from './components/core/services/services.component';

export const routes: Routes = [
  { path: 'land', component: LandingPageComponent },
  { path: 'services', component: ServicesComponent },
];
