import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// // Translation
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// // Google Maps
// import { GoogleMapsModule } from '@angular/google-maps';

// import { AppRoutingModule } from './app-routing-module';
// import { AppComponent } from './app.component';
// import { CoreModule } from './core/core-module';
// import { SharedModule } from './shared/shared-module';
// import { AuthInterceptor } from './core/interceptors/auth.interceptor';
// import { ErrorInterceptor } from './core/interceptors/error.interceptor';

// // Translation loader
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     AppRoutingModule,
//     HttpClientModule,
//     CoreModule,
//     SharedModule,
//     GoogleMapsModule,
//     TranslateModule.forRoot({
//       defaultLanguage: 'en',
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     })
//   ],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }