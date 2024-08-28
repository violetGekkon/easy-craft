import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideHttpClient} from "@angular/common/http";
import {provideRouter} from '@angular/router';
import {MicrofrontendLoaderService} from "./services/microfrontend-loader.service";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideHttpClient(),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: MicrofrontendLoaderService) => () => configService.buildDynamicRoutes(),
      deps: [MicrofrontendLoaderService],
      multi: true,
    },
  ]
};
