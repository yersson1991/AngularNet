"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentDetailService = void 0;
var core_1 = require("@angular/core");
var PaymentDetailService = /** @class */ (function () {
    function PaymentDetailService(http) {
        this.http = http;
        this.formData = {
            CVV: null,
            CardNumber: null,
            CardOwnerName: null,
            ExpirationDate: null,
            PMId: null
        };
        this.rootURL = 'https://localhost:44325/api';
    }
    PaymentDetailService.prototype.postPaymentDetail = function () {
        return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
    };
    PaymentDetailService.prototype.putPaymentDetail = function () {
        return this.http.put(this.rootURL + '/PaymentDetail/' + this.formData.PMId, this.formData);
    };
    PaymentDetailService.prototype.deletePaymentDetail = function (id) {
        return this.http["delete"](this.rootURL + '/PaymentDetail/' + id);
    };
    PaymentDetailService.prototype.refreshList = function () {
        var _this = this;
        this.http.get(this.rootURL + '/PaymentDetail')
            .toPromise()
            .then(function (res) { return _this.list = res; });
    };
    PaymentDetailService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PaymentDetailService);
    return PaymentDetailService;
}());
exports.PaymentDetailService = PaymentDetailService;
