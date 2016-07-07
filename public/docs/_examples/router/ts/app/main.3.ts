/* third version */
// #docregion
// main entry point
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app.component.3';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));