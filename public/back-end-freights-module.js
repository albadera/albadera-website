(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["back-end-freights-module"],{

/***/ "+HuL":
/*!******************************************************************************!*\
  !*** ./src/app/back-end/freights/delete-freight/delete.freight.component.ts ***!
  \******************************************************************************/
/*! exports provided: DeleteFreightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFreightComponent", function() { return DeleteFreightComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_freight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/freight.service */ "62F0");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










function DeleteFreightComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
} }
class DeleteFreightComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, freightService, http, activateRouter) {
        super();
        this.u = u;
        this.freightService = freightService;
        this.http = http;
        this.activateRouter = activateRouter;
    }
    ngOnInit() {
        this.freightService.initDeleteForm();
        this.freightService.form.controls._id.setValue(this.activateRouter.snapshot.params.targetId);
        //Check If Must Be Get Object From The Server
        if (history.state.deletingRefranceNumber) {
            this.freightService.form.controls.refranceNumber.setValue(history.state.deletingRefranceNumber);
            this.freightService.form.controls.clinetName.setValue(history.state.deletingClinetName);
            history.state.deletingRefranceNumber = null;
            history.state.deletingClinetName = null;
        }
        else {
            //Get From The Serer
            this.getFreightToDelete();
        }
    }
    /**
     * Get Car Mark From Server To Update
     */
    getFreightToDelete() {
        this.freightService.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.getFreightToDelete(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            this.freightService.isRequestingToServer = false;
            if (res.isSuccess) {
                this.freightService.form.controls.refranceNumber.setValue(res.result.refranceNumber);
                this.freightService.form.controls.clinetName.setValue(res.result.clinetName);
            }
            else
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
        }, error => {
            this.freightService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
    /**
     * Delete Item
     */
    onSubmit() {
        if (this.freightService.form.invalid) {
            this.freightService.isFormSubmitError = true;
            return;
        }
        this.freightService.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.deleteFreight(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            this.freightService.isRequestingToServer = false;
            if (res.isSuccess) {
                //Pass The New Item To Page
                this.freightService.onDeletedItem.emit(this.activateRouter.snapshot.params.targetId);
                //Back To Component
                this.freightService.closeModel();
            }
        }, error => {
            this.freightService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
DeleteFreightComponent.ɵfac = function DeleteFreightComponent_Factory(t) { return new (t || DeleteFreightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_freight_service__WEBPACK_IMPORTED_MODULE_4__["FreightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
DeleteFreightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DeleteFreightComponent, selectors: [["app-delete-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 15, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], [1, "form-group"], [1, "text-center", 3, "innerHtml"], ["app-text-input", "", "fcn", "clinetName", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-danger", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function DeleteFreightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function DeleteFreightComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DeleteFreightComponent_div_13_Template, 1, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeleteFreightComponent_Template_button_click_14_listener() { return ctx.freightService.closeModel(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("form-submited", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.freightService.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.areYouSureToDeleteThe, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.clinetName)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.refranceNumber)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.u.r.yesDelete, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_8__["TextInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "0R9u":
/*!*******************************************!*\
  !*** ./src/consts/freight.types.const.ts ***!
  \*******************************************/
/*! exports provided: FreitghtTypesArray, FreitghtTypesObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreitghtTypesArray", function() { return FreitghtTypesArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreitghtTypesObject", function() { return FreitghtTypesObject; });
/* harmony import */ var src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/freitght.types.enum */ "FyP3");

const FreitghtTypesArray = [{ _id: src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_0__["FreitghtTypesEnum"].Bidding, name: "مزايدة" },
    { _id: src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_0__["FreitghtTypesEnum"].SectorSale, name: "بيع قطاعى" },
    { _id: src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_0__["FreitghtTypesEnum"].FreightForDealer, name: "شحنة لتاجر" },
    { _id: src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_0__["FreitghtTypesEnum"].FreightForOffic, name: "شحنة لمكتب" }];
const FreitghtTypesObject = {
    [src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_0__["FreitghtTypesEnum"].Bidding]: "مزايدة",
    [src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_0__["FreitghtTypesEnum"].SectorSale]: "بيع قطاعى",
    [src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_0__["FreitghtTypesEnum"].FreightForDealer]: "شحنة لتاجر",
    [src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_0__["FreitghtTypesEnum"].FreightForOffic]: "شحنة لمكتب",
};
Object.freeze(FreitghtTypesObject);
Object.freeze(FreitghtTypesArray);


/***/ }),

/***/ "10MS":
/*!********************************************************!*\
  !*** ./src/modules/back-end/freights.router.module.ts ***!
  \********************************************************/
/*! exports provided: FreightsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightsRoutingModule", function() { return FreightsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_back_end_freights_create_freight_create_freight_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/freights/create-freight/create.freight.component */ "9PQS");
/* harmony import */ var src_app_back_end_freights_delete_freight_delete_freight_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/back-end/freights/delete-freight/delete.freight.component */ "+HuL");
/* harmony import */ var src_app_back_end_freights_edit_freight_edit_freight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/back-end/freights/edit-freight/edit.freight.component */ "Yomz");
/* harmony import */ var src_app_back_end_freights_freights_change_freight_case_freights_change_freight_case_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/back-end/freights/freights-change-freight-case/freights.change.freight.case.component */ "BiEn");
/* harmony import */ var src_app_back_end_freights_freights_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/back-end/freights/freights.component */ "wP1F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const ROUTS = [
    {
        path: '', component: src_app_back_end_freights_freights_component__WEBPACK_IMPORTED_MODULE_5__["FreightsComponent"],
        children: [
            {
                path: "delete/:targetId",
                component: src_app_back_end_freights_delete_freight_delete_freight_component__WEBPACK_IMPORTED_MODULE_2__["DeleteFreightComponent"],
            },
            {
                path: "chageFreightCase",
                component: src_app_back_end_freights_freights_change_freight_case_freights_change_freight_case_component__WEBPACK_IMPORTED_MODULE_4__["FreightsChangeFreightCaseComponent"],
            }
        ]
    },
    { path: 'create', component: src_app_back_end_freights_create_freight_create_freight_component__WEBPACK_IMPORTED_MODULE_1__["CreateFreightComponent"] },
    { path: 'edit/:targetId', component: src_app_back_end_freights_edit_freight_edit_freight_component__WEBPACK_IMPORTED_MODULE_3__["EditFreightComponent"] },
];
class FreightsRoutingModule {
}
FreightsRoutingModule.ɵfac = function FreightsRoutingModule_Factory(t) { return new (t || FreightsRoutingModule)(); };
FreightsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FreightsRoutingModule });
FreightsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTS)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FreightsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "62F0":
/*!*****************************************!*\
  !*** ./src/services/freight.service.ts ***!
  \*****************************************/
/*! exports provided: FreightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightService", function() { return FreightService; });
/* harmony import */ var src_enums_tranaction_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/tranaction.type.enum */ "rBg4");
/* harmony import */ var _consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../consts/freight.cases.const */ "TEQo");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/consts/car.sizes.const */ "qB6b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom.validators.service */ "QVRC");
/* harmony import */ var src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/enums/car.sizes.enum */ "hLCK");
/* harmony import */ var src_consts_branches_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/consts/branches.const */ "tGjv");
/* harmony import */ var src_consts_freight_types_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/consts/freight.types.const */ "0R9u");
/* harmony import */ var src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/enums/freitght.types.enum */ "FyP3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http/http.service */ "H5vj");














class FreightService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.clinets = [];
        this.freightCases = _consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_1__["freightCasesCreateUpdateArray"];
        this.freightCasesToChange = _consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_1__["freightCasesContainerArray"];
        this.transactionFreightTypes = src_consts_freight_types_const__WEBPACK_IMPORTED_MODULE_9__["FreitghtTypesArray"];
        this.commissionPurchase = [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
        this.freitghtTypesEnum = src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_10__["FreitghtTypesEnum"];
        this.states = [];
        this.allStates = [];
        this.cities = [];
        this.freightPorts = [];
        this.arrivalPorts = [];
        this.carSizes = src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_4__["carSizesArray"];
        this.isFormSubmitError = false;
        this.isRequestingToServer = false;
        this.carPicture = {};
        this.defaultImageUrl = "/assets/img/car_default_img.jpg";
        /** Deleted Item Event*/
        this.onDeletedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onUnDeletedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.freightsSelected = [];
        this.branches = src_consts_branches_const__WEBPACK_IMPORTED_MODULE_8__["BranchesArray"];
        this.isRequestingToServerToGetItems = false;
    }
    /**
     * Close: Back To The Page
     */
    closeModel() {
        this.isFormSubmitError = false;
        this.form.reset();
        this.router.navigate(['/freights']);
    }
    /** Init Create Update Form */
    initForm(transactionType = src_enums_tranaction_type_enum__WEBPACK_IMPORTED_MODULE_0__["TransactionTypeEnum"].freight) {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            carMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            freightCaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            buySourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            freightStateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            cityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            carSizeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            freightPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            navigationalWayeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            arrivalPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            carBodyNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            containerNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            carPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            landFreightPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            maritimeFreightPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            commissionPurchase: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            commissionTransfare: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            swift: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            sellPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            auctionFines: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            storeFines: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            titlePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            titleDifference: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            landCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            maritimeCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            arrivalDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            carPicture: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            lotOrStock: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            titleCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, [_custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidNumber]),
            trackLink: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].invalidUrl]),
            transactionType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](transactionType),
            maritimeFreightPriceIsPaid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
            //لان ممكن ان يختار بان يدخل المستخدم يدويا
            clinetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            clinetPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            branchIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            dueDollarCommissionTransfare: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            freightTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
        this.disapledControls();
        this.form.controls.freightPortId.valueChanges.subscribe(value => { this.updateMaritimFreightPrices(); this.loadStates(); });
        this.form.controls.carSizeId.valueChanges.subscribe(value => this.updateMaritimFreightPrices());
        this.form.controls.freightStateId.valueChanges.subscribe(value => { this.loadStateCities(value); });
        this.form.controls.cityId.valueChanges.subscribe(value => { this.updateLandFreightPrices(); });
        this.form.controls.userId.valueChanges.subscribe(value => {
            //Check If User Need To Enter Clinet Manually
            this.isAllowEnterClinetManually = value == "-1";
            if (this.isAllowEnterClinetManually) {
                this.form.controls.branchIndex.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
                this.form.controls.clinetName.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
                this.form.controls.clinetPhoneNumber.setValidators([_custom_validators_service__WEBPACK_IMPORTED_MODULE_6__["CustomValidatorsService"].phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                this.form.controls.branchIndex.enable();
            }
            else {
                this.form.controls.branchIndex.clearValidators();
                this.form.controls.clinetName.clearValidators();
                this.form.controls.clinetPhoneNumber.clearValidators();
                this.form.controls.branchIndex.disable();
                //Select Branch Now
                if (value)
                    this.form.controls.branchIndex.setValue(this.clinets.find(ce => ce._id == value).branchIndex);
            }
            this.form.controls.branchIndex.updateValueAndValidity();
            this.form.controls.clinetName.updateValueAndValidity();
            this.form.controls.clinetPhoneNumber.updateValueAndValidity();
        });
        this.isFormSubmitError = false;
        this.isRequestingToServer = false;
    }
    /**
     * Init Form For Delete
     */
    initDeleteForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            clinetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
        this.form.disable();
    }
    /** Init Form For Search */
    initFilterForm() {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            clinetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            carMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            freightCaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            buySourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            freightStateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            cityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            carSizeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            freightPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            navigationalWayeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            arrivalPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            carBodyNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.filterForm.controls.freightPortId.valueChanges.subscribe(value => { this.loadStates(value); });
        this.form.reset();
    }
    /**Disapled Controls */
    disapledControls() {
        this.form.controls.landFreightPrice.disable();
        this.form.controls.maritimeFreightPrice.disable();
        this.form.controls.refranceNumber.disable();
        this.form.controls.maritimeCost.disable();
        this.form.controls.branchIndex.disable();
    }
    /**Get Items To Select From Them */
    getItems(itemName) {
        this.isRequestingToServerToGetItems = true;
        let itemsNames = itemName ? [itemName] : [
            "clinets", "buySources",
            "states", "freightPorts", "arrivalPorts", "navigationalWayes"
        ];
        this.http.getSelectItems(itemsNames).subscribe(res => {
            this.isRequestingToServerToGetItems = false;
            if (res.isSuccess) {
                itemsNames.forEach(itemName => {
                    this[itemName] = [];
                    if (itemName == "clinets") {
                        this.clinets = [{
                                _id: "-1",
                                name: "<<إدخال زبون يدويا>>"
                            }, ...res.result[itemName]];
                    }
                    else if (itemName == "states") {
                        //Save All States Becuse Filter In It Affter User Select The Freight Port
                        this.allStates = res.result.states;
                        this.loadStates();
                    }
                    else
                        this[itemName] = res.result[itemName];
                });
            }
            _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage(res);
        }, error => {
            this.isRequestingToServerToGetItems = false;
            _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
        });
    }
    /**Get Items To Select From Them  To Freights Page*/
    getItemsV2(itemName) {
        let itemsNames = itemName ? [itemName] : [
            "clinets", "buySources", "states", "freightPorts", "arrivalPorts", "navigationalWayes"
        ];
        this.http.getSelectItems(itemsNames).subscribe(res => {
            if (res.isSuccess) {
                itemsNames.forEach(itemName => {
                    this[itemName] = [];
                    if (itemName == "clinets") {
                        this.clinets = [{
                                _id: null,
                                name: "إدخال زبون يدويا"
                            }, ...res.result[itemName]];
                    }
                    else if (itemName == "states") {
                        //Save All States Becuse Filter In It Affter User Select The Freight Port
                        this.allStates = res.result.states;
                    }
                    else
                        this[itemName] = [...this[itemName], ...res.result[itemName]];
                });
            }
            _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage(res);
        }, error => {
            _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
        });
    }
    /**
     * Load States By Freight Port Id
     */
    loadStates(freightPortId) {
        var _a, _b;
        if (freightPortId === void 0) { freightPortId = ((_a = this.form.controls.freightPortId) === null || _a === void 0 ? void 0 : _a.value) || ((_b = this.filterForm.controls.freightPortId) === null || _b === void 0 ? void 0 : _b.value); }
        this.states = [];
        if (freightPortId && this.allStates.length)
            this.states = this.allStates.filter(st => st.freightPortId == freightPortId);
        this.loadStateCities();
    }
    /** Load State Cities */
    loadStateCities(stateId) {
        var _a, _b, _c;
        if (stateId === void 0) { stateId = ((_a = this.form.controls.freightStateId) === null || _a === void 0 ? void 0 : _a.value) || ((_b = this.filterForm.controls.freightStateId) === null || _b === void 0 ? void 0 : _b.value); }
        this.cities = [];
        if (this.states.length && stateId) {
            this.cities = ((_c = this.states.find(m => m._id == stateId)) === null || _c === void 0 ? void 0 : _c.cities) || [];
        }
        this.updateLandFreightPrices();
    }
    /**
  * تحديث سعر الشحن البرى بناء على مدينة الشحن
    */
    updateLandFreightPrices(cityId) {
        var _a, _b;
        if (cityId === void 0) { cityId = (_a = this.form.controls.cityId) === null || _a === void 0 ? void 0 : _a.value; }
        let price = 0;
        if (cityId && this.cities.length) {
            let city = this.cities.find(ci => ci._id == this.form.controls.cityId.value);
            //سعر الشحن البرى ثابت على المدينة او الولايه كلها انما البحرى فهو على حجم السيارة
            price = +(city === null || city === void 0 ? void 0 : city.landFreightPrice);
        }
        (_b = this.form.controls.landFreightPrice) === null || _b === void 0 ? void 0 : _b.setValue(price || 0);
    }
    /**
     * تحديث سعر الشحن البحري بناء على حجم السيارة وميناء الشحن
    */
    updateMaritimFreightPrices() {
        if (!this.form.controls.carSizeId.value || !this.form.controls.freightPortId.value)
            return;
        let port = this.freightPorts.find(st => st._id == this.form.controls.freightPortId.value);
        if (this.form.controls.carSizeId.value == src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_7__["CarSizesEnum"].small)
            this.form.controls.maritimeFreightPrice.setValue(+port.maritimeFreightPriceToSmallCar || 0);
        if (this.form.controls.carSizeId.value == src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_7__["CarSizesEnum"].medium)
            this.form.controls.maritimeFreightPrice.setValue(+port.maritimeFreightPriceToMediumCar || 0);
        if (this.form.controls.carSizeId.value == src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_7__["CarSizesEnum"].big)
            this.form.controls.maritimeFreightPrice.setValue(+port.maritimeFreightPriceToBigCar || 0);
    }
    /**Select Freight */
    selectFreight(item) {
        item.IsSelected = !item.IsSelected;
        if (item.IsSelected) {
            this.freightsSelected.push(item);
        }
        else {
            this.freightsSelected.splice(this.freightsSelected.findIndex(f => f._id == item._id), 1);
        }
    }
} //End Class
FreightService.ɵfac = function FreightService_Factory(t) { return new (t || FreightService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"])); };
FreightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FreightService, factory: FreightService.ɵfac });


/***/ }),

/***/ "9PQS":
/*!******************************************************************************!*\
  !*** ./src/app/back-end/freights/create-freight/create.freight.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateFreightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFreightComponent", function() { return CreateFreightComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_enums_tranaction_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/enums/tranaction.type.enum */ "rBg4");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_services_freight_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/freight.service */ "62F0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/sweet.alert.service */ "QZpK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/select-input/select-input.component */ "XBrH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/date-input/date.input.component */ "3CG7");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_big_input_text_big_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-big-input/text.big.input.component */ "6tZz");
/* harmony import */ var src_app_back_end_shared_form_inputs_switch_input_switch_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/switch-input/switch.input.component */ "hF2r");
















function CreateFreightComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 37);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r0.freightService.form)("lable", ctx_r0.u.r.clinetName)("formSubmitError", ctx_r0.freightService.isFormSubmitError);
} }
function CreateFreightComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 38);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r1.freightService.form)("lable", ctx_r1.u.r.clinetPhoneNumber)("formSubmitError", ctx_r1.freightService.isFormSubmitError);
} }
function CreateFreightComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.landFreightPrice)("formSubmitError", ctx_r2.freightService.isFormSubmitError)("isShowAllowEditButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.maritimeFreightPrice)("formSubmitError", ctx_r2.freightService.isFormSubmitError)("isShowAllowEditButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.maritimeFreightPriceIsPaid)("formSubmitError", ctx_r2.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.landCost)("formSubmitError", ctx_r2.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.carPrice)("formSubmitError", ctx_r2.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.sellPrice)("formSubmitError", ctx_r2.freightService.isFormSubmitError);
} }
function CreateFreightComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.landFreightPrice)("formSubmitError", ctx_r3.freightService.isFormSubmitError)("isShowAllowEditButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.maritimeFreightPrice)("formSubmitError", ctx_r3.freightService.isFormSubmitError)("isShowAllowEditButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.maritimeFreightPriceIsPaid)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.landCost)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.carPrice)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx_r3.freightService.commissionPurchase)("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.commissionPurchase)("isAllowAddNewItem", true)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.swift)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.commissionTransfare)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.auctionFines)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.storeFines)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.titlePrice)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.titleDifference)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.titleCost)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.dueDollarCommissionTransfare)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
} }
function CreateFreightComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 54);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r4.u.r.loadingData);
} }
function CreateFreightComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 54);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r5.u.r.loadingData);
} }
class CreateFreightComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, seo, freightService, router, sweetAlertService, activatdeRouter) {
        super();
        this.u = u;
        this.seo = seo;
        this.freightService = freightService;
        this.router = router;
        this.sweetAlertService = sweetAlertService;
        this.activatdeRouter = activatdeRouter;
        this.titleResourcesKey = "createANewFreight";
    }
    ngOnInit() {
        this.titleResourcesKey = this.activatdeRouter.snapshot.queryParams.transactionType == src_enums_tranaction_type_enum__WEBPACK_IMPORTED_MODULE_1__["TransactionTypeEnum"].sectorSales ? "createANewSectorSale" : "createANewFreight";
        this.seo.updateSEO(this.titleResourcesKey);
        this.freightService.initForm(this.activatdeRouter.snapshot.queryParams.transactionType);
        this.freightService.getItems();
        this.freightService.defaultImageUrl = "assets/img/car_default_img.jpg";
        this.freightService.isCreate = false;
    }
    /**
      * Create New Item
      */
    onSubmit() {
        if (this.freightService.form.invalid) {
            this.freightService.isFormSubmitError = true;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].errorMessage(this.u.r.youHaveSomeErrors);
            return;
        }
        this.freightService.isRequestingToServer = true;
        this.freightService.isFormSubmitError = false;
        let formData = new FormData();
        formData.append("values", JSON.stringify(this.freightService.form.getRawValue()));
        formData.append("carPicture", this.freightService.carPicture.file);
        this.freightService.form.disable();
        this.allSubscriptions.push(this.freightService.http.createNewFreight(formData)
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage(res);
            if (res.isSuccess) {
                this.freightService.getItems();
                this.freightService.isRequestingToServer = false;
                this.freightService.form.enable();
                this.freightService.initForm();
                this.sweetAlertService.confirm(this.u.r.doYouWantEditCreatedItem, this.u.r.goToEdit, this.u.r.createNew).then(() => {
                    this.router.navigate(['/freights', 'edit', res.result._id]);
                });
            }
        }, error => {
            this.freightService.form.enable();
            this.freightService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
CreateFreightComponent.ɵfac = function CreateFreightComponent_Factory(t) { return new (t || CreateFreightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_freight_service__WEBPACK_IMPORTED_MODULE_6__["FreightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
CreateFreightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateFreightComponent, selectors: [["app-create-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 66, vars: 85, consts: [["novalidate", "", "autocomplete", "off", 1, "account-settings-container", "layout-top-spacing", 3, "formGroup", "submit"], [1, "account-content"], ["data-spy", "scroll", "data-target", "#account-settings-scroll", "data-offset", "-100", 1, "scrollspy-example"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "layout-spacing"], [1, "section"], [1, "info"], [1, "", 3, "innerHtml"], [1, "col-lg-11", "mx-auto"], [1, "freightService.form"], ["app-select-input", "", "fcn", "userId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "branchIndex", "valueField", "branchIndex", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError"], ["class", "col-sm-6 col-md-4 mb-6 form-group", "app-text-input", "", "fcn", "clinetName", 3, "form", "lable", "formSubmitError", 4, "ngIf"], ["class", "col-sm-6 col-md-4 mb-6 form-group", "app-text-input", "", "fcn", "clinetPhoneNumber", 3, "form", "lable", "formSubmitError", 4, "ngIf"], ["app-select-input", "", "fcn", "freightTypeId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "carMark", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "carBodyNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "lotOrStock", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "buySourceId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "carSizeId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "freightPortId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "freightStateId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "cityId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "freightCaseId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError"], ["class", "row", 4, "ngIf"], ["app-text-input", "", "fcn", "containerNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "navigationalWayeId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "trackLink", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-date-input", "", "fcn", "arrivalDate", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "arrivalPortId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-big-input", "", "fcn", "notes", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "account-settings-footer"], [1, "as-footer-container"], ["id", "multiple-reset", "type", "button", 1, "btn", "btn-warning", 3, "disabled", "click"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["id", "multiple-messages", "type", "submit", 1, "btn", "btn-primary", "ml-1", 3, "disabled"], ["app-text-input", "", "fcn", "clinetName", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "clinetPhoneNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "landFreightPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError", "isShowAllowEditButton"], ["app-text-input", "", "fcn", "maritimeFreightPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError", "isShowAllowEditButton"], ["app-switch-input", "", "fcn", "maritimeFreightPriceIsPaid", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "landCost", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "carPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "sellPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "commissionPurchase", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "isAllowAddNewItem", "formSubmitError"], ["app-text-input", "", "fcn", "swift", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "commissionTransfare", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "auctionFines", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "storeFines", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "titlePrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "titleDifference", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "titleCost", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "dueDollarCommissionTransfare", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"]], template: function CreateFreightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function CreateFreightComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_12_listener() { return ctx.freightService.getItems("clinets"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CreateFreightComponent_div_14_Template, 1, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CreateFreightComponent_div_15_Template, 1, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_28_listener() { return ctx.freightService.getItems("buySources"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_29_listener() { return ctx.freightService.getItems("carSizes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_30_listener() { return ctx.freightService.getItems("freightPorts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_31_listener() { return ctx.freightService.getItems("states"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_32_listener() { return ctx.freightService.getItems("states"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, CreateFreightComponent_div_41_Template, 7, 20, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, CreateFreightComponent_div_42_Template, 15, 46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_52_listener() { return ctx.freightService.getItems("navigationalWayes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_55_listener() { return ctx.freightService.getItems("arrivalPorts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateFreightComponent_Template_button_click_60_listener() { return ctx.freightService.getItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, CreateFreightComponent_div_62_Template, 1, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, CreateFreightComponent_div_65_Template, 1, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("form-submited", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.freightService.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.clinetBranch, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.clinets)("form", ctx.freightService.form)("lable", ctx.u.r.clinet)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.branches)("form", ctx.freightService.form)("lable", ctx.u.r.branch)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.freightService.isAllowEnterClinetManually);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.freightService.isAllowEnterClinetManually);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.frightInformation, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.transactionFreightTypes)("form", ctx.freightService.form)("lable", ctx.u.r.freightType)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.carMark)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.carBodyNumber)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.lotOrStock)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.buySources)("form", ctx.freightService.form)("lable", ctx.u.r.buySource)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.carSizes)("form", ctx.freightService.form)("lable", ctx.u.r.carSize)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.freightPorts)("form", ctx.freightService.form)("lable", ctx.u.r.freightPort)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.states)("form", ctx.freightService.form)("lable", ctx.u.r.freightState)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.cities)("form", ctx.freightService.form)("lable", ctx.u.r.city)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.freightCases)("form", ctx.freightService.form)("lable", ctx.u.r.freightCase)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.financialInformation, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.freightService.form.controls.freightTypeId.value == ctx.freightService.freitghtTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.freightService.form.controls.freightTypeId.value != ctx.freightService.freitghtTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.containerInformation, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.container)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.navigationalWayes)("form", ctx.freightService.form)("lable", ctx.u.r.navigationalWaye)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.trackLink)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.arrivalDate)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.arrivalPorts)("form", ctx.freightService.form)("lable", ctx.u.r.arrivalPort)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.refranceNumber)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.notes)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServerToGetItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.u.r.reloadItems, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.freightService.isRequestingToServerToGetItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.freightService.isRequestingToServer);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_10__["SelectInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_12__["TextInputComponent"], src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_13__["DateInputComponent"], src_app_back_end_shared_form_inputs_text_big_input_text_big_input_component__WEBPACK_IMPORTED_MODULE_14__["TextBigInputComponent"], src_app_back_end_shared_form_inputs_switch_input_switch_input_component__WEBPACK_IMPORTED_MODULE_15__["SwitchInputComponent"]], encapsulation: 2 });


/***/ }),

/***/ "BiEn":
/*!**********************************************************************************************************!*\
  !*** ./src/app/back-end/freights/freights-change-freight-case/freights.change.freight.case.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: FreightsChangeFreightCaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightsChangeFreightCaseComponent", function() { return FreightsChangeFreightCaseComponent; });
/* harmony import */ var src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/response.type.enum */ "FIK1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/enums/freight.cases.enum */ "Fh2x");
/* harmony import */ var src_consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/consts/freight.cases.const */ "TEQo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_freight_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/freight.service */ "62F0");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/select-input/select-input.component */ "XBrH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");














function FreightsChangeFreightCaseComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 13);
} }
class FreightsChangeFreightCaseComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_2__["SharedComponents"] {
    constructor(u, service, http, activateRouter) {
        super();
        this.u = u;
        this.service = service;
        this.http = http;
        this.activateRouter = activateRouter;
    }
    ngOnInit() {
        if (!this.service.freightsSelected.length) {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].showResponseMessage({
                responseType: src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_0__["ResponseTypeEnum"].error,
                message: this.u.r.youMustSelectFreightsFirst
            });
            this.service.closeModel();
        }
        this.service.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            freightCaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_4__["FreightCasesEnum"].Loaded_in_a_container, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
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
        this.allSubscriptions.push(this.service.http.changeFreightState(this.service.form.controls.freightCaseId.value, this.service.freightsSelected.map(f => f._id))
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].showResponseMessage(res);
            this.service.isRequestingToServer = false;
            if (res.isSuccess) {
                let caseName = src_consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_5__["freightCasesArray"].find(c => c._id == this.service.form.controls.freightCaseId.value).name;
                this.service.freightsSelected.forEach(fe => {
                    fe.IsSelected = false;
                    fe.freightCaseName = caseName;
                });
                this.service.freightsSelected = [];
                //Back To Component
                this.service.closeModel();
            }
        }, error => {
            this.service.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
FreightsChangeFreightCaseComponent.ɵfac = function FreightsChangeFreightCaseComponent_Factory(t) { return new (t || FreightsChangeFreightCaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_7__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_freight_service__WEBPACK_IMPORTED_MODULE_8__["FreightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"])); };
FreightsChangeFreightCaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FreightsChangeFreightCaseComponent, selectors: [["app-add-freights-to-container"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 12, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], ["app-select-input", "", "fcn", "freightCaseId", 1, "form-group", "col", 3, "list", "form", "lable", "formSubmitError"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function FreightsChangeFreightCaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function FreightsChangeFreightCaseComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, FreightsChangeFreightCaseComponent_div_10_Template, 1, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FreightsChangeFreightCaseComponent_Template_button_click_11_listener() { return ctx.service.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("form-submited", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.service.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("list", ctx.service.freightCasesToChange)("form", ctx.service.form)("lable", ctx.u.r.freightCase)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_11__["SelectInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "Yomz":
/*!**************************************************************************!*\
  !*** ./src/app/back-end/freights/edit-freight/edit.freight.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditFreightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFreightComponent", function() { return EditFreightComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_freight_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/freight.service */ "62F0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/select-input/select-input.component */ "XBrH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/date-input/date.input.component */ "3CG7");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_big_input_text_big_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-big-input/text.big.input.component */ "6tZz");
/* harmony import */ var src_app_back_end_shared_form_inputs_switch_input_switch_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/switch-input/switch.input.component */ "hF2r");















function EditFreightComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 37);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r0.freightService.form)("lable", ctx_r0.u.r.clinetName)("formSubmitError", ctx_r0.freightService.isFormSubmitError);
} }
function EditFreightComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 38);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r1.freightService.form)("lable", ctx_r1.u.r.clinetPhoneNumber)("formSubmitError", ctx_r1.freightService.isFormSubmitError);
} }
function EditFreightComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.landFreightPrice)("formSubmitError", ctx_r2.freightService.isFormSubmitError)("isShowAllowEditButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.maritimeFreightPrice)("formSubmitError", ctx_r2.freightService.isFormSubmitError)("isShowAllowEditButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.maritimeFreightPriceIsPaid)("formSubmitError", ctx_r2.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.landCost)("formSubmitError", ctx_r2.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.carPrice)("formSubmitError", ctx_r2.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r2.freightService.form)("lable", ctx_r2.u.r.sellPrice)("formSubmitError", ctx_r2.freightService.isFormSubmitError);
} }
function EditFreightComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.landFreightPrice)("formSubmitError", ctx_r3.freightService.isFormSubmitError)("isShowAllowEditButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.maritimeFreightPrice)("formSubmitError", ctx_r3.freightService.isFormSubmitError)("isShowAllowEditButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.maritimeFreightPriceIsPaid)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.landCost)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.carPrice)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx_r3.freightService.commissionPurchase)("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.commissionPurchase)("isAllowAddNewItem", true)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.swift)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.commissionTransfare)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.auctionFines)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.storeFines)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.titlePrice)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.titleDifference)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.titleCost)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx_r3.freightService.form)("lable", ctx_r3.u.r.dueDollarCommissionTransfare)("formSubmitError", ctx_r3.freightService.isFormSubmitError);
} }
function EditFreightComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 54);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r4.u.r.loadingData);
} }
function EditFreightComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 54);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r5.u.r.loadingData);
} }
class EditFreightComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, seo, http, activateRouter, freightService) {
        super();
        this.u = u;
        this.seo = seo;
        this.http = http;
        this.activateRouter = activateRouter;
        this.freightService = freightService;
        this.titleResourcesKey = "editFreight";
    }
    ngOnInit() {
        this.freightService.initForm();
        this.freightService.form.disable();
        this.seo.updateSEO(this.titleResourcesKey);
        this.freightService.getItems();
        this.freightService.form.controls._id.setValue(this.activateRouter.snapshot.params.targetId);
        this.getFreightToUpdate();
        this.freightService.defaultImageUrl = "assets/img/car_default_img.jpg";
        this.freightService.isCreate = false;
    }
    /**
     * Get Car Mark To Update
     */
    getFreightToUpdate() {
        this.http.getFreightToUpdate(this.freightService.form.controls._id.value).subscribe(res => {
            if (res.isSuccess) {
                this.fillValuesToUpdate(res);
                this.freightService.getItems();
            }
            else {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        });
    }
    /**
      * Update
      */
    onSubmit() {
        if (this.freightService.form.invalid) {
            this.freightService.isFormSubmitError = true;
            return;
        }
        this.freightService.isRequestingToServer = true;
        this.freightService.isFormSubmitError = false;
        let formData = new FormData();
        formData.append("values", JSON.stringify(this.freightService.form.getRawValue()));
        formData.append("carPicture", this.freightService.carPicture.file);
        this.freightService.form.disable();
        this.allSubscriptions.push(this.http.updateFreight(formData).subscribe(res => {
            this.freightService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            this.freightService.form.enable();
            if (res.isSuccess) {
                this.fillValuesToUpdate(res);
            }
        }, error => {
            this.freightService.form.enable();
            this.freightService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
    /**
     * Fill Values In From To Update
     */
    fillValuesToUpdate(res) {
        this.freightService.form.setValue(res.result);
        this.freightService.form.enable();
        this.freightService.disapledControls();
        this.freightService.carPicture = {
            url: res.result.carPicture
        };
    }
} //End Class
EditFreightComponent.ɵfac = function EditFreightComponent_Factory(t) { return new (t || EditFreightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_freight_service__WEBPACK_IMPORTED_MODULE_7__["FreightService"])); };
EditFreightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditFreightComponent, selectors: [["app-edit-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 66, vars: 85, consts: [["novalidate", "", "autocomplete", "off", 1, "account-settings-container", "layout-top-spacing", 3, "formGroup", "submit"], [1, "account-content"], ["data-spy", "scroll", "data-target", "#account-settings-scroll", "data-offset", "-100", 1, "scrollspy-example"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "layout-spacing"], [1, "section"], [1, "info"], [1, "", 3, "innerHtml"], [1, "col-lg-11", "mx-auto"], [1, "freightService.form"], ["app-select-input", "", "fcn", "userId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "branchIndex", "valueField", "branchIndex", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError"], ["class", "col-sm-6 col-md-4 mb-6 form-group", "app-text-input", "", "fcn", "clinetName", 3, "form", "lable", "formSubmitError", 4, "ngIf"], ["class", "col-sm-6 col-md-4 mb-6 form-group", "app-text-input", "", "fcn", "clinetPhoneNumber", 3, "form", "lable", "formSubmitError", 4, "ngIf"], ["app-select-input", "", "fcn", "freightTypeId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "carMark", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "carBodyNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "lotOrStock", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "buySourceId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "carSizeId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "freightPortId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "freightStateId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "cityId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "freightCaseId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError"], ["class", "row", 4, "ngIf"], ["app-text-input", "", "fcn", "containerNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "navigationalWayeId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "trackLink", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-date-input", "", "fcn", "arrivalDate", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "arrivalPortId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-big-input", "", "fcn", "notes", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "account-settings-footer"], [1, "as-footer-container"], ["id", "multiple-reset", "type", "button", 1, "btn", "btn-warning", 3, "disabled", "click"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["id", "multiple-messages", "type", "submit", 1, "btn", "btn-primary", "ml-1", 3, "disabled"], ["app-text-input", "", "fcn", "clinetName", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "clinetPhoneNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "landFreightPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError", "isShowAllowEditButton"], ["app-text-input", "", "fcn", "maritimeFreightPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError", "isShowAllowEditButton"], ["app-switch-input", "", "fcn", "maritimeFreightPriceIsPaid", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "landCost", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "carPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "sellPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "commissionPurchase", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "isAllowAddNewItem", "formSubmitError"], ["app-text-input", "", "fcn", "swift", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "commissionTransfare", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "auctionFines", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "storeFines", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "titlePrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "titleDifference", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "titleCost", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "dueDollarCommissionTransfare", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"]], template: function EditFreightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function EditFreightComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_12_listener() { return ctx.freightService.getItems("clinets"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, EditFreightComponent_div_14_Template, 1, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, EditFreightComponent_div_15_Template, 1, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_28_listener() { return ctx.freightService.getItems("buySources"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_29_listener() { return ctx.freightService.getItems("carSizes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_30_listener() { return ctx.freightService.getItems("freightPorts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_31_listener() { return ctx.freightService.getItems("states"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_32_listener() { return ctx.freightService.getItems("states"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, EditFreightComponent_div_41_Template, 7, 20, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, EditFreightComponent_div_42_Template, 15, 46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_52_listener() { return ctx.freightService.getItems("navigationalWayes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_55_listener() { return ctx.freightService.getItems("arrivalPorts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditFreightComponent_Template_button_click_60_listener() { return ctx.freightService.getItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, EditFreightComponent_div_62_Template, 1, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, EditFreightComponent_div_65_Template, 1, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("form-submited", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.freightService.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.clinetBranch, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.clinets)("form", ctx.freightService.form)("lable", ctx.u.r.clinet)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.branches)("form", ctx.freightService.form)("lable", ctx.u.r.branch)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.freightService.isAllowEnterClinetManually);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.freightService.isAllowEnterClinetManually);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.frightInformation, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.transactionFreightTypes)("form", ctx.freightService.form)("lable", ctx.u.r.freightType)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.carMark)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.carBodyNumber)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.lotOrStock)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.buySources)("form", ctx.freightService.form)("lable", ctx.u.r.buySource)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.carSizes)("form", ctx.freightService.form)("lable", ctx.u.r.carSize)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.freightPorts)("form", ctx.freightService.form)("lable", ctx.u.r.freightPort)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.states)("form", ctx.freightService.form)("lable", ctx.u.r.freightState)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.cities)("form", ctx.freightService.form)("lable", ctx.u.r.city)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.freightCases)("form", ctx.freightService.form)("lable", ctx.u.r.freightCase)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.financialInformation, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.freightService.form.controls.freightTypeId.value == ctx.freightService.freitghtTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.freightService.form.controls.freightTypeId.value != ctx.freightService.freitghtTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.containerInformation, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.container)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.navigationalWayes)("form", ctx.freightService.form)("lable", ctx.u.r.navigationalWaye)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.trackLink)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.arrivalDate)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.arrivalPorts)("form", ctx.freightService.form)("lable", ctx.u.r.arrivalPort)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.refranceNumber)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.notes)("formSubmitError", ctx.freightService.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServerToGetItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.u.r.reloadItems, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.freightService.isRequestingToServerToGetItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.freightService.isRequestingToServer);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_9__["SelectInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_11__["TextInputComponent"], src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_12__["DateInputComponent"], src_app_back_end_shared_form_inputs_text_big_input_text_big_input_component__WEBPACK_IMPORTED_MODULE_13__["TextBigInputComponent"], src_app_back_end_shared_form_inputs_switch_input_switch_input_component__WEBPACK_IMPORTED_MODULE_14__["SwitchInputComponent"]], encapsulation: 2 });


/***/ }),

/***/ "rBg4":
/*!*******************************************!*\
  !*** ./src/enums/tranaction.type.enum.ts ***!
  \*******************************************/
/*! exports provided: TransactionTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionTypeEnum", function() { return TransactionTypeEnum; });
var TransactionTypeEnum;
(function (TransactionTypeEnum) {
    /**الشحنات
     * وهنا يضاف الشحنات فقط وبالطبع كل الشحنات لها ملفات بيع قطاعى وملفات حوالة مالية
    */
    TransactionTypeEnum[TransactionTypeEnum["freight"] = 1] = "freight";
    /** الحوالات المالية
     * وهنا يضاف الحوالات المالية فقط والتى ليست تابعة لشحنات
    */
    TransactionTypeEnum[TransactionTypeEnum["financialTransfers"] = 2] = "financialTransfers";
    /** المبيعات القطاعى
     * وهنا يضاف البيع القطاعى فقط الذى ليس مرتبط بـ الشحنات
    */
    TransactionTypeEnum[TransactionTypeEnum["sectorSales"] = 3] = "sectorSales";
})(TransactionTypeEnum || (TransactionTypeEnum = {}));


/***/ }),

/***/ "wP1F":
/*!*********************************************************!*\
  !*** ./src/app/back-end/freights/freights.component.ts ***!
  \*********************************************************/
/*! exports provided: FreightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightsComponent", function() { return FreightsComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_services_freight_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/freight.service */ "62F0");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/select-input/select-input.component */ "XBrH");
/* harmony import */ var src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/date-input/date.input.component */ "3CG7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/fop/fop-header/fop-header.component */ "OhZK");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/fop/fop-sort/fop-sort.component */ "lyqo");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/fop/fop-paging/fop.paging.component */ "VjaU");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");



















function FreightsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 52);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r0.u.r.loadingData);
} }
function FreightsComponent_tr_84_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 62);
} }
const _c0 = function (a2) { return ["/financialTransfers", "payAmount", a2]; };
function FreightsComponent_tr_84_div_3_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, item_r2._id))("title", ctx_r5.u.r.paymentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.u.r.paymentAmount, " ");
} }
const _c1 = function (a2) { return ["/freights", "edit", a2]; };
function FreightsComponent_tr_84_div_3_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, item_r2._id))("title", ctx_r6.u.r.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.u.r.edit, " ");
} }
const _c2 = function (a2) { return ["/freights", "delete", a2]; };
const _c3 = function (a0, a1) { return { deletingRefranceNumber: a0, deletingClinetName: a1 }; };
function FreightsComponent_tr_84_div_3_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, item_r2._id))("state", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c3, item_r2.refranceNumber, item_r2.clinetName))("title", ctx_r7.u.r.delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.u.r.delete, " ");
} }
const _c4 = function (a3) { return ["/reports", "freights", "fullDetails", a3]; };
const _c5 = function (a3) { return ["/reports", "freights", "details", a3]; };
const _c6 = function (a2) { return ["/financialTransfers", "details", a2]; };
function FreightsComponent_tr_84_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "circle", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "circle", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "circle", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, FreightsComponent_tr_84_div_3_a_16_Template, 3, 5, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, FreightsComponent_tr_84_div_3_a_17_Template, 3, 5, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, FreightsComponent_tr_84_div_3_a_18_Template, 3, 9, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c4, item_r2._id))("title", ctx_r4.u.r.fullDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.u.r.fullDetails, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c5, item_r2._id))("title", ctx_r4.u.r.clinetDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.u.r.clinetDetails, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c6, item_r2._id))("title", ctx_r4.u.r.transferDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.u.r.transferDetails, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r2.actionDisapled);
} }
const _c7 = function (a0, a1) { return { "color": a0, "background-color": a1 }; };
function FreightsComponent_tr_84_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FreightsComponent_tr_84_div_2_Template, 1, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, FreightsComponent_tr_84_div_3_Template, 19, 18, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FreightsComponent_tr_84_Template_td_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const item_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.freightService.selectFreight(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FreightsComponent_tr_84_Template_input_ngModelChange_7_listener($event) { const item_r2 = ctx.$implicit; return item_r2.IsSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r2.IsSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r2.IsSelected ? ctx_r1.u.r.unSelect : ctx_r1.u.r.select, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.clinetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 26, item_r2.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.refranceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](39, _c4, item_r2._id))("innerText", item_r2.carBodyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightCaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.buySourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightStateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](41, _c7, item_r2.portFontColor, item_r2.portBackgroundColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightPortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carSizeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](24, 28, item_r2.landFreightPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](26, 31, item_r2.landCost, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](28, 34, item_r2.maritimeFreightPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.maritimeFreightPriceIsPaidName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.containerNumber || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.navigationalWayeName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.arrivalPortName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 37, item_r2.arrivalDate));
} }
const _c8 = function () { return ["/freights", "chageFreightCase"]; };
class FreightsComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, seo, freightService, http) {
        super();
        this.u = u;
        this.seo = seo;
        this.freightService = freightService;
        this.http = http;
        /**
         * Page Target
         */
        this.skip = 0;
        this.limit = 50;
        this.entries = [];
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"]();
    }
    ngOnInit() {
        this.freightService.initFilterForm();
        this.seo.updateSEO("freights");
        this.getEntiries(true);
        this.freightService.freightsSelected = [];
        this.freightService.getItemsV2();
        //Listener On Delete Item Event
        this.allSubscriptions.push(this.freightService.onDeletedItem.subscribe(deletedItemId => {
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
            this.freightService.freightsSelected = [];
            this.skip = 0;
            this.entries = [];
            this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
        }
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.http.getFreights(this.skip, this.limit, this.freightService.filterForm.value).subscribe(res => {
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
FreightsComponent.ɵfac = function FreightsComponent_Factory(t) { return new (t || FreightsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_freight_service__WEBPACK_IMPORTED_MODULE_6__["FreightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"])); };
FreightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FreightsComponent, selectors: [["app-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 90, vars: 95, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], ["app-text-input", "", "fcn", "clinetName", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carMark", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carBodyNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-select-input", "", "fcn", "buySourceId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "freightPortId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "freightStateId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "navigationalWayeId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "carSizeId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "arrivalPortId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-date-input", "", "fcn", "createdDate", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "reset", "type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-outline-dark", "m-2", 3, "routerLink"], [1, "badge", "badge-primary", "counter", 3, "innerText"], ["tableId", "allFreights", 3, "se`archText"], [1, "row", "mb-4"], ["id", "allFreights", 1, "table", "table-hover"], [1, "th-5", 3, "innerText"], ["filedName", "clinetName", 3, "fop", "fieldText"], ["filedName", "branchName", 3, "fop", "fieldText"], ["filedName", "createdDate", 3, "fop", "fieldText"], ["filedName", "refranceNumber", 3, "fop", "fieldText"], ["filedName", "carMark", 3, "fop", "fieldText"], ["filedName", "carBodyNumber", 3, "fop", "fieldText"], ["filedName", "freightCaseName", 3, "fop", "fieldText"], ["filedName", "buySourceName", 3, "fop", "fieldText"], ["filedName", "freightStateName", 3, "fop", "fieldText"], ["filedName", "freightPortName", 3, "fop", "fieldText"], ["filedName", "carSizeName", 3, "fop", "fieldText"], ["filedName", "landFreightPrice", 3, "fop", "fieldText"], ["filedName", "landCost", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPrice", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPriceIsPaidName", 3, "fop", "fieldText"], ["filedName", "containerName", 3, "fop", "fieldText"], ["filedName", "navigationalWayeName", 3, "fop", "fieldText"], ["filedName", "arrivalPortName", 3, "fop", "fieldText"], ["filedName", "arrivalDate", 3, "fop", "fieldText"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], [2, "display", "inline-flex"], ["class", "spinner-grow text-danger align-self-center loader-sm", 4, "ngIf"], ["class", "dropdown dropup custom-dropdown-icon    ", 4, "ngIf"], [1, "cursor-pointer", 3, "click"], [1, "n-chk"], [1, "new-control", "new-checkbox", "checkbox-outline-default"], ["type", "checkbox", "disabled", "", 1, "new-control-input", 3, "ngModel", "ngModelChange"], [1, "new-control-indicator"], [1, "link", 3, "routerLink", "innerText"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"], [1, "dropdown", "dropup", "custom-dropdown-icon"], ["href", "#", "role", "button", "id", "dropdownMenuLink-3", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-more-vertical"], ["cx", "12", "cy", "12", "r", "1"], ["cx", "12", "cy", "5", "r", "1"], ["cx", "12", "cy", "19", "r", "1"], ["aria-labelledby", "dropdownMenuLink-3", 1, "dropdown-menu", "dropdown-menu-right", 2, "will-change", "transform"], [1, "dropdown-item", 3, "routerLink", "title"], [1, "fas", "fa-print", "fa-1-5x"], ["class", "dropdown-item ", 3, "routerLink", "title", 4, "ngIf"], ["class", "dropdown-item ", 3, "routerLink", "state", "title", 4, "ngIf"], [1, "fas", "fa-hand-holding-usd", "fa-1-5x", "jumb-animation"], [1, "far", "fa-edit", "fa-1-5x", "jumb-animation"], [1, "dropdown-item", 3, "routerLink", "state", "title"], [1, "far", "fa-trash-alt", "fa-1-5x", "jumb-animation"]], template: function FreightsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function FreightsComponent_Template_form_submit_8_listener() { return ctx.getEntiries(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, FreightsComponent_div_24_Template, 1, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "fop-header", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("se`archText", function FreightsComponent_Template_fop_header_se_archText_38_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "fop-sort", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "fop-sort", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "fop-sort", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "fop-sort", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "fop-sort", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "fop-sort", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "fop-sort", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "fop-sort", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "fop-sort", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "fop-sort", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "fop-sort", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "fop-sort", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "fop-sort", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "fop-sort", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "fop-sort", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "fop-sort", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "fop-sort", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "fop-sort", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "fop-sort", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, FreightsComponent_tr_84_Template, 36, 44, "tr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](85, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](86, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](87, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "fop-paging", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("getMoreItems", function FreightsComponent_Template_fop_paging_getMoreItems_88_listener() { return ctx.getEntiries(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.filterIn + " " + ctx.u.r.freights);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.freightService.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.filterForm)("lable", ctx.u.r.clinetName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.filterForm)("lable", ctx.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.filterForm)("lable", ctx.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.filterForm)("lable", ctx.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.buySources)("form", ctx.freightService.filterForm)("lable", ctx.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.freightPorts)("form", ctx.freightService.filterForm)("lable", ctx.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.states)("form", ctx.freightService.filterForm)("lable", ctx.u.r.freightState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.navigationalWayes)("form", ctx.freightService.filterForm)("lable", ctx.u.r.navigationalWaye);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.carSizes)("form", ctx.freightService.filterForm)("lable", ctx.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.arrivalPorts)("form", ctx.freightService.filterForm)("lable", ctx.u.r.arrivalPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.filterForm)("lable", ctx.u.r.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.freights);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](94, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.addFreightsSelectedToContainer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.freightService.freightsSelected.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.select);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.clinet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.branch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.trnasactionDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.freightState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.landFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.landCost);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.maritimeFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.maritimeFreightPriceIsPaid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.navigationalWaye);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.arrivalPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.arrivalDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](85, 82, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](86, 86, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](87, 90, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_9__["TextInputComponent"], src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_10__["SelectInputComponent"], src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_11__["DateInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_14__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_15__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_16__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_17__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"]], encapsulation: 2 });


/***/ }),

/***/ "wV+/":
/*!*************************************************!*\
  !*** ./src/modules/back-end/freights.module.ts ***!
  \*************************************************/
/*! exports provided: FreightsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightsModule", function() { return FreightsModule; });
/* harmony import */ var src_app_back_end_freights_create_freight_create_freight_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/back-end/freights/create-freight/create.freight.component */ "9PQS");
/* harmony import */ var src_app_back_end_freights_delete_freight_delete_freight_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/freights/delete-freight/delete.freight.component */ "+HuL");
/* harmony import */ var src_app_back_end_freights_edit_freight_edit_freight_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/back-end/freights/edit-freight/edit.freight.component */ "Yomz");
/* harmony import */ var src_app_back_end_freights_freights_change_freight_case_freights_change_freight_case_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/back-end/freights/freights-change-freight-case/freights.change.freight.case.component */ "BiEn");
/* harmony import */ var src_app_back_end_freights_freights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/back-end/freights/freights.component */ "wP1F");
/* harmony import */ var src_services_freight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/freight.service */ "62F0");
/* harmony import */ var _form_inputs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form.inputs.module */ "mmFQ");
/* harmony import */ var _freights_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./freights.router.module */ "10MS");
/* harmony import */ var _shared_back_end_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared.back.end.module */ "0sbA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class FreightsModule {
}
FreightsModule.ɵfac = function FreightsModule_Factory(t) { return new (t || FreightsModule)(); };
FreightsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: FreightsModule });
FreightsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [src_services_freight_service__WEBPACK_IMPORTED_MODULE_5__["FreightService"]], imports: [[
            _shared_back_end_module__WEBPACK_IMPORTED_MODULE_8__["SharedBackEndModule"],
            _freights_router_module__WEBPACK_IMPORTED_MODULE_7__["FreightsRoutingModule"],
            _form_inputs_module__WEBPACK_IMPORTED_MODULE_6__["FormInputsModeul"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](FreightsModule, { declarations: [src_app_back_end_freights_freights_component__WEBPACK_IMPORTED_MODULE_4__["FreightsComponent"],
        src_app_back_end_freights_create_freight_create_freight_component__WEBPACK_IMPORTED_MODULE_0__["CreateFreightComponent"],
        src_app_back_end_freights_delete_freight_delete_freight_component__WEBPACK_IMPORTED_MODULE_1__["DeleteFreightComponent"],
        src_app_back_end_freights_edit_freight_edit_freight_component__WEBPACK_IMPORTED_MODULE_2__["EditFreightComponent"],
        src_app_back_end_freights_freights_change_freight_case_freights_change_freight_case_component__WEBPACK_IMPORTED_MODULE_3__["FreightsChangeFreightCaseComponent"]], imports: [_shared_back_end_module__WEBPACK_IMPORTED_MODULE_8__["SharedBackEndModule"],
        _freights_router_module__WEBPACK_IMPORTED_MODULE_7__["FreightsRoutingModule"],
        _form_inputs_module__WEBPACK_IMPORTED_MODULE_6__["FormInputsModeul"]] }); })();


/***/ })

}]);
//# sourceMappingURL=back-end-freights-module.js.map