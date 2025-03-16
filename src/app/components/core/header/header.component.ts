import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['lt', 'en']);
    this.translate.setDefaultLang('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
