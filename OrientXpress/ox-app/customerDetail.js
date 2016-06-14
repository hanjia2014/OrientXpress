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
var CustomerDetail = (function () {
    function CustomerDetail() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', customerService_1.Customer)
    ], CustomerDetail.prototype, "customer", void 0);
    CustomerDetail = __decorate([
        angular2_1.Component({
            selector: 'customer-detail',
            template: "\n  <div class=\"panel panel-default\">\n    <div *ng-if=\"!customer\" class=\"panel-heading\">\n      <h3 class=\"panel-title\">Select a Customer</h3>\n    </div>\n    <div *ng-if=\"customer\" class=\"panel-heading\">\n      <h3 class=\"panel-title\">{{customer.name.first}} {{customer.name.last}}</h3>\n    </div>\n    <ul class=\"list-group\" *ng-if=\"customer\">\n      <li class=\"list-group-item\">\n        <h4 class=\"list-group-item-heading\">First Name</h4>\n        <p class=\"list-group-item-text\">{{customer.name.first}}</p>\n      </li>\n      <li class=\"list-group-item\">\n        <h4 class=\"list-group-item-heading\">Last Name</h4>\n        <p class=\"list-group-item-text\">{{customer.name.last}}</p>\n      </li>\n      <li class=\"list-group-item\">\n        <h4 class=\"list-group-item-heading\">First Name</h4>\n        <p class=\"list-group-item-text\">{{customer.email}}</p>\n      </li>\n  </ul>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerDetail);
    return CustomerDetail;
}());
exports.CustomerDetail = CustomerDetail;
//# sourceMappingURL=customerDetail.js.map