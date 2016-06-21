import { provideRouter, RouterConfig } from '@angular/router';
import {EventDetail} from './event-detail.component'
export const routes: RouterConfig = [
    { path: 'event-detail/:id', component: EventDetail }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];