"use strict";
var router_1 = require('@angular/router');
var event_detail_component_1 = require('./event-detail.component');
exports.routes = [
    { path: 'event-detail/:id', component: event_detail_component_1.EventDetail }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=ox.app.routes.js.map