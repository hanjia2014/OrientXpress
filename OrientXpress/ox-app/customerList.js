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
var customerService_1 = require('./customerService');
var CustomerList = (function () {
    function CustomerList() {
        this.selectedChange = new angular2_1.EventEmitter();
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Array)
    ], CustomerList.prototype, "customers", void 0);
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', customerService_1.Customer)
    ], CustomerList.prototype, "selected", void 0);
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof angular2_1.EventEmitter !== 'undefined' && angular2_1.EventEmitter) === 'function' && _a) || Object)
    ], CustomerList.prototype, "selectedChange", void 0);
    CustomerList = __decorate([
        angular2_1.Component({
            selector: 'customer-list',
            template: "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Customers</h3>\n    </div>\n    <ul class=\"nav nav-pills nav-stacked\">\n      <li \n        *ng-for=\"#customer of customers\"\n        role=\"presentation\"\n        [class.active]=\"selected == customer\">\n        <a (click)=\"selectedChange.next(customer)\">{{customer.name.first}} {{customer.name.last}}</a></li>\n    </ul>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerList);
    return CustomerList;
    var _a;
}());
exports.CustomerList = CustomerList;
//# sourceMappingURL=customerList.js.map