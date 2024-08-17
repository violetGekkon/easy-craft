import { initFederation } from '@angular-architects/native-federation';

initFederation('/assets/federation.manifest.json')
  .then(() => console.log('Federation loaded'))
  .catch(err => console.error('error from shell main.ts ', err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
