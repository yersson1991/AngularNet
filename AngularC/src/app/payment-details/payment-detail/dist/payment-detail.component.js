"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentDetailComponent = void 0;
var core_1 = require("@angular/core");
var PaymentDetailComponent = /** @class */ (function () {
    function PaymentDetailComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    PaymentDetailComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    PaymentDetailComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.form.reset();
        this.service.formData = {
            PMId: 0,
            CardOwnerName: '',
            CardNumber: '',
            ExpirationDate: '',
            CVV: ''
        };
    };
    PaymentDetailComponent.prototype.onSubmit = function (form) {
        if (this.service.formData.PMId == 0)
            this.insertRecord(form);
        else
            this.updateRecord(form);
    };
    PaymentDetailComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.postPaymentDetail().subscribe(function (res) {
            debugger;
            _this.resetForm(form);
            _this.toastr.success('Submitted successfully', 'Payment Detail Register');
            _this.service.refreshList();
        }, function (err) {
            debugger;
            console.log(err);
        });
    };
    PaymentDetailComponent.prototype.updateRecord = function (form) {
        var _this = this;
        this.service.putPaymentDetail().subscribe(function (res) {
            _this.resetForm(form);
            _this.toastr.info('Submitted successfully', 'Payment Detail Register');
            _this.service.refreshList();
        }, function (err) {
            console.log(err);
        });
    };
    PaymentDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-payment-detail',
            templateUrl: './payment-detail.component.html',
            styles: []
        })
    ], PaymentDetailComponent);
    return PaymentDetailComponent;
}());
exports.PaymentDetailComponent = PaymentDetailComponent;
