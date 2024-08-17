import { HttpClient } from "@angular/common/http"
import {map, Observable, tap} from "rxjs";
import { Router } from "@angular/router"
import {buildApplicationRoutes} from "../utils/routes";
import {MicrofrontendConfig} from "../utils/config";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MicrofrontendLoaderService {
  constructor(
    private readonly _router: Router,
    private readonly _httpClient: HttpClient
  ) {}

  buildDynamicRoutes(): Observable<boolean> {
    return this.resolveConfig().pipe(
      tap(v =>
    console.log(v)),
      tap(cfg =>
        this._router.resetConfig(
          buildApplicationRoutes(cfg),
        ),
      ),
      map(_ => true),
    )
  }

  private resolveConfig(): Observable<MicrofrontendConfig[]> {
    return this._httpClient.get<MicrofrontendConfig[]>('/assets/federation.manifest.json')
  }
}
