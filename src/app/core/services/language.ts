import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguage.asObservable();

  supportedLanguages = [
    { code: 'en', name: 'English', flag: 'gb' },
    { code: 'sw', name: 'Kiswahili', flag: 'tz' },
    { code: 'ar', name: 'العربية', flag: 'sa', rtl: true },
    { code: 'fr', name: 'Français', flag: 'fr' },
    { code: 'de', name: 'Deutsch', flag: 'de' },
    { code: 'it', name: 'Italiano', flag: 'it' }
  ];

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  private initLanguage() {
    const savedLang = localStorage.getItem('preferred_language') || 'en';
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage.next(lang);
    localStorage.setItem('preferred_language', lang);
    
    // Handle RTL for Arabic
    if (lang === 'ar') {
      document.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.dir = 'ltr';
      document.documentElement.lang = lang;
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }
}