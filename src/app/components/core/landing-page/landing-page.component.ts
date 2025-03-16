import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  title = 'LANDING PAGE';

  ngOnInit() {
    console.log('Landing Page Component initialized');
  }
}
