import { LoadRemoteModuleOptions } from "@angular-architects/native-federation";

// export declare type Manifest<T extends LoadRemoteModuleOptions = LoadRemoteModuleOptions> = {
//   [key: string]: T;
// };

export declare type Manifest = {
  [key: string]: string;
};

export type MicrofrontendConfig = LoadRemoteModuleOptions & {
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;
};

// export type MicrofrontendManifest = Manifest<MicrofrontendConfig>
