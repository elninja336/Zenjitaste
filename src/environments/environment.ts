// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  googleMapsApiKey: 'YOUR_GOOGLE_MAPS_KEY',
  paymentGateways: {
    mpesa: {
      consumerKey: 'YOUR_MPESA_KEY',
      consumerSecret: 'YOUR_MPESA_SECRET'
    },
    paypal: {
      clientId: 'YOUR_PAYPAL_CLIENT_ID'
    },
    stripe: {
      publishableKey: 'YOUR_STRIPE_KEY'
    }
  },
  supportedLanguages: ['en', 'sw', 'ar', 'fr', 'de', 'it'],
  supportedCurrencies: ['USD', 'TZS', 'EUR', 'GBP'],
  defaultLanguage: 'en',
  defaultCurrency: 'USD'
};