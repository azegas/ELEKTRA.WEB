import { Component } from '@angular/core';
import { LandingPageComponent } from './components/core/landing-page/landing-page.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { ServicesComponent } from './components/core/services/services.component';

@Component({
  selector: 'app-root',
  imports: [
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ELEKTRA.WEB';
}
