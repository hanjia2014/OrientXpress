"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_2 = require('@angular/http');
var ox_app_component_1 = require('./ox.app.component');
platform_browser_dynamic_1.bootstrap(ox_app_component_1.AppComponent, [
    http_2.HTTP_PROVIDERS,
    core_1.provide(http_1.XHRBackend, { useClass: angular2_in_memory_web_api_1.InMemoryBackendService }),
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map