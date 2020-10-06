"use strict";

exports.__esModule = true;
exports.PaymentDetailService = void 0;

var core_1 = require("@angular/core");

var PaymentDetailService =
/** @class */
function () {
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

  PaymentDetailService.prototype.postPaymentDetail = function (formData) {
    return this.http.post(this.rootURL + '/PaymentDetail', formData);
  };

  PaymentDetailService = __decorate([core_1.Injectable({
    providedIn: 'root'
  })], PaymentDetailService);
  return PaymentDetailService;
}();

exports.PaymentDetailService = PaymentDetailService;