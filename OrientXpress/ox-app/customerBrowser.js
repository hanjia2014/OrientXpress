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
var angular2_1 = require('angular2/angular2');
var customerList_1 = require('./customerList');
var customerDetail_1 = require('./customerDetail');
var CustomerBrowser = (function () {
    function CustomerBrowser() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Array)
    ], CustomerBrowser.prototype, "customers", void 0);
    CustomerBrowser = __decorate([
        angular2_1.Component({
            selector: 'customer-browser',
            template: "\n  <div class=\"row\">\n    <customer-list [customers]=\"customers\" [(selected)]=\"selectedCustomer\" class=\"col-xs-4\"></customer-list>\n    <customer-detail [customer]=\"selectedCustomer\" class=\"col-xs-8\"></customer-detail>\n  </div>\n  ",
            directives: [customerList_1.CustomerList, customerDetail_1.CustomerDetail],
            encapsulation: angular2_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerBrowser);
    return CustomerBrowser;
}());
exports.CustomerBrowser = CustomerBrowser;
//# sourceMappingURL=customerBrowser.js.map