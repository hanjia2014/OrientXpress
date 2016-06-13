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
var event_service_1 = require('./event.service');
var AppComponent = (function () {
    function AppComponent(eventService) {
        var _this = this;
        this.eventService = eventService;
        this.onSelect = function (event) {
            _this.selectedEvent = event;
        };
        this.getEvents = function () {
            _this.events = _this.eventService.getEvents();
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ox-app',
            templateUrl: "ox-app/event-summary.html",
            providers: [event_service_1.EventService]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component - Copy.js.map