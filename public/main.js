(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ahmed/f/Albadera/Front/src/main.ts */"zUnb");


/***/ }),

/***/ "1jmC":
/*!*******************************************************!*\
  !*** ./src/services/http/http.interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../local.storage.service */ "LKR5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HttpInterceptorService {
    constructor() {
    }
    /**
     * Override On All Request To API
     * @param req
     * @param next
     intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {

         //Add Access Token To Header If Not Null
         const clond = LocalStorageService.accessToken ? req.clone({
            headers: req.headers.append('authorization', `bearer ${LocalStorageService.accessToken.replace(/"/gm, '')}`)
            .append('content-type', `application/json`)
        }) : req.clone({
            headers: req.headers
            .append('content-type', `application/json`)
        });
        return next.handle(clond);
    }
    */
    intercept(req, next) {
        // Set Header Setting From Server
        const accessToken = _local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"].accessToken;
        const allowContentTypeJson = req.url.search(/\/user\/createUser|\/user\/update$|\/user\/updateUserData$|\/freight\/createNewFreight|\/freight\/updateFreight$/gmi) == -1;
        let headerOverrided;
        if (accessToken) {
            // Set Access Token In Header
            if (allowContentTypeJson) {
                headerOverrided = req.clone({
                    headers: req.headers
                        .append('authorization', `bearer ${accessToken}`)
                        .append('content-type', `application/json`)
                });
            }
            else {
                headerOverrided = req.clone({
                    headers: req.headers
                        .append('authorization', `bearer ${accessToken}`)
                });
            }
        }
        else {
            headerOverrided = req.clone({
                headers: req.headers
                    .append('content-type', allowContentTypeJson ? `application/json` : '')
            });
        }
        return next.handle(headerOverrided);
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(); };
HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac });


/***/ }),

/***/ "9CQa":
/*!******************************************************************************!*\
  !*** ./src/app/back-end/shared/nav-bar-setting/nav-bar-setting.component.ts ***!
  \******************************************************************************/
/*! exports provided: NavBarSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarSettingComponent", function() { return NavBarSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavBarSettingComponent {
    constructor(u) {
        this.u = u;
    }
    ngOnInit() {
    }
    /**
   * User Log Out
   */
    logOut() {
        this.u.logOut(true);
    }
} //End Class
NavBarSettingComponent.ɵfac = function NavBarSettingComponent_Factory(t) { return new (t || NavBarSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
NavBarSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarSettingComponent, selectors: [["app-nav-bar-setting"]], decls: 24, vars: 6, consts: [["href", "javascript:void(0);", "id", "userProfileDropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "user"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-settings"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"], ["aria-labelledby", "userProfileDropdown", 1, "dropdown-menu", "position-absolute", "animated", "fadeInUp"], [1, "user-profile-section"], [1, "media", "mx-auto"], [1, "img-fluid", "mr-2", 3, "src", "alt"], [1, "media-body"], [3, "innerHtml"], [1, "dropdown-item"], ["routerLink", "accountsetting"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-user"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["href", "javascript:void()", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-log-out"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"]], template: function NavBarSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarSettingComponent_Template_a_click_18_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "polyline", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "line", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.u.u.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.u.r.userPicture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.u.u.fullName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", "@" + (ctx.u.u == null ? null : ctx.u.u.userName), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.u.r.accountSetting, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.u.r.logOut, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    website_url: "http://localhost:4100/",
    api_url: "http://localhost:41001/",
    api_url1: "http://localhost:41001"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BzsC":
/*!*************************************************************************!*\
  !*** ./src/app/front-end/shared/front-header/front.header.component.ts ***!
  \*************************************************************************/
/*! exports provided: FrontHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontHeaderComponent", function() { return FrontHeaderComponent; });
/* harmony import */ var src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/roles.enum */ "DBRY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FrontHeaderComponent_li_25_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FrontHeaderComponent_li_25_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FrontHeaderComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FrontHeaderComponent_li_25_a_2_Template, 2, 0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FrontHeaderComponent_li_25_a_3_Template, 2, 0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.u.u.roleId == ctx_r0.roles.Admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.u.u.roleId == ctx_r0.roles.Clinetet);
} }
function FrontHeaderComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FrontHeaderComponent_li_26_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FrontHeaderComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FrontHeaderComponent {
    constructor(u) {
        this.u = u;
        this.roles = src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"];
    }
    ngOnInit() {
    }
    /**
     * Logout
     */
    logOut() {
        this.u.logOut();
    }
} // End Class
FrontHeaderComponent.ɵfac = function FrontHeaderComponent_Factory(t) { return new (t || FrontHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
FrontHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FrontHeaderComponent, selectors: [["app-front-header"]], decls: 28, vars: 3, consts: [["id", "header", 1, "stricky"], [1, "thm-container", "clearfix"], [1, "logo", "pull-left"], ["routerLink", "/"], ["src", "assets/front-end/images/logo.png", "alt", "\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0644\u0634\u062D\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0645\u0646 \u0627\u0644\u0645\u0632\u0627\u062F\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u062E\u0628\u0631\u0629 15 \u0639\u0627\u0645 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648 \u0634\u062D\u0646\u0647\u0627 \u0625\u0644\u0649 \u062C\u0645\u064A\u0639 \u0645\u0648\u0627\u0646\u0626 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637"], [1, "nav-holder", "pull-right"], [1, "nav-footer"], [1, "nav"], [1, ""], ["routerLink", "about-us"], ["routerLink", "/services"], ["routerLink", "/contact-us"], [1, "nav-header"], [1, "menu-expander"], [1, "fa", "fa-bars"], ["class", "mr-2", 4, "ngIf"], [1, "mr-2"], [1, "get-quote"], ["routerLink", "/freights", "class", "default-btn", 4, "ngIf"], ["routerLink", "/reports/freights", "class", "default-btn", 4, "ngIf"], ["routerLink", "/freights", 1, "default-btn"], ["routerLink", "/reports/freights", 1, "default-btn"], [1, "default-btn", 3, "click"], ["routerLink", "/sign-in", 1, "default-btn"]], template: function FrontHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0646\u0628\u0630\u0629 \u0639\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u062E\u062F\u0645\u0627\u062A\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, FrontHeaderComponent_li_25_Template, 4, 2, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, FrontHeaderComponent_li_26_Template, 4, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, FrontHeaderComponent_li_27_Template, 4, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.u.isUserlogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.u.isUserlogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.u.isUserlogged);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "C2k8":
/*!*************************************!*\
  !*** ./src/services/seo.service.ts ***!
  \*************************************/
/*! exports provided: SEOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEOService", function() { return SEOService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentcation/current.user.service */ "J4aQ");



/**
 * SEO Service
 */
class SEOService {
    constructor(meta, title, u) {
        this.meta = meta;
        this.title = title;
        this.u = u;
    }
    /**
     * Update Static Seo Like ('Home Page','PostsPage','VideosPage',....)
     * @param seo
     */
    updateSEO(pageTitleKey) {
        //Save Current Seo Information For Refresh Affter Cchange Resources
        this.title.setTitle(this.u.r[pageTitleKey]);
    }
} //End Class
SEOService.ɵfac = function SEOService_Factory(t) { return new (t || SEOService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
SEOService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SEOService, factory: SEOService.ɵfac });


/***/ }),

/***/ "DBRY":
/*!*********************************!*\
  !*** ./src/enums/roles.enum.ts ***!
  \*********************************/
/*! exports provided: RolesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesEnum", function() { return RolesEnum; });
/**
 * الصلاحيات
 */
var RolesEnum;
(function (RolesEnum) {
    RolesEnum[RolesEnum["Admin"] = 1] = "Admin";
    RolesEnum[RolesEnum["BranchManger"] = 2] = "BranchManger";
    RolesEnum[RolesEnum["Clinet"] = 3] = "Clinet";
})(RolesEnum || (RolesEnum = {}));


/***/ }),

/***/ "DF2p":
/*!**************************************************************!*\
  !*** ./src/app/back-end/shared/sid-bar/sid-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: SidBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidBarComponent", function() { return SidBarComponent; });
/* harmony import */ var src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/behavior.subject.service */ "okBh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/menu.service */ "Qttl");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_directives_write_svg_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/directives/write.svg.directive */ "PlsR");









function SidBarComponent_li_10_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", menu_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-expanded", menu_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("writeSVG", menu_r1.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx_r2.u.r[menu_r1.resourceKey_title], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function SidBarComponent_li_10_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "polyline", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "#", menu_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-expanded", menu_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("writeSVG", menu_r1.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx_r3.u.r[menu_r1.resourceKey_title], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function SidBarComponent_li_10_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", sub_r7.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", sub_r7.url)("queryParams", sub_r7.queryParams)("innerHtml", ctx_r4.u.r[sub_r7.resourceKey_title], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function SidBarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidBarComponent_li_10_a_1_Template, 4, 4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidBarComponent_li_10_a_2_Template, 7, 4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidBarComponent_li_10_li_4_Template, 2, 5, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", menu_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r1.isLonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !menu_r1.isLonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("show", menu_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menu_r1.subMenus);
} }
class SidBarComponent {
    constructor(u, router, location) {
        this.u = u;
        this.router = router;
        this.location = location;
        this.menus = [];
    }
    ngOnInit() {
        this.menus = src_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"].getMenu().filter(m => !m.userRolsIds || m.userRolsIds.findIndex(t => t == this.u.u.roleId) >= 0);
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(reo => reo instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe(r => {
            src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].activePage.next({});
            //Check If This Home Page
            let menuIsFound = false;
            this.menus.forEach(m => {
                var _a;
                m.isActive = false;
                if (menuIsFound)
                    return;
                if (m.isLonly) {
                    //Active Menu
                    let isActiveByBasicUrl = m.url.toLowerCase() == r['url'].toLowerCase();
                    let isActiveByNesterUrls = ((_a = m.nestedurls) === null || _a === void 0 ? void 0 : _a.findIndex(url => url.test(r['url']))) > -1;
                    m.isActive = isActiveByBasicUrl || isActiveByNesterUrls;
                    if (m.isActive)
                        menuIsFound = true;
                    src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].activePage.next({ menu: m, subMenu: null, isActiveByNesterUrls: isActiveByBasicUrl, isActiveByBasicUrl: isActiveByBasicUrl, isAllowShowBreadcrumbToNestedUrls: true });
                }
                else {
                    m.subMenus.forEach(sub => {
                        var _a;
                        sub.isActive = false;
                        if (menuIsFound)
                            return;
                        //Active Submenu
                        let isActiveByBasicUrl = sub.url.toLowerCase() == r['url'].toLowerCase();
                        let isActiveByNesterUrls = ((_a = sub.nestedurls) === null || _a === void 0 ? void 0 : _a.findIndex(url => url.test(r['url']))) > -1;
                        sub.isActive = isActiveByBasicUrl || isActiveByNesterUrls;
                        //Active Parent
                        m.isActive = sub.isActive;
                        if (sub.isActive) {
                            menuIsFound = true;
                            src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].activePage.next({ menu: m, subMenu: sub, isActiveByNesterUrls: isActiveByNesterUrls, isActiveByBasicUrl: isActiveByBasicUrl, isAllowShowBreadcrumbToNestedUrls: sub.isAllowShowBreadcrumbToNestedUrls });
                        }
                    });
                }
            });
            //Init App For Redesign Menu
            setTimeout(() => {
                window['App'].initSideBar();
            }, 1000);
        });
    }
} //End CLass
SidBarComponent.ɵfac = function SidBarComponent_Factory(t) { return new (t || SidBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
SidBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SidBarComponent, selectors: [["app-sid-bar"]], decls: 11, vars: 5, consts: [[1, "sidebar-wrapper", "sidebar-theme"], ["id", "sidebar"], [1, "profile-info"], [1, "user-cover-image"], [1, "user-info"], ["width", "50", "height", "50", 3, "src", "alt"], [3, "innerHtml"], [1, "shadow-bottom"], ["id", "accordionExample", 1, "list-unstyled", "menu-categories"], ["class", "menu", 3, "active", 4, "ngFor", "ngForOf"], [1, "menu"], ["class", "dropdown-toggle", 3, "routerLink", 4, "ngIf"], ["data-toggle", "collapse", "class", "dropdown-toggle", 3, "href", 4, "ngIf"], ["data-parent", "#accordionExample", 1, "collapse", "submenu", "list-unstyled", 3, "id"], [3, "active", 4, "ngFor", "ngForOf"], [1, "dropdown-toggle", 3, "routerLink"], [3, "writeSVG"], ["data-toggle", "collapse", 1, "dropdown-toggle", 3, "href"], [1, ""], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-chevron-right"], ["points", "9 18 15 12 9 6"], [3, "routerLink", "queryParams", "innerHtml"]], template: function SidBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SidBarComponent_li_10_Template, 5, 8, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.u.u.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx.u.r.userPicture);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.u.u.fullName, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", "@" + (ctx.u.u == null ? null : ctx.u.u.userName), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], src_directives_write_svg_directive__WEBPACK_IMPORTED_MODULE_7__["WriteSVGDirective"]], encapsulation: 2 });


/***/ }),

/***/ "FIK1":
/*!*****************************************!*\
  !*** ./src/enums/response.type.enum.ts ***!
  \*****************************************/
/*! exports provided: ResponseTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseTypeEnum", function() { return ResponseTypeEnum; });
var ResponseTypeEnum;
(function (ResponseTypeEnum) {
    ResponseTypeEnum[ResponseTypeEnum["success"] = 1] = "success";
    ResponseTypeEnum[ResponseTypeEnum["error"] = 2] = "error";
    ResponseTypeEnum[ResponseTypeEnum["info"] = 3] = "info";
    ResponseTypeEnum[ResponseTypeEnum["unauthorized"] = 4] = "unauthorized";
    ResponseTypeEnum[ResponseTypeEnum["invalidAccessToken"] = 5] = "invalidAccessToken";
})(ResponseTypeEnum || (ResponseTypeEnum = {}));


/***/ }),

/***/ "H5vj":
/*!*******************************************!*\
  !*** ./src/services/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class HttpService {
    constructor(http) {
        this.http = http;
    }
    /**
   * User Sign In
   * @param userLoginInfo User Sign In Data
   */
    signIn(userInfo) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/signInByUserName`, JSON.stringify(userInfo), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
    * Create A New User
    * @param userLoginInfo Create A New User
    */
    createUser(userData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/createUser`, userData, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Current Account Information For Update
     */
    getCurrentUserInformationForUpdate() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/getCurrentUserInformationForUpdate`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Update Current User Information
     * @param post
     * @param image
     */
    updateUserInformtion(formData) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/update`, formData, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
  * Get Users
  */
    getUsers(skip, limit, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/getUsers/${skip}/${limit}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Delete User
     * @param id
     */
    deleteUser(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/delete/${id}`, {}, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     *
     * @param id Get User Information To Update
     */
    getUserInformationToUpdate(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/getUserInformationToUpdate/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
    * Update User
    */
    updateUser(video) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/update`, JSON.stringify(video), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
   * Update User Data By Admin
   */
    updateUserData(formData) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/updateUserData`, formData, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get General Settings*/
    getGeneralSettings(skip, limit, pageTargetName) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/setting/getGeneralSettings/${skip}/${limit}/${pageTargetName}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Create New General Setting */
    createNewGeneralSetting(value, pageTargetName) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/setting/createNewGeneralSetting/${pageTargetName}`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get Genral Setting From Server To Update  */
    getGenralSettingToUpdate(id, pageTargetName) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/setting/getGenralSettingToUpdate/${id}/${pageTargetName}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Update General Setting */
    updateGeneralSetting(value, pageTargetName) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/setting/updateGeneralSetting/${pageTargetName}`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Delete General Setting */
    deleteGeneralSetting(value, pageTargetName) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/setting/deleteGeneralSetting/${pageTargetName}`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get States*/
    getStates(skip, limit) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/state/getStates/${skip}/${limit}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Create New State */
    createNewState(value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/state/createNewState`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get State From Server To Update  */
    getStateToUpdate(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/state/getStateToUpdate/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Update State */
    updateState(value) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/state/updateState`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Delete State */
    deleteState(value) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/state/deleteState`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Freights*/
    getFreights(skip, limit, filterOption) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/getFreights/${skip}/${limit}`, JSON.stringify(filterOption), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Create New Freight */
    createNewFreight(value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/createNewFreight`, value, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get Freight From Server To Update  */
    getFreightToUpdate(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/getFreightToUpdate/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get Freight From Server To Delete  */
    getFreightToDelete(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/getFreightToDelete/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Update Freight */
    updateFreight(formData) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/updateFreight`, formData, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Delete Freight */
    deleteFreight(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/deleteFreight/${id}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Select Items
     * @param itemsNames
     */
    getSelectItems(itemsNames) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/selectItem/getSelectItems`, JSON.stringify(itemsNames), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Move Freights To Container
     * @param itemsNames
     */
    updateFreightsByContainersNumbers(body) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/updateByContainersNumbers`, JSON.stringify(body), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
   * Change Freight State
   * @param itemsNames
   */
    changeFreightState(freightCaseId, ids) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/changeFreightState/${freightCaseId}`, JSON.stringify(ids), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Change Container Number
     * @param freightCaseId
     * @param ids
     */
    changeContainerNumber(containerNumber, ids) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/changeContainerNumber/${containerNumber}`, JSON.stringify(ids), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get FinancialTransfers*/
    getFinancialTransfers(skip, limit, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/getFinancialTransfers/${skip}/${limit}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Create New FinancialTransfer */
    createNewFinancialTransfer(value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/createNewFinancialTransfer`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get FinancialTransfer From Server To Update  */
    getFinancialTransferToUpdate(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/getFinancialTransferToUpdate/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get FinancialTransfer From Server To Delete  */
    getFinancialTransferToDelete(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/getFinancialTransferToDelete/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Update FinancialTransfer */
    updateFinancialTransfer(value) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/updateFinancialTransfer`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Delete FinancialTransfer */
    deleteFinancialTransfer(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/deleteFinancialTransfer/${id}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Financial Transfer To Payment */
    getFinancialTransferToPayment(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/getFinancialTransferToPayment/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Financial Transfer Payment Amount*/
    financialTrans_paymentAmount(value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/paymentAmount`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Financial Transfer Details*/
    getFinancialTransferDetails(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/getDetails/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Container Report*/
    getContainersReport(skip, limit, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/container/getContainers/${skip}/${limit}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Clinet Freights Report
     */
    getClinetFreightsReport(skip, limit, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/report/getClinetFreightsReport/${skip}/${limit}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Maritime Freight Price Total Due From Clinet
     */
    getMaritimeFreightPriceTotalDueFromClinet(clinetTargetId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/report/getMaritimeFreightPriceTotalDueForClinet/${clinetTargetId}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
   * Get Freight Details To Clinet
   */
    getFreightDetailsToClinet(id, clinetTargetId) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/report/getFreightDetailsToClinet/${id}/${clinetTargetId}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Branch Freights Report
     */
    getBranchFreightsReport(skip, limit, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/report/getBranchFreightsReport/${skip}/${limit}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
  * Get Freight Details To Branch
  */
    getFreightDetailsToBranch(id, clinetTargetId) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/report/getFreightDetailsToBranch/${id}/${clinetTargetId}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
       * Get Maritime Freight Price Total Due For Branch
       */
    getMaritimeFreightPriceTotalDueForBranch(brnahcId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/report/getMaritimeFreightPriceTotalDueForBranch/${brnahcId}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Freight Details
     */
    getFreightDetails(id) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/report/getFreightDetails/${id}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get SectorSales*/
    getSectorSales(skip, limit, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/getSectorSales/${skip}/${limit}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Create New SectorSale */
    createNewSectorSale(value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/createNewSectorSale`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get SectorSale From Server To Update  */
    getSectorSaleToUpdate(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/getSectorSaleToUpdate/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get SectorSale From Server To Delete  */
    getSectorSaleToDelete(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/getSectorSaleToDelete/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Update SectorSale */
    updateSectorSale(value) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/updateSectorSale`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Delete SectorSale */
    deleteSectorSale(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/deleteSectorSale/${id}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Sector Sale Details
     */
    getSectorSaleDetails(id) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/getDetails/${id}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Ports*/
    getPorts(skip, limit, portType) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/port/getPorts/${skip}/${limit}/${portType}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Create New Port */
    createNewPort(value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/port/createNewPort`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get Port From Server To Update  */
    getPortToUpdate(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/port/getPortToUpdate/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get Port From Server To Delete  */
    getPortToDelete(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/port/getPortToDelete/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Update Port */
    updatePort(value) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/port/updatePort`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Delete Port */
    deletePort(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/port/deletePort/${id}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Freights Deleted */
    getFreightsDeleted(skip, take, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/deleted/getFreightsDeleted/${skip}/${take}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Deleted Trasnaction To Recover */
    getDeletedTrnasactionToRecover(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/deleted/getDeletedTrnasactionToRecover/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Recover Trnasaction */
    recoverTrnasaction(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/deleted/recoverTrnasaction/${id}`, null, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Recover User */
    recoverUser(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/deleted/recoverUser/${id}`, null, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Freights Deleted */
    getFinancialTransfersDeleted(skip, take, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/deleted/getFinancialTransfersDeleted/${skip}/${take}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get User To Delete  */
    getUserToDelete(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/getToDelete/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get Delete User To Recover  */
    getDeletedUserToRecover(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/deleted/getDeletedUserToRecover/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get App Setting Values
     */
    getAppSettingValues() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/appSetting/getValues`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Update App Setting Values
     */
    updateAppSettingValues(values) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/appSetting/update`, JSON.stringify(values), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Sedn Contact Us Message
     * @param values
     */
    sednContactUsMessage(values) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/contactUs/send`, JSON.stringify(values), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Contact Us Messages */
    getContactUsMessages(skip, take, value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/contactUs/getMessages/${skip}/${take}`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
} // End CLass
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });


/***/ }),

/***/ "IRI6":
/*!******************************************!*\
  !*** ./src/modules/app.router.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _app_front_end_front_contact_us_front_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app/front-end/front-contact-us/front.contact.component */ "mbxK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_front_end_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/front-end/home/home.component */ "jjk3");
/* harmony import */ var src_app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentcation/user.auth.can.active.service */ "bPFj");
/* harmony import */ var src_app_back_end_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/back-end/account-setting/account-setting.component */ "d/2f");
/* harmony import */ var src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/authentcation/admin.auth.can.active.service */ "O43r");
/* harmony import */ var src_app_front_end_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/front-end/about-us/about.us.component */ "dEeH");
/* harmony import */ var src_app_back_end_sigh_in_sigh_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/sigh-in/sigh.in.component */ "XzP5");
/* harmony import */ var src_app_front_end_our_services_front_our_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/front-end/our-services/front.our.services.component */ "PsJV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const FrontEndROUTS = [
    {
        path: '', component: _app_front_end_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        data: {
            isBackEnd: false
        }
    },
    {
        path: 'services', component: src_app_front_end_our_services_front_our_services_component__WEBPACK_IMPORTED_MODULE_9__["FrontOurServicesComponent"],
        data: {
            isBackEnd: false
        }
    },
    {
        path: 'about-us', component: src_app_front_end_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
        data: {
            isBackEnd: false,
            isAboutUs: true
        }
    },
    {
        path: 'contact-us', component: _app_front_end_front_contact_us_front_contact_component__WEBPACK_IMPORTED_MODULE_0__["FrontContactUsComponent"],
        data: {
            isBackEnd: false,
            isContactUs: true
        }
    },
];
const BackEndROUTS = [
    {
        path: 'sign-in', component: src_app_back_end_sigh_in_sigh_in_component__WEBPACK_IMPORTED_MODULE_8__["SighInComponent"],
        data: {
            isBackEnd: true
        }
    },
    {
        path: 'accountsetting', component: src_app_back_end_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_5__["AccountSettingComponent"], canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthCanActive"]],
        data: {
            breadcrumbs: ["accountSetting"],
            isBackEnd: true
        }
    },
    {
        path: 'setting',
        loadChildren: () => Promise.all(/*! import() | back-end-settings-module */[__webpack_require__.e("default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d"), __webpack_require__.e("default~back-end-contact-us-messages-module~back-end-containers-module~back-end-deletes-module~back-~be657f6c"), __webpack_require__.e("back-end-settings-module")]).then(__webpack_require__.bind(null, /*! ./back-end/settings.module */ "Z8el")).then(mod => mod.SettingsModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthCanActive"], src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthCanActive"]],
        data: {
            isBackEnd: true
        }
    },
    {
        path: 'users',
        loadChildren: () => Promise.all(/*! import() | back-end-users-module */[__webpack_require__.e("default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d"), __webpack_require__.e("default~back-end-contact-us-messages-module~back-end-containers-module~back-end-deletes-module~back-~be657f6c"), __webpack_require__.e("common"), __webpack_require__.e("back-end-users-module")]).then(__webpack_require__.bind(null, /*! ./back-end/users.module */ "an9q")).then(mod => mod.UsersModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthCanActive"], src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthCanActive"]],
        data: {
            isBackEnd: true
        }
    },
    {
        path: 'freights',
        loadChildren: () => Promise.all(/*! import() | back-end-freights-module */[__webpack_require__.e("default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d"), __webpack_require__.e("default~back-end-contact-us-messages-module~back-end-containers-module~back-end-deletes-module~back-~be657f6c"), __webpack_require__.e("common"), __webpack_require__.e("back-end-freights-module")]).then(__webpack_require__.bind(null, /*! ./back-end/freights.module */ "wV+/")).then(mod => mod.FreightsModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthCanActive"], src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthCanActive"]],
        data: {
            isBackEnd: true
        }
    },
    {
        path: 'financialTransfers',
        loadChildren: () => Promise.all(/*! import() | back-end-financial-transfares-module */[__webpack_require__.e("default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d"), __webpack_require__.e("default~back-end-contact-us-messages-module~back-end-containers-module~back-end-deletes-module~back-~be657f6c"), __webpack_require__.e("common"), __webpack_require__.e("back-end-financial-transfares-module")]).then(__webpack_require__.bind(null, /*! ./back-end/financial.transfares.module */ "xRjL")).then(mod => mod.FinancialTransfersModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthCanActive"], src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthCanActive"]],
        data: {
            isBackEnd: true
        }
    },
    {
        path: 'reports',
        loadChildren: () => Promise.all(/*! import() | back-end-reports-module */[__webpack_require__.e("default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d"), __webpack_require__.e("default~back-end-contact-us-messages-module~back-end-containers-module~back-end-deletes-module~back-~be657f6c"), __webpack_require__.e("common"), __webpack_require__.e("back-end-reports-module")]).then(__webpack_require__.bind(null, /*! ./back-end/reports.module */ "HKBr")).then(mod => mod.ReportsModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthCanActive"]],
        data: {
            isBackEnd: true
        }
    },
    {
        path: 'sectorSales',
        loadChildren: () => Promise.all(/*! import() | back-end-sector-sales-module */[__webpack_require__.e("default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d"), __webpack_require__.e("default~back-end-contact-us-messages-module~back-end-containers-module~back-end-deletes-module~back-~be657f6c"), __webpack_require__.e("common"), __webpack_require__.e("back-end-sector-sales-module")]).then(__webpack_require__.bind(null, /*! ./back-end/sector.sales.module */ "PYZH")).then(mod => mod.SectorSalesModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthCanActive"]],
        data: {
            isBackEnd: true
        }
    },
    {
        path: 'deletes',
        loadChildren: () => Promise.all(/*! import() | back-end-deletes-module */[__webpack_require__.e("default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d"), __webpack_require__.e("default~back-end-contact-us-messages-module~back-end-containers-module~back-end-deletes-module~back-~be657f6c"), __webpack_require__.e("common"), __webpack_require__.e("back-end-deletes-module")]).then(__webpack_require__.bind(null, /*! ./back-end/deletes.module */ "Tf0G")).then(mod => mod.DeletesModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthCanActive"]],
        data: {
            isBackEnd: true
        }
    },
    {
        path: 'containers',
        loadChildren: () => Promise.all(/*! import() | back-end-containers-module */[__webpack_require__.e("default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d"), __webpack_require__.e("default~back-end-contact-us-messages-module~back-end-containers-module~back-end-deletes-module~back-~be657f6c"), __webpack_require__.e("common"), __webpack_require__.e("back-end-containers-module")]).then(__webpack_require__.bind(null, /*! ./back-end/containers.module */ "IoRa")).then(mod => mod.ContainersModule),
        canActivate: [src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthCanActive"]],
        data: {
            isBackEnd: true
        }
    },
    {
        path: 'branches',
        loadChildren: () => Promise.all(/*! import() | back-end-branches-module */[__webpack_require__.e("default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d"), __webpack_require__.e("common"), __webpack_require__.e("back-end-branches-module")]).then(__webpack_require__.bind(null, /*! ./back-end/branches.module */ "dBCL")).then(mod => mod.BranchesModule),
        canActivate: [src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthCanActive"]],
        data: {
            isBackEnd: true
        }
    },
    {
        path: 'contactUsMessages',
        loadChildren: () => Promise.all(/*! import() | back-end-contact-us-messages-module */[__webpack_require__.e("default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d"), __webpack_require__.e("default~back-end-contact-us-messages-module~back-end-containers-module~back-end-deletes-module~back-~be657f6c"), __webpack_require__.e("back-end-contact-us-messages-module")]).then(__webpack_require__.bind(null, /*! ./back-end/contact.us.messages.module */ "ay6O")).then(mod => mod.ContactUsMessagesModule),
        canActivate: [src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthCanActive"]],
        data: {
            isBackEnd: true
        }
    },
];
const ROUTS = [
    ...FrontEndROUTS,
    ...BackEndROUTS,
    {
        path: "**",
        component: src_app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
        data: {
            is404: true
        }
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTS, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "J4aQ":
/*!************************************************************!*\
  !*** ./src/services/authentcation/current.user.service.ts ***!
  \************************************************************/
/*! exports provided: CurrentUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return CurrentUserService; });
/* harmony import */ var _behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../behavior.subject.service */ "okBh");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local.storage.service */ "LKR5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_models_resources_resources_ar_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/resources/resources.ar.model */ "wG7n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class CurrentUserService {
    /**
     *
     */
    constructor(router) {
        this.router = router;
        /**
           * Resources
           */
        this.r = new src_models_resources_resources_ar_model__WEBPACK_IMPORTED_MODULE_3__["ResourcesArModel"]();
        /**
    * When User Changed Language From Fotter Of Changed By Socket.io
    */
        this.onChangeLanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // listener User If Changed
        _behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].userInformation.subscribe(res => {
            this.changedUserInformation(res);
        });
    }
    /**
     * CUrrent User Information
     */
    get u() {
        return _behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].userInformation.value;
    }
    ;
    changedUserInformation(userInfo) {
        this.isUserlogged = userInfo._id ? true : false;
    }
    /**
     * Log Out User
     */
    logOut(donotTellServer = null) {
        _local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].setUsereInformation({});
        _local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].removeAccessToken();
        this.router.navigate(['/']);
    }
} // End CLass
CurrentUserService.ɵfac = function CurrentUserService_Factory(t) { return new (t || CurrentUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CurrentUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CurrentUserService, factory: CurrentUserService.ɵfac });


/***/ }),

/***/ "JtwZ":
/*!************************************************************!*\
  !*** ./src/app/back-end/shared/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer-wrapper"], [1, "footer-section", "f-section-1"], [1, ""], ["target", "_blank", "routerLink", "/"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u062D\u0642\u0648\u0642 \u0627\u0644\u0646\u0634\u0631 \u0645\u062D\u0641\u0648\u0638\u0629 \u00A9 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "LKR5":
/*!***********************************************!*\
  !*** ./src/services/local.storage.service.ts ***!
  \***********************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/local.storage.keys.const */ "jBFT");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "BOF4");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _behavior_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behavior.subject.service */ "okBh");



class LocalStorageService {
    /**
     * Get Access Token
     */
    static get accessToken() { return localStorage.getItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].userAccessToken); }
    /**
     * Save Access Token In Loacl Storage
     */
    static set accessToken(accessToken) {
        // Save Access Token
        localStorage.setItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].userAccessToken, accessToken);
        // Decode User Information For Upate Header And Resources And Another
        this.setUsereInformation(jwt_decode__WEBPACK_IMPORTED_MODULE_1__(accessToken));
    }
    /**
     * Remove Access Token
     */
    static removeAccessToken() {
        localStorage.removeItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].userAccessToken);
    }
    /**
     * Save User Login Informarion In Local Storage
     * @param userInfo
     */
    static setUsereInformation(userInfo) {
        let userData = {
            _id: userInfo._id,
            userName: userInfo.userName,
            fullName: userInfo.fullName,
            picturePath: userInfo.picturePath,
            languageCode: userInfo.languageCode,
            roleId: userInfo.roleId
        };
        localStorage.setItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].currentUserInformation, JSON.stringify(userData));
        // Update User Info
        _behavior_subject_service__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubjectService"].userInformation.next(userData);
    }
    /**
     * Get Current User Information Saved
     */
    static getUserInformation() {
        const userInfo = localStorage.getItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].currentUserInformation);
        if (userInfo) {
            return JSON.parse(userInfo);
        }
        return null;
    }
    /**
     * Set User Lanuge And The Default Lanugage Is English
     */
    static setLanugage(newLanguageCode) {
        let userInfo = this.getUserInformation();
        if (userInfo) {
            // Update Current User Information
            userInfo.languageCode = newLanguageCode;
        }
        else {
            // Set New User Information
            userInfo = {
                languageCode: newLanguageCode
            };
        }
        this.setUsereInformation(userInfo);
    }
    /**
     * SET: Number Of Result In Page
     */
    static set fopNumberOfDisplayResultInPage(val) {
        localStorage.setItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].fopNumberOfDisplayResultInPage, val.toString());
    }
    /**
     * GET: Number Of Result In Page
     */
    static get fopNumberOfDisplayResultInPage() {
        let data = JSON.parse(localStorage.getItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].fopNumberOfDisplayResultInPage));
        if (data)
            return Number(data);
        return data;
    }
} // end class


/***/ }),

/***/ "NqkH":
/*!***************************************!*\
  !*** ./src/services/alert.service.ts ***!
  \***************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var src_models_resources_resources_ar_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/resources/resources.ar.model */ "wG7n");
/* harmony import */ var src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/enums/response.type.enum */ "FIK1");


class AlertService {
    /**
     * Show Alert By Response Type
     * @param res
     */
    static showResponseMessage(res) {
        switch (res.responseType) {
            case src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_1__["ResponseTypeEnum"].error:
                {
                    console.info(res);
                    return AlertService.errorMessage(res.message);
                }
            default:
                {
                    console.log(res);
                    return AlertService.infoMesage(res.message);
                }
        }
    }
    /**
     * Show Error Alert
     * @param message
     */
    static errorMessage(message) {
        this.defultOptions.text = message;
        this.defultOptions.backgroundColor = 'rgb(231, 81, 90)';
        window['Snackbar'].show(this.defultOptions);
    }
    /**
     * Show Info Alert
     * @param message
     */
    static infoMesage(message) {
        this.defultOptions.backgroundColor = null;
        this.defultOptions.text = message;
        window['Snackbar'].show(this.defultOptions);
    }
    /**
     * Show Message For : Observable Error When Request To Server
     * @param error
     */
    static canRequestError(error, r = new src_models_resources_resources_ar_model__WEBPACK_IMPORTED_MODULE_0__["ResourcesArModel"]()) {
        console.log('Error', error);
        AlertService.errorMessage((error === null || error === void 0 ? void 0 : error.message) || r.iCanNotAccessToServer);
    }
} // End Class
AlertService.defultOptions = {
    actionText: '✖'
    //   pos: I Will change This Value Of Key From CurrentUserService
};


/***/ }),

/***/ "O43r":
/*!*********************************************************************!*\
  !*** ./src/services/authentcation/admin.auth.can.active.service.ts ***!
  \*********************************************************************/
/*! exports provided: AdminAuthCanActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthCanActive", function() { return AdminAuthCanActive; });
/* harmony import */ var src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/roles.enum */ "DBRY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




/**
 * هنا ما يهمنا فقط ان يكون المستخدم ادمن
 */
class AdminAuthCanActive {
    constructor(u, router) {
        this.u = u;
        this.router = router;
    }
    canActivate() {
        if (this.u.u.roleId != src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Admin) {
            this.router.navigate(['/404']);
        }
        return this.u.isUserlogged;
    }
} //End Class
AdminAuthCanActive.ɵfac = function AdminAuthCanActive_Factory(t) { return new (t || AdminAuthCanActive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminAuthCanActive.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminAuthCanActive, factory: AdminAuthCanActive.ɵfac });


/***/ }),

/***/ "Orpn":
/*!*******************************************************************************!*\
  !*** ./src/services/authentcation/admin.or.clinet.auth.can.active.service.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminOrClinetAuthCanActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrClinetAuthCanActive", function() { return AdminOrClinetAuthCanActive; });
/* harmony import */ var src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/roles.enum */ "DBRY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




/**
 * هنا ما يهمنا فقط ان يكون المستخدم ادمن
 */
class AdminOrClinetAuthCanActive {
    constructor(u, router) {
        this.u = u;
        this.router = router;
    }
    canActivate() {
        if (this.u.u.roleId != src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Admin && this.u.u.roleId != src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Clinet) {
            this.router.navigate(['/404']);
        }
        return this.u.isUserlogged;
    }
} //End Class
AdminOrClinetAuthCanActive.ɵfac = function AdminOrClinetAuthCanActive_Factory(t) { return new (t || AdminOrClinetAuthCanActive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminOrClinetAuthCanActive.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminOrClinetAuthCanActive, factory: AdminOrClinetAuthCanActive.ɵfac });


/***/ }),

/***/ "PlsR":
/*!***********************************************!*\
  !*** ./src/directives/write.svg.directive.ts ***!
  \***********************************************/
/*! exports provided: WriteSVGDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteSVGDirective", function() { return WriteSVGDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

/**
 * Render SVG Conten I Used In Sidbar
 */
class WriteSVGDirective {
    constructor(elm) {
        this.elm = elm;
    }
    ngOnInit() {
        this.elm.nativeElement.innerHTML = this.writeSVG;
    }
} //End Class
WriteSVGDirective.ɵfac = function WriteSVGDirective_Factory(t) { return new (t || WriteSVGDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
WriteSVGDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WriteSVGDirective, selectors: [["", "writeSVG", ""]], inputs: { writeSVG: "writeSVG" } });


/***/ }),

/***/ "PsJV":
/*!************************************************************************!*\
  !*** ./src/app/front-end/our-services/front.our.services.component.ts ***!
  \************************************************************************/
/*! exports provided: FrontOurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontOurServicesComponent", function() { return FrontOurServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class FrontOurServicesComponent {
    constructor(u, seo, router) {
        this.u = u;
        this.seo = seo;
        this.router = router;
    }
    ngOnInit() {
        this.seo.updateSEO("ourServices");
        if (this.router.snapshot.fragment) {
            setTimeout(() => {
                document.getElementById(this.router.snapshot.fragment).scrollIntoView();
            }, 50);
        }
    }
} // End Class
FrontOurServicesComponent.ɵfac = function FrontOurServicesComponent_Factory(t) { return new (t || FrontOurServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
FrontOurServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrontOurServicesComponent, selectors: [["app-front-our-services"]], decls: 153, vars: 1, consts: [[1, "sub-banner"], [1, "container", "breadcrumb-area"], [1, "breadcrumb-areas"], [1, "breadcrumbs"], ["routerLink", "/"], [1, "active"], ["id", "service1", 1, "contact-page-content"], [1, "thm-container"], [1, "sec-title"], [1, "row"], [1, "col-md-12", "text-center"], ["src", "assets/front-end/images/services/Iaa.jpeg", "alt", "copart and IAAI", "width", "300", 1, "m-5"], ["src", "assets/front-end/images/services/offic.jpeg", "alt", "copart and IAAI", "width", "300", 1, "m-5"], [1, "col-md-12", "col-sm-6", "col-xs-12", "pull-left"], ["href", "http://www.copart.com", "target", "_blank", 1, "link"], ["href", "http://www.IAAI.com", "target", "_blank", 1, "link"], ["id", "service2", 1, "contact-page-content"], ["src", "assets/front-end/images/services/We take care_1920x730.jpg", "alt", "copart and IAAI", "width", "500", 1, "m-5"], ["id", "service3", 1, "contact-page-content"], ["src", "assets/front-end/images/services/mirrit.jpg", "alt", "copart and IAAI", "width", "500", 1, "m-5"], ["id", "service8", 1, "contact-page-content"], ["src", "assets/front-end/images/services/offcis.jpg", "alt", "copart and IAAI", "width", "500", 1, "m-5"], ["id", "service4", 1, "contact-page-content"], ["src", "assets/front-end/images/services/CARFAX.jpg", "alt", "copart and IAAI", "width", "500", 1, "m-5"], ["id", "service5", 1, "contact-page-content"], ["src", "assets/front-end/images/services/toyota.jpg", "alt", "copart and IAAI", "width", "500", 1, "m-5"], ["routerLink", "/contact-us", 1, "link"], ["src", "assets/front-end/images/services/marcidec.jpg", "alt", "copart and IAAI", "width", "500", 1, "m-5"], ["id", "service7", 1, "contact-page-content"], ["src", "assets/front-end/images/services/container.jpeg", "alt", "copart and IAAI", "width", "500", 1, "m-5"]], template: function FrontOurServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u062E\u062F\u0645\u062A\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u062E\u062F\u0645\u0629 \u0627\u0644\u0645\u0632\u0627\u064A\u062F\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0628\u0631 \u0627\u0644\u0645\u0632\u0627\u062F\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 Copart & IAA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0623\u0646\u062A \u0628\u0627\u062F\u0631 \u0628\u0625\u062E\u062A\u064A\u0627\u0631 \u0633\u064A\u0627\u0631\u062A\u0643\uD83D\uDC48\u0648\u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u062A\u062A\u0643\u0641\u0644 \u0628\u0648\u0635\u0648\u0644\u0647\u0627 \u0627\u0644\u064A\u0643\uD83E\uDD1D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0627\u0644\u0622\u0646 \u064A\u0645\u0643\u0646\u0643\u0645 \u0634\u0631\u0627\u0621 \u0648\u0634\u062D\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u0639\u0628\u0631 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u201C\u0648\u0643\u064A\u0644 \u0645\u0632\u0627\u062F IAA \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A \u0641\u064A \u0644\u064A\u0628\u064A\u0627\u201D. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u064A\u0645\u0643\u0646\u0643\u0645 \u0627\u062E\u062A\u064A\u0627\u0631\u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u062A\u064A \u062A\u0631\u063A\u0628\u0648\u0646\u0647\u0627 \u0645\u0646 \u0627\u062D\u062F \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0645\u0632\u0627\u062F \u0648\u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0633\u062A\u062A\u0643\u0641\u0644 \u0628\u0627\u062A\u0645\u0627\u0645 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0648\u0627\u0644\u0634\u062D\u0646 \u0641\u064A \u0648\u0642\u062A \u0642\u064A\u0627\u0633\u064A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " www.copart.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " www.IAAI.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u064A\u0645\u0643\u0646\u0643\u0645 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0646 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u064A\u0648\u0645\u064A\u0629 \u0627\u0644\u062A\u064A \u0633\u064A\u062A\u0645 \u0639\u0631\u0636\u0647\u0627 \u0645\u0646 \u064A\u0648\u0645 \u0627\u0644\u0627\u062B\u0646\u064A\u0646 \u0627\u0644\u0649 \u064A\u0648\u0645 \u0627\u0644\u062C\u0645\u0639\u0647 \u0645\u0646 \u0627\u0644\u0645\u0632\u0627\u062F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u064A\u0645\u0643\u0646 \u0627\u062A\u0645\u0627\u0645 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0628\u062D\u0636\u0648\u0631 \u0634\u062E\u0635\u064A \u0644\u0623\u062D\u062F \u0641\u0631\u0648\u0639 \u0627\u0644\u0634\u0631\u0643\u0629 \u0641\u064A \u0637\u0631\u0627\u0628\u0644\u0633 \u0627\u0648 \u0645\u0635\u0631\u0627\u062A\u0629 \u0648\u0633\u064A\u0642\u0648\u0645 \u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644 \u0628\u062A\u0633\u0647\u064A\u0644 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0637\u0644\u0628\u0627\u062A\u0643\u0645 \u0648\u062A\u0633\u0647\u064A\u0644 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0644\u0623\u0646 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0647\u064A \u0627\u0644\u0648\u0643\u064A\u0644 \u0627\u0644\u062D\u0635\u0631\u064A \u0644\u0645\u0632\u0627\u062F IAA \u0641\u064A \u0644\u064A\u0628\u064A\u0627 \u0633\u064A\u062A\u0645 \u062A\u0648\u0641\u064A\u0631 \u062E\u062F\u0645\u0627\u062A \u0648\u0645\u064A\u0632\u0627\u062A \u0644\u0632\u0628\u0627\u0626\u0646 \u0627\u0644\u0634\u0631\u0643\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u064A\u0645\u0643\u0646 \u0627\u0644\u0643\u0634\u0641 \u0639\u0644\u0649 \u0633\u064A\u0627\u0631\u0627\u062A\u0643\u0645 \u0642\u0628\u0644 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0639\u0628\u0631 \u0646\u0638\u0627\u0645 CARFAX \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A. \u0644\u0641\u062D\u0635 \u0648\u0636\u0639 \u0648\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0642\u0628\u0644 \u0627\u0644\u0634\u0631\u0627\u0621. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u0641\u0648\u0631 \u0627\u0644\u0641\u0648\u0632 \u0628\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0645\u0646 \u0627\u0644\u0645\u0632\u0627\u062F \u0633\u064A\u0642\u0648\u0645 \u0641\u0631\u064A\u0642 \u0627\u0644\u062D\u0648\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0641\u0648\u0631\u064A\u0629 \u0628\u062A\u0633\u062F\u064A\u062F \u0642\u064A\u0645\u0629 \u0634\u0631\u0627\u0621 \u0633\u064A\u0627\u0631\u062A\u0643\u0645. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0643\u0645\u0627 \u0633\u064A\u0642\u0648\u0645 \u0641\u0631\u064A\u0642 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0634\u062D\u0646 \u0628\u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0641\u064A \u0627\u0644\u0628\u062F\u0621 \u0641\u064A \u0639\u0645\u0644\u064A\u0629 \u0634\u062D\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u062E\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629 \u0645\u0646 \u0627\u062A\u0645\u0627\u0645 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u0633\u064A\u062A\u0645 \u0645\u062A\u0627\u0628\u0639\u0629 \u0634\u062D\u0646 \u0633\u064A\u0627\u0631\u062A\u0643\u0645 \u0628\u0627\u0644\u0635\u0648\u0631 \u0623\u0648\u0644 \u0628\u0623\u0648\u0644 \u0645\u0646 \u0644\u062D\u0638\u0629 \u062A\u062D\u0645\u064A\u0644\u0647\u0627 \u0645\u0646 \u0627\u0644\u0645\u0632\u0627\u062F \u0627\u0644\u0649 \u062D\u064A\u0646 \u0627\u062A\u0645\u0627\u0645 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0641\u064A \u062D\u0627\u0648\u064A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u0633\u062A\u062A\u0645 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0641\u064A \u062D\u0627\u0648\u064A\u0627\u062A \u0641\u064A \u0627\u062D\u062F \u0645\u0631\u0627\u0643\u0632 \u0634\u062D\u0646\u0646\u0627 \u0627\u0644\u062E\u0645\u0633\u0647 \u0627\u0644\u0645\u0648\u0632\u0639\u0629 \u0639\u0628\u0631 \u0627\u0644\u0645\u0648\u0627\u0646\u0626 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629: New York, NY\u060C Savannah, GA\u060C Miami, FL\u060C Houston, TX\u060C Los Angeles, CA. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u0633\u064A\u062A\u0645 \u0627\u0639\u0637\u0627\u0621 \u0627\u0644\u0632\u0628\u0648\u0646 \u0631\u0642\u0645 \u062D\u0627\u0648\u064A\u0629 \u0641\u064A \u0648\u0642\u062A \u0642\u064A\u0627\u0633\u064A \u0644\u062A\u062A\u0628\u0639 \u0627\u0644\u0634\u062D\u0646\u0629 \u0627\u0644\u0649 \u062D\u064A\u0646 \u0648\u0635\u0648\u0644\u0647\u0627 \u0627\u0644\u0649 \u0645\u064A\u0646\u0627\u0621 \u0627\u0644\u062E\u0645\u0633 \u0627\u0648 \u0645\u0635\u0631\u0627\u062A\u0647. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u0633\u064A\u0642\u0648\u0645 \u0641\u0631\u064A\u0642 \u0645\u062E\u062A\u0635 \u0645\u0646 \u0627\u0644\u0645\u062E\u0644\u0635\u064A\u0646 \u0627\u0644\u062C\u0645\u0631\u0643\u064A\u064A\u0646 \u0648\u0641\u0631\u064A\u0642 \u062A\u0641\u0631\u064A\u063A \u0627\u0644\u062D\u0627\u0648\u064A\u0627\u062A \u0627\u0644\u062A\u0627\u0628\u0639\u064A\u0646 \u0644\u0644\u0634\u0631\u0643\u0629 \u0628\u062A\u0633\u0644\u064A\u0645 \u0633\u064A\u0627\u0631\u0627\u062A\u0643\u0645 \u0634\u062E\u0635\u064A\u0627 \u0628\u0639\u062F \u0636\u0645\u0627\u0646 \u0633\u0644\u0627\u0645\u062A\u0647\u0627 \u0641\u064A \u0645\u064A\u0646\u0627\u0621 \u0627\u0644\u0648\u0635\u0648\u0644 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u062E\u062F\u0645\u0629 \u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0623\u0648 \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u0628\u0631\u064A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0645\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u0644\u062F\u0649 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u062A\u0639\u0627\u0642\u062F\u0627\u062A \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0639 \u0634\u0627\u062D\u0646\u0627\u062A \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0645\u0639 \u0623\u0635\u062D\u0627\u0628 \u0627\u0644\u062E\u0628\u0631\u0629 \u0648\u0627\u0644\u062C\u0648\u062F\u0647 \u0648\u0627\u0644\u0633\u0645\u0639\u0647 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u062F\u0646 \u0648\u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " \u064A\u0639\u0645\u0644 \u0641\u0631\u064A\u0642 \u0627\u0644\u0634\u062D\u0646 \u0639\u0644\u0649 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0641\u064A \u0634\u062D\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u062F\u0627\u062E\u0644\u064A\u0627 \u0641\u064A \u0648\u0642\u062A \u0642\u064A\u0627\u0633\u064A \u062E\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629 \u0645\u0646 \u0627\u062A\u0645\u0627\u0645 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u0627\u0644\u062F\u0641\u0639. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " \u064A\u0645\u0643\u0646 \u062A\u0648\u0641\u064A\u0631 \u0635\u0648\u0631 \u0648\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0635\u0627\u0635\u064A \u0641\u0648\u0631 \u0627\u0644\u0642\u064A\u0627\u0645 \u0628\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " \u062C\u0648\u062F\u0629 \u0648\u0633\u0631\u0639\u0629 \u0641\u064A \u0627\u0644\u0646\u0642\u0644 \u0645\u0646 \u0627\u0644\u0645\u0632\u0627\u062F \u0627\u0644\u0649 \u0645\u064A\u0646\u0627\u0621 \u0627\u0644\u0634\u062D\u0646 \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u062E\u062F\u0645\u0629 \u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u0628\u062D\u0631\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " \u0644\u062F\u0649 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u062E\u0645\u0633 \u0645\u0631\u0627\u0643\u0632 \u0634\u062D\u0646 \u0645\u0648\u0632\u0639\u0647 \u0639\u0644\u0649 \u062E\u0645\u0633 \u0645\u0648\u0627\u0646\u0626 \u0634\u062D\u0646 \u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u062D\u064A\u062B \u0627\u0646\u0647 \u0644\u062F\u064A\u0646\u0627 \u0641\u0631\u064A\u0642 \u0645\u062E\u062A\u0635 \u0628\u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u0628\u062D\u0631\u064A \u0648\u064A\u0642\u0648\u0645 \u0641\u0631\u064A\u0642 \u0645\u0646 \u0627\u0644\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0647\u0631\u0647 \u0628\u062A\u062D\u0645\u064A\u0644 \u0648\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u062F\u0627\u062E\u0644 \u0627\u0644\u062D\u0627\u0648\u064A\u0627\u062A \u0641\u064A \u0648\u0642\u062A \u0642\u064A\u0627\u0633\u064A \u0648\u0646\u0642\u0648\u0645 \u0628\u0634\u062D\u0646\u0647\u0627 \u0639\u0644\u0649 \u0623\u0641\u0636\u0644 \u0627\u0644\u062E\u0637\u0648\u0637 \u0627\u0644\u0628\u062D\u0631\u064A\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u062E\u062F\u0645\u0629 \u0641\u062A\u062D \u062E\u0637\u0648\u0637 \u0634\u0631\u0627\u0621 \u0648\u0634\u062D\u0646 \u0644\u0644\u062A\u062C\u0627\u0631 \u0648\u0645\u0643\u0627\u062A\u0628 \u0627\u0644\u0634\u0631\u0627\u0621");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " \u0644\u0623\u0646 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u062A\u0639\u0645\u0644 \u0639\u0644\u0649 \u062A\u0648\u0641\u064A\u0631 \u062E\u062F\u0645\u0627\u062A\u0647\u0627 \u0644\u0644\u0623\u0641\u0631\u0627\u062F \u0648\u0627\u0644\u062A\u062C\u0627\u0631 \u0648\u0627\u0644\u0645\u0643\u0627\u062A\u0628\u060C \u0646\u0639\u0645\u0644 \u062C\u0627\u0647\u062F\u064A\u0646 \u0639\u0644\u0649 \u062A\u0648\u0641\u064A\u0631 \u0627\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u062C\u0645\u064A\u0639 \u0628\u0645\u0627 \u0641\u064A\u0647\u0627 \u062A\u062C\u0627\u0631 \u0627\u0644\u062C\u0645\u0644\u0647. \u0628\u0625\u0639\u062A\u0628\u0627\u0631\u0646\u0627 \u0648\u0643\u064A\u0644\u0627 \u0631\u0633\u0645\u064A\u0627 \u0644\u0645\u0632\u0627\u062F IAA \u0641\u064A \u0644\u064A\u0628\u064A\u0627 \u064A\u0645\u0643\u0646\u0646\u0627 \u0641\u062A\u062D \u062E\u0637\u0648\u0637 \u0634\u0631\u0627\u0621 \u0645\u0646 \u0627\u0644\u0645\u0632\u0627\u062F\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u0644\u0623\u064A \u062A\u0627\u062C\u0631 \u062C\u0645\u0644\u0629 \u0627\u0648 \u0645\u0643\u062A\u0628 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0633\u064A\u0627\u0631\u0627\u062A \u0648\u0628\u062F\u0648\u0631\u0643\u0645 \u064A\u0645\u0643\u0646\u0643\u0645 \u0627\u0644\u0625\u0633\u062A\u0641\u0627\u062F\u0629 \u0645\u0646 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0644\u0648\u062C\u0633\u062A\u064A\u0629 \u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0634\u0645\u0644 \u0627\u0644\u062D\u0648\u0627\u0644\u0629 \u0648\u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0648\u0627\u0644\u0628\u062D\u0631\u064A \u0648\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u062A\u062E\u0644\u064A\u0635 \u0627\u0644\u062C\u0645\u0631\u0643\u064A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u062E\u062F\u0645\u0629 \u0637\u0644\u0628 \u062A\u0642\u0631\u064A\u0631 \u0643\u0634\u0641 CARFAX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " \u0645\u0646 \u062E\u0644\u0627\u0644 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u064A\u0645\u0643\u0646\u0643\u0645 \u0637\u0644\u0628 \u062E\u062F\u0645\u0629 \u062A\u0642\u0631\u064A\u0631 \u0643\u0634\u0641 \u0639\u0628\u0631 \u0646\u0638\u0627\u0645 CARFAX \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A \u0627\u0644\u0645\u0634\u0647\u0648\u0631 \u0628\u0627\u0644\u062F\u0642\u0629 \u0648\u0627\u0644\u0645\u0635\u062F\u0627\u0642\u064A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u064A\u0639\u062A\u0628\u0631 \u0646\u0638\u0627\u0645 \u0643\u0627\u0631\u0641\u0627\u0643\u0633 \"CARFAX\u201D \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A \u0639\u0628\u0627\u0631\u0629 \u0639\u0646 \u0645\u062E\u0632\u0646 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0641\u064A \u0623\u0645\u0631\u064A\u0643\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064A\u0629 \"\u0623\u0645\u0631\u064A\u0643\u0627 \u0648\u0643\u0646\u062F\u0627\"\u060C \u062D\u064A\u062B \u0623\u0646 \u0627\u0644\u0646\u0638\u0627\u0645 \u0645\u0631\u062A\u0628\u0637 \u0628\u062C\u0645\u064A\u0639 \u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u0623\u0645\u064A\u0646\u060C \u0648\u0627\u0644\u0645\u0632\u0627\u062F\u0627\u062A\u060C \u0648\u0648\u0643\u0627\u0644\u0627\u062A \u0628\u064A\u0639 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A\u060C \u0648\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u0635\u064A\u0627\u0646\u0629\u060C \u0648\u0648\u0643\u0627\u0644\u0627\u062A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062D\u0643\u0648\u0645\u064A\u0629\u060C \u0648\u0645\u0648\u0627\u0646\u0626 \u0627\u0644\u062A\u0635\u062F\u064A\u0631. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u0642\u0631\u064A\u0631 CARFAX \u064A\u0645\u0643\u0646\u0643\u0645 \u0645\u0639\u0631\u0641\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0645\u0647\u0645\u0647 \u0639\u0646 \u062D\u0627\u0644\u0629 \u0623\u064A \u0633\u064A\u0627\u0631\u0629 \u0642\u0628\u0644 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0641\u064A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0643\u0627\u0644\u062D\u0648\u0627\u062F\u062B\u060C \u0648\u0627\u0644\u063A\u0631\u0642\u060C \u0648\u0639\u062F\u062F \u0627\u0644\u0645\u0627\u0644\u0643\u064A\u0646 \u0644\u0644\u0633\u064A\u0627\u0631\u0629\u060C \u0648\u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0648\u0627\u062C\u062F\u062A \u0628\u0647\u0627 \u0644\u0644\u0633\u064A\u0627\u0631\u0629 \u0645\u0646\u0630 \u0627\u0644\u062A\u0635\u0646\u064A\u0639\u060C \u0648\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u062A\u064A \u062F\u062E\u0644\u062A\u0647\u0627\u060C \u0648\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0645\u0642\u0637\u0648\u0639\u0629 \u0627\u0644\u0641\u0639\u0644\u064A\u0629\u060C \u0648\u0623\u064A \u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0643\u0628\u064A\u0631\u0629 \u0639\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0629\u060C \u0648\u0645\u0635\u062F\u0631 \u0627\u0644\u0628\u064A\u0639. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " \u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062F\u0642\u064A\u0642\u0629 \u0628\u062F\u0648\u0631\u0647\u0627 \u062A\u0639\u0637\u064A \u0641\u0643\u0631\u0629 \u0639\u0646 \u062D\u0627\u0644\u0629 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0642\u0628\u0644 \u0627\u0644\u0628\u062F\u0621 \u0641\u064A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " \u0628\u0627\u062F\u0631 \u0628\u0625\u0631\u0633\u0627\u0644 \u0631\u0642\u0645 \u0647\u064A\u0643\u0644 \u0633\u064A\u0627\u0631\u062A\u0643\uD83D\uDE98 (VIN) \u0648\u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0633\u062A\u0648\u0627\u0641\u064A\u0643 \u0628\u062A\u0642\u0631\u064A\u0631 CARFAX \u0645\u0639 \u0646\u0633\u062E\u0629 \u0645\u0646\u0647 \u062E\u0644\u0627\u0644 \u062F\u0642\u0627\u0626\u0642\uD83E\uDD1D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u062E\u062F\u0645\u0629 \u062A\u0648\u0641\u064A\u0631 \u062A\u0648\u064A\u0648\u062A\u0627 \u0627\u0644\u0631\u0628\u0627\u0639\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " \u0646\u062A\u0645\u064A\u0632 \u0646\u062D\u0646 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0628\u062A\u0648\u0641\u064A\u0631 \u0639\u0631\u0648\u0636 \u062E\u0627\u0635\u0629 \u0644\u0633\u064A\u0627\u0631\u0627\u062A \u062A\u0648\u064A\u0648\u062A\u0627 \u0627\u0644\u0631\u0628\u0627\u0639\u064A \u0645\u0646 \u0645\u0635\u0627\u062F\u0631\u0646\u0627. \u062A\u0634\u0645\u0644 \u0633\u064A\u0627\u0631\u0627\u062A \u062A\u0648\u064A\u0648\u062A\u0627 \u0627\u0644\u0631\u0628\u0627\u0639\u064A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " \u062A\u0646\u062F\u0631\u0627 - \u062A\u0627\u0643\u0648\u0645\u0627 - \u0641\u0648\u0631\u0631\u0646\u0631 - \u0627\u0641 \u062C\u064A \u0643\u0631\u0648\u0632\u0631- \u0633\u064A\u0643\u0648\u064A\u0627 - \u0644\u0627\u0646\u062F\u0643\u0631\u0648\u0632\u0631. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " \u064A\u062A\u0645 \u0639\u0631\u0636 \u062A\u0648\u064A\u0648\u062A\u0627 \u0627\u0644\u0631\u0628\u0627\u0639\u064A \u0628\u0634\u0643\u0644 \u064A\u0648\u0645\u064A \u0639\u0644\u0649 \u0635\u0641\u062D\u062A\u0646\u0627 \u0641\u064A\u0633\u0628\u0648\u0643\u060C \u0648\u064A\u0645\u0643\u0646\u0643\u0645 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0646 \u0627\u0644\u0639\u0631\u0648\u0636 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u0648\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0645\u0639\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " \u062E\u062F\u0645\u0629 \u062A\u0648\u0641\u064A\u0631 \u0639\u0631\u0648\u0636 \u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0646\u0638\u064A\u0641\u0629 \u062D\u0633\u0628 \u0627\u0644\u0637\u0644\u0628 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " \u0644\u0623\u0646 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u062A\u0645\u062A\u0644\u0643 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u062C\u0645\u064A\u0639 \u0645\u0635\u0627\u062F\u0631 \u0627\u0644\u0634\u0631\u0627\u0621 \u0645\u0646 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u060C \u0639\u0631\u0648\u0636\u0646\u0627 \u0648\u062E\u062F\u0645\u0627\u062A\u0646\u0627 \u0644\u0627\u062A\u0642\u062A\u0635\u0631 \u0641\u0642\u0637 \u0639\u0644\u0649 \u0645\u0632\u0627\u062F\u0627\u062A Copart & IAA\u060C \u0628\u0644 \u0644\u062F\u0649 \u0627\u0644\u0634\u0631\u0643\u0629 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0648\u0627\u0644\u0634\u0631\u0627\u0621 \u0645\u0646 \u0645\u0635\u0627\u062F\u0631 \u0633\u064A\u0627\u0631\u0627\u062A \u0646\u0638\u064A\u0641\u0647 \u0648\u0648\u0643\u0644\u0627\u062A \u0648\u0645\u0639\u0627\u0631\u0636 \u0648\u0634\u0631\u0643\u0627\u062A \u0645\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " \u0628\u0625\u0645\u0643\u0627\u0646\u0646\u0627 \u0627\u0646 \u0646\u0648\u0641\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0646\u0638\u064A\u0641\u0629 \u0648\u0627\u0644\u0633\u0644\u064A\u0645\u0629 \u062D\u0633\u0628 \u0637\u0644\u0628\u0643. \u0628\u0627\u062F\u0631 \u0628\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0648\u0633\u0646\u0642\u0648\u0645 \u0628\u062A\u0648\u0641\u064A\u0631 \u0637\u0644\u0628\u0643 \u0641\u064A \u0648\u0642\u062A \u0642\u064A\u0627\u0633\u064A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u062E\u062F\u0645\u0629 \u0627\u0644\u062A\u062E\u0644\u064A\u0635 \u0627\u0644\u062C\u0645\u0631\u0643\u064A \u0648\u062A\u0641\u0631\u064A\u063A \u0627\u0644\u062D\u0627\u0648\u064A\u0627\u062A \u0648\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0641\u064A \u0645\u0648\u0627\u0646\u0626 \u0627\u0644\u0648\u0635\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " \u0644\u062F\u0649 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0641\u0631\u064A\u0642 \u0645\u062E\u062A\u0635 \u0645\u0646 \u0627\u0644\u0645\u062E\u0644\u0635\u064A\u0646 \u0627\u0644\u062C\u0645\u0631\u0643\u064A\u064A\u0646 \u0644\u0625\u062A\u0645\u0627\u0645 \u062C\u0645\u064A\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u062C\u0645\u0631\u0643\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u0648\u0627\u0646\u0626 \u0627\u0644\u0644\u064A\u0628\u064A\u0629\u060C \u0648\u0641\u0631\u064A\u0642 \u0645\u062E\u062A\u0635 \u0628\u062A\u0641\u0631\u064A\u063A \u0627\u0644\u062D\u0627\u0648\u064A\u0627\u062A \u0641\u064A \u0648\u0642\u062A \u0642\u064A\u0627\u0633\u064A \u062D\u064A\u062B \u0646\u0642\u0648\u0645 \u0628\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0641\u064A \u0645\u0648\u0627\u0646\u0626 \u0627\u0644\u0648\u0635\u0648\u0644. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.u.r.ourServices);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "QVRC":
/*!***************************************************!*\
  !*** ./src/services/custom.validators.service.ts ***!
  \***************************************************/
/*! exports provided: CustomValidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorsService", function() { return CustomValidatorsService; });
/**
 * Custom Validatros Service
 */
class CustomValidatorsService {
    /**
     * Invlaid Url Validator
     */
    static invalidUrl(abs) {
        if (abs.value && !RegExp(/(http:\/\/)..*|(https:\/\/)..*/gi).test(abs.value)) {
            return { invalidUrl: true };
        }
        return null;
    }
    /**
     * Invlaid UserName Validator
     * Check From User Name Value If Not Avliable, Must Be Enter English Word And Numebr And (_) And (.) Only
     */
    static userName(abs) {
        if (abs.value && RegExp(/[^A-z0-9_.]/).test(abs.value)) {
            return { invalidUserName: true };
        }
        return null;
    }
    /**
     * Invlaid Phone Number Validator
     * Check From Phone Number Value
     */
    static phoneNumber(abs) {
        if (abs.value && !RegExp("^[0-9]{10,15}$").test(abs.value)) {
            return { invalidPhoneNumber: true };
        }
        return null;
    }
    /**Check If Invalid Number */
    static invalidNumber(abs) {
        if (abs.value && !RegExp("^([0-9][0-9]*)$|^([0-9].[0-9]*)$").test(abs.value)) {
            return { invalidNumber: true };
        }
        return null;
    }
    /**
     * Check If Invalid Date
     * @param abs
     */
    static invalidDate(abs) {
        // if (abs.value && )) {
        //     return { invalidNumber: true };
        // }
        return null;
    }
} // End Class


/***/ }),

/***/ "QZpK":
/*!*********************************************!*\
  !*** ./src/services/sweet.alert.service.ts ***!
  \*********************************************/
/*! exports provided: SweetAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertService", function() { return SweetAlertService; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentcation/current.user.service */ "J4aQ");



class SweetAlertService {
    constructor(u) {
        this.u = u;
    }
    confirm(text, confirmButtonText, cancelButtonText) {
        return new Promise((resolve, reject) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                // title: title,
                text: text,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: confirmButtonText || this.u.r.ok,
                cancelButtonText: cancelButtonText || this.u.r.cancel,
                padding: '2em'
            }).then((result) => {
                //Resolve When Ok Only
                if (result.value) {
                    resolve();
                }
            });
        });
    }
} //End Class
SweetAlertService.ɵfac = function SweetAlertService_Factory(t) { return new (t || SweetAlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
SweetAlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SweetAlertService, factory: SweetAlertService.ɵfac });


/***/ }),

/***/ "Qttl":
/*!**************************************!*\
  !*** ./src/services/menu.service.ts ***!
  \**************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/roles.enum */ "DBRY");

class MenuService {
    static getMenu() {
        return [
            //All
            {
                url: "/",
                isLonly: true,
                resourceKey_title: "homePage",
                svgIcon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-home" >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path> <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline> <line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
            },
            //Settings
            {
                id: "settings",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "settings",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cogs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-cogs fa-w-20 fa-3x"><path fill="currentColor" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z" class=""></path></svg>`,
                userRolsIds: [src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Admin],
                subMenus: [
                    {
                        url: "/setting/app",
                        nestedurls: [],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "appSetting",
                    },
                    {
                        url: "/setting/ports/freight",
                        nestedurls: [new RegExp(/setting\/ports\/freight\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "freightPorts",
                    },
                    {
                        url: "/setting/ports/arrival",
                        nestedurls: [new RegExp(/setting\/ports\/arrival\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "arrivalPorts",
                    },
                    {
                        url: "/setting/buySources",
                        nestedurls: [new RegExp(/setting\/buySources\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: false,
                        resourceKey_title: "buySources",
                    },
                    {
                        url: "/setting/navigationalWayes",
                        nestedurls: [new RegExp(/setting\/navigationalWayes\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: false,
                        resourceKey_title: "navigationalWayes",
                    },
                    {
                        url: "/setting/states",
                        nestedurls: [new RegExp(/setting\/states\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "states",
                    },
                    {
                        url: "/branches",
                        nestedurls: [],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "branches",
                    }
                ]
            },
            //Users
            {
                id: "users",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "clinets",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users-cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-users-cog fa-w-20 fa-3x"><path fill="currentColor" d="M610.5 341.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 368.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm224 32c1.9 0 3.7-.5 5.6-.6 8.3-21.7 20.5-42.1 36.3-59.2 7.4-8 17.9-12.6 28.9-12.6 6.9 0 13.7 1.8 19.6 5.3l7.9 4.6c.8-.5 1.6-.9 2.4-1.4 7-14.6 11.2-30.8 11.2-48 0-61.9-50.1-112-112-112S208 82.1 208 144c0 61.9 50.1 112 112 112zm105.2 194.5c-2.3-1.2-4.6-2.6-6.8-3.9-8.2 4.8-15.3 9.8-27.5 9.8-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-10.7-34.5 24.9-49.7 25.8-50.3-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-3.8-2.2-7-5-9.8-8.1-3.3.2-6.5.6-9.8.6-24.6 0-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h255.4c-3.7-6-6.2-12.8-6.2-20.3v-9.2zM173.1 274.6C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" class=""></path></svg>`,
                userRolsIds: [src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Admin],
                subMenus: [
                    {
                        url: "/users",
                        nestedurls: [new RegExp(/users\/edit/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "clinets",
                    }, {
                        url: "/users/create",
                        resourceKey_title: "createANewClinet",
                    }
                ]
            },
            //Freights
            {
                id: "freights",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "freights",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="network-wired" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-network-wired fa-w-20 fa-3x"><path fill="currentColor" d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z" class=""></path></svg>`,
                userRolsIds: [src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Admin],
                subMenus: [
                    {
                        url: "/freights",
                        nestedurls: [new RegExp(/freights\/edit/, 'i'), new RegExp(/reports\/freights\/fullDetails/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "freights",
                    }, {
                        url: "/freights/create",
                        resourceKey_title: "createANewFreight",
                    }
                ]
            },
            //Financial Transfers
            {
                id: "financialTransfers",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "financialTransfers",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512" class="svg-inline--fa fa-dollar-sign fa-w-9 fa-3x"><path fill="currentColor" d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z" class=""></path></svg>`,
                userRolsIds: [src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Admin],
                subMenus: [
                    {
                        url: "/financialTransfers",
                        nestedurls: [new RegExp(/financialTransfers\/(edit|payAmount|details)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "financialTransfers",
                    }, {
                        url: "/financialTransfers/create",
                        resourceKey_title: "createANewFinancialTransfer",
                    }
                ]
            },
            //Sector Sales
            {
                id: "sectorSales",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "theSectorSales",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="coins" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-coins fa-w-16 fa-3x"><path fill="currentColor" d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z" class=""></path></svg>`,
                userRolsIds: [src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Admin],
                subMenus: [
                    {
                        url: "/sectorSales",
                        nestedurls: [new RegExp(/sectorSales\/(edit|details)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "sectorSales",
                    }
                ]
            },
            //Reports
            {
                id: "reports",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "containers",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512" class="svg-inline--fa fa-chart-pie fa-w-17 fa-3x"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z" class=""></path></svg>`,
                userRolsIds: [src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Admin],
                subMenus: [
                    {
                        url: "/containers",
                        nestedurls: [new RegExp(/\/containers/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "containers",
                    },
                ]
            },
            //Reports Freights For Clinets
            {
                url: "/reports/freights",
                isLonly: true,
                resourceKey_title: "freightsReport",
                nestedurls: [new RegExp(/reports\/freights\/details/, 'i')],
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="network-wired" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-network-wired fa-w-20 fa-3x"><path fill="currentColor" d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z" class=""></path></svg>`,
                userRolsIds: [src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Clinet],
            },
            //Deletes
            {
                id: "deletes",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "deletes",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-trash-alt fa-w-14 fa-3x"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" class=""></path></svg>`,
                userRolsIds: [src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Admin],
                subMenus: [{
                        url: "/deletes/users",
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "usersDeleted",
                    },
                    {
                        url: "/deletes/freights",
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "freightsDeleted",
                    },
                    {
                        url: "/deletes/financialTransfers",
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "financialTransfersDeleted",
                    },
                    {
                        url: "/deletes/sectorSales",
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "sectorSalesDeleted",
                    },
                ]
            },
            //Contact Us
            {
                id: "contactUs",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "contactUs",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-envelope-open fa-w-16 fa-3x"><path fill="currentColor" d="M494.586 164.516c-4.697-3.883-111.723-89.95-135.251-108.657C337.231 38.191 299.437 0 256 0c-43.205 0-80.636 37.717-103.335 55.859-24.463 19.45-131.07 105.195-135.15 108.549A48.004 48.004 0 0 0 0 201.485V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.509a48 48 0 0 0-17.414-36.993zM464 458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V204.347c0-1.813.816-3.526 2.226-4.665 15.87-12.814 108.793-87.554 132.364-106.293C200.755 78.88 232.398 48 256 48c23.693 0 55.857 31.369 73.41 45.389 23.573 18.741 116.503 93.493 132.366 106.316a5.99 5.99 0 0 1 2.224 4.663V458zm-31.991-187.704c4.249 5.159 3.465 12.795-1.745 16.981-28.975 23.283-59.274 47.597-70.929 56.863C336.636 362.283 299.205 400 256 400c-43.452 0-81.287-38.237-103.335-55.86-11.279-8.967-41.744-33.413-70.927-56.865-5.21-4.187-5.993-11.822-1.745-16.981l15.258-18.528c4.178-5.073 11.657-5.843 16.779-1.726 28.618 23.001 58.566 47.035 70.56 56.571C200.143 320.631 232.307 352 256 352c23.602 0 55.246-30.88 73.41-45.389 11.994-9.535 41.944-33.57 70.563-56.568 5.122-4.116 12.601-3.346 16.778 1.727l15.258 18.526z" class=""></path></svg>`,
                userRolsIds: [src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Admin],
                subMenus: [{
                        url: "/contactUsMessages",
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "contactUs",
                    }]
            },
        ];
    }
} //End Class


/***/ }),

/***/ "RG5Y":
/*!**************************************************************!*\
  !*** ./src/app/back-end/shared/nav-bar/nav-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_back_end_shared_nav_bar_setting_nav_bar_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/back-end/shared/nav-bar-setting/nav-bar-setting.component */ "9CQa");



const _c0 = function () { return ["/"]; };
class NavBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
} //End Class
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 21, vars: 2, consts: [[1, "header-container", "fixed-top"], [1, "header", "navbar", "navbar-expand-sm", "d-flex", "justify-content-between"], [1, "navbar-nav", "theme-brand", "flex-row", "text-center"], [1, "nav-item", "theme-logo"], ["routerLink", "/"], ["src", "assets/back-end/img/logo.jpeg", "alt", "logo", 1, "navbar-logo"], [1, "nav-item", "theme-text"], [1, "nav-link", 3, "routerLink"], [1, "nav-item", "toggle-sidebar"], ["href", "javascript:void(0);", "data-placement", "bottom", 1, "sidebarCollapse"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-list"], ["x1", "8", "y1", "6", "x2", "21", "y2", "6"], ["x1", "8", "y1", "12", "x2", "21", "y2", "12"], ["x1", "8", "y1", "18", "x2", "21", "y2", "18"], ["x1", "3", "y1", "6", "x2", "3", "y2", "6"], ["x1", "3", "y1", "12", "x2", "3", "y2", "12"], ["x1", "3", "y1", "18", "x2", "3", "y2", "18"], [1, "navbar-item", "flex-row", "navbar-dropdown"], [1, "nav-item", "dropdown", "user-profile-dropdown", "order-lg-0", "order-1"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "line", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "line", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "line", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-nav-bar-setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], src_app_back_end_shared_nav_bar_setting_nav_bar_setting_component__WEBPACK_IMPORTED_MODULE_2__["NavBarSettingComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/local.storage.service */ "LKR5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_ar_SA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/ar-SA */ "YyKh");
/* harmony import */ var _angular_common_locales_ar_SA__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ar_SA__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/behavior.subject.service */ "okBh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_app_back_end_backend_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/backend.app.component */ "xzsq");
/* harmony import */ var src_app_front_end_frontend_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/front-end/frontend.app.component */ "roLV");











function AppComponent_app_root_backend_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-root-backend");
} }
function AppComponent_app_root_frontend_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-root-frontend");
} }
function AppComponent_router_outlet_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
} }
class AppComponent {
    constructor(u, rouoter, activateRouter) {
        this.u = u;
        this.rouoter = rouoter;
        this.activateRouter = activateRouter;
        this.isBackEnd = null;
        this.isContactUs = null;
        this.isLastBackEnd = null;
        this.isAboutUs = null;
        this.is404 = null;
    }
    ngOnInit() {
        this.rouoter.events.subscribe(ev => {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.activateRouter.firstChild.data.subscribe(d => {
                    var _a;
                    (_a = document.querySelector('.car-top')) === null || _a === void 0 ? void 0 : _a.click();
                    this.isBackEnd = d.isBackEnd;
                    this.isContactUs = d.isContactUs;
                    this.isAboutUs = d.isAboutUs;
                    this.is404 = d.is404;
                    if (this.is404) {
                        document.querySelectorAll('[frontEndFile]').forEach(script => script.remove());
                        document.querySelectorAll('[backEndFile]').forEach(script => script.remove());
                    }
                    else if (this.isLastBackEnd != this.isBackEnd) {
                        this.isLastBackEnd = this.isBackEnd;
                        if (this.isBackEnd) {
                            document.querySelectorAll('[frontEndFile]').forEach(script => script.remove());
                            this.addBackendScripts();
                            this.addBackendStyles();
                        }
                        else {
                            document.querySelectorAll('[backEndFile]').forEach(script => script.remove());
                            this.addFrontEndScripts();
                            this.addFrontEndStyles();
                        }
                    }
                    if (this.isContactUs) {
                        this.addFrontEndContactUsScripts();
                    }
                    else if (this.isAboutUs) {
                        this.addFrontEndAboutUsScripts();
                    }
                });
            }
        });
        // Load Current User Information
        this.loadCurrentUserInformation();
        this.registerLocales();
    }
    /**
     * Register Locale Here For Use In Any Component
     */
    registerLocales() {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_ar_SA__WEBPACK_IMPORTED_MODULE_2___default.a, "ar");
    }
    /**
     * Load User Information From Local Storage And If Not Logged In I Will Set Default Lanugage For Him
     */
    loadCurrentUserInformation() {
        /**
         * If Not Found Language I Will Add Langage Id In Local Storage In Key "UI (User Information)"
         */
        const currentUserInformation = src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"].getUserInformation();
        if (currentUserInformation) {
            src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubjectService"].userInformation.next(currentUserInformation);
        }
    }
    /**
     * Add Backend Scripts
     */
    addBackendScripts() {
        //Remove Front End Script
        document.querySelectorAll('[freontEndFile]').forEach(script => script.remove());
        let backEndScripts = [
            "assets/back-end/plugins/perfect-scrollbar/perfect-scrollbar.min.js",
            "assets/back-end/js/custom.js",
            "assets/back-end/js/dashboard/dash_1.js",
            "assets/back-end/js/app.js",
            "assets/back-end/js/share.popup.service.js"
        ];
        backEndScripts.forEach((src, index) => {
            let newScript = document.createElement('script');
            newScript.src = src;
            newScript.setAttribute("backEndFile", "true");
            document.body.appendChild(newScript);
        });
    }
    /**
     * Add Front-End Scripts Tp Page
     */
    addFrontEndScripts() {
        let frontEndScripts = [
            // "assets/front-end/plugins/jquery-ui-1.11.4/jquery-ui.js",
            // "assets/front-end/plugins/jquery-appear/jquery.appear.js",
            // "assets/front-end/plugins/jquery-countTo/jquery.countTo.js",
            // "assets/front-end/plugins/jquery-validation/dist/jquery.validate.min.js",
            // "http://maps.google.com/maps/api/js",
            // "assets/front-end/plugins/gmap.js",
            // "assets/front-end/plugins/jquery.mixitup.min.js",
            // "assets/front-end/plugins/revolution/js/jquery.themepunch.tools.min.js",
            // "assets/front-end/plugins/revolution/js/jquery.themepunch.revolution.min.js",
            //"assets/front-end/plugins/revolution/js/extensions/revolution.extension.actions.min.js",
            //"assets/front-end/plugins/revolution/js/extensions/revolution.extension.carousel.min.js",
            //"assets/front-end/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js",
            //"assets/front-end/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js",
            //"assets/front-end/plugins/revolution/js/extensions/revolution.extension.migration.min.js",
            //"assets/front-end/plugins/revolution/js/extensions/revolution.extension.navigation.min.js",
            //"assets/front-end/plugins/revolution/js/extensions/revolution.extension.parallax.min.js",
            // "assets/front-end/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js",
            // "assets/front-end/plugins/revolution/js/extensions/revolution.extension.video.min.js",
            // "assets/front-end/plugins/fancyapps-fancyBox/source/jquery.fancybox.pack.js",
            // "assets/front-end/plugins/typed.js-master/dist/typed.min.js",
            "assets/front-end/js/main.js"
        ];
        frontEndScripts.forEach(src => {
            let newScript = document.createElement('script');
            newScript.src = src;
            newScript.setAttribute('frontEndFile', 'true');
            document.body.appendChild(newScript);
            if (src == "assets/front-end/js/main.js" || src == "assets/front-end/plugins/revolution/js/jquery.themepunch.revolution.min.js" || src == "assets/front-end/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js") {
                newScript.onload = () => {
                    setTimeout(() => {
                        callFunctions();
                    }, 0);
                };
            }
        });
    }
    /**
     * Add Contact Us Page
     */
    addFrontEndContactUsScripts() {
        let frontEndScripts = [
            "https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false&key=AIzaSyDt3ZZ6gJzjFJI8NlzZV60jFq11J4EBc8E&q=Space+Needle,Seattle+WA",
            "assets/front-end/js/gmap3.min.js",
        ];
        frontEndScripts.forEach(src => {
            let newScript = document.createElement('script');
            newScript.src = src;
            newScript.setAttribute('freontEndFile', 'true');
            document.body.appendChild(newScript);
            newScript.onload = () => {
                setTimeout(() => {
                    drawMap();
                }, 50);
            };
        });
    }
    /**
     * Add Backend Styles
     */
    addBackendStyles() {
        let style = document.createElement('link');
        style.href = "assets/back-end/css/rtl.css";
        style.rel = "stylesheet";
        style.setAttribute('backEndFile', 'true');
        document.head.appendChild(style);
    }
    /**
     * Add Front End  Styles
     */
    addFrontEndStyles() {
        let style = document.createElement('link');
        style.href = "assets/front-end/css/my.rtl.css";
        style.rel = "stylesheet";
        style.setAttribute('frontEndFile', 'true');
        document.head.appendChild(style);
    }
    /**
    * Add Front End  About Us Scripts
    */
    addFrontEndAboutUsScripts() {
        setTimeout(() => {
            let newScript = document.createElement('script');
            newScript.src = "assets/front-end/js/SVGMAP/UnitedStates/svgMap.js";
            newScript.setAttribute('freontEndFile', 'true');
            document.body.appendChild(newScript);
        }, 50);
    }
} // End CLass
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppComponent_app_root_backend_0_Template, 1, 0, "app-root-backend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_app_root_frontend_1_Template, 1, 0, "app-root-frontend", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_router_outlet_2_Template, 1, 0, "router-outlet", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isBackEnd === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isBackEnd === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.is404 === true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], src_app_back_end_backend_app_component__WEBPACK_IMPORTED_MODULE_7__["BackEndAppComponent"], src_app_front_end_frontend_app_component__WEBPACK_IMPORTED_MODULE_8__["FrontEndAppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [""] });


/***/ }),

/***/ "XzP5":
/*!*******************************************************!*\
  !*** ./src/app/back-end/sigh-in/sigh.in.component.ts ***!
  \*******************************************************/
/*! exports provided: SighInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SighInComponent", function() { return SighInComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/local.storage.service */ "LKR5");
/* harmony import */ var src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/enums/roles.enum */ "DBRY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













function SighInComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "small", 28);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", ctx_r0.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function SighInComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "small", 28);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", ctx_r1.u.r.invalidEmail, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function SighInComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "small", 28);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", ctx_r2.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
class SighInComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, seo, http, router) {
        super();
        this.u = u;
        this.seo = seo;
        this.http = http;
        this.router = router;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            showPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.formSubmitError = false;
    }
    ngOnInit() {
        this.seo.updateSEO("signIn");
    }
    /**
     * Sign In
     */
    signIn() {
        if (this.signInForm.invalid) {
            this.formSubmitError = true;
            return;
        }
        this.signInForm.disable();
        this.allSubscriptions.push(this.http.signIn(this.signInForm.value).subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].showResponseMessage(res);
            if (res.isSuccess) {
                src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"].accessToken = res.result;
                if (this.u.u.roleId == src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_5__["RolesEnum"].Admin)
                    this.router.navigate(['/freights']);
                else
                    this.router.navigate(['/reports/freights']);
            }
        }, error => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].canRequestError(error);
        }, () => {
            this.signInForm.enable();
        }));
    }
} //End CLass
SighInComponent.ɵfac = function SighInComponent_Factory(t) { return new (t || SighInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_7__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_8__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
SighInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SighInComponent, selectors: [["app-sigh-in"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 31, vars: 10, consts: [[1, "form-container"], [1, "form-form"], [1, "form-form-wrap"], [1, "form-content"], [1, "", 3, "innerHTML"], [1, "text-left", 3, "formGroup", "submit"], [1, "form"], ["id", "username-field", 1, "field-wrapper", "input"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-user"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["id", "userName", "name", "userName", "type", "text", "formControlName", "userName", 1, "form-control", 3, "placeholder"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], ["id", "password-field", 1, "field-wrapper", "input", "mb-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-lock"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "password", "name", "password", "formControlName", "password", 1, "form-control", 3, "type", "placeholder"], [1, "d-sm-flex", "justify-content-between"], [1, "field-wrapper", "toggle-pass"], [1, "d-inline-block", 3, "innerHTML"], [1, "switch", "s-primary"], ["type", "checkbox", "id", "toggle-password", "formControlName", "showPassword", 1, "d-none"], [1, "slider", "round"], [1, "field-wrapper"], ["type", "submit", "value", "", 1, "btn", "btn-primary", 3, "innerHTML"], [1, "form-image"], [1, "l-image"], [1, "invalid-data", 3, "innerHtml"]], template: function SighInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function SighInComponent_Template_form_submit_6_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "circle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SighInComponent_small_13_Template, 1, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, SighInComponent_small_14_Template, 1, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "rect", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, SighInComponent_small_20_Template, 1, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx.u.r.signIn, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx.u.r.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.signInForm.get("userName").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.signInForm.get("userName").hasError("userName") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.signInForm.get("showPassword").value ? "text" : "password")("placeholder", ctx.u.r.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.signInForm.get("password").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx.u.r.showPassword, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx.u.r.signIn, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], encapsulation: 2 });


/***/ }),

/***/ "Y9ao":
/*!*************************************************************************!*\
  !*** ./src/app/front-end/shared/front-footer/front.footer.component.ts ***!
  \*************************************************************************/
/*! exports provided: FrontFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontFooterComponent", function() { return FrontFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FrontFooterComponent {
    constructor(u) {
        this.u = u;
    }
    ngOnInit() {
    }
} // End Class
FrontFooterComponent.ɵfac = function FrontFooterComponent_Factory(t) { return new (t || FrontFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
FrontFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrontFooterComponent, selectors: [["app-front-footer"]], decls: 79, vars: 0, consts: [[1, "clear"], ["id", "footer", 1, "sec-padding"], [1, "thm-container"], [1, "row"], [1, "col-md-4", "col-sm-4", "footer-widget"], [1, "about-widget"], ["routerLink", "/"], ["src", "assets/front-end/images/footer-logo.png", "alt", "\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0644\u0634\u062D\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0645\u0646 \u0627\u0644\u0645\u0632\u0627\u062F\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u062E\u0628\u0631\u0629 15 \u0639\u0627\u0645 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648 \u0634\u062D\u0646\u0647\u0627 \u0625\u0644\u0649 \u062C\u0645\u064A\u0639 \u0645\u0648\u0627\u0646\u0626 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637"], ["routerLink", "/about-us"], [1, "fa", "fa-angle-double-right"], [1, "title"], [1, "link-list"], ["routerLink", "/contact-us"], ["routerLink", "/services"], [1, "col-md-4", "col-sm-6", "footer-widget"], [1, "contact-infos"], [1, "icon-box"], [1, "fas", "fa-map-marker-alt"], [1, "text-box"], ["href", "https://goo.gl/maps/T2eD2Xbm4zzcYsMR8", 1, "link"], ["href", "tel:218921550507+"], ["href", "tel:218917064688+"], [1, "fas", "fa-envelope"], ["href", "mailto:Support@Albadera-International.com", "target", "_blank"], [1, "bottom-bar"], [1, "thm-container", "clearfix"], [1, "pull-left"], [1, "car-top"], ["src", "assets/front-end/images/car.png", "alt", "\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0644\u0634\u062D\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0645\u0646 \u0627\u0644\u0645\u0632\u0627\u062F\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u062E\u0628\u0631\u0629 15 \u0639\u0627\u0645 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648 \u0634\u062D\u0646\u0647\u0627 \u0625\u0644\u0649 \u062C\u0645\u064A\u0639 \u0645\u0648\u0627\u0646\u0626 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637"]], template: function FrontFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0627\u0644\u0648\u0643\u064A\u0644 \u0627\u0644\u0631\u0633\u0645\u0649 \u0644\u0645\u0632\u0627\u062F IAA \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A \u0641\u064A \u0644\u064A\u0628\u064A\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064A\u0639\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0646\u0628\u0630\u0629 \u0639\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u062E\u062F\u0645\u0627\u062A\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0627\u0628\u0642\u0649 \u0639\u0644\u0649 \u062A\u0648\u0627\u0635\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0627\u0644\u0645\u0642\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0641\u064A \u0623\u0645\u0631\u064A\u0643\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "New York, NY.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0641\u0631\u0639 \u0627\u0644\u0634\u0631\u0643\u0629 \u0641\u064A \u0644\u0628\u064A\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0637\u0631\u0627\u0628\u0644\u0633 - \u0637\u0631\u064A\u0642 \u0627\u0644\u0634\u0648\u0643\u060C \u0635\u0644\u0627\u062D \u0627\u0644\u062F\u064A\u0646.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0644\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0625\u062A\u062C\u0627\u0647\u200F \u0644\u0645\u0642\u0631 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u0641\u064A \u0637\u0631\u0627\u0628\u0644\u0633 \u0639\u0628\u0631 \u062E\u0631\u0627\u0626\u0637 \u0642\u0648\u0642\u0648\u0644 \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0627\u0644\u0631\u0627\u0628\u0637");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0625\u062A\u0635\u0627\u0644 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0628\u0641\u0631\u0639 \u0627\u0644\u0634\u0631\u0643\u0629 \u0641\u064A \u0637\u0631\u0627\u0628\u0644\u0633: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "218921550507+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " \u0627\u0648 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "218917064688+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Support@Albadera-International.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u062D\u0642\u0648\u0642 \u0627\u0644\u0646\u0634\u0631 \u00A9 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 2021 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "YSHg":
/*!**********************************************************************!*\
  !*** ./src/services/authentcation/clinet.auth.can.active.service.ts ***!
  \**********************************************************************/
/*! exports provided: ClinetAuthCanActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinetAuthCanActive", function() { return ClinetAuthCanActive; });
/* harmony import */ var src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/roles.enum */ "DBRY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




/**
 * هنا ما يهمنا فقط ان يكون المستخدم عميل سواء شركة او فرد
 */
class ClinetAuthCanActive {
    constructor(u, router) {
        this.u = u;
        this.router = router;
    }
    canActivate() {
        if (this.u.u.roleId != src_enums_roles_enum__WEBPACK_IMPORTED_MODULE_0__["RolesEnum"].Clinet) {
            this.router.navigate(['/404']);
        }
        return this.u.isUserlogged;
    }
} //End Class
ClinetAuthCanActive.ɵfac = function ClinetAuthCanActive_Factory(t) { return new (t || ClinetAuthCanActive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ClinetAuthCanActive.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClinetAuthCanActive, factory: ClinetAuthCanActive.ɵfac });


/***/ }),

/***/ "bIim":
/*!*****************************************************************************!*\
  !*** ./src/app/front-end/shared/about-us-video/about.us.video.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AboutUsVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsVideoComponent", function() { return AboutUsVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");




class AboutUsVideoComponent {
    constructor(u, http, seo) {
        this.u = u;
        this.http = http;
        this.seo = seo;
    }
    ngOnInit() {
    }
} // End Class
AboutUsVideoComponent.ɵfac = function AboutUsVideoComponent_Factory(t) { return new (t || AboutUsVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SEOService"])); };
AboutUsVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsVideoComponent, selectors: [["app-about-us-video"]], decls: 0, vars: 0, template: function AboutUsVideoComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ "bPFj":
/*!********************************************************************!*\
  !*** ./src/services/authentcation/user.auth.can.active.service.ts ***!
  \********************************************************************/
/*! exports provided: UserAuthCanActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthCanActive", function() { return UserAuthCanActive; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



/**
 * هنا ما يهمنا فقط ان يكون المستخدم مسجل الدخول للموقع
 */
class UserAuthCanActive {
    constructor(u, router) {
        this.u = u;
        this.router = router;
    }
    canActivate() {
        if (!this.u.isUserlogged) {
            this.router.navigate(['/signIn']);
        }
        return this.u.isUserlogged;
    }
} //End Class
UserAuthCanActive.ɵfac = function UserAuthCanActive_Factory(t) { return new (t || UserAuthCanActive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserAuthCanActive.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAuthCanActive, factory: UserAuthCanActive.ɵfac });


/***/ }),

/***/ "d/2f":
/*!***********************************************************************!*\
  !*** ./src/app/back-end/account-setting/account-setting.component.ts ***!
  \***********************************************************************/
/*! exports provided: AccountSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingComponent", function() { return AccountSettingComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/local.storage.service */ "LKR5");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/custom.validators.service */ "QVRC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/directives/deopify.directive */ "nTwK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function AccountSettingComponent_small_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r0.u.r.maxLengthIs100, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_small_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r1.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_small_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r2.u.r.invalidEmail, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_small_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r3.u.r.phoneNumberInvalid, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_small_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r5.u.r.maxLengthIs50, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_small_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r6.u.r.minLengthIs5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 55);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r7.u.r.loadingData);
} }
class AccountSettingComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_3__["SharedComponents"] {
    constructor(u, http, seo) {
        super();
        this.u = u;
        this.http = http;
        this.seo = seo;
        this.userInfo = {};
        this.newPicture = {};
    }
    ngOnInit() {
        this.seo.updateSEO("accountSetting");
        //Get Account Information
        this.getAccountInformationForUpdate();
        //Init Form Group
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(100)),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].phoneNumber),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]),
        });
    }
    /**
     * Get Current Account Information For Update
     */
    getAccountInformationForUpdate() {
        this.allSubscriptions.push(this.http.getCurrentUserInformationForUpdate().subscribe(res => {
            if (!res.isSuccess) {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
                return;
            }
            this.userInfo = res.result;
            this.passValeToFormGroup();
        }, error => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
    /** Pass Value To From Group */
    passValeToFormGroup() {
        this.form.get('userName').setValue(this.userInfo.userName);
        this.form.get('userName').disable();
        this.form.get('fullName').setValue(this.userInfo.fullName);
        this.form.get('email').setValue(this.userInfo.email);
        this.form.get('phoneNumber').setValue(this.userInfo.phoneNumber);
        this.newPicture.file = null;
        this.newPicture.url = this.userInfo.picturePath;
    }
    /**
     * Save Change
     */
    saveChange() {
        //Check Form Is Valid
        if (this.form.invalid) {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].errorMessage(this.u.r.youHaveSomeErrors);
            this.formSubmitError = true;
            return;
        }
        this.userInfo.actionDisapled = true;
        this.form.disable();
        let fomrD = new FormData();
        fomrD.append('values', JSON.stringify(this.form.getRawValue()));
        if (this.newPicture.file)
            fomrD.append('image', this.newPicture.file);
        this.allSubscriptions.push(this.http.updateUserInformtion(fomrD).subscribe(res => {
            this.userInfo.actionDisapled = false;
            this.form.enable();
            this.form.controls.userName.disable();
            if (res.isSuccess) {
                this.form.reset();
                this.userInfo = res.result;
                this.passValeToFormGroup();
                src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"].setUsereInformation(this.userInfo);
            }
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
        }));
    }
    /** Show And Hide Password Toggel */
    showPasswordToggal(elementTrget) {
        if (elementTrget.type == "password")
            elementTrget.type = "text";
        else
            elementTrget.type = "password";
    }
} //End Class
AccountSettingComponent.ɵfac = function AccountSettingComponent_Factory(t) { return new (t || AccountSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_8__["SEOService"])); };
AccountSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AccountSettingComponent, selectors: [["app-account-setting"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 81, vars: 29, consts: [["novalidate", "", "autocomplete", "off", 1, "account-settings-container", "layout-top-spacing", 3, "formGroup", "submit"], [1, "account-content"], ["data-spy", "scroll", "data-target", "#account-settings-scroll", "data-offset", "-100", 1, "scrollspy-example"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "layout-spacing"], [1, "section"], [1, "info"], [1, "", 3, "innerHtml"], [1, "col-lg-11", "mx-auto"], [1, "col-xl-2", "col-lg-12", "col-md-4"], [1, "upload", "mt-4", "pr-md-4"], ["deopify", "", 1, "dropify-wrapper", "has-preview", 3, "title", "onSelectFiles"], [1, "dropify-preview", 2, "display", "block"], [1, "dropify-render"], [3, "src"], [1, "dropify-infos"], [1, "dropify-infos-inner"], [1, "dropify-filename"], [1, "file-icon"], [1, "dropify-filename-inner", 3, "innerHtml"], [1, "dropify-infos-message", 3, "innerHtml"], [1, "mt-2"], [1, "flaticon-cloud-upload", "mr-1"], [1, "col-xl-10", "col-lg-12", "col-md-8", "mt-md-0", "mt-4"], [1, "form"], [1, "col-sm-6", "mb-4"], [1, "form-group"], ["for", "userName", 3, "innerHtml"], ["type", "text", "id", "userName", "name", "userName", "formControlName", "userName", 1, "form-control"], [1, "col-sm-6"], ["for", "fullName", 3, "innerHtml"], ["type", "text", "id", "fullName", "name", "fullname", "formControlName", "fullName", 1, "form-control", 3, "placeholder"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], [1, "col-md-11", "mx-auto"], [1, "col-md-6"], [1, "form-group", "mb-4"], ["for", "email", 3, "innerHtml"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["for", "phone", 3, "innerHtml"], ["type", "text", "id", "phone", "formControlName", "phoneNumber", 1, "form-control", 3, "placeholder"], [1, "col-12", "layout-spacing"], ["for", "password", 3, "innerHtml"], [1, "input-group"], ["type", "password", "name", "userPass", "id", "userPass", "autocomplete", "new-password", "formControlName", "password", 1, "form-control", 3, "placeholder"], ["userPass", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "id", "toggle-password", 1, "feather", "feather-eye"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "account-settings-footer"], [1, "as-footer-container", "d-flex", "justify-content-end"], ["id", "multiple-messages", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], [1, "invalid-data", 3, "innerHtml"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"]], template: function AccountSettingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AccountSettingComponent_Template_form_submit_0_listener() { return ctx.saveChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelectFiles", function AccountSettingComponent_Template_div_onSelectFiles_13_listener($event) { return ctx.newPicture = $event[0]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, AccountSettingComponent_small_37_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, AccountSettingComponent_small_49_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, AccountSettingComponent_small_50_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, AccountSettingComponent_small_55_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountSettingComponent_Template_button_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](68); return ctx.showPasswordToggal(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "svg", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "circle", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, AccountSettingComponent_small_74_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, AccountSettingComponent_small_75_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, AccountSettingComponent_div_80_Template, 1, 1, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("form-submited", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.generalInformation, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.u.r.clickOrDargAndDrop);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.newPicture == null ? null : ctx.newPicture.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.newPicture.file == null ? null : ctx.newPicture.file.name, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.clickOrDargAndDrop, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.u.r.accountPicture, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.userName, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.yourName, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx.u.r.enterYourName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("fullName").hasError("maxlength") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.contact, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.email, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx.u.r.enterYourEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("email") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.phoneNumber, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx.u.r.enterYourPhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("phoneNumber").hasError("invalidPhoneNumber") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.newPassword, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.newPassword, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx.u.r.enterYourNewPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("maxlength") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("minlength") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.userInfo.actionDisapled);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userInfo.actionDisapled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_9__["DeopifyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "dEeH":
/*!**********************************************************!*\
  !*** ./src/app/front-end/about-us/about.us.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AboutUsComponent {
    constructor(u, http, seo) {
        this.u = u;
        this.http = http;
        this.seo = seo;
    }
    ngOnInit() {
        this.seo.updateSEO("aboutUs");
    }
} // End Class
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SEOService"])); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 60, vars: 0, consts: [[1, "sub-banner"], [1, "container", "breadcrumb-area"], [1, "breadcrumb-areas"], [1, "breadcrumbs"], ["routerLink", "/"], [1, "active"], [1, "about-info-box", "home-page"], [1, "thm-container"], [1, "clearfix"], [1, "col-lg-12", "col-md-12", "pull-right"], [1, ""], [1, "sec-title"], [1, "about-info-box", "sec-padding", "home-page"], [1, "thm-container", "container"], [1, "row"], [1, "col-md-4"], [1, "text-center", "pagination-centered", "map-circle", 2, "background-color", "#ff2600"], [1, "text-center", "pagination-centered", "map-circle", 2, "background-color", "#659c36"], [1, "text-center", "pagination-centered", "map-circle", 2, "background-color", "#00f801"], [1, "text-center", "pagination-centered", "map-circle", 2, "background-color", "#fffc01"], [1, "text-center", "pagination-centered", "map-circle", 2, "background-color", "#ff9300"], [1, "col-md-8"], ["id", "svgMap"], [1, "map"], ["src", "assets/front-end/images/MAP.jpg"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0646\u0628\u0630\u0629 \u0639\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0646\u0628\u0630\u0629 \u0639\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u0634\u0631\u0643\u0629 \u0631\u0627\u0626\u062F\u0629 \u0645\u062E\u062A\u0635\u0629 \u0641\u064A \u062A\u0648\u0631\u064A\u062F \u0648\u0634\u062D\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0645\u0646 \u062C\u0645\u064A\u0639 \u0645\u0635\u0627\u062F\u0631 \u0627\u0644\u0634\u0631\u0627\u0621 \u0639\u0628\u0631 \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u0627\u0644\u0649 \u0644\u064A\u0628\u064A\u0627. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0628\u0635\u0641\u062A\u0646\u0627 \u0623\u062D\u062F \u0627\u0643\u0628\u0631 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u0648\u062B\u0648\u0642\u0629 \u0641\u064A \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0644\u064A\u0628\u064A \u0641\u064A \u0645\u062C\u0627\u0644 \u0625\u0633\u062A\u064A\u0631\u0627\u062F \u0648\u0634\u062D\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0645\u0646 \u0623\u0645\u0631\u064A\u0643\u0627\u060C \u062A\u062F\u064A\u0631 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u0627\u0644\u0634\u062D\u0646 \u0644\u0645\u0627 \u064A\u0642\u0627\u0631\u0628 100 \u0645\u0643\u062A\u0628 \u0634\u0631\u0627\u0621 \u0645\u062D\u0644\u064A \u0648\u062A\u0627\u062C\u0631 \u062C\u0645\u0644\u0629 \u0641\u064A \u0644\u064A\u0628\u064A\u0627. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0649 \u0627\u0644\u0645\u0642\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0644\u0644\u0634\u0631\u0643\u0629 \u0641\u064A \u0645\u062F\u064A\u0646\u0629 \u0645\u0635\u0631\u0627\u062A\u0629\u060C \u064A\u0648\u062C\u062F \u0641\u0631\u0639 \u0644\u0647\u0627 \u0641\u064A \u0645\u062F\u064A\u0646\u0629 \u0637\u0631\u0627\u0628\u0644\u0633 \u0648\u062A\u0648\u0641\u0631 \u062E\u062F\u0645\u0627\u062A \u0627\u062A\u0645\u0627\u0645 \u0627\u0644\u062A\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0633\u062F\u0627\u062F \u0648\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0641\u064A \u062F\u0627\u062E\u0644 \u0644\u064A\u0628\u064A\u0627 \u0648\u062E\u0627\u0631\u062C\u0647\u0627. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0646\u0638\u0631\u0627 \u0644\u062A\u0639\u0627\u0645\u0644\u0627\u062A \u0634\u0631\u0643\u062A\u0646\u0627 \u0627\u0644\u0645\u0645\u062A\u062F\u0647 \u0639\u0644\u0649 \u0646\u0637\u0627\u0642 \u0648\u0627\u0633\u0639 \u0645\u0639 \u062C\u0645\u064A\u0639 \u0645\u0635\u0627\u062F\u0631 \u0627\u0644\u0634\u0631\u0627\u0621 \u0641\u064A \u0623\u0645\u0631\u064A\u0643\u0627 \u0645\u0646 \u0645\u0632\u0627\u062F\u0627\u062A \u0648\u0648\u0643\u0627\u0644\u0627\u062A \u0648\u0645\u0635\u0627\u062F\u0631 \u0628\u064A\u0639 \u062E\u0627\u0635\u0647 \u0648\u0645\u0646 \u0636\u0645\u0646\u0647\u0627 \u0645\u0632\u0627\u062F IAA \u0627\u0644\u0623\u0643\u062B\u0631 \u0634\u0647\u0631\u0629 \u0641\u064A \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0644\u064A\u0628\u064A\u060C \u0627\u0635\u0628\u062D\u062A \u0634\u0631\u0643\u062A\u0646\u0627 \u0647\u064A \u0627\u0644\u0648\u0643\u064A\u0644 \u0627\u0644\u062D\u0635\u0631\u064A \u0644\u0644\u0645\u0632\u0627\u062F \u0641\u064A \u0644\u064A\u0628\u064A\u0627. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0649 \u0645\u0635\u062F\u0627\u0642\u064A\u062A\u0646\u0627 \u0641\u064A \u062A\u0639\u0627\u0645\u0644\u0627\u062A\u0646\u0627 \u062A\u062A\u0645\u064A\u0632 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0628\u0633\u0631\u0639\u0629 \u062E\u062F\u0645\u0627\u062A\u0647\u0627 \u0648\u062F\u0642\u0629 \u0639\u0645\u0644\u064A\u0627\u062A\u0647\u0627 \u0641\u064A \u0645\u062A\u0627\u0628\u0639\u0629 \u0645\u0634\u062A\u0631\u064A\u0627\u062A \u0627\u0644\u0632\u0628\u0627\u0626\u0646 \u0645\u0646 \u0623\u0641\u0631\u0627\u062F \u0648\u0645\u0643\u0627\u062A\u0628 \u0648\u062A\u062C\u0627\u0631 \u0648\u0637\u0644\u0628\u0627\u062A\u0647\u0645 \u0645\u0646 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u0645\u0627\u064A\u062C\u0639\u0644\u0646\u0627 \u0627\u0644\u0623\u0643\u062B\u0631 \u062C\u062F\u0627\u0631\u0629 \u0648\u062A\u0648\u0633\u0639\u0627 \u0641\u064A \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0644\u064A\u0628\u064A \u0647\u0648 \u062A\u0639\u062F\u062F \u062E\u062F\u0645\u0627\u062A\u0646\u0627 \u062D\u064A\u062B \u0627\u0646\u0647\u0627 \u0644\u0627\u062A\u0642\u062A\u0635\u0631 \u0639\u0644\u0649 \u062C\u0627\u0646\u0628 \u0648\u0627\u062D\u062F\u060C \u0628\u0644 \u0646\u0642\u0648\u0645 \u0628\u062A\u0648\u0641\u064A\u0631 \u062C\u0645\u064A\u0639 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0645\u0646 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0632\u0627\u064A\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0632\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 Copart & IAA\u060C \u0648\u062A\u0648\u0641\u064A\u0631 \u062A\u0642\u0631\u064A\u0631 \u0643\u0634\u0641 CARFAX\u060C \u0648\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0641\u0648\u0631\u064A\u060C \u0648\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0648\u0627\u0644\u0628\u062D\u0631\u064A \u0639\u0644\u0649 \u0627\u0641\u0636\u0644 \u0627\u0644\u062E\u0637\u0648\u0637 \u0627\u0644\u0645\u0644\u0627\u062D\u064A\u0629 \u0648\u0628\u0633\u0631\u0639\u0629 \u0639\u0627\u0644\u064A\u0647\u060C \u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u062A\u0648\u0641\u064A\u0631 \u0639\u0631\u0648\u0636 \u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0646\u0638\u064A\u0641\u0629 \u0645\u0646 \u0645\u0635\u0627\u062F\u0631\u0646\u0627 \u062D\u0633\u0628 \u0631\u063A\u0628\u0629 \u0627\u0644\u0632\u0628\u0648\u0646. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u062A\u062A\u0645\u064A\u0632 \u0628\u0641\u0631\u064A\u0642 \u0639\u0645\u0644 \u0645\u062A\u0643\u0627\u0645\u0644 \u0628\u064A\u0646 \u0623\u0645\u0631\u064A\u0643\u0627 \u0648\u0644\u064A\u0628\u064A\u0627 \u064A\u0642\u0648\u0645 \u0628\u0645\u062A\u0627\u0628\u0639\u0629 \u062C\u0645\u064A\u0639 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0632\u0628\u0627\u0626\u0646 \u0623\u0648\u0644 \u0628\u0623\u0648\u0644 \u0645\u0646 \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u0627\u0644\u0634\u062D\u0646 \u0648\u0645\u062A\u0627\u0628\u0639\u0629 \u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0649 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0648\u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645 \u0641\u064A \u0645\u0648\u0627\u0646\u0626 \u0627\u0644\u0648\u0635\u0648\u0644. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0644\u0623\u0646 \u0637\u0627\u0642\u0645 \u0639\u0645\u0644 \u0627\u0644\u0634\u0631\u0643\u0629 \u064A\u0639\u0645\u0644 \u062C\u0627\u0647\u062F\u0627 \u0639\u0644\u0649 \u062A\u0648\u0641\u064A\u0631 \u0633\u0631\u0639\u0629 \u0627\u0644\u0627\u0646\u062C\u0627\u0632 \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u062C\u0648\u062F\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A\u060C \u064A\u0639\u0645\u0644 \u0642\u0633\u0645 \u0627\u0644\u0634\u062D\u0646 \u0639\u0644\u0649 \u062A\u062D\u0645\u064A\u0644 \u0633\u064A\u0627\u0631\u0627\u062A\u0643\u0645 \u062E\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629 \u0645\u0646 \u0627\u062A\u0645\u0627\u0645 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u0627\u0644\u062F\u0641\u0639\u060C \u062D\u064A\u062B \u0627\u0646\u0647 \u0644\u062F\u064A\u0646\u0627 \u062A\u0639\u0627\u0642\u062F\u0627\u062A \u0648\u0627\u0633\u0639\u0629 \u0645\u0639 \u0634\u0627\u062D\u0646\u0627\u062A \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u0628\u0631\u064A \u0639\u0628\u0631 \u062C\u0645\u064A\u0639 \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u0648\u0646\u0642\u0648\u0645 \u0628\u062A\u0648\u0641\u064A\u0631 \u0635\u0648\u0631 \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0639\u0628\u0631 \u0645\u0631\u062D\u0644\u062A\u064A\u0646: \u0627\u0644\u0623\u0648\u0644\u0649 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0645\u0646 \u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0632\u0627\u062F \u0648\u0627\u0644\u0623\u062E\u0631\u0649 \u0645\u0646 \u0623\u0631\u0636\u064A\u0629 \u0645\u0631\u0643\u0632 \u0627\u0644\u0634\u062D\u0646 \u0642\u0628\u0644 \u0625\u062A\u0645\u0627\u0645 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0641\u064A \u062D\u0627\u0648\u064A\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0644\u062F\u0649 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u062E\u0645\u0633 \u0645\u0631\u0627\u0643\u0632 \u0634\u062D\u0646 \u0645\u0648\u0632\u0639\u0629 \u0639\u0628\u0631 \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " New York, NY Savannah, GA Miami, FL Houston, TX Los Angeles, CA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u0634\u062D\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "New York");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Georgia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Florida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Taxes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "California");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "fvGp":
/*!***********************************!*\
  !*** ./src/modules/app.module.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var src_app_back_end_backend_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/back-end/backend.app.component */ "xzsq");
/* harmony import */ var src_app_back_end_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/back-end/shared/footer/footer.component */ "JtwZ");
/* harmony import */ var src_app_back_end_shared_nav_bar_setting_nav_bar_setting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/back-end/shared/nav-bar-setting/nav-bar-setting.component */ "9CQa");
/* harmony import */ var src_app_back_end_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/nav-bar/nav-bar.component */ "RG5Y");
/* harmony import */ var src_app_back_end_shared_sid_bar_sid_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/back-end/shared/sid-bar/sid-bar.component */ "DF2p");
/* harmony import */ var src_app_back_end_sigh_in_sigh_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/back-end/sigh-in/sigh.in.component */ "XzP5");
/* harmony import */ var src_app_front_end_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/front-end/about-us/about.us.component */ "dEeH");
/* harmony import */ var src_app_front_end_front_contact_us_front_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/front-end/front-contact-us/front.contact.component */ "mbxK");
/* harmony import */ var src_app_front_end_frontend_app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/front-end/frontend.app.component */ "roLV");
/* harmony import */ var src_app_front_end_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/front-end/home/home.component */ "jjk3");
/* harmony import */ var src_app_front_end_our_services_front_our_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/front-end/our-services/front.our.services.component */ "PsJV");
/* harmony import */ var src_app_front_end_shared_about_us_video_about_us_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/front-end/shared/about-us-video/about.us.video.component */ "bIim");
/* harmony import */ var src_app_front_end_shared_front_footer_front_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/front-end/shared/front-footer/front.footer.component */ "Y9ao");
/* harmony import */ var src_app_front_end_shared_front_header_front_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/front-end/shared/front-header/front.header.component */ "BzsC");
/* harmony import */ var src_app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var src_directives_write_svg_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/directives/write.svg.directive */ "PlsR");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/services/authentcation/admin.auth.can.active.service */ "O43r");
/* harmony import */ var src_services_authentcation_admin_or_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/services/authentcation/admin.or.clinet.auth.can.active.service */ "Orpn");
/* harmony import */ var src_services_authentcation_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/services/authentcation/clinet.auth.can.active.service */ "YSHg");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/services/authentcation/user.auth.can.active.service */ "bPFj");
/* harmony import */ var src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/services/custom.validators.service */ "QVRC");
/* harmony import */ var src_services_http_http_interceptor_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/services/http/http.interceptor.service */ "1jmC");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/services/sweet.alert.service */ "QZpK");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./app.router.module */ "IRI6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ "fXoL");

































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ providers: [
        src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_24__["CurrentUserService"],
        src_services_alert_service__WEBPACK_IMPORTED_MODULE_20__["AlertService"],
        src_services_http_http_service__WEBPACK_IMPORTED_MODULE_28__["HttpService"],
        src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_26__["CustomValidatorsService"],
        src_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_30__["SweetAlertService"],
        src_services_seo_service__WEBPACK_IMPORTED_MODULE_29__["SEOService"],
        src_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_25__["UserAuthCanActive"],
        src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_21__["AdminAuthCanActive"],
        src_services_authentcation_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_23__["ClinetAuthCanActive"],
        src_services_authentcation_admin_or_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_22__["AdminOrClinetAuthCanActive"],
        {
            //  HTTP_INTERCEPTORS >>  Injection Token Or Another In Any Request
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
            useClass: src_services_http_http_interceptor_service__WEBPACK_IMPORTED_MODULE_27__["HttpInterceptorService"],
            multi: true
        }
    ], imports: [[
            _app_router_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](AppModule, { declarations: [src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        src_app_back_end_backend_app_component__WEBPACK_IMPORTED_MODULE_4__["BackEndAppComponent"],
        src_app_front_end_frontend_app_component__WEBPACK_IMPORTED_MODULE_12__["FrontEndAppComponent"],
        src_app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__["PageNotFoundComponent"],
        src_app_back_end_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
        src_app_back_end_shared_sid_bar_sid_bar_component__WEBPACK_IMPORTED_MODULE_8__["SidBarComponent"],
        src_app_back_end_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        src_app_back_end_shared_nav_bar_setting_nav_bar_setting_component__WEBPACK_IMPORTED_MODULE_6__["NavBarSettingComponent"],
        src_app_front_end_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        src_app_front_end_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"],
        src_app_front_end_shared_front_header_front_header_component__WEBPACK_IMPORTED_MODULE_17__["FrontHeaderComponent"],
        src_app_front_end_shared_front_footer_front_footer_component__WEBPACK_IMPORTED_MODULE_16__["FrontFooterComponent"],
        src_app_front_end_shared_about_us_video_about_us_video_component__WEBPACK_IMPORTED_MODULE_15__["AboutUsVideoComponent"],
        src_app_front_end_front_contact_us_front_contact_component__WEBPACK_IMPORTED_MODULE_11__["FrontContactUsComponent"],
        src_app_back_end_sigh_in_sigh_in_component__WEBPACK_IMPORTED_MODULE_9__["SighInComponent"],
        src_directives_write_svg_directive__WEBPACK_IMPORTED_MODULE_19__["WriteSVGDirective"],
        src_app_front_end_our_services_front_our_services_component__WEBPACK_IMPORTED_MODULE_14__["FrontOurServicesComponent"]], imports: [_app_router_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]], exports: [src_directives_write_svg_directive__WEBPACK_IMPORTED_MODULE_19__["WriteSVGDirective"]] }); })();


/***/ }),

/***/ "iY+S":
/*!**************************************!*\
  !*** ./src/app/shared.components.ts ***!
  \**************************************/
/*! exports provided: SharedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponents", function() { return SharedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SharedComponents {
    constructor() {
        //All Setinternvale You Want Clear When Destory Compoenent
        this.allSetinternvale = [];
        //All Subscription You Want Unsubscribe When Destory Compoenent
        this.allSubscriptions = [];
    }
    ngOnDestroy() {
        this.allSetinternvale.forEach(d => clearInterval(d));
        this.allSubscriptions.forEach(d => d.unsubscribe());
    }
}
SharedComponents.ɵfac = function SharedComponents_Factory(t) { return new (t || SharedComponents)(); };
SharedComponents.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedComponents, selectors: [["ng-component"]], decls: 0, vars: 0, template: function SharedComponents_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ "jBFT":
/*!************************************************!*\
  !*** ./src/consts/local.storage.keys.const.ts ***!
  \************************************************/
/*! exports provided: LocalStorageKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageKeys", function() { return LocalStorageKeys; });
const LocalStorageKeys = {
    userAccessToken: 'uat',
    /**
     * User Information
     */
    currentUserInformation: 'UI',
    /**
     * Number Or Result Display In Page
     */
    fopNumberOfDisplayResultInPage: "fopNumberOfResultInPage"
};


/***/ }),

/***/ "jjk3":
/*!**************************************************!*\
  !*** ./src/app/front-end/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a0) { return { "active": a0 }; };
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slid_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, i_r3 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slid_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", slid_r2.title, " ");
} }
function HomeComponent_li_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const se_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fragment", "service" + (i_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](se_r4.title);
} }
class HomeComponent {
    constructor(u, http, seo) {
        this.u = u;
        this.http = http;
        this.seo = seo;
        this.services = [
            {
                title: 'خدمة المزايدة المباشرة عبر المزادات الأمريكية Copart & IAA',
                image: '/assets/front-end/images/services/copart.png'
            },
            {
                title: 'خدمة الشحن الداخلي أو النقل البري للسيارات من جميع الولايات الأمريكية',
                image: '/assets/front-end/images/services/land.png'
            },
            {
                title: 'خدمة الشحن البحري',
                image: '/assets/front-end/images/services/shipping.jpg'
            },
            {
                title: 'خدمة طلب تقرير كشف CARFAX',
                image: '/assets/front-end/images/services/carfax2.jpg'
            },
            {
                title: 'خدمة توفير تويوتا الرباعي',
                image: '/assets/front-end/images/services/toyota2.jpg'
            },
            {
                title: 'خدمة توفير عروض لسيارات نظيفة حسب الطلب',
                image: '/assets/front-end/images/services/mercedes benz 2017 white.jpg'
            },
            {
                title: 'خدمة التخليص الجمركي وتفريغ الحاويات وتسليم السيارات في موانئ الوصول',
                image: '/assets/front-end/images/services/Customs clearance.jpg'
            },
            {
                title: 'خدمة فتح خطوط شراء وشحن للتجار ومكاتب الشراء',
                image: '/assets/front-end/images/services/offcis.jpg'
            }
        ];
    }
    ngOnInit() {
        this.seo.updateSEO("appName");
        callFunctions();
    }
} // End Class
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SEOService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 103, vars: 2, consts: [[1, ""], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item ", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "about-info-box", "sec-padding", "home-page"], [1, "thm-container"], [1, "clearfix"], [1, "col-lg-6", "pull-left"], [1, "relative"], ["href", "https://help.iaai.com/s/broker-info/?varAccountId=0013g00000CyaBZAAZ&language=en_US", "target", "_blank", 1, "link"], ["src", "assets/front-end/images/IAAI.jpg", "alt", "\u0627\u0644\u0648\u0643\u064A\u0644 \u0627\u0644\u0631\u0633\u0645\u0649 \u0644\u0645\u0632\u0627\u062F IAA \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A \u0641\u064A \u0644\u064A\u0628\u064A\u0627"], [1, "col-lg-6", "col-md-12", "pull-right"], [1, "sec-title"], ["routerLink", "/contact-us", 1, "link"], ["href", "mailto:Support@Albadera-International.com", "target", "_blank"], [1, "info-group", "block-table", "block-table_md"], [1, "info-group__section", "col-md-6"], [1, "b-info", "b-info_mod-a", "area-bg", "area-bg_op_80", "area-bg_prim", "parallax", 2, "background-image", "url(assets/front-end/images/bg-4.jpg)"], [1, "area-bg__inner"], [1, "b-info__title"], [1, "b-info__title_lg"], ["routerLink", "/contact-us", 1, "btn", "btn-white"], [1, "b-info", "b-info_mod-b", "area-bg", "area-bg_op_80", "area-bg_dark-2", "parallax", 2, "background-image", "url(assets/front-end/images/bg-3.jpg)"], ["routerLink", "/services", 1, "btn", "btn-white"], [1, "h2-service-section", "padding-120"], [1, "container"], [1, "row"], [1, "col-lg-6"], [1, "section-border-image", "margin-right", "white-gray"], [1, "border-design"], [1, "border-bg", "top"], [1, "we-are-img"], ["src", "assets/front-end/images/services/bg.jpg", "alt", "\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0644\u0634\u062D\u0646 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0645\u0646 \u0627\u0644\u0645\u0632\u0627\u062F\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u062E\u0628\u0631\u0629 15 \u0639\u0627\u0645 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648 \u0634\u062D\u0646\u0647\u0627 \u0625\u0644\u0649 \u062C\u0645\u064A\u0639 \u0645\u0648\u0627\u0646\u0626 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637"], [1, "service-section-right"], [1, "section-title"], [1, "padding-bottom-15"], [1, "title", "uppercase", "gray"], [1, "padding-bottom-30"], [1, "heading-02"], [1, "service-section-bottom"], [1, "items-wrap"], ["class", "home-02-our-service-items color-01", 4, "ngFor", "ngForOf"], [1, "clear"], [1, "auctions"], [1, "logo-group"], [1, "partner-logo"], ["href", "https://iaai.com", "target", "_blank"], ["src", "assets/front-end/images/Content/articles/2020/7/25/auction%204_300x100.png", "alt", "\u0645\u0632\u0627\u062F\u0627\u062A \u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0623\u0645\u064A\u0646"], ["href", "https://www.copart.com/", "target", "_blank"], ["src", "assets/front-end/images/Content/articles/2020/7/25/auction%203_300x100.png", "alt", "Copart"], ["href", "https://www.manheim.com/", "target", "_blank"], ["src", "assets/front-end/images/Content/articles/2020/8/8/MANHEIM%20USA_300x100.png", "alt", "MANHEIM USA"], ["href", "https://www.adesa.com/", "target", "_blank"], ["src", "assets/front-end/images/Content/articles/2020/8/8/Adesa%20USA_300x100.png", "alt", "Adesa USA"], [1, "carousel-item", 3, "ngClass"], ["alt", "First slide", 1, "d-block", "w-100", 3, "src"], [1, "carousel-caption", "d-none", "d-sm-block"], [1, "home-02-our-service-items", "color-01"], [1, "item-left"], [1, "item-border"], [1, "border-bg"], [1, "icon"], ["src", "assets/front-end/images/Content/articles/2020/8/23/We%20guarantee%20goods%e2%80%99%20arrival%20within%20not%20more%20than%2065%20days%20as%20of%20the%20purchasing%20date_32x32.png"], [1, "item-right"], ["routerLink", "/services", 3, "fragment"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 5, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0627\u0644\u0648\u0643\u064A\u0644 \u0627\u0644\u0631\u0633\u0645\u0649 \u0644\u0645\u0632\u0627\u062F IAA \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A \u0641\u064A \u0644\u064A\u0628\u064A\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0646\u0638\u0631\u0627 \u0644\u062A\u0639\u0627\u0645\u0644\u0627\u062A \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629 \u0645\u0639 \u0645\u0632\u0627\u062F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "IAA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0641\u064A \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u0627\u0644\u0634\u062D\u0646 \u0639\u0628\u0631 \u062C\u0645\u064A\u0639 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0645\u0632\u0627\u062F \u0641\u064A \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u0648\u0627\u0644\u062B\u0642\u0629 \u0627\u0644\u062A\u064A \u0646\u062A\u0645\u064A\u0632 \u0628\u0647\u0627 \u0641\u064A \u062A\u0639\u0627\u0645\u0644\u0627\u062A\u0646\u0627 \u0623\u0635\u0628\u062D\u062A \u0634\u0631\u0643\u062A\u0646\u0627 \u0623\u0648\u0644 \u0634\u0631\u0643\u0629 \u0644\u064A\u0628\u064A\u0629 \u0645\u062D\u0644\u064A\u0629 \u062A\u0635\u0628\u062D \u0648\u0643\u064A\u0644\u0627\u064B \u0645\u0639\u062A\u0645\u062F\u064B\u0627 \u0644\u0645\u0632\u0627\u062F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "IAA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A \u0627\u0644\u0634\u0647\u064A\u0631 \u0641\u064A \u0644\u064A\u0628\u064A\u0627\u060C \u0648\u0647\u0648 \u064A\u0639\u062A\u0628\u0631 \u0623\u0643\u0628\u0631 \u0645\u0635\u062F\u0631 \u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0623\u0645\u064A\u0646 \u0648\u0645\u0624\u0633\u0633\u0627\u062A \u0627\u0644\u0625\u0642\u0631\u0627\u0636 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0641\u064A \u0623\u0645\u0631\u064A\u0643\u0627 \u0643\u0627\u0644\u0628\u0646\u0648\u0643 \u0648\u063A\u064A\u0631\u0647\u0627. \u064A\u0639\u062A\u0628\u0631 \u0645\u0632\u0627\u062F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "IAA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0645\u0646 \u0627\u062D\u062F \u0627\u0643\u0628\u0631 \u0645\u0635\u0627\u062F\u0631 \u0627\u0644\u0634\u0631\u0627\u0621 \u0641\u064A \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0644\u064A\u0628\u064A. \u0627\u0644\u0623\u0646 \u064A\u0645\u0643\u0646\u0643\u0645 \u0627\u0646 \u062A\u0645\u062A\u0644\u0643\u0648 \u062D\u0633\u0627\u0628 \u0634\u0631\u0627\u0621 \u062E\u0627\u0635 \u0628\u0643\u0645 \u0644\u0644\u0634\u0631\u0627\u0621 \u0639\u0646 \u0637\u0631\u064A\u0642 \u0627\u0644\u0645\u0632\u0627\u062F \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0645\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u0648\u0628\u062F\u0648\u0646 \u0636\u0631\u0627\u0626\u0628 \"Sales Tax\" \u0639\u0628\u0631 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629\u060C \u0627\u0644\u0648\u0643\u064A\u0644 \u0627\u0644\u0631\u0633\u0645\u0649 \u0627\u0644\u0645\u062D\u0644\u064A \u0644\u0644\u0645\u0632\u0627\u062F \u0641\u064A \u0644\u064A\u0628\u064A\u0627. \u0627\u0630\u0627 \u0643\u0646\u062A \u062A\u0627\u062C\u0631 \u0627\u0648 \u0635\u0627\u062D\u0628 \u0645\u0643\u062A\u0628 \u0634\u0631\u0627\u0621 \u0627\u0648 \u0645\u0639\u0631\u0636 \u0648\u0645\u0647\u062A\u0645 \u0628\u0627\u0645\u062A\u0644\u0627\u0643 \u062D\u0633\u0627\u0628 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "IAA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0639\u0628\u0631 \u0648\u0643\u064A\u0644 \u0627\u0644\u0645\u0632\u0627\u062F\u060C \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0642\u0645 \u0628\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0645\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0647\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u0627\u0648 \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0622\u0644\u0643\u062A\u0631\u0648\u0646\u0649 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Support@Albadera-International.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0647\u0644 \u062A\u0631\u0639\u0628");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0628\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u0627\u0646\u0642\u0631 \u0647\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0647\u0644 \u062A\u0631\u063A\u0628");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0628\u0645\u0639\u0631\u0641\u0629 \u062E\u062F\u0645\u062A\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0627\u0646\u0642\u0631 \u0647\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u062E\u062F\u0645\u0627\u062A\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "h2", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, HomeComponent_li_82_Template, 10, 2, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u0627\u0644\u0645\u0632\u0627\u062F\u0627\u062A \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629 \u0627\u0644\u0645\u062A\u0627\u062D \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0647\u0627 \u0639\u0628\u0631 \u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".active.carousel-item-right[_ngcontent-%COMP%], .carousel-item-next[_ngcontent-%COMP%]:not(.carousel-item-left) {\n  transform: translateX(-100%); }\n.carousel-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #b5b5b5ab;\n  font-size: 41px;\n  font-weight: bolder;\n  text-shadow: 1px 1px 1px #4a4a4a85;\n  padding: 8px;\n}\n\n.style-custom-1[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%] {\n  border-radius: 10px; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  transform-style: preserve-3d; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  left: auto;\n  right: 44px;\n  color: #fff;\n  text-align: right;\n  width: 50%;\n  top: 50%;\n  transform: translateY(-50%);\n  bottom: initial; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    padding: 6px 16px;\n    font-weight: 700;\n    letter-spacing: 2px;\n    background-color: #4dcf8f;\n    color: #fff;\n    font-size: 13px;\n    margin-bottom: 35px; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-weight: 600;\n    color: #fff;\n    font-size: 28px;\n    letter-spacing: 2px;\n    margin-bottom: 36px; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 49px;\n    height: 49px;\n    border-radius: 50%;\n    margin-left: 15px; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 15px;\n    margin-bottom: 0; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .meta-time[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 12px;\n    margin-bottom: 0; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .meta-time[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n      vertical-align: bottom;\n      width: 17px; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n  top: 45%;\n  bottom: auto;\n  display: block;\n  right: auto;\n  margin: auto;\n  left: 33px; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%], .style-custom-1[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n  top: auto;\n  bottom: 32px;\n  background-color: transparent; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 10px;\n  border-radius: 10px;\n  border: none;\n  margin-top: 0;\n  margin-bottom: 9px; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n    height: 32px;\n    border-radius: 10px; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n  left: 100px;\n  right: auto; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-right'%3e%3cline x1='19' y1='12' x2='5' y2='12'%3e%3c/line%3e%3cpolyline points='12 19 5 12 12 5'%3e%3c/polyline%3e%3c/svg%3e\");\n    width: 26px;\n    height: 26px; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\n  left: 40px;\n  right: auto; }\n.style-custom-1[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%] {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-left'%3e%3cline x1='5' y1='12' x2='19' y2='12'%3e%3c/line%3e%3cpolyline points='12 5 19 12 12 19'%3e%3c/polyline%3e%3c/svg%3e\");\n    width: 26px;\n    height: 26px; }\n\n.carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  background-color: rgb(174 174 174);\n  display: -ms-flexbox;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  margin: auto 10px auto 10px; }\n.carousel-control-next[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(180deg); }\n\n@media (max-width: 768px) {\n  .style-custom-1[_ngcontent-%COMP%] {\n    min-height: 392px; }\n    .style-custom-1[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n      top: 8%;\n      transform: translateY(0); }\n    .style-custom-1[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n      top: 16%; }\n    .style-custom-1[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%] {\n      min-height: 392px; }\n    .style-custom-1[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n      min-height: 392px; }\n      .style-custom-1[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   img.slide-image[_ngcontent-%COMP%] {\n        min-height: 392px; } }\n@media (max-width: 575px) {\n  .style-custom-1[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n    width: 78%;\n    right: 30px; }\n  .style-custom-1[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n    display: flex;\n    top: auto;\n    bottom: 22px;\n    left: 0;\n    right: 0; }\n    .style-custom-1[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n      width: 26px;\n      border-radius: 18px;\n      height: 10px; }\n  .style-custom-1[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%], .style-custom-1[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    display: none; } }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQzs7OztDQUlBO0FBQ0Q7Ozs7Q0FJQztBQUNEO0VBRUUsNEJBQTRCLEVBQUU7QUFFaEM7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLG1CQUFtQixFQUFFO0FBRXZCO0VBR0UsNEJBQTRCLEVBQUU7QUFFaEM7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGVBQWUsRUFBRTtBQUNqQjtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQixFQUFFO0FBQ3ZCO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFFO0FBQ3ZCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUU7QUFDckI7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQixFQUFFO0FBQ3BCO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLHNCQUFzQjtNQUN0QixXQUFXLEVBQUU7QUFFbkI7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVUsRUFBRTtBQUVkO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWiw2QkFBNkIsRUFBRTtBQUVqQztFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCLEVBQUU7QUFDcEI7SUFDRSxZQUFZO0lBQ1osbUJBQW1CLEVBQUU7QUFFekI7RUFDRSxXQUFXO0VBQ1gsV0FBVyxFQUFFO0FBQ2I7SUFDRSxxWUFBcVk7SUFDclksV0FBVztJQUNYLFlBQVksRUFBRTtBQUVsQjtFQUNFLFVBQVU7RUFDVixXQUFXLEVBQUU7QUFDYjtJQUNFLHFZQUFxWTtJQUNyWSxXQUFXO0lBQ1gsWUFBWSxFQUFFO0FBRWxCOztDQUVDO0FBQ0Q7RUFDRSxNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBRTtBQUUvQjtFQUNFLHlCQUF5QixFQUFFO0FBRTdCOztDQUVDO0FBQ0Q7RUFDRTtJQUNFLGlCQUFpQixFQUFFO0lBQ25CO01BQ0UsT0FBTztNQUNQLHdCQUF3QixFQUFFO0lBQzVCO01BQ0UsUUFBUSxFQUFFO0lBQ1o7TUFDRSxpQkFBaUIsRUFBRTtJQUNyQjtNQUNFLGlCQUFpQixFQUFFO01BQ25CO1FBQ0UsaUJBQWlCLEVBQUUsRUFBRTtBQUU3QjtFQUNFO0lBQ0UsVUFBVTtJQUNWLFdBQVcsRUFBRTtFQUNmO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVEsRUFBRTtJQUNWO01BQ0UsV0FBVztNQUNYLG1CQUFtQjtNQUNuQixZQUFZLEVBQUU7RUFDbEI7SUFDRSxhQUFhLEVBQUUsRUFBRSIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLypcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdFx0QEltcG9ydFx0RnVuY3Rpb25cblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cbi8qXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRcdEBJbXBvcnRcdE1peGluc1xuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXJpZ2h0LCAuY2Fyb3VzZWwtaXRlbS1uZXh0Om5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiBoMywgLmNhcm91c2VsLWNhcHRpb24gaDUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNWFiO1xuICBmb250LXNpemU6IDQxcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjNGE0YTRhODU7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLyogICAgICBzdHlsZS1jdXN0b20tMSAgICAgICAqL1xuLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1pbm5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7IH1cblxuLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogNDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBib3R0b206IGluaXRpYWw7IH1cbiAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1jYXB0aW9uIC5iYWRnZSB7XG4gICAgcGFkZGluZzogNnB4IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZGNmOGY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7IH1cbiAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1jYXB0aW9uIGgzIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDM2cHg7IH1cbiAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1jYXB0aW9uIC5tZWRpYSBpbWcge1xuICAgIHdpZHRoOiA0OXB4O1xuICAgIGhlaWdodDogNDlweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cbiAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1jYXB0aW9uIC5tZWRpYSAubWVkaWEtYm9keSAudXNlci1uYW1lIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxuICAuc3R5bGUtY3VzdG9tLTEgLmNhcm91c2VsLWNhcHRpb24gLm1lZGlhIC5tZWRpYS1ib2R5IC5tZXRhLXRpbWUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gICAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1jYXB0aW9uIC5tZWRpYSAubWVkaWEtYm9keSAubWV0YS10aW1lIHN2ZyB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgd2lkdGg6IDE3cHg7IH1cblxuLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgdG9wOiA0NSU7XG4gIGJvdHRvbTogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHJpZ2h0OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGxlZnQ6IDMzcHg7IH1cblxuLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5zdHlsZS1jdXN0b20tMSAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbi5zdHlsZS1jdXN0b20tMSAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA5cHg7IH1cbiAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBsZWZ0OiAxMDBweDtcbiAgcmlnaHQ6IGF1dG87IH1cbiAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1jb250cm9sLXByZXYgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWFycm93LXJpZ2h0JyUzZSUzY2xpbmUgeDE9JzE5JyB5MT0nMTInIHgyPSc1JyB5Mj0nMTInJTNlJTNjL2xpbmUlM2UlM2Nwb2x5bGluZSBwb2ludHM9JzEyIDE5IDUgMTIgMTIgNSclM2UlM2MvcG9seWxpbmUlM2UlM2Mvc3ZnJTNlXCIpO1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDsgfVxuXG4uc3R5bGUtY3VzdG9tLTEgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIGxlZnQ6IDQwcHg7XG4gIHJpZ2h0OiBhdXRvOyB9XG4gIC5zdHlsZS1jdXN0b20tMSAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1hcnJvdy1sZWZ0JyUzZSUzY2xpbmUgeDE9JzUnIHkxPScxMicgeDI9JzE5JyB5Mj0nMTInJTNlJTNjL2xpbmUlM2UlM2Nwb2x5bGluZSBwb2ludHM9JzEyIDUgMTkgMTIgMTIgMTknJTNlJTNjL3BvbHlsaW5lJTNlJTNjL3N2ZyUzZVwiKTtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7IH1cblxuLypcbiAgICBEZWZhdWx0IFN0eWxlIG9mIHRoZSBjYXJvdXNlbCBhcnJvd3NcbiovXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzQgMTc0IDE3NCk7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMTBweDsgfVxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHNwYW4sIC5jYXJvdXNlbC1jb250cm9sLXByZXYgc3BhbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cblxuLypcbiAgICBAbWVkaWEgUXVlcnlcbiovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN0eWxlLWN1c3RvbS0xIHtcbiAgICBtaW4taGVpZ2h0OiAzOTJweDsgfVxuICAgIC5zdHlsZS1jdXN0b20tMSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgICB0b3A6IDglO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICAgIHRvcDogMTYlOyB9XG4gICAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgICBtaW4taGVpZ2h0OiAzOTJweDsgfVxuICAgIC5zdHlsZS1jdXN0b20tMSAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICBtaW4taGVpZ2h0OiAzOTJweDsgfVxuICAgICAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1pdGVtIGltZy5zbGlkZS1pbWFnZSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM5MnB4OyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5zdHlsZS1jdXN0b20tMSAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgd2lkdGg6IDc4JTtcbiAgICByaWdodDogMzBweDsgfVxuICAuc3R5bGUtY3VzdG9tLTEgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMjJweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwOyB9XG4gICAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpLmFjdGl2ZSB7XG4gICAgICB3aWR0aDogMjZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgICBoZWlnaHQ6IDEwcHg7IH1cbiAgLnN0eWxlLWN1c3RvbS0xIC5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5zdHlsZS1jdXN0b20tMSAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH0iXX0= */"] });


/***/ }),

/***/ "mbxK":
/*!***********************************************************************!*\
  !*** ./src/app/front-end/front-contact-us/front.contact.component.ts ***!
  \***********************************************************************/
/*! exports provided: FrontContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontContactUsComponent", function() { return FrontContactUsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function FrontContactUsComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 21);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r0.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function FrontContactUsComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 21);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r1.u.r.maxLengthIs50, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function FrontContactUsComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 21);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r2.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function FrontContactUsComponent_small_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 21);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r3.u.r.invalidEmail, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function FrontContactUsComponent_small_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 21);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r4.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function FrontContactUsComponent_small_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 21);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r5.u.r.maxLengthIs100, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function FrontContactUsComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 21);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r6.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function FrontContactUsComponent_small_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 21);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r7.u.r.maxLengthIs4000, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function FrontContactUsComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 22);
} }
class FrontContactUsComponent {
    constructor(u, seo, http) {
        this.u = u;
        this.seo = seo;
        this.http = http;
        this.isRequestingToServer = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(100)]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(4000)])
        });
    }
    ngOnInit() {
        this.seo.updateSEO("contactUs");
    }
    /**
     * Send Message
     */
    sendMessage() {
        if (this.form.invalid) {
            this.formSubmitError = true;
            return;
        }
        this.formSubmitError = false;
        this.isRequestingToServer = true;
        this.form.disable();
        this.http.sednContactUsMessage(this.form.value).subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            if (res.isSuccess) {
                this.form.enable();
                this.form.reset();
                this.form.updateValueAndValidity();
            }
        }, error => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }, () => {
            this.formSubmitError = true;
            this.isRequestingToServer = false;
            this.form.enable();
        });
    }
} // End Class
FrontContactUsComponent.ɵfac = function FrontContactUsComponent_Factory(t) { return new (t || FrontContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"])); };
FrontContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FrontContactUsComponent, selectors: [["app-front-contact"]], decls: 44, vars: 12, consts: [[1, "sub-banner"], [1, "container", "breadcrumb-area"], [1, "breadcrumb-areas"], [1, "breadcrumbs"], ["routerLink", "/"], [1, "active"], [1, "contact-page-content"], [1, "thm-container"], [1, "sec-title"], [1, "row"], [1, "col-md-12", "col-sm-6", "col-xs-12", "pull-left"], [1, "contact-form", "contact-page", 3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "placeholder", "\u0627\u0644\u0627\u0633\u0645", "name", "name", "formControlName", "name"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], ["type", "text", "placeholder", "\u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A", "name", "email", "formControlName", "email"], ["type", "text", "placeholder", "\u0627\u0644\u0645\u0648\u0636\u0648\u0639", "name", "subject", "formControlName", "subject"], ["name", "message", "placeholder", "\u0646\u0635 \u0627\u0644\u0631\u0633\u0627\u0644\u0629", "formControlName", "message"], ["type", "submit", 1, "thm-btn", "w-100", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], ["id", "map"], [1, "invalid-data", 3, "innerHtml"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function FrontContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u0627\u0628\u0642\u0649 \u0639\u0644\u0649 \u062A\u0648\u0627\u0635\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function FrontContactUsComponent_Template_form_submit_19_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, FrontContactUsComponent_small_23_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, FrontContactUsComponent_small_24_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, FrontContactUsComponent_small_28_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, FrontContactUsComponent_small_29_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, FrontContactUsComponent_small_33_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, FrontContactUsComponent_small_34_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, FrontContactUsComponent_small_38_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, FrontContactUsComponent_small_39_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " \u0623\u0631\u0633\u0644 \u0627\u0644\u0622\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, FrontContactUsComponent_div_42_Template, 1, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "div", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.u.r.contactUs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("maxlength") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("email") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("subject").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("subject").hasError("maxlength") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("message").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.get("message").hasError("maxlength") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isRequestingToServer);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "nTwK":
/*!*********************************************!*\
  !*** ./src/directives/deopify.directive.ts ***!
  \*********************************************/
/*! exports provided: DeopifyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeopifyDirective", function() { return DeopifyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class DeopifyDirective {
    constructor(sanitizer, elm) {
        this.sanitizer = sanitizer;
        this.elm = elm;
        /** On Selected Files Event */
        this.onSelectFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.accept = "image/*";
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // Pass Files Now To Compoennt
        this.passFilesToComponent(evt.dataTransfer.files);
    }
    onClick() {
        this.fileInput.click();
        this.fileInput.onchange = (ev) => {
            this.passFilesToComponent(this.fileInput.files);
        };
    }
    /** Read File And Pass To Compoenent */
    passFilesToComponent(files) {
        const newFile = [];
        for (let i = 0; i < files.length; i++) {
            newFile.push({
                file: files[i],
                url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i])),
            });
        }
        debugger;
        this.onSelectFiles.emit(newFile);
    }
} // End Class
DeopifyDirective.ɵfac = function DeopifyDirective_Factory(t) { return new (t || DeopifyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DeopifyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DeopifyDirective, selectors: [["", "deopify", ""]], hostBindings: function DeopifyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DeopifyDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("drop", function DeopifyDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("click", function DeopifyDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, outputs: { onSelectFiles: "onSelectFiles" } });


/***/ }),

/***/ "okBh":
/*!**************************************************!*\
  !*** ./src/services/behavior.subject.service.ts ***!
  \**************************************************/
/*! exports provided: BehaviorSubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubjectService", function() { return BehaviorSubjectService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

class BehaviorSubjectService {
} //End Class
/**
* Current User Information
*/
BehaviorSubjectService.userInformation = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
//Active Page : Detect Dynamic
BehaviorSubjectService.activePage = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");


class PageNotFoundComponent {
    constructor(seo) {
        this.seo = seo;
    }
    ngOnInit() {
        this.seo.updateSEO("pageNotFound");
    }
} // End Class
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SEOService"])); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 4, vars: 0, consts: [["src", "/assets/back-end/img/404_Icon.svg", "alt", "notFound"], [1, "text-center"], ["href", "/", 1, "link"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "roLV":
/*!*****************************************************!*\
  !*** ./src/app/front-end/frontend.app.component.ts ***!
  \*****************************************************/
/*! exports provided: FrontEndAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontEndAppComponent", function() { return FrontEndAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var src_app_front_end_shared_front_header_front_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/front-end/shared/front-header/front.header.component */ "BzsC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_front_end_shared_front_footer_front_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/front-end/shared/front-footer/front.footer.component */ "Y9ao");






class FrontEndAppComponent {
    constructor(u, http) {
        this.u = u;
        this.http = http;
    }
    ngOnInit() {
        //  initJS()
    }
} // End CLass
FrontEndAppComponent.ɵfac = function FrontEndAppComponent_Factory(t) { return new (t || FrontEndAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
FrontEndAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrontEndAppComponent, selectors: [["app-root-frontend"]], decls: 3, vars: 0, template: function FrontEndAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-front-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-front-footer");
    } }, directives: [src_app_front_end_shared_front_header_front_header_component__WEBPACK_IMPORTED_MODULE_3__["FrontHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], src_app_front_end_shared_front_footer_front_footer_component__WEBPACK_IMPORTED_MODULE_5__["FrontFooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "wG7n":
/*!****************************************************!*\
  !*** ./src/models/resources/resources.ar.model.ts ***!
  \****************************************************/
/*! exports provided: ResourcesArModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesArModel", function() { return ResourcesArModel; });
class ResourcesArModel {
    constructor() {
        this.appName = "البادرة الدولية";
        this.minLengthIs5 = "اقل رقم هوا 5";
        this.logo = "الشعار";
        this.dashboard = "لوحة التحكم";
        this.userPicture = "صورة المستخدم";
        this.icon = "ايقونة";
        this.logOut = "تسجيل الخروج";
        this.startNow = "ابداء الآن";
        this.pageNotFound = "الصفحة المطلوبة غير موجودة";
        this.e404 = "الصفحة المطلوبة غير موجودة";
        this.signIn = 'تسجيل الدخول';
        this.signUp = 'تسجيل حساب';
        this.signInNow = 'تسجيل الدخول الآن';
        this.signUpNow = 'تسجيل الحساب الآن';
        this.userName = 'اسم المستخدم';
        this.email = 'البريد الإلكترونى';
        this.password = 'كلمة السر';
        this.resetMyPassword = 'إعادة تعيين كلمة السر';
        this.or = 'أو';
        this.thisFieldIsRequierd = 'هذا الحقل مطلوب';
        this.invalidEmail = 'البريد الإلكترونى غير صحيح';
        this.enterYoureEmail = 'ادخل البريد الإلكترونى الخاص بك';
        this.enterYoureUserName = 'ادخل اسم المستخدم الخاص بك';
        this.enterYourePassword = 'ادخل كلمة السر الخاصة بك';
        this.maxLengthIs50 = 'اكبر عدد للاحرف هوا 50';
        this.maxLengthIs4000 = 'اكبر عدد للاحرف هوا 4000';
        this.maxLengthIs100 = 'اكبر عدد للاحرف هوا 100';
        this.areYouSure = "هل انت متاكد من قيام تلك العملية";
        this.cancel = "الغاء";
        this.ok = "موافق";
        this.youHaveSomeErrors = "لديك بعض الحقول المطلوب اضافتها اولا";
        this.iCanNotAccessToServer = "لا استطيع الاتصال بالسيرفر";
        this.actions = "العمليات";
        this.createdDateTime = "تاريخ ووقت المعاملة";
        this.clinets = "الزبائن";
        this.filter = "تصفية";
        this.clickOrDargAndDrop = "اضغط او سحب وافلات الملف";
        this.createdDate = "تاريخ المعاملة";
        this.filterInClinets = "البحث فى الزبائن";
        this.saveChange = "حفظ التغيرات";
        this.phoneNumber = "رقم الهاتف";
        this.enterYourPhoneNumber = "ادخل رقم هاتفك";
        this.nextPage = "الصفحة التالية";
        this.showPassword = "اظهار";
        this.contact = "تواصل";
        this.newPassword = "كلمة مرور جديدة";
        this.generalInformation = "بيانات عامة";
        this.searchInResult = "بحث فى النتائج";
        this.showing = "اظهار";
        this.accountSetting = "اعدادات الحساب";
        this.fullName = "اسم الزبون او اسم الشركة";
        this.enterFullName = "ادخل اسم الزبون او الشركة";
        this.enterYourEmail = "ادخل البريد الآلكترونى";
        this.of = "من";
        this.accountPicture = "صورة المستخدم";
        this.enterYourNewPassword = "ادخل كلمة المرور";
        this.privousPage = "الصفحة السابقة";
        this.entiries = "العناصر";
        this.createANewClinet = "انشاء زبون جديد";
        this.enterUserName = "ادخل اسم المستخدم";
        this.editClinet = "تعديل المستخدم";
        this.getMoreItems = "عرض المزيد";
        this.userNameInvalid = "الاسم غير صالح يجب استخدما الاحرف الانجليزية والارقام و _ فقط";
        this.phoneNumberInvalid = "ادحل رقم الهاتف ما بين 10 و 15 رقم";
        this.search = "بحث";
        this.home = "الرئيسية";
        this.settings = "الإعدادت";
        this.ports = "الموانى";
        this.freightCases = "حالات الشحن";
        this.buySources = "مصادر الشراء";
        this.addNew = "اضافة جديد";
        this.name = "الاسم";
        this.delete = "حذف";
        this.add = "اضافة";
        this.create = "إنشاء";
        this.createNew = "إنشاء جديد";
        this.editing = "تعديل";
        this.areYouSureToDeleteThe = "هل متاكد من حذف العمصر ؟";
        this.yesDelete = "نعم احذف";
        this.carMarks = "ماركات السيارات";
        this.carModels = "الموديلات";
        this.createCarMark = "انشاء ماركة سيارة";
        this.editCarMark = "تعديل ماركة سيارة";
        this.enterPerModelInNewLine = "ادخل كل موديل فى سطر جديد";
        this.numberOfModels = "عدد الموديلات هو ";
        this.enterCarMarkName = "ادخل نوع السيارة";
        this.carMark = "نوع السيارة";
        this.doYouWantEditCreatedItem = "هل تريد تعديل العنصر الذى تم إنشائه ام اناشء عنصر جديد؟";
        this.goToEdit = "اذهب للتعديل";
        this.enterStateName = "ادخل اسم الولايه";
        this.citties = "المدن";
        this.cityName = "اسم المدينة ";
        this.createState = "انشاء ولايه شحن";
        this.editState = "تعديل ولايه شخن";
        this.states = "ولايات الشحن";
        this.stateName = "اسم الولاية";
        this.fullLandFreightPriceToStateDis = "ادخل سعر الشحن الذى سوف يطبق فى حاله عدم تحديد مدينة اثناء انشاء عمليه شحن او عدم وجود سعر للشحن البري الخاص بالمدينة";
        this.maritimeFreightPriceToBigCar = " كبيرة الحجم";
        this.maritimeFreightPriceToSmallCar = " صغيرة الحجم";
        this.maritimeFreightPriceToMediumCar = " متوسطتة الحجم";
        this.maritimeFreightPriceToBigCarDis = "ادخل سعر الشخن البحرى الذى سوف يطبق على السيارة كبيرة الحجم";
        this.maritimeFreightPriceToSmallCarDis = "ادخل سعر الشخن البحرى الذى سوف يطبق على السيارة صغيرة الحجم";
        this.maritimeFreightPriceToMediumCarDis = "ادخل سعر الشخن البحرى الذى سوف يطبق على السيارة متوسطة الحجم";
        this.LandFreightPrice = "الشحن الداخلى";
        this.remove = "إزاله";
        this.invalidNumber = "الرقم الذى ادخلته غير صالح";
        this.edit = "تعديل";
        this.navigationalWayes = "خطوت ملاحيه";
        this.containers = "الحاويات";
        this.loadingData = "جار تحميل بعض البيانات";
        this.creationDate = "تاريخ ووقت المعاملة";
        this.refranceNumber = "الرقم الاشاري";
        this.carModel = "موديل السيارة";
        this.carBodyNumber = "رقم الهيكل";
        this.freightCase = "حاله الشحن";
        this.buySource = "مصدر الشراء";
        this.freightState = "ولايه الشحن";
        this.city = "المدينة";
        this.carPrice = "سعر السيارة";
        this.carSize = "حجم السيارة";
        this.carPicture = "صورة السيارة";
        this.notes = "ملحوظات";
        this.maritimeFreightPrice = "الشحن البحري";
        this.commissionPurchase = "عمولة شراء";
        this.swift = "سويفت";
        this.auctionFines = "غرامات مزاد";
        this.storeFines = "غرامات مخزن";
        this.titlePrice = "سعر تايتل";
        this.titleDifference = "فرق التايتل";
        this.landCost = "تكلفة داخلى";
        this.landGain = "مكسب داخلى";
        this.maritimeCost = "تكلفة بحري";
        this.maritimeGain = "مكسب بحري";
        this.container = "رقم الحاوية";
        this.recover = "إسترجاع";
        this.navigationalWaye = "الخط الملاحى";
        this.freightPort = "مركز الشحن";
        this.arrivalPort = "ميناء الوصول";
        this.arrivalDate = "موعد الوصول المتوقع";
        this.trackLink = "تتبع الحاوية";
        this.landFreightPrice = "الشحن الداخلى";
        this.freights = "الشحنات";
        this.createANewFreight = "انشاء شحنة جديدة";
        this.clinet = "الزبون";
        this.page = "الصفحة";
        this.reloadThisItems = "إعادة تحميل هذة العناصر";
        this.editFreight = "تعديل الشحنة";
        this.userType = "نوع المستخدم";
        this.commissionTransfare = "عمولة تحويل";
        this.addFreightsSelectedToContainer = "اضافة على الحاوية";
        this.select = "تحديد";
        this.unSelect = "إلغاء";
        this.selectForAddToContainer = "اضافة الشحنات الذى تم تحميلها على الحاوية";
        this.youMustSelectFreightsFirst = "يجب تحديد الشحنات اولا";
        this.selectTheContainerYouWnatMove = "اختر الحاوية الذى تريد نقل الـ ";
        this.freightsToIt = "شحنات اليها";
        this.financialTransfers = "الحوالات المالية";
        this.createANewFinancialTransfer = "انشاء حوالة مالية جديدة";
        this.trnasactionDate = "تاريخ المعاملة";
        this.trnasactionType = "نوع المعاملة";
        this.totalAmount_dollar = "المبلغ بالدولار";
        this.totalAmount_dinar = "المبلغ بالدينار";
        this.totalPaidAmount_dollar = "المدفوع بالدولار";
        this.totalPaidAmount_dinar = "المدفوع بالدينار";
        this.totalDueAmount_dollar = "المستحق بالدولار";
        this.totalDueAmount_dinar = "المستحق بالدينار";
        this.isPaidAllAmount = "تم الاستلام";
        this.theReceive = "تم الاستلام";
        this.clinetName = "اسم الزيون";
        this.clinetEmail = "بريد آلكترونى الزيون";
        this.clinetPhoneNumber = "رقم هاتف الزيون";
        this.invalidDate = "تاريخ غير صالح";
        this.filterIn = "البحث فى ";
        this.editFinancialTransfer = "تعديل الحوالة المالية";
        this.paymentAmount = "استلام الاموال";
        this.paymentAmount_dollar = "المستلم بالدولار";
        this.paymentAmount_dinar = "المستلم بالدينار";
        this.newPaymentAmount = "عملية تسليم";
        this.paymentNow = "ااستلام الآن";
        this.financialTransferDetils = "تفاصيل الحوالة";
        this.details = "التفاصيل";
        this.paymentTransaction = "عمليات استلام الاموال";
        this.paidDate = "تاريخ الاستلام";
        this.paidAmount_dollar = "مبلغ الدفع بالدولار";
        this.paidAmount_dinar = "مبلغ الدفع بالدينار";
        this.print = "طباعة";
        this.containersReport = "تقارير الحاويات";
        this.reports = "تقارير";
        this.releaseStatus = "حالة الإصدار";
        this.freightsReport = "تقارير الشحنات";
        this.transferDetails = "تفاصيل الحوالة";
        this.homePage = "الصفحة الرئيسية";
        this.freightDetils = "تفاصيل الشحنة";
        this.number = "رقم";
        this.changedDate = "تاريخ التغير";
        this.freightCasees = "حالات الشحنة";
        this.fullDetails = "كل التفاصيل";
        this.freightNotes = "ملحوظات الشحنة";
        this.transferNotes = "ملحوظات الحوالة";
        this.freightPublicGain = "مكسب الشحن العام";
        this.carCost = "تكلفة السيارة";
        this.netProfit = "صافى الربح";
        this.sellPrice = "سعر البيع";
        this.sectorSales = "مبيعات قطاعى";
        this.createANewSectorSale = "انشاء شحنة قطاعى جديده";
        this.editSectorSale = "تعديل شحنة قطاعى";
        this.sectorSalerDetils = "تفاصيل شحنة قطاعى";
        this.theSectorSales = "المبيعات القطاعى";
        this.copy = "نسخ";
        this.excel = "إكسل";
        this.pdf = "PDF";
        this.yourName = "اسمك";
        this.enterYourName = "ادخل اسمك";
        this.freightPorts = "مراكز الشحن";
        this.arrivalPorts = "موانى الوصول";
        this.createANewPort = "انشاء ميناء جديدة";
        this.numberOfCities = "عدد المدن";
        this.unFreezeToEdit = "الغاء التجميد من اجل التعديل";
        this.frezzInput = "تجميد الحقل";
        this.lotOrStock = "Lot Or Stock";
        this.editPort = "تعديل الميناء";
        this.invalidUrl = "رابط غير صالح";
        this.open = "فتح";
        this.theClinet = "العميل";
        this.forClinet = "للعميل";
        this.color = "اللون";
        this.backgroundColor = "لون الخلفية";
        this.fontColor = "لون الخط";
        this.editFreightCase = "تعديل حالة الشحن";
        this.editContainerNumber = "تعديل رقم الحاوية للشحنات المحددة";
        this.selectContainer = "تحديد حاوية";
        this.selectFreight = "تحديد شحنة";
        this.editContainerDetails = "تعديل تفاصيل الحاوية";
        this.youMustSelectContainersFirst = "يجب تحديد الحاويات اولا";
        this.containerPrice = "سعر الحاوية";
        this.areYouSureToUndemandFromContainer = "هل انت متاكد من فك ارتباط الشحنات المحددة من على الحاوية وايضا تحديث حالة الشحن الى الحالة فى مخزن التعبئه؟";
        this.isSectorSeelFreight = "هل هذة شحنة قطاعى";
        this.maritimeFreightPriceIsPaid = "تم دفع الشحن البحري مسبقا";
        this.maritimeFreightPriceIsPaidText = "تم الجفع مسبقا";
        this.yes = "نعم";
        this.titleCost = "تكلفة تايتل";
        this.titleGain = "مكسب تايتل";
        this.deletes = "المحذوفات";
        this.freightsDeleted = "الشحنات المحذوفة";
        this.financialTransfersDeleted = "الحولات المالية المحذوفة";
        this.sectorSalesDeleted = "المبيعات القطاعى المحذوفة";
        this.areYouSureToRecoverDeleted = "هل انت متاكد من انك تريد استرجاع العنصر";
        this.undemandFromContainer = "فك الارتباط للشحنات المحددة";
        this.yesRecover = "نعم استرجع";
        this.yesUndemand = "نعم فك الارتباط";
        this.paymentPlace = "مكان التسليم";
        this.paymentPlaces = "اماكن التسليم";
        this.companies = "الشركات";
        this.company = "الشركة";
        this.signUpDate = "تاريخ الانشاء";
        this.dueDollarCommissionTransfare = "عمولة التحويل على المتبقى بالدولار";
        this.dinarOnDueDollar = "الدينار / المتبقى بالدولار";
        this.maritimeFreightPriceTotalDue = "إجمالى المطلوب من الشحن البحري";
        this.branch = "الفرع";
        this.role = "صلاحية";
        this.clinetType = "نوع الزبون";
        this.editUser = "تعديل المستخدم";
        this.invalidPhoneNumber = "رقم غير صالح";
        this.branches = "الفروع";
        this.clinetBranch = "بيانات الزبون";
        this.frightInformation = "بيانات الشحنة";
        this.financialInformation = "البيانات المالية";
        this.containerInformation = "بيانات الحاوية";
        this.forBranch = "للفرع";
        this.deleteUserNotes = "سوف يتم حذف المستخدم وكل الشحنات التابعة له ولاكن يمكنك استراجعهم فى اى وقت من شاشة المحذوفات";
        this.importantNotes = "ملحوظة هامة:";
        this.usersDeleted = "الزبائن المحذوفين";
        this.recoverTransactionNotes = "فى حالة اذا كان الزبون الخاص بهذا العنصر محذوف فسوف يتم استراجاعه هوا ايضا";
        this.recoverUserNotes = "فى حالة اذا كان  هناك شحنات او اى شىء تابع بهذا الزبون فسوف تجرجع هي ايضا";
        this.freightType = "نوع الشحنة";
        this.areYouSureToRecoverUserDeleted = "هل انت متاكد من انك تريد استرجاع هذا الزبون";
        this.reloadItems = "اعادة تحميل العناصر";
        this.clinetInformationForFreigh = "بيانات العميل للشحنة";
        this.financialInformationFreight = "بيانات ماليه للشحنة ";
        this.containerInformationFreight = "بيانات حاوية للشحنة";
        this.clinetDetails = "تفاصيل العميل";
        this.configuration = "اعدادت عامة";
        this.nextRefranceNumber = "الرقم الاشاري القادم";
        this.appSetting = "إعدادت النظام";
        this.transactionSetting = "إعدادت المعاملات";
        this.minimumNumbersIs = "اقل رقم يمكن ادخالة هوا ";
        this.selectItem = "إختر";
        this.enterNewValueManually = "أدخل قيمة جديدة يدويا";
        this.aboutUs = "نبذة عنا";
        this.contactUs = "تواصل معنا";
        this.contactUsMessages = "رسائل تواصل معنا";
        this.filterInMessages = "البحث الرسائل";
        this.sendDate = "تاريخ الارسال";
        this.subject = "الموضوع";
        this.message = "الرسالة";
        this.ourServices = "خدمتنا";
    }
} //End Class


/***/ }),

/***/ "xzsq":
/*!***************************************************!*\
  !*** ./src/app/back-end/backend.app.component.ts ***!
  \***************************************************/
/*! exports provided: BackEndAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackEndAppComponent", function() { return BackEndAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_back_end_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/back-end/shared/nav-bar/nav-bar.component */ "RG5Y");
/* harmony import */ var src_app_back_end_shared_sid_bar_sid_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/back-end/shared/sid-bar/sid-bar.component */ "DF2p");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_back_end_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/footer/footer.component */ "JtwZ");








function BackEndAppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sid-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BackEndAppComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
class BackEndAppComponent {
    constructor(u, http) {
        this.u = u;
        this.http = http;
    }
    ngOnInit() {
    }
} // End CLass
BackEndAppComponent.ɵfac = function BackEndAppComponent_Factory(t) { return new (t || BackEndAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
BackEndAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackEndAppComponent, selectors: [["app-root-backend"]], decls: 4, vars: 2, consts: [[1, "sidebar-noneoverflow"], [4, "ngIf", "ngIfElse"], ["userNotLoggedIn", ""], ["id", "container", 1, "main-container"], [1, "overlay"], [1, "search-overlay"], ["id", "content", 1, "main-content"], [1, "layout-px-spacing", "layout-top-spacing"]], template: function BackEndAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BackEndAppComponent_div_1_Template, 11, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BackEndAppComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.u.isUserlogged)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], src_app_back_end_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], src_app_back_end_shared_sid_bar_sid_bar_component__WEBPACK_IMPORTED_MODULE_5__["SidBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], src_app_back_end_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/app.module */ "fvGp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_modules_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map