import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
        TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['lt', 'en']);
    this.translate.setDefaultLang('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}}
