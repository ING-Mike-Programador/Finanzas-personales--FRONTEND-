import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import {LocationStrategy, HashLocationStrategy, registerLocaleData} from '@angular/common';
import { routes } from './app.routes';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');
export const appConfig: ApplicationConfig = {
    providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // HAshstrategy
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    // Configuración de la localización a español
    {
      provide: LOCALE_ID,
      //useValue: 'es'
      useFactory: () => 'es',
    },
  ]
};
