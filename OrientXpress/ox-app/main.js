"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var ox_app_component_1 = require('./ox.app.component');
require('rxjs/add/operator/map');
platform_browser_dynamic_1.bootstrap(ox_app_component_1.AppComponent, [http_1.HTTP_BINDINGS]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map