(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["back-end-sector-sales-module"],{

/***/ "67v/":
/*!*********************************************!*\
  !*** ./src/services/sector.sale.service.ts ***!
  \*********************************************/
/*! exports provided: SectorSaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorSaleService", function() { return SectorSaleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/consts/car.sizes.const */ "qB6b");
/* harmony import */ var src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/enums/car.sizes.enum */ "hLCK");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "NqkH");
/* harmony import */ var _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom.validators.service */ "QVRC");
/* harmony import */ var _authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seo.service */ "C2k8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http/http.service */ "H5vj");
/* harmony import */ var _sweet_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sweet.alert.service */ "QZpK");












class SectorSaleService {
    constructor(u, seo, router, http, sweetAlertService) {
        this.u = u;
        this.seo = seo;
        this.router = router;
        this.http = http;
        this.sweetAlertService = sweetAlertService;
        this.clinets = [];
        this.freightCases = [];
        this.buySources = [];
        this.states = [];
        this.allStates = [];
        this.freightPorts = [];
        this.arrivalPorts = [];
        this.carSizes = src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_2__["carSizesArray"];
        this.navigationalWayes = [];
        this.containers = [];
        this.isFormSubmitError = false;
        this.isRequestingToServer = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.onDeletedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Init Create And Update Form
     */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            carMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            buySourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            freightStateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            cityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            carSizeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            freightPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            arrivalPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            carBodyNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            carPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].invalidNumber]),
            landFreightPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].invalidNumber]),
            maritimeFreightPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].invalidNumber]),
            sellPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].invalidNumber]),
            arrivalDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            carCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            netProfit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
        this.isFormSubmitError = false;
        this.isRequestingToServer = false;
        this.form.controls.freightPortId.valueChanges.subscribe(value => { this.updateMaritimFreightPrices(); this.loadStates(); });
        this.form.controls.carSizeId.valueChanges.subscribe(value => this.updateMaritimFreightPrices());
        this.form.controls.freightStateId.valueChanges.subscribe(value => { this.loadStateCities(value); });
        this.form.controls.cityId.valueChanges.subscribe(value => { this.updateLandFreightPrices(); });
        this.disapledControls();
    }
    /**
     * Init Delete From
     */
    initDeletingForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            clinetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
        this.form.disable();
    }
    /**
 * Close: Back To The Page
 */
    closeModel() {
        this.isFormSubmitError = false;
        this.form.reset();
        this.router.navigate(['/sectorSales']);
    }
    /** Disapled Som Form Controls */
    disapledControls() {
        this.form.controls.landFreightPrice.disable();
        this.form.controls.maritimeFreightPrice.disable();
        this.form.controls.refranceNumber.disable();
        this.form.controls.carCost.disable();
        this.form.controls.netProfit.disable();
    }
    /**Get Items To Select From Them */
    getItems(itemName) {
        let itemsNames = itemName ? [itemName] : [
            "clinets", "freightCases", "buySources", "states", "freightPorts", "arrivalPorts"
        ];
        this.http.getSelectItems(itemsNames).subscribe(res => {
            if (res.isSuccess) {
                itemsNames.forEach(itemName => {
                    if (itemName == "states") {
                        //Save All States Becuse Filter In It Affter User Select The Freight Port
                        this.allStates = res.result.states;
                        this.loadStates();
                    }
                    else
                        this[itemName] = res.result[itemName];
                });
            }
            _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"].showResponseMessage(res);
        }, error => {
            _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"].canRequestError(error);
        });
    }
    /**
     * Load States By Freight Port Id
     */
    loadStates(freightPortId = this.form.controls.freightPortId.value) {
        this.states = [];
        if (freightPortId && this.allStates.length)
            this.states = this.allStates.filter(st => st.freightPortId == freightPortId);
        this.loadStateCities();
    }
    /** Load State Cities */
    loadStateCities(stateId = this.form.controls.freightStateId.value) {
        var _a;
        this.cities = [];
        if (this.states.length && stateId) {
            this.cities = ((_a = this.states.find(m => m._id == stateId)) === null || _a === void 0 ? void 0 : _a.cities) || [];
        }
        this.updateLandFreightPrices();
    }
    /**
  * تحديث سعر الشحن البرى بناء على مدينة الشحن
    */
    updateLandFreightPrices(cityId = this.form.controls.cityId.value) {
        let price = 0;
        if (cityId && this.cities.length) {
            let city = this.cities.find(ci => ci._id == this.form.controls.cityId.value);
            //سعر الشحن البرى ثابت على المدينة او الولايه كلها انما البحرى فهو على حجم السيارة
            price = +(city === null || city === void 0 ? void 0 : city.landFreightPrice);
        }
        this.form.controls.landFreightPrice.setValue(price || 0);
    }
    /**
     * تحديث سعر الشحن البحري بناء على حجم السيارة وميناء الشحن
    */
    updateMaritimFreightPrices() {
        if (!this.form.controls.carSizeId.value || !this.form.controls.freightPortId.value)
            return;
        let port = this.freightPorts.find(st => st._id == this.form.controls.freightPortId.value);
        if (this.form.controls.carSizeId.value == src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_3__["CarSizesEnum"].small)
            this.form.controls.maritimeFreightPrice.setValue(+port.maritimeFreightPriceToSmallCar || 0);
        if (this.form.controls.carSizeId.value == src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_3__["CarSizesEnum"].medium)
            this.form.controls.maritimeFreightPrice.setValue(+port.maritimeFreightPriceToMediumCar || 0);
        if (this.form.controls.carSizeId.value == src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_3__["CarSizesEnum"].big)
            this.form.controls.maritimeFreightPrice.setValue(+port.maritimeFreightPriceToBigCar || 0);
    }
} //End Class
SectorSaleService.ɵfac = function SectorSaleService_Factory(t) { return new (t || SectorSaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_seo_service__WEBPACK_IMPORTED_MODULE_7__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sweet_alert_service__WEBPACK_IMPORTED_MODULE_10__["SweetAlertService"])); };
SectorSaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SectorSaleService, factory: SectorSaleService.ɵfac });


/***/ }),

/***/ "7l7X":
/*!*******************************************************************************************!*\
  !*** ./src/app/back-end/sector-sales/delete-sector-sales/delete.sector.sale.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DeleteSectorSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSectorSaleComponent", function() { return DeleteSectorSaleComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_sector_sale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/sector.sale.service */ "67v/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["class", "-sale"];
function DeleteSectorSaleComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
} }
class DeleteSectorSaleComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service, activateRouter) {
        super();
        this.service = service;
        this.activateRouter = activateRouter;
    }
    ngOnInit() {
        this.service.initDeletingForm();
        this.service.form.controls._id.setValue(this.activateRouter.snapshot.params.targetId);
        //Get From The Serer
        this.getSectorSaleToDelete();
    }
    /**
     * Get Car Mark From Server To Delete
     */
    getSectorSaleToDelete() {
        this.service.isRequestingToServer = true;
        this.allSubscriptions.push(this.service.http.getSectorSaleToDelete(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            this.service.isRequestingToServer = false;
            if (res.isSuccess) {
                this.service.form.controls.refranceNumber.setValue(res.result.refranceNumber);
                this.service.form.controls.clinetName.setValue(res.result.clinetName);
            }
            else {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
                this.service.closeModel();
            }
        }, error => {
            this.service.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
    /**
     * Delete Item
     */
    onSubmit() {
        if (this.service.form.invalid) {
            this.service.isFormSubmitError = true;
            return;
        }
        this.service.isRequestingToServer = true;
        this.allSubscriptions.push(this.service.http.deleteSectorSale(this.service.form.controls._id.value)
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            this.service.isRequestingToServer = false;
            if (res.isSuccess) {
                //Pass The New Item To Page
                this.service.onDeletedItem.emit(this.activateRouter.snapshot.params.targetId);
                //Back To Component
                this.service.closeModel();
            }
        }, error => {
            this.service.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
DeleteSectorSaleComponent.ɵfac = function DeleteSectorSaleComponent_Factory(t) { return new (t || DeleteSectorSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_sector_sale_service__WEBPACK_IMPORTED_MODULE_3__["SectorSaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
DeleteSectorSaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DeleteSectorSaleComponent, selectors: [["app-delete-sector", 8, "-sale"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 18, vars: 15, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], [1, "form-group"], [1, "text-center", 3, "innerHtml"], ["app-text-input", "", "fcn", "clinetName", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-danger", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function DeleteSectorSaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function DeleteSectorSaleComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DeleteSectorSaleComponent_div_13_Template, 1, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeleteSectorSaleComponent_Template_button_click_14_listener() { return ctx.service.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("form-submited", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.service.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.service.u.r.areYouSureToDeleteThe, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.service.u.r.clinetName)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.service.u.r.refranceNumber)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.service.u.r.yesDelete, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.service.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__["TextInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "PYZH":
/*!*****************************************************!*\
  !*** ./src/modules/back-end/sector.sales.module.ts ***!
  \*****************************************************/
/*! exports provided: SectorSalesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorSalesModule", function() { return SectorSalesModule; });
/* harmony import */ var src_app_back_end_sector_sales_delete_sector_sales_delete_sector_sale_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/back-end/sector-sales/delete-sector-sales/delete.sector.sale.component */ "7l7X");
/* harmony import */ var src_app_back_end_sector_sales_sector_sales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/sector-sales/sector.sales.component */ "tjwZ");
/* harmony import */ var src_services_sector_sale_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/sector.sale.service */ "67v/");
/* harmony import */ var _form_inputs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.inputs.module */ "mmFQ");
/* harmony import */ var _sector_sales_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sector.sales.router.module */ "lFVh");
/* harmony import */ var _shared_back_end_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.back.end.module */ "0sbA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class SectorSalesModule {
}
SectorSalesModule.ɵfac = function SectorSalesModule_Factory(t) { return new (t || SectorSalesModule)(); };
SectorSalesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SectorSalesModule });
SectorSalesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [src_services_sector_sale_service__WEBPACK_IMPORTED_MODULE_2__["SectorSaleService"]], imports: [[
            _shared_back_end_module__WEBPACK_IMPORTED_MODULE_5__["SharedBackEndModule"],
            _sector_sales_router_module__WEBPACK_IMPORTED_MODULE_4__["SectorSalesRoutingModule"],
            _form_inputs_module__WEBPACK_IMPORTED_MODULE_3__["FormInputsModeul"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SectorSalesModule, { declarations: [src_app_back_end_sector_sales_sector_sales_component__WEBPACK_IMPORTED_MODULE_1__["SectorSalesComponent"],
        src_app_back_end_sector_sales_delete_sector_sales_delete_sector_sale_component__WEBPACK_IMPORTED_MODULE_0__["DeleteSectorSaleComponent"]], imports: [_shared_back_end_module__WEBPACK_IMPORTED_MODULE_5__["SharedBackEndModule"],
        _sector_sales_router_module__WEBPACK_IMPORTED_MODULE_4__["SectorSalesRoutingModule"],
        _form_inputs_module__WEBPACK_IMPORTED_MODULE_3__["FormInputsModeul"]] }); })();


/***/ }),

/***/ "lFVh":
/*!************************************************************!*\
  !*** ./src/modules/back-end/sector.sales.router.module.ts ***!
  \************************************************************/
/*! exports provided: SectorSalesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorSalesRoutingModule", function() { return SectorSalesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_back_end_sector_sales_sector_sales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/sector-sales/sector.sales.component */ "tjwZ");
/* harmony import */ var src_app_back_end_sector_sales_delete_sector_sales_delete_sector_sale_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/back-end/sector-sales/delete-sector-sales/delete.sector.sale.component */ "7l7X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const ROUTS = [
    {
        path: '', component: src_app_back_end_sector_sales_sector_sales_component__WEBPACK_IMPORTED_MODULE_1__["SectorSalesComponent"],
        children: [
            { path: "delete/:targetId", component: src_app_back_end_sector_sales_delete_sector_sales_delete_sector_sale_component__WEBPACK_IMPORTED_MODULE_2__["DeleteSectorSaleComponent"] },
        ]
    },
];
class SectorSalesRoutingModule {
}
SectorSalesRoutingModule.ɵfac = function SectorSalesRoutingModule_Factory(t) { return new (t || SectorSalesRoutingModule)(); };
SectorSalesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SectorSalesRoutingModule });
SectorSalesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTS)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SectorSalesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "tjwZ":
/*!*****************************************************************!*\
  !*** ./src/app/back-end/sector-sales/sector.sales.component.ts ***!
  \*****************************************************************/
/*! exports provided: SectorSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorSalesComponent", function() { return SectorSalesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/custom.validators.service */ "QVRC");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.components */ "iY+S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_sector_sale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/sector.sale.service */ "67v/");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/date-input/date.input.component */ "3CG7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/fop/fop-header/fop-header.component */ "OhZK");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/fop/fop-sort/fop-sort.component */ "lyqo");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/fop/fop-paging/fop.paging.component */ "VjaU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");

















const _c0 = ["class", "-sale"];
function SectorSalesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 43);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r0.service.u.r.loadingData);
} }
function SectorSalesComponent_tr_68_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 48);
} }
const _c1 = function (a2) { return ["/freights", "edit", a2]; };
const _c2 = function (a2) { return ["/sectorSales", "delete", a2]; };
function SectorSalesComponent_tr_68_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "circle", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "circle", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "circle", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c1, item_r2._id))("title", ctx_r4.service.u.r.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.service.u.r.edit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c2, item_r2._id))("title", ctx_r4.service.u.r.delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.service.u.r.delete, " ");
} }
const _c3 = function (a3) { return ["/reports", "freights", "fullDetails", a3]; };
const _c4 = function (a0, a1) { return { "color": a0, "background-color": a1 }; };
function SectorSalesComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SectorSalesComponent_tr_68_div_2_Template, 1, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SectorSalesComponent_tr_68_div_3_Template, 13, 10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.clinetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.clinetPhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.refranceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 21, item_r2.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.carMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](25, _c3, item_r2._id))("innerText", item_r2.carBodyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.buySourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.freightStateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](27, _c4, item_r2.portFontColor, item_r2.portBackgroundColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.freightPortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.carSizeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.landFreightPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.maritimeFreightPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.carCost);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.sellPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", item_r2.netProfit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 23, item_r2.arrivalDate));
} }
class SectorSalesComponent extends _shared_components__WEBPACK_IMPORTED_MODULE_4__["SharedComponents"] {
    constructor(service) {
        super();
        this.service = service;
        /**
         * Page Target
         */
        this.skip = 0;
        this.limit = 50;
        this.entries = [];
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            clinetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__["CustomValidatorsService"].phoneNumber),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__["CustomValidatorsService"].invalidNumber),
            commissionTransfare: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__["CustomValidatorsService"].invalidNumber),
            createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
        });
    }
    ngOnInit() {
        this.service.seo.updateSEO("sectorSales");
        this.getEntiries(false);
        //Listener On Delete Item Event
        this.allSubscriptions.push(this.service.onDeletedItem.subscribe(deletedItemId => {
            let deletedIndex = this.entries.findIndex(ent => ent._id == deletedItemId);
            if (deletedIndex >= 0) {
                this.entries.splice(deletedIndex, 1);
                this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
            }
        }));
    }
    /**
   * Get My Users
   */
    getEntiries(isReset) {
        if (isReset) {
            if (this.form.invalid) {
                this.formSubmitError = true;
                this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, 0);
                return;
            }
            this.skip = 0;
            this.entries = [];
        }
        this.formSubmitError = false;
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.service.http.getSectorSales(this.skip, this.limit, this.form.value).subscribe(res => {
            //Update FOP Properties
            if (res.noMoreOfResult)
                this.fop.paging.disableGetMoreButton = true;
            this.fop.paging.isRequestingToServer = false;
            if (res.isSuccess) {
                this.entries = [...this.entries, ...res.result];
                //Fop 
                this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
                this.skip += this.limit;
            }
            else {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
            this.fop.paging.isRequestingToServer = false;
        }, () => {
            this.fop.paging.isRequestingToServer = false;
        }));
    }
    funTrack(index, entitiy) {
        return entitiy === null || entitiy === void 0 ? void 0 : entitiy._id;
    }
} //End CLass
SectorSalesComponent.ɵfac = function SectorSalesComponent_Factory(t) { return new (t || SectorSalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_sector_sale_service__WEBPACK_IMPORTED_MODULE_6__["SectorSaleService"])); };
SectorSalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SectorSalesComponent, selectors: [["app-sector", 8, "-sale"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 74, vars: 68, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], [1, "form-row", "mb-2"], ["app-text-input", "", "fcn", "clinetName", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "phoneNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-date-input", "", "fcn", "createdDate", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "reset", "type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled"], [1, "d-flex", "justify-content-between"], [1, "row", "form-group"], [1, "table-responsive"], ["tableId", "sectorSellTable", 3, "searchText"], ["id", "sectorSellTable", 1, "table", "mb-4", "table-hover"], [1, "th-5", 3, "innerText"], [1, "th-15"], ["filedName", "clinetName", 3, "fop", "fieldText"], ["filedName", "clinetPhoneNumber", 3, "fop", "fieldText"], ["filedName", "refranceNumber", 3, "fop", "fieldText"], ["filedName", "createdDate", 3, "fop", "fieldText"], ["filedName", "carMark", 3, "fop", "fieldText"], ["filedName", "carBodyNumber", 3, "fop", "fieldText"], ["filedName", "buySourceName", 3, "fop", "fieldText"], ["filedName", "freightStateName", 3, "fop", "fieldText"], ["filedName", "freightPortName", 3, "fop", "fieldText"], ["filedName", "carSizeName", 3, "fop", "fieldText"], ["filedName", "landFreightPrice", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPrice", 3, "fop", "fieldText"], ["filedName", "carCost", 3, "fop", "fieldText"], ["filedName", "sellPrice", 3, "fop", "fieldText"], ["filedName", "netProfit", 3, "fop", "fieldText"], ["filedName", "arrivalDate", 3, "fop", "fieldText"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], [2, "display", "inline-flex"], ["class", "spinner-grow text-danger align-self-center loader-sm", 4, "ngIf"], ["class", "dropdown dropup custom-dropdown-icon    ", 4, "ngIf"], [1, "link", 3, "routerLink", "innerText"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"], [1, "dropdown", "dropup", "custom-dropdown-icon"], ["href", "#", "role", "button", "id", "dropdownMenuLink-3", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-more-vertical"], ["cx", "12", "cy", "12", "r", "1"], ["cx", "12", "cy", "5", "r", "1"], ["cx", "12", "cy", "19", "r", "1"], ["aria-labelledby", "dropdownMenuLink-3", 1, "dropdown-menu", "dropdown-menu-right", 2, "will-change", "transform"], [1, "dropdown-item", "mr-2", 3, "routerLink", "title"], [1, "far", "fa-edit", "fa-1-5x"], [1, "far", "fa-trash-alt", "fa-1-5x"]], template: function SectorSalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function SectorSalesComponent_Template_form_submit_8_listener() { return ctx.getEntiries(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, SectorSalesComponent_div_18_Template, 1, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "fop-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("searchText", function SectorSalesComponent_Template_fop_header_searchText_30_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "fop-sort", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "fop-sort", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "fop-sort", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "fop-sort", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "fop-sort", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "fop-sort", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "fop-sort", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "fop-sort", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "fop-sort", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "fop-sort", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "fop-sort", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "fop-sort", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "fop-sort", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "fop-sort", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "fop-sort", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "fop-sort", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, SectorSalesComponent_tr_68_Template, 23, 30, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](69, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](70, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](71, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "fop-paging", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("getMoreItems", function SectorSalesComponent_Template_fop_paging_getMoreItems_72_listener() { return ctx.getEntiries(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", ctx.service.u.r.filterIn + " " + ctx.service.u.r.sectorSales);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx.form)("lable", ctx.service.u.r.clinetName)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx.form)("lable", ctx.service.u.r.clinetPhoneNumber)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx.form)("lable", ctx.service.u.r.refranceNumber)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx.form)("lable", ctx.service.u.r.trnasactionDate)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.service.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", ctx.service.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", ctx.service.u.r.sectorSales);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerText", ctx.service.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.clinet);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.trnasactionDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightState);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.landFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.maritimeFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carCost);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.sellPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.netProfit);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](69, 56, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](70, 60, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](71, 64, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__["TextInputComponent"], src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_8__["DateInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_14__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=back-end-sector-sales-module.js.map