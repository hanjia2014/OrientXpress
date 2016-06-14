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
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
var Customer = (function () {
    function Customer(data) {
        this.id = data._id;
        this.email = data.email;
        this.name = data.name;
    }
    Customer.create = function (data) {
        return new Customer(data);
    };
    return Customer;
}());
exports.Customer = Customer;
var CustomerData = (function () {
    function CustomerData(http) {
        this.http = http;
        this.customers = http.get('http://beta.json-generator.com/api/json/get/VkCoTefEg')
            .map(function (res) { return res.json(); })
            .map(function (rawCustomers) { return rawCustomers.map(Customer.create); });
    }
    CustomerData = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], CustomerData);
    return CustomerData;
    var _a;
}());
exports.CustomerData = CustomerData;
//# sourceMappingURL=customerService.js.map