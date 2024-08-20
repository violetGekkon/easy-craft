import {loadRemoteModule} from '@angular-architects/native-federation';
import {Routes} from "@angular/router";
import {Manifest, MicrofrontendConfig} from "./config";

export function buildApplicationRoutes(options: Manifest): Routes {

  const routes: Routes = [];
  for (const [key, value] of Object.entries(options)) {

    routes.push({
      path: key,
        // loadComponent: () =>
        //   loadRemoteModule(key, './Component').then((m) => m.AppComponent),
        loadChildren: () =>
          loadRemoteModule(key, './routes').then((m) => m.MAIN_ROUTES),
    }
    )
  }

  // const lazyRoutes: Routes = Object.keys(options).map(key => {
  //   const entry = options[key];
  //   return {
  //     path: entry.routePath,
  //     loadChildren: () =>
  //       loadRemoteModule({
  //         remoteName: key,
  //         exposedModule: entry.exposedModule
  //       })
  //         .then(m => m[entry.ngModuleName])
  //   }
  // });
  // const mfRoutes: Routes = Array.from(options).map(o => ({
  //   path: o.routePath,
  //   loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName]),
  //   // canActivate: [AuthGuard],
  // }));

  return [
    ...routes,
    {
      path: '',
      redirectTo: 'cabinet',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: '404',
      pathMatch: 'full',
    },
  ];
}
