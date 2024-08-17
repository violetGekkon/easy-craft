import {loadRemoteModule} from '@angular-architects/native-federation';
import {Routes} from "@angular/router";
import {MicrofrontendConfig} from "./config";

export function buildApplicationRoutes(options: MicrofrontendConfig[]): Routes {

  const mfRoutes: Routes = Array.from(options).map(o => ({
    path: o.routePath,
    loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName]),
    // canActivate: [AuthGuard],
  }));

  return [
    ...mfRoutes,
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: '404',
      pathMatch: 'full',
    },
  ];
}
