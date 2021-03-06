(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["back-end-reports-module"],{

/***/ "HKBr":
/*!************************************************!*\
  !*** ./src/modules/back-end/reports.module.ts ***!
  \************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var src_app_back_end_reports_branch_freights_report_branch_freights_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/back-end/reports/branch-freights-report/branch.freights.report.component */ "fJ1q");
/* harmony import */ var src_app_back_end_reports_clinet_freight_details_clinet_freight_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/reports/clinet-freight-details/clinet-freight-details.component */ "JeXY");
/* harmony import */ var src_app_back_end_reports_clinet_freights_report_clinet_freights_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/back-end/reports/clinet-freights-report/clinet.freights.report.component */ "w5TL");
/* harmony import */ var src_app_back_end_reports_freight_details_freight_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/back-end/reports/freight-details/freight-details.component */ "Qy1W");
/* harmony import */ var src_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/report.service */ "kU/X");
/* harmony import */ var _form_inputs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.inputs.module */ "mmFQ");
/* harmony import */ var _reports_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.router.module */ "NKkH");
/* harmony import */ var _shared_back_end_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared.back.end.module */ "0sbA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class ReportsModule {
}
ReportsModule.??fac = function ReportsModule_Factory(t) { return new (t || ReportsModule)(); };
ReportsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: ReportsModule });
ReportsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ providers: [src_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]], imports: [[
            _shared_back_end_module__WEBPACK_IMPORTED_MODULE_7__["SharedBackEndModule"],
            _reports_router_module__WEBPACK_IMPORTED_MODULE_6__["ReportsRoutingModule"],
            _form_inputs_module__WEBPACK_IMPORTED_MODULE_5__["FormInputsModeul"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](ReportsModule, { declarations: [src_app_back_end_reports_clinet_freights_report_clinet_freights_report_component__WEBPACK_IMPORTED_MODULE_2__["ClinetFreightsReportComponent"],
        src_app_back_end_reports_clinet_freight_details_clinet_freight_details_component__WEBPACK_IMPORTED_MODULE_1__["ClinetFerightDetailsComponent"],
        src_app_back_end_reports_branch_freights_report_branch_freights_report_component__WEBPACK_IMPORTED_MODULE_0__["BranchFreightsReportComponent"],
        src_app_back_end_reports_freight_details_freight_details_component__WEBPACK_IMPORTED_MODULE_3__["FerightDetailsComponent"]], imports: [_shared_back_end_module__WEBPACK_IMPORTED_MODULE_7__["SharedBackEndModule"],
        _reports_router_module__WEBPACK_IMPORTED_MODULE_6__["ReportsRoutingModule"],
        _form_inputs_module__WEBPACK_IMPORTED_MODULE_5__["FormInputsModeul"]] }); })();


/***/ }),

/***/ "JeXY":
/*!*********************************************************************************************!*\
  !*** ./src/app/back-end/reports/clinet-freight-details/clinet-freight-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ClinetFerightDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinetFerightDetailsComponent", function() { return ClinetFerightDetailsComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/report.service */ "kU/X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_back_end_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/back-end/shared/export-buttons/export.buttons.component */ "TbMG");
/* harmony import */ var src_app_back_end_shared_form_inputs_report_input_report_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/report-input/report.input.component */ "FOL+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ClinetFerightDetailsComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const tran_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", tran_r4.freightCaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](5, 2, tran_r4.changedDate, "medium"));
} }
function ClinetFerightDetailsComponent_tr_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r1.service.u.r.commissionPurchase)("data", ctx_r1.freight.commissionPurchase);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r1.service.u.r.swift)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](3, 6, ctx_r1.freight.swift, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r1.service.u.r.commissionTransfare)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](5, 9, ctx_r1.freight.commissionTransfare, " "));
} }
function ClinetFerightDetailsComponent_tr_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r2.service.u.r.auctionFines)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](2, 6, ctx_r2.freight.auctionFines, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r2.service.u.r.storeFines)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](4, 9, ctx_r2.freight.storeFines, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r2.service.u.r.dueDollarCommissionTransfare)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](6, 12, ctx_r2.freight.dueDollarCommissionTransfare, " "));
} }
function ClinetFerightDetailsComponent_tr_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r3.service.u.r.sellPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](2, 2, ctx_r3.freight.sellPrice, " "));
} }
class ClinetFerightDetailsComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service, activatedRoute) {
        super();
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.freight = {};
        this.isRequestingToServer = false;
    }
    ngOnInit() {
        this.clinetTargetId = this.activatedRoute.snapshot.params.userTargetId || this.service.u.u._id;
        this.service.seo.updateSEO("freightDetils");
        //Get Detail From The Serer
        this.getFreightDetails();
    }
    /**
     * Get Details
     */
    getFreightDetails() {
        this.isRequestingToServer = true;
        this.allSubscriptions.push(this.service.http.getFreightDetailsToClinet(this.activatedRoute.snapshot.params.targetId, this.clinetTargetId)
            .subscribe(res => {
            this.isRequestingToServer = false;
            if (res.isSuccess) {
                this.freight = res.result;
            }
            else {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            this.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
ClinetFerightDetailsComponent.??fac = function ClinetFerightDetailsComponent_Factory(t) { return new (t || ClinetFerightDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ClinetFerightDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ClinetFerightDetailsComponent, selectors: [["app-details-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????InheritDefinitionFeature"]], decls: 109, vars: 70, consts: [["id", "details-content", 1, "row"], [1, "col-lg-12", "layout-top-spacing"], [1, "statbox", "widget"], [1, "widget-header"], [1, "d-flex", "justify-content-between", "form-group"], [3, "innerText"], ["divId", "details-content"], [1, "widget-content", "widget-content-area"], [1, "row", "form-group"], [1, "table-responsive"], [1, "table", "table-bordered"], ["app-report-input", "", 1, "th-35", 3, "titel", "data"], ["app-report-input", "", 3, "titel", "data"], ["colSpan", "3"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["colSpan", "3", "app-report-input", "", 3, "titel", "data"]], template: function ClinetFerightDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "app-export-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](26, "app-export-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](34, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](38, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](39, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](40, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](42, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](43, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](44, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](47, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](52, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](53, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](55, ClinetFerightDetailsComponent_tr_55_Template, 6, 5, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](61, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](63, "app-export-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](71, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](72, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](73, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](74, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](75, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](77, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](78, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](79, ClinetFerightDetailsComponent_tr_79_Template, 6, 12, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](80, ClinetFerightDetailsComponent_tr_80_Template, 7, 15, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](81, ClinetFerightDetailsComponent_tr_81_Template, 3, 5, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](82, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](83, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](84, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](85, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](86, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](88, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](91, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](93, "app-export-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](95, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](96, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](97, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](98, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](99, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](100, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](101, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](102, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](104, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](105, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](106, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](107, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](108, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.clinetInformationForFreigh + " " + ctx.service.u.r.number + " #" + ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.name)("data", ctx.freight.clinetName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.phoneNumber)("data", ctx.freight.clinetPhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.branch)("data", ctx.freight.branchName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.frightInformation + " " + ctx.service.u.r.number + " #" + ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.carMark)("data", ctx.freight.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.carBodyNumber)("data", ctx.freight.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.lotOrStock)("data", ctx.freight.lotOrStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.buySource)("data", ctx.freight.buySourceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.carSize)("data", ctx.freight.carSizeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.freightPort)("data", ctx.freight.freightPortName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.freightState)("data", ctx.freight.freightStateName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.city)("data", ctx.freight.cityName || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.freightCase)("data", ctx.freight.freightCaseName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.freightCasees);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.changedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.freight.freightCasees);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.financialInformationFreight + " " + ctx.service.u.r.number + " #" + ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.landFreightPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](72, 59, ctx.freight.landFreightPrice, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.maritimeFreightPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](74, 62, ctx.freight.maritimeFreightPrice, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.maritimeFreightPriceIsPaid)("data", ctx.freight.maritimeFreightPriceIsPaidName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.carPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](78, 65, ctx.freight.carPrice, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.freight.freightTypeId != ctx.service.freightTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.freight.freightTypeId != ctx.service.freightTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.freight.freightTypeId == ctx.service.freightTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.lotOrStock)("data", ctx.freight.lotOrStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.maritimeFreightPriceIsPaid)("data", ctx.freight.maritimeFreightPriceIsPaidName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.dinarOnDueDollar)("data", ctx.freight.dinarOnDueDollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.containerInformation + " " + ctx.service.u.r.number + " #" + ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.container)("data", ctx.freight.containerNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.navigationalWaye)("data", ctx.freight.navigationalWayeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.arrivalDate)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](105, 68, ctx.freight.arrivalDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.arrivalPort)("data", ctx.freight.arrivalPortName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.notes)("data", ctx.freight.notes || "");
    } }, directives: [src_app_back_end_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ExportButtonsComponent"], src_app_back_end_shared_form_inputs_report_input_report_input_component__WEBPACK_IMPORTED_MODULE_6__["RepportInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".mt-container[_ngcontent-%COMP%]    {\n      height: auto;\n    }\n    .no-borader[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{\n      border:none !important\n    }\n\n    h6[_ngcontent-%COMP%]{\n      display: inline-block;\n      color:#1b55e2;\n      font-weight: 700;\n    font-size: 13px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    }\n\n    h6[_ngcontent-%COMP%]:after{\n      content:':'\n    }"] });


/***/ }),

/***/ "NKkH":
/*!*******************************************************!*\
  !*** ./src/modules/back-end/reports.router.module.ts ***!
  \*******************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_back_end_reports_branch_freights_report_branch_freights_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/reports/branch-freights-report/branch.freights.report.component */ "fJ1q");
/* harmony import */ var src_app_back_end_reports_clinet_freight_details_clinet_freight_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/back-end/reports/clinet-freight-details/clinet-freight-details.component */ "JeXY");
/* harmony import */ var src_app_back_end_reports_clinet_freights_report_clinet_freights_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/back-end/reports/clinet-freights-report/clinet.freights.report.component */ "w5TL");
/* harmony import */ var src_app_back_end_reports_freight_details_freight_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/back-end/reports/freight-details/freight-details.component */ "Qy1W");
/* harmony import */ var src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/authentcation/admin.auth.can.active.service */ "O43r");
/* harmony import */ var src_services_authentcation_admin_or_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/authentcation/admin.or.clinet.auth.can.active.service */ "Orpn");
/* harmony import */ var src_services_authentcation_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/authentcation/clinet.auth.can.active.service */ "YSHg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const ROUTS = [
    { path: 'freights', component: src_app_back_end_reports_clinet_freights_report_clinet_freights_report_component__WEBPACK_IMPORTED_MODULE_3__["ClinetFreightsReportComponent"], canActivate: [src_services_authentcation_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_7__["ClinetAuthCanActive"]] },
    { path: 'freights/:userTargetId', component: src_app_back_end_reports_clinet_freights_report_clinet_freights_report_component__WEBPACK_IMPORTED_MODULE_3__["ClinetFreightsReportComponent"], canActivate: [src_services_authentcation_admin_or_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminOrClinetAuthCanActive"]] },
    { path: 'freights/details/:targetId', component: src_app_back_end_reports_clinet_freight_details_clinet_freight_details_component__WEBPACK_IMPORTED_MODULE_2__["ClinetFerightDetailsComponent"], canActivate: [src_services_authentcation_admin_or_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminOrClinetAuthCanActive"]] },
    { path: 'freights/fullDetails/:targetId', component: src_app_back_end_reports_freight_details_freight_details_component__WEBPACK_IMPORTED_MODULE_4__["FerightDetailsComponent"], canActivate: [src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthCanActive"]] },
    { path: 'branch/freights/details/:targetId/:branchTargetId', component: src_app_back_end_reports_clinet_freight_details_clinet_freight_details_component__WEBPACK_IMPORTED_MODULE_2__["ClinetFerightDetailsComponent"], canActivate: [src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthCanActive"]] },
    { path: 'branch/freights/:branchTargetId', component: src_app_back_end_reports_branch_freights_report_branch_freights_report_component__WEBPACK_IMPORTED_MODULE_1__["BranchFreightsReportComponent"], canActivate: [src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthCanActive"]] },
];
class ReportsRoutingModule {
}
ReportsRoutingModule.??fac = function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); };
ReportsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTS)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Qy1W":
/*!*******************************************************************************!*\
  !*** ./src/app/back-end/reports/freight-details/freight-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FerightDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FerightDetailsComponent", function() { return FerightDetailsComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/report.service */ "kU/X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_back_end_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/back-end/shared/export-buttons/export.buttons.component */ "TbMG");
/* harmony import */ var src_app_back_end_shared_form_inputs_report_input_report_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/report-input/report.input.component */ "FOL+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_back_end_shared_form_inputs_report_url_report_url_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/report-url/report.url.component */ "HTjQ");









function FerightDetailsComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const tran_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", tran_r8.freightCaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](5, 2, tran_r8.changedDate, "medium"));
} }
function FerightDetailsComponent_tr_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r1.service.u.r.commissionPurchase)("data", ctx_r1.freight.commissionPurchase);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r1.service.u.r.swift)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](3, 6, ctx_r1.freight.swift, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r1.service.u.r.commissionTransfare)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](5, 9, ctx_r1.freight.commissionTransfare, " "));
} }
function FerightDetailsComponent_tr_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r2.service.u.r.auctionFines)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](2, 6, ctx_r2.freight.auctionFines, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r2.service.u.r.storeFines)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](4, 9, ctx_r2.freight.storeFines, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r2.service.u.r.titlePrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](6, 12, ctx_r2.freight.titlePrice, " "));
} }
function FerightDetailsComponent_tr_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r3.service.u.r.titleDifference)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](2, 6, ctx_r3.freight.titleDifference, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r3.service.u.r.titleCost)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](4, 9, ctx_r3.freight.titleCost, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r3.service.u.r.dueDollarCommissionTransfare)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](6, 12, ctx_r3.freight.dueDollarCommissionTransfare, " "));
} }
function FerightDetailsComponent_tr_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r4.service.u.r.titleGain)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](2, 2, ctx_r4.freight.titleGain, " "));
} }
function FerightDetailsComponent_tr_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r5.service.u.r.landGain)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](2, 6, ctx_r5.freight.landGain, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r5.service.u.r.maritimeGain)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](4, 9, ctx_r5.freight.maritimeGain, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r5.service.u.r.freightPublicGain)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](6, 12, ctx_r5.freight.freightPublicGain, " "));
} }
function FerightDetailsComponent_tr_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx_r6.service.u.r.sellPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](2, 2, ctx_r6.freight.sellPrice, " "));
} }
function FerightDetailsComponent_tr_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const tran_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](3, 5, tran_r9.paymentDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](6, 8, tran_r9.paymentAmount_dollar, "$"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](9, 11, tran_r9.paymentAmount_dinar, "LYD "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", tran_r9.paymentPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", tran_r9.notes);
} }
class FerightDetailsComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service, activateRouter) {
        super();
        this.service = service;
        this.activateRouter = activateRouter;
        this.freight = {};
        this.isRequestingToServer = false;
    }
    ngOnInit() {
        this.service.seo.updateSEO("freightDetils");
        //Get Detail From The Serer
        this.getFreightDetails();
    }
    /**
     * Get Details
     */
    getFreightDetails() {
        this.isRequestingToServer = true;
        this.allSubscriptions.push(this.service.http.getFreightDetails(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            this.isRequestingToServer = false;
            if (res.isSuccess) {
                this.freight = res.result;
            }
            else {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            this.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
FerightDetailsComponent.??fac = function FerightDetailsComponent_Factory(t) { return new (t || FerightDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
FerightDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: FerightDetailsComponent, selectors: [["app-details-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????InheritDefinitionFeature"]], decls: 152, vars: 134, consts: [["id", "details-content", 1, "row"], [1, "col-lg-12", "layout-top-spacing"], [1, "statbox", "widget"], [1, "widget-header"], [1, "d-flex", "justify-content-between", "form-group"], [3, "innerText"], ["divId", "details-content"], [1, "widget-content", "widget-content-area"], [1, "row", "form-group"], [1, "table-responsive"], [1, "table", "table-bordered"], ["app-report-input", "", 1, "th-35", 3, "titel", "data"], ["app-report-input", "", 3, "titel", "data"], ["colSpan", "2"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["colSpan", "3"], ["app-report-url", "", 3, "titel", "data"], ["colSpan", "3", "app-report-input", "", 3, "titel", "data"]], template: function FerightDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "app-export-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](26, "app-export-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](34, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](36, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](38, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](39, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](40, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](42, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](43, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](44, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](46, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](48, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](49, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](53, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](54, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](56, FerightDetailsComponent_tr_56_Template, 6, 5, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](62, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](64, "app-export-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](72, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](73, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](74, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](75, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](76, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](78, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](79, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](80, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](81, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](82, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](83, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](84, FerightDetailsComponent_tr_84_Template, 6, 12, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](85, FerightDetailsComponent_tr_85_Template, 7, 15, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](86, FerightDetailsComponent_tr_86_Template, 7, 15, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](87, FerightDetailsComponent_tr_87_Template, 3, 5, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](88, FerightDetailsComponent_tr_88_Template, 7, 15, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](89, FerightDetailsComponent_tr_89_Template, 3, 5, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](91, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](92, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](93, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](94, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](95, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](96, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](97, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](98, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](99, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](100, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](101, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](102, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](103, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](105, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](106, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](107, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](108, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](110, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](111, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](113, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](115, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](116, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](117, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](118, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](119, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](120, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](121, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](122, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](123, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](124, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](125, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](126, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](127, FerightDetailsComponent_tr_127_Template, 14, 14, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](128, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](129, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](130, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](131, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](132, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](133, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](134, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](135, "app-export-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](137, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](138, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](139, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](140, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](141, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](142, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](143, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](144, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](145, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](146, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](147, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](148, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](149, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](150, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](151, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.clinetInformationForFreigh + " " + ctx.service.u.r.number + " #" + ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.name)("data", ctx.freight.clinetName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.phoneNumber)("data", ctx.freight.clinetPhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.branch)("data", ctx.freight.branchName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.frightInformation + " " + ctx.service.u.r.number + " #" + ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.freightType)("data", ctx.freight.freightTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.carMark)("data", ctx.freight.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.carBodyNumber)("data", ctx.freight.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.lotOrStock)("data", ctx.freight.lotOrStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.buySource)("data", ctx.freight.buySourceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.carSize)("data", ctx.freight.carSizeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.freightPort)("data", ctx.freight.freightPortName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.freightState)("data", ctx.freight.freightStateName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.city)("data", ctx.freight.cityName || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.freightCase)("data", ctx.freight.freightCaseName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.freightCasees);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.changedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.freight.freightCasees);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.financialInformationFreight + " " + ctx.service.u.r.number + " #" + ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.landFreightPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](73, 93, ctx.freight.landFreightPrice, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.maritimeFreightPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](75, 96, ctx.freight.maritimeFreightPrice, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.maritimeFreightPriceIsPaid)("data", ctx.freight.maritimeFreightPriceIsPaidName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.landCost)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](79, 99, ctx.freight.landCost, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.maritimeCost)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](81, 102, ctx.freight.maritimeCost, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.carPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](83, 105, ctx.freight.carPrice, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.freight.freightTypeId != ctx.service.freightTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.freight.freightTypeId != ctx.service.freightTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.freight.freightTypeId != ctx.service.freightTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.freight.freightTypeId != ctx.service.freightTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.freight.freightTypeId != ctx.service.freightTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.freight.freightTypeId == ctx.service.freightTypesEnum.SectorSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.totalAmount_dollar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](92, 108, ctx.freight.totalAmount_dollar, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.totalPaidAmount_dollar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](94, 111, ctx.freight.totalPaidAmount_dollar, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.totalDueAmount_dollar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](96, 114, ctx.freight.totalDueAmount_dollar, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.totalAmount_dinar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](99, 117, ctx.freight.totalAmount_dinar, "LYD "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.totalPaidAmount_dinar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](101, 120, ctx.freight.totalPaidAmount_dinar, "LYD "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.totalDueAmount_dinar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](103, 123, ctx.freight.totalDueAmount_dinar, "LYD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.carCost)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](106, 126, ctx.freight.carCost, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.netProfit)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](108, 129, ctx.freight.netProfit, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.lotOrStock)("data", ctx.freight.lotOrStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.maritimeFreightPriceIsPaid)("data", ctx.freight.maritimeFreightPriceIsPaidName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.dinarOnDueDollar)("data", ctx.freight.dinarOnDueDollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.paymentTransaction);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.paidDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.paidAmount_dollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.paidAmount_dinar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.paymentPlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.freight.paymentsTransaction);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("innerText", ctx.service.u.r.containerInformation + " " + ctx.service.u.r.number + " #" + ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.container)("data", ctx.freight.containerNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.navigationalWaye)("data", ctx.freight.navigationalWayeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.trackLink)("data", ctx.freight.trackLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.arrivalDate)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](148, 132, ctx.freight.arrivalDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.arrivalPort)("data", ctx.freight.arrivalPortName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("titel", ctx.service.u.r.notes)("data", ctx.freight.notes || "");
    } }, directives: [src_app_back_end_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ExportButtonsComponent"], src_app_back_end_shared_form_inputs_report_input_report_input_component__WEBPACK_IMPORTED_MODULE_6__["RepportInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], src_app_back_end_shared_form_inputs_report_url_report_url_component__WEBPACK_IMPORTED_MODULE_8__["RepportUrlComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".mt-container[_ngcontent-%COMP%]    {\n      height: auto;\n    }\n    .no-borader[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{\n      border:none !important\n    }\n\n    h6[_ngcontent-%COMP%]{\n      display: inline-block;\n      color:#1b55e2;\n      font-weight: 700;\n    font-size: 13px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    }\n\n    h6[_ngcontent-%COMP%]:after{\n      content:':'\n    }"] });


/***/ }),

/***/ "fJ1q":
/*!*********************************************************************************************!*\
  !*** ./src/app/back-end/reports/branch-freights-report/branch.freights.report.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BranchFreightsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchFreightsReportComponent", function() { return BranchFreightsReportComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/report.service */ "kU/X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/select-input/select-input.component */ "XBrH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/fop/fop-header/fop-header.component */ "OhZK");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/fop/fop-sort/fop-sort.component */ "lyqo");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/fop/fop-paging/fop.paging.component */ "VjaU");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");















function BranchFreightsReportComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "div", 59);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("title", ctx_r0.service.u.r.loadingData);
} }
function BranchFreightsReportComponent_tr_88_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "div", 64);
} }
const _c0 = function (a2) { return ["/financialTransfers", "payAmount", a2]; };
function BranchFreightsReportComponent_tr_88_div_3_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](3, _c0, item_r2._id))("title", ctx_r5.service.u.r.paymentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r5.service.u.r.paymentAmount, " ");
} }
const _c1 = function (a2) { return ["/freights", "edit", a2]; };
function BranchFreightsReportComponent_tr_88_div_3_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](3, _c1, item_r2._id))("title", ctx_r6.service.u.r.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r6.service.u.r.edit, " ");
} }
const _c2 = function (a2) { return ["/freights", "delete", a2]; };
const _c3 = function (a0, a1) { return { deletingRefranceNumber: a0, deletingClinetName: a1 }; };
function BranchFreightsReportComponent_tr_88_div_3_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](4, _c2, item_r2._id))("state", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](6, _c3, item_r2.refranceNumber, item_r2.clinetName))("title", ctx_r7.service.u.r.delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r7.service.u.r.delete, " ");
} }
const _c4 = function (a3) { return ["/reports", "freights", "fullDetails", a3]; };
const _c5 = function (a2) { return ["/financialTransfers", "details", a2]; };
function BranchFreightsReportComponent_tr_88_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????namespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "svg", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "circle", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "circle", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](5, "circle", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????namespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](8, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, BranchFreightsReportComponent_tr_88_div_3_a_13_Template, 3, 5, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](14, BranchFreightsReportComponent_tr_88_div_3_a_14_Template, 3, 5, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](15, BranchFreightsReportComponent_tr_88_div_3_a_15_Template, 3, 9, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](9, _c4, item_r2._id))("title", ctx_r4.service.u.r.fullDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r4.service.u.r.fullDetails, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](11, _c5, item_r2._id))("title", ctx_r4.service.u.r.transferDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r4.service.u.r.transferDetails, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !item_r2.actionDisapled);
} }
const _c6 = function (a0, a1) { return { "color": a0, "background-color": a1 }; };
function BranchFreightsReportComponent_tr_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, BranchFreightsReportComponent_tr_88_div_2_Template, 1, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, BranchFreightsReportComponent_tr_88_div_3_Template, 16, 13, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](8, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](10, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](13, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](14, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](18, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](23, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](24, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](25, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](26, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](27, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.clinetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](6, 23, item_r2.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.refranceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.carMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](36, _c4, item_r2._id))("innerText", item_r2.carBodyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.freightCaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.buySourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.freightStateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](38, _c6, item_r2.portFontColor, item_r2.portBackgroundColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.freightPortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.carSizeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](17, 25, item_r2.landFreightPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](19, 28, item_r2.landCost, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](21, 31, item_r2.maritimeFreightPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.maritimeFreightPriceIsPaidName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.containerNumber || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.navigationalWayeName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r2.arrivalPortName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](28, 34, item_r2.arrivalDate));
} }
class BranchFreightsReportComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service, activatedRoute) {
        super();
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.skip = 0;
        this.limit = 50;
        this.entries = [];
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"]();
    }
    ngOnInit() {
        this.isNotBranch = this.activatedRoute.snapshot.params.branchTargetId ? true : false;
        this.branchTargetId = this.activatedRoute.snapshot.params.branchTargetId || this.service.u.u.branchIndex;
        this.clinetTagetName = this.activatedRoute.snapshot.queryParams.branchName;
        this.service.initBranchFreightsFilterForm(this.branchTargetId);
        this.service.seo.updateSEO("freightsReport");
        this.service.getItems();
        this.getEntiries(true);
        this.getMaritimeFreightPriceTotalDue();
    }
    /**
   * Get My Users
   */
    getEntiries(isReset) {
        if (isReset) {
            this.skip = 0;
            this.entries = [];
            this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
        }
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.service.http.getBranchFreightsReport(this.skip, this.limit, this.service.form.value).subscribe(res => {
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
    /**
     * ?????? ???????? ???????????? ?????????????? ???? ?????????? ????????????
     */
    getMaritimeFreightPriceTotalDue() {
        this.allSubscriptions.push(this.service.http.getMaritimeFreightPriceTotalDueForBranch(this.branchTargetId).subscribe(res => {
            if (res.isSuccess) {
                this.maritimeFreightPriceTotalDue = res.result;
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
BranchFreightsReportComponent.??fac = function BranchFreightsReportComponent_Factory(t) { return new (t || BranchFreightsReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
BranchFreightsReportComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: BranchFreightsReportComponent, selectors: [["app-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]], decls: 93, vars: 82, consts: [[1, "row", "layout-top-spacing"], [1, "col-md-8"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carMark", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carBodyNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-select-input", "", "fcn", "freightCaseId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "buySourceId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "carSizeId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "arrivalPortId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "reset", "type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled"], [1, "col-md-4", "layout-spacing"], [1, "widget", "widget-card-four"], [1, "widget-content"], [1, "w-content"], [1, "w-info"], [1, "value", 3, "innerText"], [1, "", 3, "innerText"], [1, ""], [1, "w-icon"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "dollar-sign", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 288 512", 1, "svg-inline--fa", "fa-dollar-sign", "fa-w-9", "fa-3x"], ["fill", "currentColor", "d", "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z", 1, ""], [1, "progress"], ["role", "progressbar", "aria-valuenow", "10", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-gradient-secondary", 2, "width", "57%"], [1, "col-lg-12"], [1, "d-flex", "justify-content-between"], ["tableId", "clinetFreightsTable", 3, "searchText"], [1, "row", "table-responsive", "form-group"], ["id", "clinetFreightsTable", 1, "table", "mb-4", "table-hover"], [1, "th-5", 3, "innerText"], ["filedName", "clinetName", 3, "fop", "fieldText"], ["filedName", "createdDate", 3, "fop", "fieldText"], ["filedName", "refranceNumber", 3, "fop", "fieldText"], ["filedName", "carMark", 3, "fop", "fieldText"], ["filedName", "carBodyNumber", 3, "fop", "fieldText"], ["filedName", "freightCaseName", 3, "fop", "fieldText"], ["filedName", "buySourceName", 3, "fop", "fieldText"], ["filedName", "freightStateName", 3, "fop", "fieldText"], ["filedName", "freightPortName", 3, "fop", "fieldText"], ["filedName", "carSizeName", 3, "fop", "fieldText"], ["filedName", "landFreightPrice", 3, "fop", "fieldText"], ["filedName", "landCost", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPrice", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPriceIsPaidName", 3, "fop", "fieldText"], ["filedName", "containerName", 3, "fop", "fieldText"], ["filedName", "navigationalWayeName", 3, "fop", "fieldText"], ["filedName", "arrivalPortName", 3, "fop", "fieldText"], ["filedName", "arrivalDate", 3, "fop", "fieldText"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], [2, "display", "inline-flex"], ["class", "spinner-grow text-danger align-self-center loader-sm", 4, "ngIf"], ["class", "dropdown dropup custom-dropdown-icon    ", 4, "ngIf"], [1, "link", 3, "routerLink", "innerText"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"], [1, "dropdown", "dropup", "custom-dropdown-icon"], ["href", "#", "role", "button", "id", "dropdownMenuLink-3", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-more-vertical"], ["cx", "12", "cy", "12", "r", "1"], ["cx", "12", "cy", "5", "r", "1"], ["cx", "12", "cy", "19", "r", "1"], ["aria-labelledby", "dropdownMenuLink-3", 1, "dropdown-menu", "dropdown-menu-right", 2, "will-change", "transform"], [1, "dropdown-item", "mr-2", 3, "routerLink", "title"], [1, "fas", "fa-print", "fa-1-5x"], ["class", "dropdown-item mr-2", 3, "routerLink", "title", 4, "ngIf"], ["class", "dropdown-item mr-2", 3, "routerLink", "state", "title", 4, "ngIf"], [1, "fas", "fa-hand-holding-usd", "fa-1-5x", "jumb-animation"], [1, "far", "fa-edit", "fa-1-5x", "jumb-animation"], [1, "dropdown-item", "mr-2", 3, "routerLink", "state", "title"], [1, "far", "fa-trash-alt", "fa-1-5x", "jumb-animation"]], template: function BranchFreightsReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("submit", function BranchFreightsReportComponent_Template_form_submit_8_listener() { return ctx.getEntiries(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](20, BranchFreightsReportComponent_div_20_Template, 1, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](21, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](27, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](28, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](29, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](33, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](35, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](42, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "fop-header", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("searchText", function BranchFreightsReportComponent_Template_fop_header_searchText_45_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](50, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](52, "fop-sort", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](54, "fop-sort", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](56, "fop-sort", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](58, "fop-sort", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](60, "fop-sort", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](62, "fop-sort", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](64, "fop-sort", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](66, "fop-sort", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](68, "fop-sort", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](70, "fop-sort", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](72, "fop-sort", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](74, "fop-sort", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](76, "fop-sort", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](78, "fop-sort", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](80, "fop-sort", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](82, "fop-sort", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](84, "fop-sort", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](86, "fop-sort", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](87, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](88, BranchFreightsReportComponent_tr_88_Template, 29, 41, "tr", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](89, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](90, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](91, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](92, "fop-paging", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("getMoreItems", function BranchFreightsReportComponent_Template_fop_paging_getMoreItems_92_listener() { return ctx.getEntiries(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx.service.u.r.filterIn + " " + ctx.service.u.r.freights + " " + (ctx.isNotBranch ? ctx.service.u.r.forBranch + " #" + ctx.clinetTagetName : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.service.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("form", ctx.service.form)("lable", ctx.service.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("form", ctx.service.form)("lable", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("form", ctx.service.form)("lable", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("list", ctx.service.freightCases)("form", ctx.service.form)("lable", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("list", ctx.service.buySources)("form", ctx.service.form)("lable", ctx.service.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("list", ctx.service.carSizes)("form", ctx.service.form)("lable", ctx.service.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("list", ctx.service.arrivalPorts)("form", ctx.service.form)("lable", ctx.service.u.r.arrivalPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.service.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx.service.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](28, 68, ctx.maritimeFreightPriceTotalDue));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx.service.u.r.maritimeFreightPriceTotalDue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx.service.u.r.freights + " " + (ctx.isNotBranch ? ctx.service.u.r.forBranch + " #" + ctx.clinetTagetName : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx.service.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.clinet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.trnasactionDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.landFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.landCost);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.maritimeFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.maritimeFreightPriceIsPaid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.navigationalWaye);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind3"](89, 70, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind3"](90, 74, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind3"](91, 78, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__["TextInputComponent"], src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_8__["SelectInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_13__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "kU/X":
/*!****************************************!*\
  !*** ./src/services/report.service.ts ***!
  \****************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "NqkH");
/* harmony import */ var src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/consts/car.sizes.const */ "qB6b");
/* harmony import */ var src_consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/consts/freight.cases.const */ "TEQo");
/* harmony import */ var src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/enums/freitght.types.enum */ "FyP3");
/* harmony import */ var _authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seo.service */ "C2k8");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











class ReportService {
    constructor(u, seo, http, router) {
        this.u = u;
        this.seo = seo;
        this.http = http;
        this.router = router;
        this.freightTypesEnum = src_enums_freitght_types_enum__WEBPACK_IMPORTED_MODULE_5__["FreitghtTypesEnum"];
        this.freightCases = src_consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_4__["freightCasesArray"];
        this.carSizes = src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_3__["carSizesArray"];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        this.freightsSelected = [];
        this.freightCasesToChange = src_consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_4__["freightCasesContainerArray"];
        this.onUpdateContainerNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** Init Continers Filter Form */
    initContinersFilterForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]()
        });
    }
    /** Init Clinet Freights Filter Form */
    initClinetFreightsFilterForm(clinetId) {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            carMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            freightCaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            buySourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            freightStateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            carSizeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            freightPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            arrivalPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            carBodyNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            clinetTargetId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](clinetId)
        });
    }
    /** Init Branch Freights Filter Form */
    initBranchFreightsFilterForm(branchIndex) {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            carMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            freightCaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            buySourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            freightStateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            carSizeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            freightPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            arrivalPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            carBodyNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            branchIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](branchIndex)
        });
    }
    /**Get Items To Select From Them */
    getItems(itemName) {
        let itemsNames = itemName ? [itemName] : [
            "buySources", "states", "arrivalPorts"
        ];
        this.http.getSelectItems(itemsNames).subscribe(res => {
            if (res.isSuccess) {
                itemsNames.forEach(itemName => {
                    this[itemName] = res.result[itemName];
                });
            }
            else {
                _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
        });
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
    /**
   * Close: Back To The Page
   */
    closeModel() {
        this.isFormSubmitError = false;
        this.form.reset();
        this.router.navigate(['/reports', 'containers']);
    }
} //End Class
ReportService.??fac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_seo_service__WEBPACK_IMPORTED_MODULE_7__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
ReportService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ReportService, factory: ReportService.??fac });


/***/ }),

/***/ "w5TL":
/*!*********************************************************************************************!*\
  !*** ./src/app/back-end/reports/clinet-freights-report/clinet.freights.report.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ClinetFreightsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinetFreightsReportComponent", function() { return ClinetFreightsReportComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/report.service */ "kU/X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/select-input/select-input.component */ "XBrH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/fop/fop-header/fop-header.component */ "OhZK");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/fop/fop-sort/fop-sort.component */ "lyqo");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/fop/fop-paging/fop.paging.component */ "VjaU");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");















function ClinetFreightsReportComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "div", 61);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("title", ctx_r0.service.u.r.loadingData);
} }
function ClinetFreightsReportComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "fop-sort", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx_r1.fop)("fieldText", ctx_r1.service.u.r.sellPrice);
} }
function ClinetFreightsReportComponent_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "fop-sort", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx_r2.fop)("fieldText", ctx_r2.service.u.r.landFreightPrice);
} }
function ClinetFreightsReportComponent_th_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "fop-sort", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx_r3.fop)("fieldText", ctx_r3.service.u.r.maritimeFreightPrice);
} }
function ClinetFreightsReportComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "th", 6);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx_r4.service.u.r.maritimeFreightPriceIsPaid);
} }
function ClinetFreightsReportComponent_th_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "fop-sort", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx_r5.fop)("fieldText", ctx_r5.service.u.r.auctionFines);
} }
function ClinetFreightsReportComponent_th_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "fop-sort", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx_r6.fop)("fieldText", ctx_r6.service.u.r.storeFines);
} }
function ClinetFreightsReportComponent_th_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "fop-sort", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx_r7.fop)("fieldText", ctx_r7.service.u.r.titlePrice);
} }
function ClinetFreightsReportComponent_th_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "fop-sort", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx_r8.fop)("fieldText", ctx_r8.service.u.r.swift);
} }
const _c0 = function (a2) { return ["/freights", "edit", a2]; };
function ClinetFreightsReportComponent_tr_98_div_2_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](3, _c0, item_r10._id))("title", ctx_r21.service.u.r.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r21.service.u.r.edit, " ");
} }
const _c1 = function (a3) { return ["/reports", "freights", "fullDetails", a3]; };
function ClinetFreightsReportComponent_tr_98_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????namespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "svg", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "circle", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "circle", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](5, "circle", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????namespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](8, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, ClinetFreightsReportComponent_tr_98_div_2_a_10_Template, 3, 5, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](4, _c1, item_r10._id))("title", ctx_r11.service.u.r.fullDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r11.service.u.r.fullDetails, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !item_r10.actionDisapled);
} }
function ClinetFreightsReportComponent_tr_98_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "currency");
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 1, item_r10.sellPrice, " "));
} }
function ClinetFreightsReportComponent_tr_98_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "currency");
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 1, item_r10.landFreightPrice, " "));
} }
function ClinetFreightsReportComponent_tr_98_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "currency");
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 1, item_r10.maritimeFreightPrice, " "));
} }
function ClinetFreightsReportComponent_tr_98_td_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "span", 6);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx_r27.freightService.u.r.yes);
} }
function ClinetFreightsReportComponent_tr_98_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, ClinetFreightsReportComponent_tr_98_td_20_span_1_Template, 1, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", item_r10.maritimeFreightPriceIsPaid == true);
} }
function ClinetFreightsReportComponent_tr_98_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "currency");
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 1, item_r10.auctionFines, " "));
} }
function ClinetFreightsReportComponent_tr_98_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "currency");
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 1, item_r10.storeFines, " "));
} }
function ClinetFreightsReportComponent_tr_98_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "currency");
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 1, item_r10.title, " "));
} }
function ClinetFreightsReportComponent_tr_98_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "currency");
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](1, 1, item_r10.swift, " "));
} }
function ClinetFreightsReportComponent_tr_98_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "a", 83);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("href", item_r10.trackLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"])("innerText", ctx_r20.service.u.r.open);
} }
const _c2 = function (a3) { return ["/reports", "freights", "details", a3]; };
function ClinetFreightsReportComponent_tr_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, ClinetFreightsReportComponent_tr_98_div_2_Template, 11, 6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](8, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](10, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, ClinetFreightsReportComponent_tr_98_td_13_Template, 2, 4, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](14, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](18, ClinetFreightsReportComponent_tr_98_td_18_Template, 2, 4, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](19, ClinetFreightsReportComponent_tr_98_td_19_Template, 2, 4, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](20, ClinetFreightsReportComponent_tr_98_td_20_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](21, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, ClinetFreightsReportComponent_tr_98_td_23_Template, 2, 4, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](24, ClinetFreightsReportComponent_tr_98_td_24_Template, 2, 4, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, ClinetFreightsReportComponent_tr_98_td_25_Template, 2, 4, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](26, ClinetFreightsReportComponent_tr_98_td_26_Template, 2, 4, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](27, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](29, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](30, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](31, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](33, ClinetFreightsReportComponent_tr_98_a_33_Template, 1, 2, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](34, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](36, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !item_r10.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.refranceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](5, 29, item_r10.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.carMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](42, _c2, item_r10._id))("innerText", item_r10.carBodyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.lotOrStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.buySourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](12, 31, item_r10.carPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r9.isAllowShow_sellPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.carSizeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.freightPortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.freightStateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.cityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r9.isAllowShow_landFreightPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r9.isAllowShow_maritimeFreightPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r9.isAllowShow_maritimeFreightPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](22, 34, item_r10.commissionPurchase, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r9.isAllowShow_auctionFines);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r9.isAllowShow_storeFines);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r9.isAllowShow_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r9.isAllowShow_swift);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](28, 37, item_r10.commissionTransfare, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.freightCaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.containerNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.navigationalWayeName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", item_r10.trackLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](35, 40, item_r10.arrivalDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", item_r10.arrivalPortName || "");
} }
class ClinetFreightsReportComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service, activatedRoute) {
        super();
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.skip = 0;
        this.limit = 50;
        this.entries = [];
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"]();
        //???????? ?????? ???????? ???????????? ???? ???????? ???? ???????????? ?????? ????????????
        this.isAllowShow_landFreightPrice = false;
        this.isAllowShow_maritimeFreightPrice = false;
        this.isAllowShow_auctionFines = false;
        this.isAllowShow_storeFines = false;
        this.isAllowShow_title = false;
        this.isAllowShow_swift = false;
        this.isAllowShow_sellPrice = false;
        this.isAllowShow_commissionPurchase = false;
    }
    ngOnInit() {
        this.isNotClinet = this.activatedRoute.snapshot.params.userTargetId ? true : false;
        this.clinetTargetId = this.activatedRoute.snapshot.params.userTargetId || this.service.u.u._id;
        this.clinetTagetName = this.activatedRoute.snapshot.queryParams.userName;
        this.service.initClinetFreightsFilterForm(this.clinetTargetId);
        this.service.seo.updateSEO("freightsReport");
        this.service.getItems();
        this.getEntiries(true);
        this.getMaritimeFreightPriceTotalDue();
    }
    /**
   * Get My Users
   */
    getEntiries(isReset) {
        if (isReset) {
            this.skip = 0;
            this.entries = [];
            this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
        }
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.service.http.getClinetFreightsReport(this.skip, this.limit, this.service.form.value).subscribe(res => {
            //Update FOP Properties
            if (res.noMoreOfResult)
                this.fop.paging.disableGetMoreButton = true;
            this.fop.paging.isRequestingToServer = false;
            if (res.isSuccess) {
                this.entries = [...this.entries, ...res.result];
                this.isAllowShow_landFreightPrice = this.entries.findIndex(e => +e.landFreightPrice > 0) > -1;
                this.isAllowShow_maritimeFreightPrice = this.entries.findIndex(e => +e.maritimeFreightPrice > 0) > -1;
                this.isAllowShow_auctionFines = this.entries.findIndex(e => +e.auctionFines > 0) > -1;
                this.isAllowShow_storeFines = this.entries.findIndex(e => +e.storeFines > 0) > -1;
                this.isAllowShow_title = this.entries.findIndex(e => +e.titlePrice > 0) > -1;
                this.isAllowShow_swift = this.entries.findIndex(e => +e.swift > 0) > -1;
                this.isAllowShow_sellPrice = this.entries.findIndex(e => +e.sellPrice > 0) > -1;
                this.isAllowShow_commissionPurchase = this.entries.findIndex(e => +e.commissionPurchase > 0) > -1;
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
    /**
     * ?????? ???????? ???????????? ?????????????? ???? ?????????? ????????????
     */
    getMaritimeFreightPriceTotalDue() {
        this.allSubscriptions.push(this.service.http.getMaritimeFreightPriceTotalDueFromClinet(this.clinetTargetId).subscribe(res => {
            if (res.isSuccess) {
                this.maritimeFreightPriceTotalDue = res.result;
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
ClinetFreightsReportComponent.??fac = function ClinetFreightsReportComponent_Factory(t) { return new (t || ClinetFreightsReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
ClinetFreightsReportComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: ClinetFreightsReportComponent, selectors: [["app-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]], decls: 103, vars: 92, consts: [[1, "row", "layout-top-spacing"], [1, "col-md-8"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carMark", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carBodyNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-select-input", "", "fcn", "freightCaseId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "buySourceId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "carSizeId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "arrivalPortId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "reset", "type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled"], [1, "col-md-4", "layout-spacing"], [1, "widget", "widget-card-four"], [1, "widget-content"], [1, "w-content"], [1, "w-info"], [1, "value", 3, "innerText"], [1, "", 3, "innerText"], [1, ""], [1, "w-icon"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "dollar-sign", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 288 512", 1, "svg-inline--fa", "fa-dollar-sign", "fa-w-9", "fa-3x"], ["fill", "currentColor", "d", "M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z", 1, ""], [1, "progress"], ["role", "progressbar", "aria-valuenow", "10", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-gradient-secondary", 2, "width", "57%"], [1, "col-lg-12"], [1, "d-flex", "justify-content-between"], ["tableId", "clinetFreightsTable", 3, "searchText"], [1, "row", "table-responsive", "form-group"], ["id", "clinetFreightsTable", 1, "table", "mb-4", "table-hover"], ["filedName", "refranceNumber", 3, "fop", "fieldText"], ["filedName", "createdDate", 3, "fop", "fieldText"], ["filedName", "carMark", 3, "fop", "fieldText"], ["filedName", "carBodyNumber", 3, "fop", "fieldText"], ["filedName", "lotOrStock", 3, "fop", "fieldText"], ["filedName", "buySourceName", 3, "fop", "fieldText"], ["filedName", "carPrice", 3, "fop", "fieldText"], [4, "ngIf"], ["filedName", "carSizeName", 3, "fop", "fieldText"], ["filedName", "freightPortName", 3, "fop", "fieldText"], ["filedName", "freightStateName", 3, "fop", "fieldText"], ["filedName", "cityName", 3, "fop", "fieldText"], [3, "innerText", 4, "ngIf"], ["filedName", "commissionPurchase", 3, "fop", "fieldText"], ["filedName", "commissionTransfare", 3, "fop", "fieldText"], ["filedName", "freightCaseName", 3, "fop", "fieldText"], ["filedName", "containerNumber", 3, "fop", "fieldText"], ["filedName", "navigationalWayeName", 3, "fop", "fieldText"], ["filedName", "trackLink", 3, "fop", "fieldText"], ["filedName", "arrivalDate", 3, "fop", "fieldText"], ["filedName", "arrivalPortName", 3, "fop", "fieldText"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], ["filedName", "sellPrice", 3, "fop", "fieldText"], ["filedName", "landFreightPrice", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPrice", 3, "fop", "fieldText"], ["filedName", "auctionFines", 3, "fop", "fieldText"], ["filedName", "storeFines", 3, "fop", "fieldText"], ["filedName", "title", 3, "fop", "fieldText"], ["filedName", "swift", 3, "fop", "fieldText"], ["class", "dropdown dropup custom-dropdown-icon ", 4, "ngIf"], [1, "link", 3, "routerLink", "innerText"], ["class", "link", 3, "href", "innerText", 4, "ngIf"], [1, "dropdown", "dropup", "custom-dropdown-icon"], ["href", "#", "role", "button", "id", "dropdownMenuLink-3", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-more-vertical"], ["cx", "12", "cy", "12", "r", "1"], ["cx", "12", "cy", "5", "r", "1"], ["cx", "12", "cy", "19", "r", "1"], ["aria-labelledby", "dropdownMenuLink-3", 1, "dropdown-menu", "dropdown-menu-right", 2, "will-change", "transform"], [1, "dropdown-item", "mr-2", 3, "routerLink", "title"], [1, "fas", "fa-print", "fa-1-5x"], ["class", "dropdown-item mr-2", 3, "routerLink", "title", 4, "ngIf"], [1, "far", "fa-edit", "fa-1-5x", "jumb-animation"], [1, "link", 3, "href", "innerText"]], template: function ClinetFreightsReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("submit", function ClinetFreightsReportComponent_Template_form_submit_8_listener() { return ctx.getEntiries(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](20, ClinetFreightsReportComponent_div_20_Template, 1, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](21, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](27, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](28, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](29, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](33, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](35, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](42, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "fop-header", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("searchText", function ClinetFreightsReportComponent_Template_fop_header_searchText_45_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](50, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](52, "fop-sort", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](54, "fop-sort", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](56, "fop-sort", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](58, "fop-sort", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](60, "fop-sort", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](62, "fop-sort", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](64, "fop-sort", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](65, ClinetFreightsReportComponent_th_65_Template, 2, 2, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](67, "fop-sort", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](69, "fop-sort", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](71, "fop-sort", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](73, "fop-sort", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](74, ClinetFreightsReportComponent_th_74_Template, 2, 2, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](75, ClinetFreightsReportComponent_th_75_Template, 2, 2, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](76, ClinetFreightsReportComponent_th_76_Template, 1, 1, "th", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](78, "fop-sort", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](79, ClinetFreightsReportComponent_th_79_Template, 2, 2, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](80, ClinetFreightsReportComponent_th_80_Template, 2, 2, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](81, ClinetFreightsReportComponent_th_81_Template, 2, 2, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](82, ClinetFreightsReportComponent_th_82_Template, 2, 2, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](84, "fop-sort", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](86, "fop-sort", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](88, "fop-sort", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](90, "fop-sort", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](92, "fop-sort", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](93, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](94, "fop-sort", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](96, "fop-sort", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](97, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](98, ClinetFreightsReportComponent_tr_98_Template, 37, 44, "tr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](99, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](100, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](101, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](102, "fop-paging", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("getMoreItems", function ClinetFreightsReportComponent_Template_fop_paging_getMoreItems_102_listener() { return ctx.getEntiries(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx.service.u.r.filterIn + " " + ctx.service.u.r.freights + " " + (ctx.isNotClinet ? ctx.service.u.r.forClinet + " #" + ctx.clinetTagetName : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.service.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("form", ctx.service.form)("lable", ctx.service.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("form", ctx.service.form)("lable", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("form", ctx.service.form)("lable", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("list", ctx.service.freightCases)("form", ctx.service.form)("lable", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("list", ctx.service.buySources)("form", ctx.service.form)("lable", ctx.service.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("list", ctx.service.carSizes)("form", ctx.service.form)("lable", ctx.service.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("list", ctx.service.arrivalPorts)("form", ctx.service.form)("lable", ctx.service.u.r.arrivalPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.service.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx.service.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](28, 78, ctx.maritimeFreightPriceTotalDue));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx.service.u.r.maritimeFreightPriceTotalDue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx.service.u.r.freights + " " + (ctx.isNotClinet ? ctx.service.u.r.forClinet + " #" + ctx.clinetTagetName : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("innerText", ctx.service.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.trnasactionDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.lotOrStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.isAllowShow_sellPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.isAllowShow_landFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.isAllowShow_maritimeFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.isAllowShow_maritimeFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.commissionPurchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.isAllowShow_auctionFines);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.isAllowShow_storeFines);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.isAllowShow_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.isAllowShow_swift);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.commissionTransfare);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.navigationalWaye);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.trackLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind3"](99, 80, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind3"](100, 84, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind3"](101, 88, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__["TextInputComponent"], src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_8__["SelectInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_13__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=back-end-reports-module.js.map