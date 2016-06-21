"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var ox_app_component_1 = require('./ox.app.component');
var ox_app_routes_1 = require('./ox.app.routes');
platform_browser_dynamic_1.bootstrap(ox_app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, ox_app_routes_1.APP_ROUTER_PROVIDERS]).then(function (success) { return console.log('app bootstrapped...'); }, function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map