(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["back-end-branches-module"],{

/***/ "/B+l":
/*!********************************************************!*\
  !*** ./src/modules/back-end/branches.router.module.ts ***!
  \********************************************************/
/*! exports provided: BranchesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesRoutingModule", function() { return BranchesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_back_end_branches_branches_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/branches/branches.component */ "KF+B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const ROUTS = [
    { path: '', component: src_app_back_end_branches_branches_component__WEBPACK_IMPORTED_MODULE_1__["BranchesComponent"], },
];
class BranchesRoutingModule {
}
BranchesRoutingModule.ɵfac = function BranchesRoutingModule_Factory(t) { return new (t || BranchesRoutingModule)(); };
BranchesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BranchesRoutingModule });
BranchesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTS)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BranchesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "KF+B":
/*!*********************************************************!*\
  !*** ./src/app/back-end/branches/branches.component.ts ***!
  \*********************************************************/
/*! exports provided: BranchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesComponent", function() { return BranchesComponent; });
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_consts_branches_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/consts/branches.const */ "tGjv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/branch.service */ "SBZY");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/fop/fop-header/fop-header.component */ "OhZK");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/fop/fop-sort/fop-sort.component */ "lyqo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");











const _c0 = function (a3) { return ["/reports", "branch", "freights", a3]; };
const _c1 = function (a0) { return { "branchName": a0 }; };
function BranchesComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", item_r1.name, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, item_r1.branchIndex))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, item_r1.name))("title", ctx_r0.service.u.r.freights);
} }
/**
 * This a general controller
 *
 */
class BranchesComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__["SharedComponents"] {
    constructor(service) {
        super();
        this.service = service;
        /**
         * Page Target
         */
        this.entries = src_consts_branches_const__WEBPACK_IMPORTED_MODULE_2__["BranchesArray"];
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_0__["FOPModel"]();
    }
    ngOnInit() {
        this.service.seoService.updateSEO("branches");
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_0__["FOPModel"](this.fop.fieldNames, this.entries.length);
    }
} //End Class
BranchesComponent.ɵfac = function BranchesComponent_Factory(t) { return new (t || BranchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"])); };
BranchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BranchesComponent, selectors: [["app-branches"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 17, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "d-flex", "justify-content-between"], [3, "innerHtml"], [1, "widget-content", "widget-content-area"], [1, "row", "form-group"], [1, "table-responsive"], ["tableId", "generalSettingTable", 3, "searchText"], ["id", "generalSettingTable", 1, "table", "mb-4", "table-hover"], [1, "th-90"], ["filedName", "name", 3, "fop", "fieldText"], [1, "th-10", 3, "innerHtml"], [4, "ngFor", "ngForOf"], [2, "display", "inline-flex"], [1, "mr-2", 3, "routerLink", "queryParams", "title"], [1, "fas", "fa-network-wired", "fa-1-5x", "jumb-animation"]], template: function BranchesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "fop-header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("searchText", function BranchesComponent_Template_fop_header_searchText_10_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "fop-sort", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, BranchesComponent_tr_18_Template, 5, 8, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.service.u.r.branches, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.service.u.r.actions, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](19, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](20, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](21, 13, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take));
    } }, directives: [_shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_5__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_6__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_9__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FopFilterPipe"]], encapsulation: 2 });


/***/ }),

/***/ "SBZY":
/*!****************************************!*\
  !*** ./src/services/branch.service.ts ***!
  \****************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seo.service */ "C2k8");



class BranchService {
    constructor(u, seoService) {
        this.u = u;
        this.seoService = seoService;
    }
} //End Class
BranchService.ɵfac = function BranchService_Factory(t) { return new (t || BranchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_seo_service__WEBPACK_IMPORTED_MODULE_2__["SEOService"])); };
BranchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchService, factory: BranchService.ɵfac });


/***/ }),

/***/ "dBCL":
/*!*************************************************!*\
  !*** ./src/modules/back-end/branches.module.ts ***!
  \*************************************************/
/*! exports provided: BranchesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesModule", function() { return BranchesModule; });
/* harmony import */ var src_app_back_end_branches_branches_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/back-end/branches/branches.component */ "KF+B");
/* harmony import */ var src_services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/branch.service */ "SBZY");
/* harmony import */ var _branches_router_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branches.router.module */ "/B+l");
/* harmony import */ var _shared_back_end_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.back.end.module */ "0sbA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class BranchesModule {
}
BranchesModule.ɵfac = function BranchesModule_Factory(t) { return new (t || BranchesModule)(); };
BranchesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BranchesModule });
BranchesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [src_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]], imports: [[
            _shared_back_end_module__WEBPACK_IMPORTED_MODULE_3__["SharedBackEndModule"],
            _branches_router_module__WEBPACK_IMPORTED_MODULE_2__["BranchesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BranchesModule, { declarations: [src_app_back_end_branches_branches_component__WEBPACK_IMPORTED_MODULE_0__["BranchesComponent"]], imports: [_shared_back_end_module__WEBPACK_IMPORTED_MODULE_3__["SharedBackEndModule"],
        _branches_router_module__WEBPACK_IMPORTED_MODULE_2__["BranchesRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=back-end-branches-module.js.map