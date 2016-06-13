import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_BINDINGS} from '@angular/http';
import {AppComponent} from './ox.app.component';
import 'rxjs/add/operator/map';
bootstrap(AppComponent, [HTTP_BINDINGS]).catch((err: any) => console.error(err));