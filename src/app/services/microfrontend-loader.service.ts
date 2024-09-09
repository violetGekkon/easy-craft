import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router"
import {buildApplicationRoutes} from "../utils/routes";

@Injectable({
  providedIn: 'root',
})
export class MicrofrontendLoaderService {
  constructor(
    private readonly _router: Router,
  ) {
  }

  buildDynamicRoutes(): Observable<boolean> {
    this._router.resetConfig(
      buildApplicationRoutes((window as any).MICROFRONTEND_MANIFEST)
    )
    return of(true);
  }

}
