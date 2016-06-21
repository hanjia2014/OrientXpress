import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import { AppComponent }   from './ox.app.component';
import { APP_ROUTER_PROVIDERS } from './ox.app.routes';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]).then(
    (success: any) => console.log('app bootstrapped...'),
    (error: any) => console.log(error)
);