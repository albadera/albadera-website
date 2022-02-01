(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["back-end-deletes-module"],{

/***/ "9nQn":
/*!*******************************************************************************************************!*\
  !*** ./src/app/back-end/deletes/recover-transaction-deleted/recover.transaction.deleted.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RecoverTransactionDeletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverTransactionDeletedComponent", function() { return RecoverTransactionDeletedComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_delete_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/delete.service */ "RMY6");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_notes_notes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/notes/notes.component */ "Z5Tv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










function RecoverTransactionDeletedComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 17);
} }
class RecoverTransactionDeletedComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service, http, activateRouter) {
        super();
        this.service = service;
        this.http = http;
        this.activateRouter = activateRouter;
    }
    ngOnInit() {
        this.parentPath = this.activateRouter.parent.routeConfig.path;
        this.service.initRecoverForm();
        this.service.form.controls._id.setValue(this.activateRouter.snapshot.params.targetId);
        //Check If Must Be Get Object From The Server
        if (history.state.deletingRefranceNumber) {
            this.service.form.controls.refranceNumber.setValue(history.state.deletingRefranceNumber);
            this.service.form.controls.clinetName.setValue(history.state.deletingClinetName);
            history.state.deletingRefranceNumber = null;
            history.state.deletingClinetName = null;
        }
        else {
            //Get From The Serer
            this.getFreightToRecover();
        }
    }
    /**
     * Get Car Mark From Server To Update
     */
    getFreightToRecover() {
        this.service.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.getDeletedTrnasactionToRecover(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            this.service.isRequestingToServer = false;
            if (res.isSuccess) {
                this.service.form.controls.refranceNumber.setValue(res.result.refranceNumber);
                this.service.form.controls.clinetName.setValue(res.result.clinetName);
            }
            else
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
        }, error => {
            this.service.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
    /**
     * Recover Item
     */
    onSubmit() {
        if (this.service.form.invalid) {
            this.service.isFormSubmitError = true;
            return;
        }
        this.service.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.recoverTrnasaction(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            this.service.isRequestingToServer = false;
            if (res.isSuccess) {
                //Pass The New Item To Page
                this.service.onRecoveredItem.emit(this.activateRouter.snapshot.params.targetId);
                //Back To Component
                this.service.closeModel(this.parentPath);
            }
        }, error => {
            this.service.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
RecoverTransactionDeletedComponent.ɵfac = function RecoverTransactionDeletedComponent_Factory(t) { return new (t || RecoverTransactionDeletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_delete_service__WEBPACK_IMPORTED_MODULE_3__["DeleteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
RecoverTransactionDeletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecoverTransactionDeletedComponent, selectors: [["app-Recover-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 16, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], [1, "form-group"], [1, "text-center", 3, "innerHtml"], ["app-text-input", "", "fcn", "clinetName", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [3, "notes"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function RecoverTransactionDeletedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function RecoverTransactionDeletedComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-notes", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RecoverTransactionDeletedComponent_div_14_Template, 1, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecoverTransactionDeletedComponent_Template_button_click_15_listener() { return ctx.service.closeModel(ctx.parentPath); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("form-submited", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.service.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.service.u.r.areYouSureToRecoverDeleted, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.service.u.r.clinetName)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.service.u.r.refranceNumber)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("notes", ctx.service.u.r.recoverTransactionNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.service.u.r.yesRecover, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.service.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__["TextInputComponent"], src_app_back_end_shared_notes_notes_component__WEBPACK_IMPORTED_MODULE_8__["NotsCompoenent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "JY0y":
/*!***************************************************************************!*\
  !*** ./src/app/back-end/deletes/users-deleted/users.deleted.component.ts ***!
  \***************************************************************************/
/*! exports provided: UsersDeletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDeletedComponent", function() { return UsersDeletedComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_delete_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/delete.service */ "RMY6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/date-input/date.input.component */ "3CG7");
/* harmony import */ var src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/select-input/select-input.component */ "XBrH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/fop/fop-header/fop-header.component */ "OhZK");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/fop/fop-sort/fop-sort.component */ "lyqo");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/fop/fop-paging/fop.paging.component */ "VjaU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");
















function UsersDeletedComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 35);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r0.service.u.r.loadingData);
} }
function UsersDeletedComponent_tr_55_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 42);
} }
const _c0 = function (a1) { return ["recover", a1]; };
const _c1 = function (a0) { return { name: a0 }; };
function UsersDeletedComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, UsersDeletedComponent_tr_55_div_13_Template, 1, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", user_r2.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", user_r2.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", user_r2.userName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", user_r2.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", user_r2.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", user_r2.roleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", user_r2.clinetTypeName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", user_r2.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 13, user_r2.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", user_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, user_r2._id))("state", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, user_r2.name))("title", ctx_r1.service.u.r.recover);
} }
class UsersDeletedComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_3__["SharedComponents"] {
    constructor(service) {
        super();
        this.service = service;
        this.skip = 0;
        this.limit = 30;
        this.entries = [];
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"]();
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"];
    }
    ngOnInit() {
        this.service.seo.updateSEO("usersDeleted");
        this.service.initUsersFilterForm();
        //Get My Users Now
        this.getUsers();
        //On Deleted User
        this.allSubscriptions.push(this.service.onRecoveredItem.subscribe(userDeletedId => {
            this.entries.splice(this.entries.findIndex(c => c._id == userDeletedId), 1);
        }));
    }
    /**
     * Get My Users
     */
    getUsers(isFilter = false) {
        this.fop.paging.isRequestingToServer = true;
        this.service.filterForm.disable();
        if (isFilter) {
            this.entries = [];
            this.skip = 0;
            this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
        }
        //Get Users Now From Server
        this.allSubscriptions.push(this.service.http.getUsers(this.skip, this.limit, this.service.filterForm.value).subscribe(res => {
            //Enable Filter Form Now
            this.service.filterForm.enable();
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
            this.fop.paging.isRequestingToServer = false;
            this.service.filterForm.enable();
        }, error => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
            this.fop.paging.isRequestingToServer = false;
            this.service.filterForm.enable();
        }, () => {
        }));
    }
    funTrack(index, user) {
        return user === null || user === void 0 ? void 0 : user._id;
    }
    /**Reset Form Filter And Get Users Affter Reset */
    resetFilter() {
        this.service.filterForm.reset();
        this.getUsers(true);
    }
} //End Class
UsersDeletedComponent.ɵfac = function UsersDeletedComponent_Factory(t) { return new (t || UsersDeletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_delete_service__WEBPACK_IMPORTED_MODULE_5__["DeleteService"])); };
UsersDeletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UsersDeletedComponent, selectors: [["app-users-deleted"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 61, vars: 47, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], [1, "form-row", "form-group"], [1, "col"], ["for", "userName", 3, "innerText"], ["type", "text", "id", "userName", "formControlName", "userName", 1, "form-control"], ["for", "email", 3, "innerText"], ["type", "text", "id", "postContent", "formControlName", "email", 1, "form-control"], ["app-date-input", "", "fcn", "createdDate", 1, "col", 3, "form", "lable"], ["app-select-input", "", "valueField", "branchIndex", "fcn", "branchIndex", 1, "col", 3, "list", "form", "lable"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled", "click"], [1, "row", "form-group"], [1, "table-responsive"], ["tableId", "allClinetsTable", 3, "searchText"], ["id", "allClinetsTable", 1, "table", "mb-4", "table-hover"], [3, "fop", "fieldText"], ["filedName", "userName", 3, "fop", "fieldText"], ["filedName", "fullName", 3, "fop", "fieldText"], ["filedName", "branchName", 3, "fop", "fieldText"], ["filedName", "roleName", 3, "fop", "fieldText"], ["filedName", "clinetTypeName", 3, "fop", "fieldText"], ["filedName", "phoneNumber", 3, "fop", "fieldText"], ["filedName", "createdDate", 3, "fop", "fieldText"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], ["target", "_blank", 3, "href"], ["width", "40", "height", "40", "alt", "avatar", 1, "rounded-circle", 3, "src"], [2, "display", "inline-flex"], ["class", "spinner-grow text-danger align-self-center loader-sm", 4, "ngIf"], [1, "mr-2", 3, "routerLink", "state", "title"], [1, "fas", "fa-redo-alt", "fa-1-5x"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"]], template: function UsersDeletedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function UsersDeletedComponent_Template_form_submit_8_listener() { return ctx.getUsers(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, UsersDeletedComponent_div_21_Template, 1, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersDeletedComponent_Template_button_click_22_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "fop-header", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("searchText", function UsersDeletedComponent_Template_fop_header_searchText_33_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "fop-sort", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "fop-sort", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "fop-sort", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "fop-sort", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "fop-sort", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "fop-sort", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "fop-sort", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "fop-sort", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, UsersDeletedComponent_tr_55_Template, 16, 19, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](57, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](58, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "fop-paging", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("getMoreItems", function UsersDeletedComponent_Template_fop_paging_getMoreItems_59_listener() { return ctx.getUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", ctx.service.u.r.filterInClinets);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.service.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", ctx.service.u.r.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", ctx.service.u.r.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.signUpDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("list", ctx.service.branches)("form", ctx.service.filterForm)("lable", ctx.service.u.r.branch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.service.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", ctx.service.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", ctx.service.u.r.clinets);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.userPicture);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.branch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.clinetType);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.signUpDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerText", ctx.service.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](56, 35, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](57, 39, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](58, 43, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_7__["DateInputComponent"], src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_8__["SelectInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_14__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "Lk1p":
/*!*******************************************************!*\
  !*** ./src/modules/back-end/deletes.router.module.ts ***!
  \*******************************************************/
/*! exports provided: DeletesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletesRoutingModule", function() { return DeletesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_back_end_deletes_financial_transfers_deleted_financial_transfers_deleted_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/deletes/financial-transfers-deleted/financial.transfers.deleted.component */ "Q3Nz");
/* harmony import */ var src_app_back_end_deletes_freights_deleted_freights_deleted_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/back-end/deletes/freights-deleted/freights.deleted.component */ "Yl/l");
/* harmony import */ var src_app_back_end_deletes_recover_transaction_deleted_recover_transaction_deleted_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/back-end/deletes/recover-transaction-deleted/recover.transaction.deleted.component */ "9nQn");
/* harmony import */ var src_app_back_end_deletes_recover_user_deleted_recover_user_deleted_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/back-end/deletes/recover-user-deleted/recover.user.deleted.component */ "VnLA");
/* harmony import */ var src_app_back_end_deletes_sector_sales_deleted_sector_sales_deleted_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/back-end/deletes/sector-sales-deleted/sector.sales.deleted.component */ "fUex");
/* harmony import */ var src_app_back_end_deletes_users_deleted_users_deleted_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/back-end/deletes/users-deleted/users.deleted.component */ "JY0y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const ROUTS = [
    {
        path: 'freights', component: src_app_back_end_deletes_freights_deleted_freights_deleted_component__WEBPACK_IMPORTED_MODULE_2__["FreightsDeletedComponent"],
        children: [
            { path: 'recover/:targetId', component: src_app_back_end_deletes_recover_transaction_deleted_recover_transaction_deleted_component__WEBPACK_IMPORTED_MODULE_3__["RecoverTransactionDeletedComponent"] }
        ]
    },
    {
        path: 'sectorSales', component: src_app_back_end_deletes_sector_sales_deleted_sector_sales_deleted_component__WEBPACK_IMPORTED_MODULE_5__["SectorSalesDeletedComponent"],
        children: [
            { path: 'recover/:targetId', component: src_app_back_end_deletes_recover_transaction_deleted_recover_transaction_deleted_component__WEBPACK_IMPORTED_MODULE_3__["RecoverTransactionDeletedComponent"] }
        ]
    },
    {
        path: 'financialTransfers', component: src_app_back_end_deletes_financial_transfers_deleted_financial_transfers_deleted_component__WEBPACK_IMPORTED_MODULE_1__["FinancialTransfersDeletedComponent"],
        children: [
            { path: 'recover/:targetId', component: src_app_back_end_deletes_recover_transaction_deleted_recover_transaction_deleted_component__WEBPACK_IMPORTED_MODULE_3__["RecoverTransactionDeletedComponent"] }
        ]
    },
    {
        path: 'users', component: src_app_back_end_deletes_users_deleted_users_deleted_component__WEBPACK_IMPORTED_MODULE_6__["UsersDeletedComponent"],
        children: [
            { path: 'recover/:targetId', component: src_app_back_end_deletes_recover_user_deleted_recover_user_deleted_component__WEBPACK_IMPORTED_MODULE_4__["RecoverUserDeletedComponent"] }
        ]
    }
];
class DeletesRoutingModule {
}
DeletesRoutingModule.ɵfac = function DeletesRoutingModule_Factory(t) { return new (t || DeletesRoutingModule)(); };
DeletesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DeletesRoutingModule });
DeletesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTS)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DeletesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Q3Nz":
/*!*******************************************************************************************************!*\
  !*** ./src/app/back-end/deletes/financial-transfers-deleted/financial.transfers.deleted.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FinancialTransfersDeletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialTransfersDeletedComponent", function() { return FinancialTransfersDeletedComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_delete_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/delete.service */ "RMY6");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/date-input/date.input.component */ "3CG7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/fop/fop-header/fop-header.component */ "OhZK");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/fop/fop-sort/fop-sort.component */ "lyqo");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/fop/fop-paging/fop.paging.component */ "VjaU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");
















function FinancialTransfersDeletedComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 42);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r0.service.u.r.loadingData);
} }
function FinancialTransfersDeletedComponent_tr_64_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 47);
} }
const _c0 = function (a1) { return ["recover", a1]; };
function FinancialTransfersDeletedComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FinancialTransfersDeletedComponent_tr_64_div_2_Template, 1, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, item_r2._id))("title", ctx_r1.service.u.r.recover);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.clinetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.clinetPhoneNumber || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.refranceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 16, item_r2.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.swift);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.commissionTransfare);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.totalAmount_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.totalAmount_dinar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.totalPaidAmount_dollar || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.totalPaidAmount_dinar || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.totalDueAmount_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.totalDueAmount_dinar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.isPaidAllAmountName);
} }
class FinancialTransfersDeletedComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service, http) {
        super();
        this.service = service;
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
        this.service.seo.updateSEO("financialTransfersDeleted");
        this.service.initFinancialTrnafersFilterForm();
        this.getEntiries(false);
        //Listener On Delete Item Event
        this.allSubscriptions.push(this.service.onRecoveredItem.subscribe(deletedItemId => {
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
            this.skip = 0;
            this.entries = [];
        }
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.http.getFinancialTransfersDeleted(this.skip, this.limit, this.service.filterForm.value).subscribe(res => {
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
FinancialTransfersDeletedComponent.ɵfac = function FinancialTransfersDeletedComponent_Factory(t) { return new (t || FinancialTransfersDeletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_delete_service__WEBPACK_IMPORTED_MODULE_4__["DeleteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"])); };
FinancialTransfersDeletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FinancialTransfersDeletedComponent, selectors: [["app-tinancial-transfer-deleted"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 70, vars: 68, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], [1, "form-row", "mb-2"], ["app-text-input", "", "fcn", "userName", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "email", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "phoneNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "commissionTransfare", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-date-input", "", "fcn", "createdDate", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "reset", "type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled"], [1, "d-flex", "justify-content-between"], [1, "row", "form-group"], [1, "table-responsive"], ["tableId", "financialTransfersTable", 3, "searchText"], ["id", "financialTransfersTable", 1, "table", "mb-4", "table-hover"], [1, "th-5", 3, "innerText"], [1, "th-15"], ["filedName", "clinetName", 3, "fop", "fieldText"], ["filedName", "clinetPhoneNumber", 3, "fop", "fieldText"], ["filedName", "refranceNumber", 3, "fop", "fieldText"], ["filedName", "trnasactionDate", 3, "fop", "fieldText"], ["filedName", "swift", 3, "fop", "fieldText"], ["filedName", "commissionTransfare", 3, "fop", "fieldText"], ["filedName", "totalAmount_dollar", 3, "fop", "fieldText"], ["filedName", "totalAmount_dinar", 3, "fop", "fieldText"], ["filedName", "totalPaidAmount_dollar", 3, "fop", "fieldText"], ["filedName", "totalPaidAmount_dinar", 3, "fop", "fieldText"], ["filedName", "totalDueAmount_dollar", 3, "fop", "fieldText"], ["filedName", "totalDueAmount_dinar", 3, "fop", "fieldText"], ["filedName", "isPaidAllAmountName", 3, "fop", "fieldText"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], [2, "display", "inline-flex"], ["class", "spinner-grow text-danger align-self-center loader-sm", 4, "ngIf"], [1, "mr-2", 3, "routerLink", "title"], [1, "fas", "fa-redo-alt", "fa-1-5x"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"]], template: function FinancialTransfersDeletedComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function FinancialTransfersDeletedComponent_Template_form_submit_8_listener() { return ctx.getEntiries(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, FinancialTransfersDeletedComponent_div_20_Template, 1, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "fop-header", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("searchText", function FinancialTransfersDeletedComponent_Template_fop_header_searchText_32_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "fop-sort", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "fop-sort", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "fop-sort", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "fop-sort", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "fop-sort", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "fop-sort", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "fop-sort", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "fop-sort", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "fop-sort", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "fop-sort", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "fop-sort", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "fop-sort", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "fop-sort", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, FinancialTransfersDeletedComponent_tr_64_Template, 19, 20, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](65, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](67, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "fop-paging", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("getMoreItems", function FinancialTransfersDeletedComponent_Template_fop_paging_getMoreItems_68_listener() { return ctx.getEntiries(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.filterIn + " " + ctx.service.u.r.financialTransfers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.service.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.clinetName)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.clinetEmail)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.clinetPhoneNumber)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.refranceNumber)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.commissionTransfare)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.trnasactionDate)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.service.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.financialTransfers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.clinet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.trnasactionDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.swift);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.commissionTransfare);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalAmount_dollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalAmount_dinar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalPaidAmount_dollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalPaidAmount_dinar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalDueAmount_dollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalDueAmount_dinar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.theReceive);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](65, 56, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](66, 60, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](67, 64, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__["TextInputComponent"], src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_8__["DateInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_14__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "RMY6":
/*!****************************************!*\
  !*** ./src/services/delete.service.ts ***!
  \****************************************/
/*! exports provided: DeleteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteService", function() { return DeleteService; });
/* harmony import */ var _consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/freight.cases.const */ "TEQo");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/consts/car.sizes.const */ "qB6b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom.validators.service */ "QVRC");
/* harmony import */ var src_enums_branches_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/enums/branches.enum */ "XJrW");
/* harmony import */ var src_consts_branches_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/consts/branches.const */ "tGjv");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http/http.service */ "H5vj");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./seo.service */ "C2k8");













class DeleteService {
    constructor(u, router, http, seo) {
        this.u = u;
        this.router = router;
        this.http = http;
        this.seo = seo;
        this.clinets = [];
        this.freightCases = _consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_0__["freightCasesArray"];
        this.freightCasesToChange = _consts_freight_cases_const__WEBPACK_IMPORTED_MODULE_0__["freightCasesContainerArray"];
        this.states = [];
        this.allStates = [];
        this.cities = [];
        this.freightPorts = [];
        this.arrivalPorts = [];
        this.carSizes = src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_3__["carSizesArray"];
        this.isFormSubmitError = false;
        this.isRequestingToServer = false;
        this.carPicture = {};
        this.defaultImageUrl = "/assets/img/car_default_img.jpg";
        this.onRecoveredItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.freightsSelected = [];
        this.branches = src_consts_branches_const__WEBPACK_IMPORTED_MODULE_7__["BranchesArray"];
    }
    /**
     * Close: Back To The Page
     */
    closeModel(backTo) {
        this.router.navigate(['/deletes', backTo]);
    }
    /** Init Form For Search In Freights*/
    initFreightsFilterForm() {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            clinetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            carMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            freightCaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            buySourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            freightStateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            cityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            carSizeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            freightPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            navigationalWayeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            arrivalPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            carBodyNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
        this.filterForm.controls.freightPortId.valueChanges.subscribe(value => { this.loadStates(value); });
        this.form.reset();
        this.filterForm.reset();
    }
    /** Init Form For Search In Sector Sales*/
    initSectorSalesFilterForm() {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            clinetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].phoneNumber),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].invalidNumber),
            commissionTransfare: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].invalidNumber),
            createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
        this.form.reset();
        this.filterForm.reset();
    }
    /** Init Form For Search In Financial Trnafers*/
    initFinancialTrnafersFilterForm() {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].phoneNumber),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].invalidNumber),
            commissionTransfare: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _custom_validators_service__WEBPACK_IMPORTED_MODULE_5__["CustomValidatorsService"].invalidNumber),
            createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
        this.form.reset();
        this.filterForm.reset();
    }
    /**
     * Init Form To Filter In User
     */
    initUsersFilterForm() {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            languageCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            branchIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](src_enums_branches_enum__WEBPACK_IMPORTED_MODULE_6__["BranchesEnum"].Main),
            isDeleted: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](true)
        });
    }
    /** Init Recover Form */
    initRecoverForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            clinetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
        this.form.disable();
    }
    /**Get Items To Select From Them To Freights Page*/
    getItems(itemName) {
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
            _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
        }, error => {
            _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        });
    }
    /**
     * Load States By Freight Port Id
     */
    loadStates(freightPortId) {
        this.states = [];
        if (freightPortId && this.allStates.length)
            this.states = this.allStates.filter(st => st.freightPortId == freightPortId);
        this.loadStateCities();
    }
    /** Load State Cities */
    loadStateCities(stateId = this.filterForm.controls.freightStateId.value) {
        var _a;
        this.cities = [];
        if (this.states.length && stateId) {
            this.cities = ((_a = this.states.find(m => m._id == stateId)) === null || _a === void 0 ? void 0 : _a.cities) || [];
        }
    }
} //End Class
DeleteService.ɵfac = function DeleteService_Factory(t) { return new (t || DeleteService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_8__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_seo_service__WEBPACK_IMPORTED_MODULE_11__["SEOService"])); };
DeleteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DeleteService, factory: DeleteService.ɵfac });


/***/ }),

/***/ "Tf0G":
/*!************************************************!*\
  !*** ./src/modules/back-end/deletes.module.ts ***!
  \************************************************/
/*! exports provided: DeletesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletesModule", function() { return DeletesModule; });
/* harmony import */ var src_app_back_end_deletes_financial_transfers_deleted_financial_transfers_deleted_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/back-end/deletes/financial-transfers-deleted/financial.transfers.deleted.component */ "Q3Nz");
/* harmony import */ var src_app_back_end_deletes_freights_deleted_freights_deleted_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/deletes/freights-deleted/freights.deleted.component */ "Yl/l");
/* harmony import */ var src_app_back_end_deletes_recover_transaction_deleted_recover_transaction_deleted_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/back-end/deletes/recover-transaction-deleted/recover.transaction.deleted.component */ "9nQn");
/* harmony import */ var src_app_back_end_deletes_recover_user_deleted_recover_user_deleted_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/back-end/deletes/recover-user-deleted/recover.user.deleted.component */ "VnLA");
/* harmony import */ var src_app_back_end_deletes_sector_sales_deleted_sector_sales_deleted_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/back-end/deletes/sector-sales-deleted/sector.sales.deleted.component */ "fUex");
/* harmony import */ var src_app_back_end_deletes_users_deleted_users_deleted_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/back-end/deletes/users-deleted/users.deleted.component */ "JY0y");
/* harmony import */ var src_services_delete_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/delete.service */ "RMY6");
/* harmony import */ var _deletes_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deletes.router.module */ "Lk1p");
/* harmony import */ var _form_inputs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form.inputs.module */ "mmFQ");
/* harmony import */ var _shared_back_end_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared.back.end.module */ "0sbA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class DeletesModule {
}
DeletesModule.ɵfac = function DeletesModule_Factory(t) { return new (t || DeletesModule)(); };
DeletesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DeletesModule });
DeletesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [src_services_delete_service__WEBPACK_IMPORTED_MODULE_6__["DeleteService"]], imports: [[
            _shared_back_end_module__WEBPACK_IMPORTED_MODULE_9__["SharedBackEndModule"],
            _deletes_router_module__WEBPACK_IMPORTED_MODULE_7__["DeletesRoutingModule"],
            _form_inputs_module__WEBPACK_IMPORTED_MODULE_8__["FormInputsModeul"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DeletesModule, { declarations: [src_app_back_end_deletes_freights_deleted_freights_deleted_component__WEBPACK_IMPORTED_MODULE_1__["FreightsDeletedComponent"],
        src_app_back_end_deletes_recover_transaction_deleted_recover_transaction_deleted_component__WEBPACK_IMPORTED_MODULE_2__["RecoverTransactionDeletedComponent"],
        src_app_back_end_deletes_sector_sales_deleted_sector_sales_deleted_component__WEBPACK_IMPORTED_MODULE_4__["SectorSalesDeletedComponent"],
        src_app_back_end_deletes_financial_transfers_deleted_financial_transfers_deleted_component__WEBPACK_IMPORTED_MODULE_0__["FinancialTransfersDeletedComponent"],
        src_app_back_end_deletes_users_deleted_users_deleted_component__WEBPACK_IMPORTED_MODULE_5__["UsersDeletedComponent"],
        src_app_back_end_deletes_recover_user_deleted_recover_user_deleted_component__WEBPACK_IMPORTED_MODULE_3__["RecoverUserDeletedComponent"]], imports: [_shared_back_end_module__WEBPACK_IMPORTED_MODULE_9__["SharedBackEndModule"],
        _deletes_router_module__WEBPACK_IMPORTED_MODULE_7__["DeletesRoutingModule"],
        _form_inputs_module__WEBPACK_IMPORTED_MODULE_8__["FormInputsModeul"]] }); })();


/***/ }),

/***/ "VnLA":
/*!*****************************************************************************************!*\
  !*** ./src/app/back-end/deletes/recover-user-deleted/recover.user.deleted.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RecoverUserDeletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverUserDeletedComponent", function() { return RecoverUserDeletedComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_delete_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/delete.service */ "RMY6");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_notes_notes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/notes/notes.component */ "Z5Tv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










function RecoverUserDeletedComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
} }
class RecoverUserDeletedComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service, http, activateRouter) {
        super();
        this.service = service;
        this.http = http;
        this.activateRouter = activateRouter;
    }
    ngOnInit() {
        this.parentPath = this.activateRouter.parent.routeConfig.path;
        this.service.initRecoverForm();
        this.service.form.controls._id.setValue(this.activateRouter.snapshot.params.targetId);
        //Check If Must Be Get Object From The Server
        if (history.state.name) {
            this.service.form.controls.name.setValue(history.state.name);
            history.state.name = null;
        }
        else {
            //Get From The Serer
            this.getFreightToRecover();
        }
    }
    /**
     * Get Car Mark From Server To Update
     */
    getFreightToRecover() {
        this.service.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.getDeletedUserToRecover(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            this.service.isRequestingToServer = false;
            if (res.isSuccess) {
                this.service.form.controls.name.setValue(res.result.name);
            }
            else
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
        }, error => {
            this.service.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
    /**
     * Recover Item
     */
    onSubmit() {
        if (this.service.form.invalid) {
            this.service.isFormSubmitError = true;
            return;
        }
        this.service.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.recoverUser(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            this.service.isRequestingToServer = false;
            if (res.isSuccess) {
                //Pass The New Item To Page
                this.service.onRecoveredItem.emit(this.activateRouter.snapshot.params.targetId);
                //Back To Component
                this.service.closeModel(this.parentPath);
            }
        }, error => {
            this.service.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
RecoverUserDeletedComponent.ɵfac = function RecoverUserDeletedComponent_Factory(t) { return new (t || RecoverUserDeletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_delete_service__WEBPACK_IMPORTED_MODULE_3__["DeleteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
RecoverUserDeletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecoverUserDeletedComponent, selectors: [["app-Recover-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 13, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], [1, "form-group"], [1, "text-center", 3, "innerHtml"], ["app-text-input", "", "fcn", "name", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [3, "notes"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function RecoverUserDeletedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function RecoverUserDeletedComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-notes", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RecoverUserDeletedComponent_div_13_Template, 1, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecoverUserDeletedComponent_Template_button_click_14_listener() { return ctx.service.closeModel(ctx.parentPath); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.service.u.r.areYouSureToRecoverUserDeleted, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.service.u.r.clinetName)("formSubmitError", ctx.service.isFormSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("notes", ctx.service.u.r.recoverUserNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.service.u.r.yesRecover, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.service.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.service.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__["TextInputComponent"], src_app_back_end_shared_notes_notes_component__WEBPACK_IMPORTED_MODULE_8__["NotsCompoenent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "Yl/l":
/*!*********************************************************************************!*\
  !*** ./src/app/back-end/deletes/freights-deleted/freights.deleted.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FreightsDeletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightsDeletedComponent", function() { return FreightsDeletedComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_delete_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/delete.service */ "RMY6");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/select-input/select-input.component */ "XBrH");
/* harmony import */ var src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/date-input/date.input.component */ "3CG7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/fop/fop-header/fop-header.component */ "OhZK");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/fop/fop-sort/fop-sort.component */ "lyqo");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/fop/fop-paging/fop.paging.component */ "VjaU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");

















function FreightsDeletedComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 49);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r0.service.u.r.loadingData);
} }
function FreightsDeletedComponent_tr_77_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 55);
} }
const _c0 = function (a1) { return ["recover", a1]; };
const _c1 = function (a3) { return ["/reports", "freights", "fullDetails", a3]; };
const _c2 = function (a0, a1) { return { "color": a0, "background-color": a1 }; };
function FreightsDeletedComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FreightsDeletedComponent_tr_77_div_2_Template, 1, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](37, _c0, item_r2._id))("title", ctx_r1.service.u.r.recover);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.clinetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 24, item_r2.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.refranceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](39, _c1, item_r2._id))("innerText", item_r2.carBodyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightCaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.buySourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightStateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](41, _c2, item_r2.portFontColor, item_r2.portBackgroundColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightPortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carSizeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](18, 26, item_r2.landFreightPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](20, 29, item_r2.landCost, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](22, 32, item_r2.maritimeFreightPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.maritimeFreightPriceIsPaidName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.containerNumber || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.navigationalWayeName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.arrivalPortName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 35, item_r2.arrivalDate));
} }
class FreightsDeletedComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service, http) {
        super();
        this.service = service;
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
        this.service.seo.updateSEO("freightsDeleted");
        this.getEntiries(true);
        this.service.freightsSelected = [];
        this.service.getItems();
        this.service.initFreightsFilterForm();
        //Listener On Recover Item Event
        this.allSubscriptions.push(this.service.onRecoveredItem.subscribe(recoverdItemId => {
            let recoverdIndex = this.entries.findIndex(ent => ent._id == recoverdItemId);
            if (recoverdIndex >= 0) {
                this.entries.splice(recoverdIndex, 1);
                this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
            }
        }));
    }
    /**
   * Get My Users
   */
    getEntiries(isReset) {
        if (isReset) {
            this.service.freightsSelected = [];
            this.skip = 0;
            this.entries = [];
            this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
        }
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.http.getFreightsDeleted(this.skip, this.limit, this.service.filterForm.value).subscribe(res => {
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
FreightsDeletedComponent.ɵfac = function FreightsDeletedComponent_Factory(t) { return new (t || FreightsDeletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_delete_service__WEBPACK_IMPORTED_MODULE_4__["DeleteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"])); };
FreightsDeletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FreightsDeletedComponent, selectors: [["app-freight-deleted"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 83, vars: 88, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], ["app-text-input", "", "fcn", "clinetName", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carMark", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carBodyNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-select-input", "", "fcn", "buySourceId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "freightPortId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "freightStateId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "navigationalWayeId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "carSizeId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-select-input", "", "fcn", "arrivalPortId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable"], ["app-date-input", "", "fcn", "createdDate", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "reset", "type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled"], [1, "d-flex", "justify-content-between"], ["tableId", "allFreights", 3, "se`archText"], [1, "row", "table-responsive", "mb-4"], ["id", "allFreights", 1, "table", "table-hover"], [1, "th-5", 3, "innerText"], ["filedName", "clinetName", 3, "fop", "fieldText"], ["filedName", "createdDate", 3, "fop", "fieldText"], ["filedName", "refranceNumber", 3, "fop", "fieldText"], ["filedName", "carMark", 3, "fop", "fieldText"], ["filedName", "carBodyNumber", 3, "fop", "fieldText"], ["filedName", "freightCaseName", 3, "fop", "fieldText"], ["filedName", "buySourceName", 3, "fop", "fieldText"], ["filedName", "freightStateName", 3, "fop", "fieldText"], ["filedName", "freightPortName", 3, "fop", "fieldText"], ["filedName", "carSizeName", 3, "fop", "fieldText"], ["filedName", "landFreightPrice", 3, "fop", "fieldText"], ["filedName", "landCost", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPrice", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPriceIsPaidName", 3, "fop", "fieldText"], ["filedName", "containerName", 3, "fop", "fieldText"], ["filedName", "navigationalWayeName", 3, "fop", "fieldText"], ["filedName", "arrivalPortName", 3, "fop", "fieldText"], ["filedName", "arrivalDate", 3, "fop", "fieldText"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], [2, "display", "inline-flex"], ["class", "spinner-grow text-danger align-self-center loader-sm", 4, "ngIf"], [1, "mr-2", 3, "routerLink", "title"], [1, "fas", "fa-redo-alt", "fa-1-5x"], [1, "link", 3, "routerLink", "innerText"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"]], template: function FreightsDeletedComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function FreightsDeletedComponent_Template_form_submit_8_listener() { return ctx.getEntiries(true); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, FreightsDeletedComponent_div_24_Template, 1, 1, "div", 22);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "fop-header", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("se`archText", function FreightsDeletedComponent_Template_fop_header_se_archText_34_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "fop-sort", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "fop-sort", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "fop-sort", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "fop-sort", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "fop-sort", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "fop-sort", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "fop-sort", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "fop-sort", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "fop-sort", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "fop-sort", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "fop-sort", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "fop-sort", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "fop-sort", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "fop-sort", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "fop-sort", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "fop-sort", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "fop-sort", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "fop-sort", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, FreightsDeletedComponent_tr_77_Template, 30, 44, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](78, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](79, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "fop-paging", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("getMoreItems", function FreightsDeletedComponent_Template_fop_paging_getMoreItems_81_listener() { return ctx.getEntiries(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.filterIn + " " + ctx.service.u.r.freights);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.service.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.clinetName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.buySources)("form", ctx.service.filterForm)("lable", ctx.service.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.freightPorts)("form", ctx.service.filterForm)("lable", ctx.service.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.states)("form", ctx.service.filterForm)("lable", ctx.service.u.r.freightState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.navigationalWayes)("form", ctx.service.filterForm)("lable", ctx.service.u.r.navigationalWaye);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.carSizes)("form", ctx.service.filterForm)("lable", ctx.service.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.arrivalPorts)("form", ctx.service.filterForm)("lable", ctx.service.u.r.arrivalPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.service.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.freights);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.clinet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.trnasactionDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.landFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.landCost);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.maritimeFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.maritimeFreightPriceIsPaid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.navigationalWaye);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](78, 76, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](79, 80, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](80, 84, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__["TextInputComponent"], src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_8__["SelectInputComponent"], src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_9__["DateInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_11__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_12__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_13__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_15__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]], encapsulation: 2 });


/***/ }),

/***/ "fUex":
/*!*****************************************************************************************!*\
  !*** ./src/app/back-end/deletes/sector-sales-deleted/sector.sales.deleted.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SectorSalesDeletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorSalesDeletedComponent", function() { return SectorSalesDeletedComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_delete_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/delete.service */ "RMY6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/date-input/date.input.component */ "3CG7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/fop/fop-header/fop-header.component */ "OhZK");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/fop/fop-sort/fop-sort.component */ "lyqo");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/fop/fop-paging/fop.paging.component */ "VjaU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");















function SectorSalesDeletedComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 43);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r0.service.u.r.loadingData);
} }
function SectorSalesDeletedComponent_tr_68_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 49);
} }
const _c0 = function (a1) { return ["recover", a1]; };
const _c1 = function (a3) { return ["/reports", "freights", "fullDetails", a3]; };
const _c2 = function (a0, a1) { return { "color": a0, "background-color": a1 }; };
function SectorSalesDeletedComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SectorSalesDeletedComponent_tr_68_div_2_Template, 1, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](26, _c0, item_r2._id))("title", ctx_r1.service.u.r.recover);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.clinetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.clinetPhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.refranceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 22, item_r2.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](28, _c1, item_r2._id))("innerText", item_r2.carBodyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.buySourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightStateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](30, _c2, item_r2.portFontColor, item_r2.portBackgroundColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightPortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carSizeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.landFreightPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.maritimeFreightPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carCost);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.sellPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.netProfit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 24, item_r2.arrivalDate));
} }
class SectorSalesDeletedComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
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
    }
    ngOnInit() {
        this.service.seo.updateSEO("sectorSalesDeleted");
        this.getEntiries(false);
        this.service.initSectorSalesFilterForm();
        //Listener On Delete Item Event
        this.allSubscriptions.push(this.service.onRecoveredItem.subscribe(deletedItemId => {
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
            this.skip = 0;
            this.entries = [];
        }
        this.formSubmitError = false;
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.service.http.getFreightsDeleted(this.skip, this.limit, this.service.filterForm.value).subscribe(res => {
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
SectorSalesDeletedComponent.ɵfac = function SectorSalesDeletedComponent_Factory(t) { return new (t || SectorSalesDeletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_delete_service__WEBPACK_IMPORTED_MODULE_4__["DeleteService"])); };
SectorSalesDeletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SectorSalesDeletedComponent, selectors: [["app-sector-sale-deleted"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 74, vars: 68, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], [1, "form-row", "mb-2"], ["app-text-input", "", "fcn", "clinetName", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "phoneNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-date-input", "", "fcn", "createdDate", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "reset", "type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled"], [1, "d-flex", "justify-content-between"], [1, "row", "form-group"], [1, "table-responsive"], ["tableId", "sectorSellTable", 3, "searchText"], ["id", "sectorSellTable", 1, "table", "mb-4", "table-hover"], [1, "th-5", 3, "innerText"], [1, "th-15"], ["filedName", "clinetName", 3, "fop", "fieldText"], ["filedName", "clinetPhoneNumber", 3, "fop", "fieldText"], ["filedName", "refranceNumber", 3, "fop", "fieldText"], ["filedName", "createdDate", 3, "fop", "fieldText"], ["filedName", "carMark", 3, "fop", "fieldText"], ["filedName", "carBodyNumber", 3, "fop", "fieldText"], ["filedName", "buySourceName", 3, "fop", "fieldText"], ["filedName", "freightStateName", 3, "fop", "fieldText"], ["filedName", "freightPortName", 3, "fop", "fieldText"], ["filedName", "carSizeName", 3, "fop", "fieldText"], ["filedName", "landFreightPrice", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPrice", 3, "fop", "fieldText"], ["filedName", "carCost", 3, "fop", "fieldText"], ["filedName", "sellPrice", 3, "fop", "fieldText"], ["filedName", "netProfit", 3, "fop", "fieldText"], ["filedName", "arrivalDate", 3, "fop", "fieldText"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], [2, "display", "inline-flex"], ["class", "spinner-grow text-danger align-self-center loader-sm", 4, "ngIf"], [1, "mr-2", 3, "routerLink", "title"], [1, "fas", "fa-redo-alt", "fa-1-5x"], [1, "link", 3, "routerLink", "innerText"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"]], template: function SectorSalesDeletedComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function SectorSalesDeletedComponent_Template_form_submit_8_listener() { return ctx.getEntiries(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SectorSalesDeletedComponent_div_18_Template, 1, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "fop-header", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("searchText", function SectorSalesDeletedComponent_Template_fop_header_searchText_30_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "fop-sort", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "fop-sort", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "fop-sort", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "fop-sort", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "fop-sort", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "fop-sort", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "fop-sort", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "fop-sort", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "fop-sort", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "fop-sort", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "fop-sort", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "fop-sort", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "fop-sort", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "fop-sort", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "fop-sort", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "fop-sort", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, SectorSalesDeletedComponent_tr_68_Template, 24, 33, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](71, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "fop-paging", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("getMoreItems", function SectorSalesDeletedComponent_Template_fop_paging_getMoreItems_72_listener() { return ctx.getEntiries(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.filterIn + " " + ctx.service.u.r.sectorSales);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.service.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.clinetName)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.clinetPhoneNumber)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.refranceNumber)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.filterForm)("lable", ctx.service.u.r.trnasactionDate)("formSubmitError", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.service.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.sectorSales);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.clinet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.trnasactionDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.landFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.maritimeFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carCost);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.sellPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.netProfit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](69, 56, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](70, 60, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](71, 64, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__["TextInputComponent"], src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_7__["DateInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_9__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_10__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_11__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_13__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=back-end-deletes-module.js.map