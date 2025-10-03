import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private currentCurrency = new BehaviorSubject<string>('USD');
  currentCurrency$ = this.currentCurrency.asObservable();

  supportedCurrencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'TZS', symbol: 'TSh', name: 'Tanzanian Shilling' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' }
  ];

  // Mock exchange rates (in production, fetch from API)
  private exchangeRates: any = {
    USD: 1,
    TZS: 2500,
    EUR: 0.92,
    GBP: 0.79
  };

  constructor() {
    const savedCurrency = localStorage.getItem('preferred_currency') || 'USD';
    this.setCurrency(savedCurrency);
  }

  setCurrency(currency: string) {
    this.currentCurrency.next(currency);
    localStorage.setItem('preferred_currency', currency);
  }

  getCurrentCurrency(): string {
    return this.currentCurrency.value;
  }

  convert(amount: number, fromCurrency: string, toCurrency: string): number {
    const inUSD = amount / this.exchangeRates[fromCurrency];
    return inUSD * this.exchangeRates[toCurrency];
  }

  formatCurrency(amount: number, currency?: string): string {
    const curr = currency || this.getCurrentCurrency();
    const currencyInfo = this.supportedCurrencies.find(c => c.code === curr);
    return `${currencyInfo?.symbol}${amount.toFixed(2)}`;
  }
}