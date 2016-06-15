import { provide }    from '@angular/core';
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA }  from 'angular2-in-memory-web-api';
import { HeroData }   from './hero-data';
// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import {AppComponent} from './ox.app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA, { useClass: HeroData })                // in-mem server data
]).catch((err: any) => console.error(err));