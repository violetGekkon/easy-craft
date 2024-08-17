import { LoadRemoteModuleOptions } from "@angular-architects/native-federation";

export type MicrofrontendConfig = LoadRemoteModuleOptions & {
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;
};
