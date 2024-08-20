import {HttpClient} from "@angular/common/http"
import {map, Observable, tap} from "rxjs";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router"
import {buildApplicationRoutes} from "../utils/routes";
import {Manifest} from "../utils/config";

@Injectable({
  providedIn: 'root',
})
export class MicrofrontendLoaderService {
  constructor(
    private readonly _router: Router,
    private readonly _httpClient: HttpClient
  ) {
  }

  buildDynamicRoutes(): Observable<boolean> {
    return this.resolveConfig().pipe(
      tap(cfg =>
        this._router.resetConfig(
          buildApplicationRoutes(cfg),
        ),
      ),
      map(_ => true),
    )
  }

  private resolveConfig(): Observable<Manifest> {
    return this._httpClient.get<Manifest>('/assets/federation.manifest.json')
  }
}
