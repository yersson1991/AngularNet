"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentDetailListComponent = void 0;
var core_1 = require("@angular/core");
var PaymentDetailListComponent = /** @class */ (function () {
    function PaymentDetailListComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    PaymentDetailListComponent.prototype.ngOnInit = function () {
        this.service.refreshList();
    };
    PaymentDetailListComponent.prototype.populateForm = function (pd) {
        this.service.formData = Object.assign({}, pd);
    };
    PaymentDetailListComponent.prototype.onDelete = function (PMId) {
        var _this = this;
        if (confirm('Are you sure to delete this record ?')) {
            this.service.deletePaymentDetail(PMId)
                .subscribe(function (res) {
                debugger;
                _this.service.refreshList();
                _this.toastr.warning('Deleted successfully', 'Payment Detail Register');
            }, function (err) {
                debugger;
                console.log(err);
            });
        }
    };
    PaymentDetailListComponent = __decorate([
        core_1.Component({
            selector: 'app-payment-detail-list',
            templateUrl: './payment-detail-list.component.html',
            styles: []
        })
    ], PaymentDetailListComponent);
    return PaymentDetailListComponent;
}());
exports.PaymentDetailListComponent = PaymentDetailListComponent;
