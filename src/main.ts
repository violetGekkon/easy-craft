import { initFederation } from '@angular-architects/native-federation';
import {fetchManifest} from "./app/utils/init";


fetchManifest().then(m =>
  initFederation(m)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err)))


