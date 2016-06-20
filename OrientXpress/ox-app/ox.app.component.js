"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('./rxjs-operators');
var event_service_1 = require('./event.service');
var event_detail_component_1 = require('./event-detail.component');
var AppComponent = (function () {
    function AppComponent(eventService) {
        var _this = this;
        this.eventService = eventService;
        this.onSelect = function (event) {
            _this.selectedEvent = event;
        };
        this.getEvents = function () {
            _this.eventService.getEvents().subscribe(function (data) {
                _this.events = data;
                _this.events.forEach(function (event) {
                    _this.truncateContent(event);
                });
            }, function (err) { return _this.error = err; });
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    AppComponent.prototype.truncateContent = function (event) {
        var maxLength = 100;
        //trim the string to the maximum length
        var trimmedString = event.Content.substr(0, maxLength);
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
        event.Truncate = trimmedString + "...";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ox-app',
            templateUrl: "ox-app/event-summary.html",
            providers: [event_service_1.EventService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/eventdetail/:id', component: event_detail_component_1.EventDetail }
        ]), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=ox.app.component.js.map