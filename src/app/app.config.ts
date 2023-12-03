import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideClientHydration, withHttpTransferCacheOptions} from '@angular/platform-browser';
import {initializeApp} from "./app.initializer";
import {provideHttpClient, withFetch} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(
      withHttpTransferCacheOptions({includePostRequests: true}),
      ),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,

      // deps: [AuthStore],
    },
    provideHttpClient(
      withFetch(),
    )
  ]
};
