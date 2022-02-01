(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["back-end-containers-module"],{

/***/ "AiJs":
/*!************************************************************************!*\
  !*** ./src/app/back-end/containers/containers/containers.component.ts ***!
  \************************************************************************/
/*! exports provided: ContainersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainersComponent", function() { return ContainersComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/container.service */ "LArQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/fop/fop-header/fop-header.component */ "OhZK");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/fop/fop-sort/fop-sort.component */ "lyqo");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/fop/fop-paging/fop.paging.component */ "VjaU");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");














function ContainersComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 33);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r0.service.u.r.loadingData);
} }
function ContainersComponent_tbody_63_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "td", 44);
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowSpan", item_r2.freights.length)("innerText", item_r2.containerNumber || "");
} }
function ContainersComponent_tbody_63_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContainersComponent_tbody_63_tr_1_td_2_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.service.selectContainer(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContainersComponent_tbody_63_tr_1_td_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; return item_r2.IsSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowSpan", item_r2.freights.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r2.IsSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r2.IsSelected ? ctx_r7.service.u.r.unSelect : ctx_r7.service.u.r.select, " ");
} }
const _c0 = function (a2) { return ["/freights", "edit", a2]; };
function ContainersComponent_tbody_63_tr_1_div_10_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fe_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, fe_r4._id))("title", ctx_r16.service.u.r.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r16.service.u.r.edit, " ");
} }
const _c1 = function (a3) { return ["/reports", "freights", "fullDetails", a3]; };
function ContainersComponent_tbody_63_tr_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "circle", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "circle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "circle", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ContainersComponent_tbody_63_tr_1_div_10_a_10_Template, 3, 5, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fe_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, fe_r4._id))("title", ctx_r8.service.u.r.fullDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.service.u.r.fullDetails, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !fe_r4.actionDisapled);
} }
function ContainersComponent_tbody_63_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContainersComponent_tbody_63_tr_1_td_1_Template, 1, 2, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ContainersComponent_tbody_63_tr_1_td_2_Template, 6, 3, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContainersComponent_tbody_63_tr_1_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const fe_r4 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r19.service.selectFreight(fe_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContainersComponent_tbody_63_tr_1_Template_input_ngModelChange_6_listener($event) { const fe_r4 = ctx.$implicit; return fe_r4.IsSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ContainersComponent_tbody_63_tr_1_div_10_Template, 11, 6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fe_r4 = ctx.$implicit;
    const freightIndex_r5 = ctx.index;
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", freightIndex_r5 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", freightIndex_r5 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", fe_r4.IsSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", fe_r4.IsSelected ? ctx_r3.service.u.r.unSelect : ctx_r3.service.u.r.select, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.navigationalWayeName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.carMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c1, fe_r4._id))("innerText", fe_r4.carBodyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.clinetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.clinetPhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.freightPortName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.arrivalPortName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 15, fe_r4.arrivalDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.freightCaseName);
} }
function ContainersComponent_tbody_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContainersComponent_tbody_63_tr_1_Template, 22, 19, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "fopSortPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "fopFilterPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 5, item_r2.freights, ctx_r1.fopSearch, ctx_r1.fop), ctx_r1.fop.sort.fieldName, ctx_r1.fop.sort.reverse));
} }
const _c2 = function () { return ["/containers", "editContainerDetails"]; };
const _c3 = function () { return ["/containers", "undemandFromContainer"]; };
const _c4 = function () { return ["/containers", "chageContainerNumber"]; };
class ContainersComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service) {
        super();
        this.service = service;
        this.skip = 0;
        this.limit = 50;
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"]();
    }
    ngOnInit() {
        this.service.initContinersFilterForm();
        this.service.seo.updateSEO("containersReport");
        this.getEntiries(true);
        this.service.onUpdateContainerNumber.subscribe(newParem => this.getEntiries(true));
    }
    /**
   * Get My Users
   */
    getEntiries(isReset) {
        if (isReset) {
            this.service.containersSelected = [];
            this.service.freightsSelected = [];
            this.skip = 0;
            this.service.freightsContainerGroup = [];
            this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.service.freightsContainerGroup.length);
        }
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.service.http.getContainersReport(this.skip, this.limit, this.service.form.value).subscribe(res => {
            //Update FOP Properties
            if (res.noMoreOfResult)
                this.fop.paging.disableGetMoreButton = true;
            this.fop.paging.isRequestingToServer = false;
            if (res.isSuccess) {
                this.service.freightsContainerGroup = [...this.service.freightsContainerGroup, ...res.result];
                //Fop 
                this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.service.freightsContainerGroup.length);
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
ContainersComponent.ɵfac = function ContainersComponent_Factory(t) { return new (t || ContainersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_container_service__WEBPACK_IMPORTED_MODULE_4__["ContainerService"])); };
ContainersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContainersComponent, selectors: [["app-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 69, vars: 60, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], ["app-text-input", "", "fcn", "containerNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "reset", "type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-outline-dark", "m-2", 3, "routerLink"], [1, "badge", "badge-primary", "counter", 3, "innerText"], [1, "row", "form-group"], [1, "table-responsive"], ["tableId", "containerTables", 3, "searchText"], ["id", "containerTables", 1, "table", "mb-4", "table-hover"], ["filedName", "containerNumber", 3, "fop", "fieldText"], ["filedName", "navigationalWayeName", 3, "fop", "fieldText"], ["filedName", "carMark", 3, "fop", "fieldText"], ["filedName", "carBodyNumber", 3, "fop", "fieldText"], ["filedName", "clinetName", 3, "fop", "fieldText"], ["filedName", "clinetPhoneNumber", 3, "fop", "fieldText"], ["filedName", "freightPortName", 3, "fop", "fieldText"], ["filedName", "arrivalPortName", 3, "fop", "fieldText"], ["filedName", "arrivalDate", 3, "fop", "fieldText"], ["filedName", "freightCaseName", 3, "fop", "fieldText"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], [4, "ngFor", "ngForOf"], [3, "rowSpan", "innerText", 4, "ngIf"], ["class", "cursor-pointer", 3, "rowSpan", "click", 4, "ngIf"], [1, "cursor-pointer", 3, "click"], [1, "n-chk"], [1, "new-control", "new-checkbox", "checkbox-outline-default"], ["type", "checkbox", "disabled", "", 1, "new-control-input", 3, "ngModel", "ngModelChange"], [1, "new-control-indicator"], ["class", "dropdown dropup custom-dropdown-icon    ", 4, "ngIf"], [1, "link", 3, "routerLink", "innerText"], [3, "rowSpan", "innerText"], [1, "cursor-pointer", 3, "rowSpan", "click"], [1, "dropdown", "dropup", "custom-dropdown-icon"], ["href", "#", "role", "button", "id", "dropdownMenuLink-3", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-more-vertical"], ["cx", "12", "cy", "12", "r", "1"], ["cx", "12", "cy", "5", "r", "1"], ["cx", "12", "cy", "19", "r", "1"], ["aria-labelledby", "dropdownMenuLink-3", 1, "dropdown-menu", "dropdown-menu-right", 2, "will-change", "transform"], [1, "dropdown-item", "mr-2", 3, "routerLink", "title"], [1, "fas", "fa-print", "fa-1-5x"], ["class", "dropdown-item mr-2", 3, "routerLink", "title", 4, "ngIf"], [1, "far", "fa-edit", "fa-1-5x", "jumb-animation"]], template: function ContainersComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ContainersComponent_Template_form_submit_8_listener() { return ctx.getEntiries(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ContainersComponent_div_14_Template, 1, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "fop-header", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("searchText", function ContainersComponent_Template_fop_header_searchText_36_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "fop-sort", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "fop-sort", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "fop-sort", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "fop-sort", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "fop-sort", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "fop-sort", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "fop-sort", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "fop-sort", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "fop-sort", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "fop-sort", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, ContainersComponent_tbody_63_Template, 4, 9, "tbody", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](65, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "fop-paging", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("getMoreItems", function ContainersComponent_Template_fop_paging_getMoreItems_67_listener() { return ctx.getEntiries(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.filterIn + " " + ctx.service.u.r.containers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.service.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.service.u.r.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.service.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.containers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](57, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.editContainerDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.containersSelected.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](58, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.undemandFromContainer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.freightsSelected.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](59, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.editContainerNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.freightsSelected.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.editContainerDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.selectFreight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.navigationalWaye);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.clinetName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](64, 45, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](65, 49, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](66, 53, ctx.service.freightsContainerGroup, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__["TextInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_9__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_10__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_11__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_12__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "BF7z":
/*!********************************************************************************************************************!*\
  !*** ./src/app/back-end/containers/freights-change-container-number/freights.change.container.number.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: FreightsChangeContainerNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightsChangeContainerNumberComponent", function() { return FreightsChangeContainerNumberComponent; });
/* harmony import */ var src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/response.type.enum */ "FIK1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/container.service */ "LArQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function FreightsChangeContainerNumberComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 13);
} }
class FreightsChangeContainerNumberComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_2__["SharedComponents"] {
    constructor(u, service, http) {
        super();
        this.u = u;
        this.service = service;
        this.http = http;
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
            containerNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
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
        this.allSubscriptions.push(this.service.http.changeContainerNumber(this.service.form.controls.containerNumber.value, this.service.freightsSelected.map(f => f._id))
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].showResponseMessage(res);
            this.service.isRequestingToServer = false;
            if (res.isSuccess) {
                this.service.freightsSelected = [];
                //Back To Component
                this.service.closeModel();
                this.service.onUpdateContainerNumber.emit();
            }
        }, error => {
            this.service.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
FreightsChangeContainerNumberComponent.ɵfac = function FreightsChangeContainerNumberComponent_Factory(t) { return new (t || FreightsChangeContainerNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_container_service__WEBPACK_IMPORTED_MODULE_6__["ContainerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"])); };
FreightsChangeContainerNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FreightsChangeContainerNumberComponent, selectors: [["app-add-freights-to-container"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 11, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], ["app-text-input", "", "fcn", "containerNumber", 1, "form-group", "col", 3, "form", "lable", "formSubmitError"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function FreightsChangeContainerNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function FreightsChangeContainerNumberComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, FreightsChangeContainerNumberComponent_div_10_Template, 1, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FreightsChangeContainerNumberComponent_Template_button_click_11_listener() { return ctx.service.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("form-submited", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.service.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.u.r.container)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_8__["TextInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "IoRa":
/*!***************************************************!*\
  !*** ./src/modules/back-end/containers.module.ts ***!
  \***************************************************/
/*! exports provided: ContainersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainersModule", function() { return ContainersModule; });
/* harmony import */ var src_app_back_end_containers_containers_containers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/back-end/containers/containers/containers.component */ "AiJs");
/* harmony import */ var src_app_back_end_containers_edit_container_details_edit_container_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/containers/edit-container-details/edit.container.details.component */ "txWi");
/* harmony import */ var src_app_back_end_containers_freights_change_container_number_freights_change_container_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/back-end/containers/freights-change-container-number/freights.change.container.number.component */ "BF7z");
/* harmony import */ var src_app_back_end_containers_freights_undemand_from_containers_freights_undemand_from_containers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/back-end/containers/freights-undemand-from-containers/freights.undemand.from.containers.component */ "S37Q");
/* harmony import */ var src_services_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/container.service */ "LArQ");
/* harmony import */ var _containers_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers.router.module */ "K99s");
/* harmony import */ var _form_inputs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form.inputs.module */ "mmFQ");
/* harmony import */ var _shared_back_end_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared.back.end.module */ "0sbA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class ContainersModule {
}
ContainersModule.ɵfac = function ContainersModule_Factory(t) { return new (t || ContainersModule)(); };
ContainersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ContainersModule });
ContainersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [src_services_container_service__WEBPACK_IMPORTED_MODULE_4__["ContainerService"]], imports: [[
            _shared_back_end_module__WEBPACK_IMPORTED_MODULE_7__["SharedBackEndModule"],
            _containers_router_module__WEBPACK_IMPORTED_MODULE_5__["ContainersRoutingModule"],
            _form_inputs_module__WEBPACK_IMPORTED_MODULE_6__["FormInputsModeul"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ContainersModule, { declarations: [src_app_back_end_containers_containers_containers_component__WEBPACK_IMPORTED_MODULE_0__["ContainersComponent"],
        src_app_back_end_containers_edit_container_details_edit_container_details_component__WEBPACK_IMPORTED_MODULE_1__["EditContainerDetailsComponent"],
        src_app_back_end_containers_freights_change_container_number_freights_change_container_number_component__WEBPACK_IMPORTED_MODULE_2__["FreightsChangeContainerNumberComponent"],
        src_app_back_end_containers_freights_undemand_from_containers_freights_undemand_from_containers_component__WEBPACK_IMPORTED_MODULE_3__["FreightsUndemandFromContainerNumberComponent"]], imports: [_shared_back_end_module__WEBPACK_IMPORTED_MODULE_7__["SharedBackEndModule"],
        _containers_router_module__WEBPACK_IMPORTED_MODULE_5__["ContainersRoutingModule"],
        _form_inputs_module__WEBPACK_IMPORTED_MODULE_6__["FormInputsModeul"]] }); })();


/***/ }),

/***/ "K99s":
/*!**********************************************************!*\
  !*** ./src/modules/back-end/containers.router.module.ts ***!
  \**********************************************************/
/*! exports provided: ContainersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainersRoutingModule", function() { return ContainersRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_back_end_containers_containers_containers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/containers/containers/containers.component */ "AiJs");
/* harmony import */ var src_app_back_end_containers_edit_container_details_edit_container_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/back-end/containers/edit-container-details/edit.container.details.component */ "txWi");
/* harmony import */ var src_app_back_end_containers_freights_change_container_number_freights_change_container_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/back-end/containers/freights-change-container-number/freights.change.container.number.component */ "BF7z");
/* harmony import */ var src_app_back_end_containers_freights_undemand_from_containers_freights_undemand_from_containers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/back-end/containers/freights-undemand-from-containers/freights.undemand.from.containers.component */ "S37Q");
/* harmony import */ var src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/authentcation/admin.auth.can.active.service */ "O43r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const ROUTS = [
    {
        path: '', component: src_app_back_end_containers_containers_containers_component__WEBPACK_IMPORTED_MODULE_1__["ContainersComponent"], canActivate: [src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthCanActive"]],
        children: [
            { path: "editContainerDetails", component: src_app_back_end_containers_edit_container_details_edit_container_details_component__WEBPACK_IMPORTED_MODULE_2__["EditContainerDetailsComponent"] },
            { path: "chageContainerNumber", component: src_app_back_end_containers_freights_change_container_number_freights_change_container_number_component__WEBPACK_IMPORTED_MODULE_3__["FreightsChangeContainerNumberComponent"] },
            { path: "undemandFromContainer", component: src_app_back_end_containers_freights_undemand_from_containers_freights_undemand_from_containers_component__WEBPACK_IMPORTED_MODULE_4__["FreightsUndemandFromContainerNumberComponent"] }
        ]
    },
];
class ContainersRoutingModule {
}
ContainersRoutingModule.ɵfac = function ContainersRoutingModule_Factory(t) { return new (t || ContainersRoutingModule)(); };
ContainersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ContainersRoutingModule });
ContainersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTS)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ContainersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "LArQ":
/*!*******************************************!*\
  !*** ./src/services/container.service.ts ***!
  \*******************************************/
/*! exports provided: ContainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerService", function() { return ContainerService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "NqkH");
/* harmony import */ var src_consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/consts/freight.cases.const */ "TEQo");
/* harmony import */ var src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/enums/freight.cases.enum */ "Fh2x");
/* harmony import */ var _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom.validators.service */ "QVRC");
/* harmony import */ var _authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seo.service */ "C2k8");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











class ContainerService {
    constructor(u, seo, http, router) {
        this.u = u;
        this.seo = seo;
        this.http = http;
        this.router = router;
        this.freightCases = src_consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_3__["freightCasesArray"];
        this.arrivalPorts = [];
        this.navigationalWayes = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        this.freightsSelected = [];
        this.freightsContainerGroup = [];
        this.containersSelected = [];
        this.freightCasesToChange = src_consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_3__["freightCasesContainerArray"];
        this.onUpdateContainerNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** Init Continers Filter Form */
    initContinersFilterForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            containerNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]()
        });
    }
    /** Init Edit Details Form */
    initEditDetailsForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            freightCaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_4__["FreightCasesEnum"].Loaded_in_a_container, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            navigationalWayeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            trackLink: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].invalidUrl),
            arrivalDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            arrivalPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            containerPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].invalidNumber)
        });
        this.getItems(["arrivalPorts", "navigationalWayes"]);
    }
    /**Get Items To Select From Them */
    getItems(itemsNames) {
        this.http.getSelectItems(itemsNames).subscribe(res => {
            if (res.isSuccess) {
                itemsNames.forEach((itemName) => this[itemName] = res.result[itemName]);
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
    /**Select Container */
    selectContainer(item) {
        item.IsSelected = !item.IsSelected;
        if (item.IsSelected) {
            this.containersSelected.push(item);
        }
        else {
            this.containersSelected.splice(this.containersSelected.findIndex(f => f.containerNumber == item.containerNumber), 1);
        }
    }
    /**
   * Close: Back To The Page
   */
    closeModel() {
        this.isFormSubmitError = false;
        this.form.reset();
        this.router.navigate(['/containers']);
    }
} //End Class
ContainerService.ɵfac = function ContainerService_Factory(t) { return new (t || ContainerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_seo_service__WEBPACK_IMPORTED_MODULE_7__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
ContainerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContainerService, factory: ContainerService.ɵfac });


/***/ }),

/***/ "S37Q":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/back-end/containers/freights-undemand-from-containers/freights.undemand.from.containers.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: FreightsUndemandFromContainerNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightsUndemandFromContainerNumberComponent", function() { return FreightsUndemandFromContainerNumberComponent; });
/* harmony import */ var src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/response.type.enum */ "FIK1");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/container.service */ "LArQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function FreightsUndemandFromContainerNumberComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 15);
} if (rf & 2) {
    const con_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", con_r2.refranceNumber);
} }
function FreightsUndemandFromContainerNumberComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 16);
} }
class FreightsUndemandFromContainerNumberComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__["SharedComponents"] {
    constructor(u, service, http) {
        super();
        this.u = u;
        this.service = service;
        this.http = http;
    }
    ngOnInit() {
        if (!this.service.freightsSelected.length) {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage({
                responseType: src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_0__["ResponseTypeEnum"].error,
                message: this.u.r.youMustSelectFreightsFirst
            });
            this.service.closeModel();
        }
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
        this.allSubscriptions.push(this.service.http.changeContainerNumber(null, this.service.freightsSelected.map(f => f._id))
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage(res);
            this.service.isRequestingToServer = false;
            if (res.isSuccess) {
                this.service.freightsSelected = [];
                //Back To Component
                this.service.closeModel();
                this.service.onUpdateContainerNumber.emit();
            }
        }, error => {
            this.service.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
FreightsUndemandFromContainerNumberComponent.ɵfac = function FreightsUndemandFromContainerNumberComponent_Factory(t) { return new (t || FreightsUndemandFromContainerNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_container_service__WEBPACK_IMPORTED_MODULE_5__["ContainerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
FreightsUndemandFromContainerNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FreightsUndemandFromContainerNumberComponent, selectors: [["app-add-freights-to-container"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 10, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], [1, "form-group"], [1, "text-center", 3, "innerHtml"], ["class", "badge outline-badge-primary m-1", 3, "innerText", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-danger", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "badge", "outline-badge-primary", "m-1", 3, "innerText"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function FreightsUndemandFromContainerNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function FreightsUndemandFromContainerNumberComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FreightsUndemandFromContainerNumberComponent_span_8_Template, 1, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, FreightsUndemandFromContainerNumberComponent_div_12_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FreightsUndemandFromContainerNumberComponent_Template_button_click_13_listener() { return ctx.service.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("form-submited", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.service.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.service.u.r.areYouSureToUndemandFromContainer, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.service.freightsSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "txWi":
/*!************************************************************************************************!*\
  !*** ./src/app/back-end/containers/edit-container-details/edit.container.details.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditContainerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContainerDetailsComponent", function() { return EditContainerDetailsComponent; });
/* harmony import */ var src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/response.type.enum */ "FIK1");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/container.service */ "LArQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/select-input/select-input.component */ "XBrH");
/* harmony import */ var src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/date-input/date.input.component */ "3CG7");













function EditContainerDetailsComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 21);
} if (rf & 2) {
    const con_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", con_r2.containerNumber);
} }
function EditContainerDetailsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 22);
} }
class EditContainerDetailsComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__["SharedComponents"] {
    constructor(u, service, http, activateRouter) {
        super();
        this.u = u;
        this.service = service;
        this.http = http;
        this.activateRouter = activateRouter;
    }
    ngOnInit() {
        if (!this.service.containersSelected.length) {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage({
                responseType: src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_0__["ResponseTypeEnum"].error,
                message: this.u.r.youMustSelectContainersFirst
            });
            this.service.closeModel();
        }
        this.service.initEditDetailsForm();
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
        this.allSubscriptions.push(this.service.http.updateFreightsByContainersNumbers({
            containerNumbers: this.service.containersSelected.map(c => c.containerNumber),
            updateingData: this.service.form.value
        })
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage(res);
            this.service.isRequestingToServer = false;
            if (res.isSuccess) {
                this.service.onUpdateContainerNumber.emit();
                //Back To Component
                this.service.closeModel();
            }
        }, error => {
            this.service.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
EditContainerDetailsComponent.ɵfac = function EditContainerDetailsComponent_Factory(t) { return new (t || EditContainerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_container_service__WEBPACK_IMPORTED_MODULE_5__["ContainerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
EditContainerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditContainerDetailsComponent, selectors: [["app-add-freights-to-container"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 31, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-group"], [3, "innerHtml"], ["class", "badge outline-badge-primary m-1", 3, "innerText", 4, "ngFor", "ngForOf"], [1, "form-row", "mb-2"], ["app-text-input", "", "fcn", "containerPrice", 1, "col-sm-6", "col-md-4", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "navigationalWayeId", 1, "col-sm-6", "col-md-4", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "freightCaseId", 1, "form-group", "col-sm-6", "col-md-4", 3, "list", "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "trackLink", 1, "col-sm-6", "col-md-4", "form-group", 3, "form", "lable", "formSubmitError"], ["app-date-input", "", "fcn", "arrivalDate", 1, "col-sm-6", "col-md-4", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "arrivalPortId", 1, "col-sm-6", "col-md-4", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "badge", "outline-badge-primary", "m-1", 3, "innerText"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function EditContainerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function EditContainerDetailsComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, EditContainerDetailsComponent_span_7_Template, 1, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onReloadItems", function EditContainerDetailsComponent_Template_div_onReloadItems_10_listener() { return ctx.service.getItems("navigationalWayes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onReloadItems", function EditContainerDetailsComponent_Template_div_onReloadItems_14_listener() { return ctx.service.getItems("arrivalPorts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, EditContainerDetailsComponent_div_18_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditContainerDetailsComponent_Template_button_click_19_listener() { return ctx.service.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "div", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("form-submited", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.service.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.editContainerDetails, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.service.containersSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.u.r.containerPrice)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.navigationalWayes)("form", ctx.service.form)("lable", ctx.u.r.navigationalWaye)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.freightCasesToChange)("form", ctx.service.form)("lable", ctx.u.r.freightCase)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.u.r.trackLink)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.u.r.arrivalDate)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.arrivalPorts)("form", ctx.service.form)("lable", ctx.u.r.arrivalPort)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__["TextInputComponent"], src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_11__["SelectInputComponent"], src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_12__["DateInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=back-end-containers-module.js.map