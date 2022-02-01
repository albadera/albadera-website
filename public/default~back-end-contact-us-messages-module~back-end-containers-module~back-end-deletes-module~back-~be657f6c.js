(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~back-end-contact-us-messages-module~back-end-containers-module~back-end-deletes-module~back-~be657f6c"],{

/***/ "3CG7":
/*!********************************************************************************!*\
  !*** ./src/app/back-end/shared/form-inputs/date-input/date.input.component.ts ***!
  \********************************************************************************/
/*! exports provided: DateInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateInputComponent", function() { return DateInputComponent; });
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ "X2Dv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["dateInpput"];
const _c1 = ["app-date-input", ""];
function DateInputComponent_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "small", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r1.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function DateInputComponent_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "small", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r2.u.r.invalidDate, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class DateInputComponent {
    constructor(u) {
        this.u = u;
        this.formSubmitError = false;
    }
    set dateInput(ht) {
        var dateFlat = Object(flatpickr__WEBPACK_IMPORTED_MODULE_0__["default"])(ht.nativeElement);
    }
} //End Class
DateInputComponent.ɵfac = function DateInputComponent_Factory(t) { return new (t || DateInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
DateInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DateInputComponent, selectors: [["", "app-date-input", ""]], viewQuery: function DateInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dateInput = _t.first);
    } }, inputs: { form: "form", _formControlName: ["fcn", "_formControlName"], lable: "lable", formSubmitError: "formSubmitError" }, attrs: _c1, decls: 7, vars: 6, consts: [[3, "formGroup"], [3, "innerHtml"], ["type", "text", 1, "form-control", 3, "formControlName"], ["dateInpput", ""], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], [1, "invalid-data", 3, "innerHtml"]], template: function DateInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DateInputComponent_small_5_Template, 1, 1, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DateInputComponent_small_6_Template, 1, 1, "small", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx.lable, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", ctx._formControlName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.form.get(ctx._formControlName).errors, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitError && ctx.form.get(ctx._formControlName).hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitError && ctx.form.get(ctx._formControlName).hasError("invalidDate"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".flatpickr-calendar[_ngcontent-%COMP%] {\n  width: 336.875px;\n  padding: 15px;\n  box-shadow: -2px 5px 17px 0 rgba(31, 45, 61, 0.1);\n  border: 1px solid #bfc9d4; }\n.flatpickr-calendar.open[_ngcontent-%COMP%] {\n    display: inline-block;\n    z-index: 900; }\n.flatpickr-calendar.arrowTop[_ngcontent-%COMP%]:before {\n    border-bottom-color: #ebedf2; }\n.flatpickr-calendar[_ngcontent-%COMP%]:before {\n    border-width: 9px; }\n.flatpickr-calendar[_ngcontent-%COMP%]:after {\n    border-width: 0px; }\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-prev-month[_ngcontent-%COMP%], .flatpickr-months[_ngcontent-%COMP%]   .flatpickr-next-month[_ngcontent-%COMP%] {\n  top: 8%;\n  padding: 5px 13px;\n  background: #fbfbfb;\n  border-radius: 4px;\n  height: 40px; }\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-prev-month[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .flatpickr-months[_ngcontent-%COMP%]   .flatpickr-next-month[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #1b55e2; }\n.flatpickr-day.today[_ngcontent-%COMP%] {\n  border-color: #1b55e2;\n  color: #1b55e2;\n  font-weight: 700; }\n.flatpickr-current-month[_ngcontent-%COMP%]   .flatpickr-monthDropdown-months[_ngcontent-%COMP%] {\n  height: auto;\n  border: 1px solid #bfc9d4;\n  color: #3b3f5c;\n  font-size: 15px;\n  padding: 12px 16px;\n  letter-spacing: 1px;\n  font-weight: 700; }\n.flatpickr-current-month[_ngcontent-%COMP%]   input.cur-year[_ngcontent-%COMP%] {\n  height: auto;\n  border: 1px solid #bfc9d4;\n  border-right: none;\n  color: #3b3f5c;\n  font-size: 15px;\n  padding: 13px 12px;\n  letter-spacing: 1px;\n  font-weight: 700; }\n.flatpickr-months[_ngcontent-%COMP%]   .flatpickr-month[_ngcontent-%COMP%] {\n  height: 76px; }\n.flatpickr-day.flatpickr-disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #e0e6ed; }\n.flatpickr-day.flatpickr-disabled[_ngcontent-%COMP%]:hover {\n    cursor: not-allowed;\n    color: #e0e6ed; }\nspan.flatpickr-weekday[_ngcontent-%COMP%] {\n  color: #888ea8; }\n.flatpickr-day[_ngcontent-%COMP%] {\n  color: #3b3f5c;\n  font-weight: 700; }\n.flatpickr-day.selected[_ngcontent-%COMP%], .flatpickr-day.startRange[_ngcontent-%COMP%], .flatpickr-day.endRange[_ngcontent-%COMP%], .flatpickr-day.selected.inRange[_ngcontent-%COMP%], .flatpickr-day.startRange.inRange[_ngcontent-%COMP%], .flatpickr-day.endRange.inRange[_ngcontent-%COMP%], .flatpickr-day.selected[_ngcontent-%COMP%]:focus, .flatpickr-day.startRange[_ngcontent-%COMP%]:focus, .flatpickr-day.endRange[_ngcontent-%COMP%]:focus, .flatpickr-day.selected[_ngcontent-%COMP%]:hover, .flatpickr-day.startRange[_ngcontent-%COMP%]:hover, .flatpickr-day.endRange[_ngcontent-%COMP%]:hover, .flatpickr-day.selected.prevMonthDay[_ngcontent-%COMP%], .flatpickr-day.startRange.prevMonthDay[_ngcontent-%COMP%], .flatpickr-day.endRange.prevMonthDay[_ngcontent-%COMP%], .flatpickr-day.selected.nextMonthDay[_ngcontent-%COMP%], .flatpickr-day.startRange.nextMonthDay[_ngcontent-%COMP%], .flatpickr-day.endRange.nextMonthDay[_ngcontent-%COMP%] {\n    background: #1b55e2;\n    color: #fff;\n    border-color: #1b55e2;\n    font-weight: 500; }\n@supports (-webkit-overflow-scrolling: touch) {\n  .form-control[_ngcontent-%COMP%] {\n    height: auto; } }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1mbGF0cGlja3IucnRsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUlDO0FBQ0Q7Ozs7Q0FJQztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFFYixpREFBaUQ7RUFDakQseUJBQXlCLEVBQUU7QUFDM0I7SUFDRSxxQkFBcUI7SUFDckIsWUFBWSxFQUFFO0FBQ2hCO0lBQ0UsNEJBQTRCLEVBQUU7QUFDaEM7SUFDRSxpQkFBaUIsRUFBRTtBQUNyQjtJQUNFLGlCQUFpQixFQUFFO0FBRXZCO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBRTtBQUVoQjtFQUNFLGFBQWEsRUFBRTtBQUVqQjtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUU7QUFFcEI7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBRTtBQUVwQjtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBRTtBQUVwQjtFQUNFLFlBQVksRUFBRTtBQUVoQjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUU7QUFDaEI7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYyxFQUFFO0FBRXBCO0VBQ0UsY0FBYyxFQUFFO0FBRWxCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFFO0FBQ2xCO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZ0JBQWdCLEVBQUU7QUFFdEI7RUFDRTtJQUNFLFlBQVksRUFBRSxFQUFFIiwiZmlsZSI6ImN1c3RvbS1mbGF0cGlja3IucnRsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdFx0XHRASW1wb3J0XHRGdW5jdGlvblxyXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cbi8qXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdFx0XHRASW1wb3J0XHRNaXhpbnNcclxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXG4uZmxhdHBpY2tyLWNhbGVuZGFyIHtcbiAgd2lkdGg6IDMzNi44NzVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMnB4IDVweCAxN3B4IDAgcmdiYSgzMSwgNDUsIDYxLCAwLjEpO1xuICBib3gtc2hhZG93OiAtMnB4IDVweCAxN3B4IDAgcmdiYSgzMSwgNDUsIDYxLCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZjOWQ0OyB9XG4gIC5mbGF0cGlja3ItY2FsZW5kYXIub3BlbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHotaW5kZXg6IDkwMDsgfVxuICAuZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ViZWRmMjsgfVxuICAuZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZSB7XG4gICAgYm9yZGVyLXdpZHRoOiA5cHg7IH1cbiAgLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciB7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7IH1cblxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoLCAuZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGgge1xuICB0b3A6IDglO1xuICBwYWRkaW5nOiA1cHggMTNweDtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDQwcHg7IH1cblxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyIHN2ZywgLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICMxYjU1ZTI7IH1cblxuLmZsYXRwaWNrci1kYXkudG9kYXkge1xuICBib3JkZXItY29sb3I6ICMxYjU1ZTI7XG4gIGNvbG9yOiAjMWI1NWUyO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAuZmxhdHBpY2tyLW1vbnRoRHJvcGRvd24tbW9udGhzIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZjOWQ0O1xuICBjb2xvcjogIzNiM2Y1YztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZjOWQ0O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGNvbG9yOiAjM2IzZjVjO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEzcHggMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW1vbnRoIHtcbiAgaGVpZ2h0OiA3NnB4OyB9XG5cbi5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGNvbG9yOiAjZTBlNmVkOyB9XG4gIC5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZDpob3ZlciB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBjb2xvcjogI2UwZTZlZDsgfVxuXG5zcGFuLmZsYXRwaWNrci13ZWVrZGF5IHtcbiAgY29sb3I6ICM4ODhlYTg7IH1cblxuLmZsYXRwaWNrci1kYXkge1xuICBjb2xvcjogIzNiM2Y1YztcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuICAuZmxhdHBpY2tyLWRheS5zZWxlY3RlZCwgLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZSwgLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UsIC5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLmluUmFuZ2UsIC5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuaW5SYW5nZSwgLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuaW5SYW5nZSwgLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQ6Zm9jdXMsIC5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6Zm9jdXMsIC5mbGF0cGlja3ItZGF5LmVuZFJhbmdlOmZvY3VzLCAuZmxhdHBpY2tyLWRheS5zZWxlY3RlZDpob3ZlciwgLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpob3ZlciwgLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6aG92ZXIsIC5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnByZXZNb250aERheSwgLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5wcmV2TW9udGhEYXksIC5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnByZXZNb250aERheSwgLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQubmV4dE1vbnRoRGF5LCAuZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLm5leHRNb250aERheSwgLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UubmV4dE1vbnRoRGF5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWI1NWUyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogIzFiNTVlMjtcbiAgICBmb250LXdlaWdodDogNTAwOyB9XG5cbkBzdXBwb3J0cyAoLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoKSB7XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogYXV0bzsgfSB9XG4iXX0= */", "input[_ngcontent-%COMP%]{\n    background: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUuaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJkYXRlLmlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ "6tZz":
/*!****************************************************************************************!*\
  !*** ./src/app/back-end/shared/form-inputs/text-big-input/text.big.input.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TextBigInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBigInputComponent", function() { return TextBigInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["app-text-big-input", ""];
function TextBigInputComponent_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "small", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class TextBigInputComponent {
    constructor(u) {
        this.u = u;
    }
} //End Class
TextBigInputComponent.ɵfac = function TextBigInputComponent_Factory(t) { return new (t || TextBigInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
TextBigInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextBigInputComponent, selectors: [["", "app-text-big-input", ""]], inputs: { form: "form", _formControlName: ["fcn", "_formControlName"], lable: "lable", formSubmitError: "formSubmitError" }, attrs: _c0, decls: 4, vars: 4, consts: [[3, "formGroup"], [3, "innerHtml"], ["type", "text", 1, "form-control", 3, "formControlName"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], [1, "invalid-data", 3, "innerHtml"]], template: function TextBigInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextBigInputComponent_small_3_Template, 1, 1, "small", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.lable, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx._formControlName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitError && ctx.form.get(ctx._formControlName).hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "C0Yq":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
/*! exports provided: createDateFormatter, createDateParser, compareDates, compareTimes, isBetween, duration, getDefaultHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDateFormatter", function() { return createDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDateParser", function() { return createDateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDates", function() { return compareDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTimes", function() { return compareTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetween", function() { return isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultHours", function() { return getDefaultHours; });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ "gsBn");
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/options */ "nFBg");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../l10n/default */ "TkX7");



const createDateFormatter = ({ config = _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"], l10n = _l10n_default__WEBPACK_IMPORTED_MODULE_2__["english"], isMobile = false, }) => (dateObj, frmt, overrideLocale) => {
    const locale = overrideLocale || l10n;
    if (config.formatDate !== undefined && !isMobile) {
        return config.formatDate(dateObj, frmt, locale);
    }
    return frmt
        .split("")
        .map((c, i, arr) => _formatting__WEBPACK_IMPORTED_MODULE_0__["formats"][c] && arr[i - 1] !== "\\"
        ? _formatting__WEBPACK_IMPORTED_MODULE_0__["formats"][c](dateObj, locale, config)
        : c !== "\\"
            ? c
            : "")
        .join("");
};
const createDateParser = ({ config = _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"], l10n = _l10n_default__WEBPACK_IMPORTED_MODULE_2__["english"] }) => (date, givenFormat, timeless, customLocale) => {
    if (date !== 0 && !date)
        return undefined;
    const locale = customLocale || l10n;
    let parsedDate;
    const dateOrig = date;
    if (date instanceof Date)
        parsedDate = new Date(date.getTime());
    else if (typeof date !== "string" &&
        date.toFixed !== undefined)
        parsedDate = new Date(date);
    else if (typeof date === "string") {
        const format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"]).dateFormat;
        const datestr = String(date).trim();
        if (datestr === "today") {
            parsedDate = new Date();
            timeless = true;
        }
        else if (/Z$/.test(datestr) ||
            /GMT$/.test(datestr))
            parsedDate = new Date(date);
        else if (config && config.parseDate)
            parsedDate = config.parseDate(date, format);
        else {
            parsedDate =
                !config || !config.noCalendar
                    ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                    : new Date(new Date().setHours(0, 0, 0, 0));
            let matched, ops = [];
            for (let i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                const token = format[i];
                const isBackSlash = token === "\\";
                const escaped = format[i - 1] === "\\" || isBackSlash;
                if (_formatting__WEBPACK_IMPORTED_MODULE_0__["tokenRegex"][token] && !escaped) {
                    regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__["tokenRegex"][token];
                    const match = new RegExp(regexStr).exec(date);
                    if (match && (matched = true)) {
                        ops[token !== "Y" ? "push" : "unshift"]({
                            fn: _formatting__WEBPACK_IMPORTED_MODULE_0__["revFormat"][token],
                            val: match[++matchIndex],
                        });
                    }
                }
                else if (!isBackSlash)
                    regexStr += ".";
                ops.forEach(({ fn, val }) => (parsedDate = fn(parsedDate, val, locale) || parsedDate));
            }
            parsedDate = matched ? parsedDate : undefined;
        }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
        config.errorHandler(new Error(`Invalid date provided: ${dateOrig}`));
        return undefined;
    }
    if (timeless === true)
        parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
};
function compareDates(date1, date2, timeless = true) {
    if (timeless !== false) {
        return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
            new Date(date2.getTime()).setHours(0, 0, 0, 0));
    }
    return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
    return (3600 * (date1.getHours() - date2.getHours()) +
        60 * (date1.getMinutes() - date2.getMinutes()) +
        date1.getSeconds() -
        date2.getSeconds());
}
const isBetween = (ts, ts1, ts2) => {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
const duration = {
    DAY: 86400000,
};
function getDefaultHours(config) {
    let hours = config.defaultHour;
    let minutes = config.defaultMinute;
    let seconds = config.defaultSeconds;
    if (config.minDate !== undefined) {
        const minHour = config.minDate.getHours();
        const minMinutes = config.minDate.getMinutes();
        const minSeconds = config.minDate.getSeconds();
        if (hours < minHour) {
            hours = minHour;
        }
        if (hours === minHour && minutes < minMinutes) {
            minutes = minMinutes;
        }
        if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
            seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== undefined) {
        const maxHr = config.maxDate.getHours();
        const maxMinutes = config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr)
            minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes)
            seconds = config.maxDate.getSeconds();
    }
    return { hours, minutes, seconds };
}


/***/ }),

/***/ "FOL+":
/*!************************************************************************************!*\
  !*** ./src/app/back-end/shared/form-inputs/report-input/report.input.component.ts ***!
  \************************************************************************************/
/*! exports provided: RepportInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepportInputComponent", function() { return RepportInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["app-report-input", ""];
class RepportInputComponent {
    constructor() {
        this.titel = "";
        this.data = "";
    }
} //End Class
RepportInputComponent.ɵfac = function RepportInputComponent_Factory(t) { return new (t || RepportInputComponent)(); };
RepportInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepportInputComponent, selectors: [["", "app-report-input", ""]], inputs: { titel: "titel", data: "data" }, attrs: _c0, decls: 3, vars: 2, consts: [[3, "innerText"]], template: function RepportInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "b", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.titel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.data || "");
    } }, styles: [".mt-container[_ngcontent-%COMP%]    {\n          height: auto;\n        }\n        .no-borader[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{\n          border:none !important\n        }\n    \n        h6[_ngcontent-%COMP%]{\n          display: inline-block;\n          color:#1b55e2;\n          font-weight: 700;\n        font-size: 13px;\n        letter-spacing: 1px;\n        text-transform: uppercase;\n        }\n    \n        h6[_ngcontent-%COMP%]:after{\n          content:':'\n        }"] });


/***/ }),

/***/ "HTjQ":
/*!********************************************************************************!*\
  !*** ./src/app/back-end/shared/form-inputs/report-url/report.url.component.ts ***!
  \********************************************************************************/
/*! exports provided: RepportUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepportUrlComponent", function() { return RepportUrlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["app-report-url", ""];
class RepportUrlComponent {
    constructor() {
        this.titel = "";
        this.data = "";
    }
} //End Class
RepportUrlComponent.ɵfac = function RepportUrlComponent_Factory(t) { return new (t || RepportUrlComponent)(); };
RepportUrlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepportUrlComponent, selectors: [["", "app-report-url", ""]], inputs: { titel: "titel", data: "data" }, attrs: _c0, decls: 4, vars: 2, consts: [[3, "innerText"], ["target", "_blank", 3, "href"]], template: function RepportUrlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0641\u062A\u062D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.titel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".mt-container[_ngcontent-%COMP%]    {\n          height: auto;\n        }\n        .no-borader[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{\n          border:none !important\n        }\n    \n        h6[_ngcontent-%COMP%]{\n          display: inline-block;\n          color:#1b55e2;\n          font-weight: 700;\n        font-size: 13px;\n        letter-spacing: 1px;\n        text-transform: uppercase;\n        }\n    \n        h6[_ngcontent-%COMP%]:after{\n          content:':'\n        }"] });


/***/ }),

/***/ "N3r0":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
/*! exports provided: pad, int, debounce, arrayify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function() { return int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayify", function() { return arrayify; });
const pad = (number, length = 2) => `000${number}`.slice(length * -1);
const int = (bool) => (bool === true ? 1 : 0);
function debounce(fn, wait) {
    let t;
    return function () {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, arguments), wait);
    };
}
const arrayify = (obj) => obj instanceof Array ? obj : [obj];


/***/ }),

/***/ "QkSp":
/*!********************************************************************************!*\
  !*** ./src/app/back-end/shared/form-inputs/text-input/text.input.component.ts ***!
  \********************************************************************************/
/*! exports provided: TextInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputComponent", function() { return TextInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["app-text-input", ""];
const _c1 = function (a0, a1) { return { "fa-check": a0, "fa-pen": a1 }; };
function TextInputComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextInputComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.allowToEditToggl(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.isAllowEdit ? ctx_r0.u.r.frezzInput : ctx_r0.u.r.unFreezeToEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx_r0.isAllowEdit, !ctx_r0.isAllowEdit));
} }
function TextInputComponent_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "small", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r1.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TextInputComponent_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "small", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r2.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TextInputComponent_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "small", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r3.u.r.invalidUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TextInputComponent_small_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "small", 8);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r4.u.r.invalidPhoneNumber, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TextInputComponent_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "small", 8);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r5.u.r.minimumNumbersIs + " " + ctx_r5.form.get(ctx_r5._formControlName).errors.min.min, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class TextInputComponent {
    constructor(u) {
        this.u = u;
        /**
         * من اجل اضافة زر تعديل فى الحقل  اذا كان يريد ذالك
         */
        this.isShowAllowEditButton = false;
        /**
         * Toggl Flag
         * حقل من اجل التحقق هل نسمح بعتح العنصر للتعديل ام لا
         */
        this.isAllowEdit = false;
    }
    /** Allow Input Edit Toggl */
    allowToEditToggl() {
        //Update Toggle Flag
        this.isAllowEdit = !this.isAllowEdit;
        if (this.isAllowEdit)
            this.form.controls[this._formControlName].enable();
        else
            this.form.controls[this._formControlName].disable();
    }
} //End Class
TextInputComponent.ɵfac = function TextInputComponent_Factory(t) { return new (t || TextInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
TextInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextInputComponent, selectors: [["", "app-text-input", ""]], inputs: { form: "form", _formControlName: ["fcn", "_formControlName"], lable: "lable", formSubmitError: "formSubmitError", isShowAllowEditButton: "isShowAllowEditButton" }, attrs: _c0, decls: 9, vars: 9, consts: [[3, "innerHtml"], [1, "input-group", 3, "formGroup"], ["class", "input-group-prepend cursor-pointer", 3, "title", "click", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "formControlName"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], [1, "input-group-prepend", "cursor-pointer", 3, "title", "click"], ["id", "basic-addon3", 1, "input-group-text"], [1, "fas", 3, "ngClass"], [1, "invalid-data", 3, "innerHtml"]], template: function TextInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextInputComponent_div_2_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TextInputComponent_small_4_Template, 1, 1, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TextInputComponent_small_5_Template, 1, 1, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TextInputComponent_small_6_Template, 1, 1, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TextInputComponent_small_7_Template, 1, 1, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TextInputComponent_small_8_Template, 1, 1, "small", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.lable, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowAllowEditButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx._formControlName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitError && ctx.form.get(ctx._formControlName).hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitError && ctx.form.get(ctx._formControlName).hasError("invalidNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitError && ctx.form.get(ctx._formControlName).hasError("invalidUrl"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitError && ctx.form.get(ctx._formControlName).hasError("invalidPhoneNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitError && ctx.form.get(ctx._formControlName).hasError("min"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], encapsulation: 2 });


/***/ }),

/***/ "R6pW":
/*!**********************************************************************************!*\
  !*** ./src/app/back-end/shared/form-inputs/color-input/color.input.component.ts ***!
  \**********************************************************************************/
/*! exports provided: colorInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorInputComponent", function() { return colorInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["app-color-input", ""];
function colorInputComponent_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "small", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class colorInputComponent {
    constructor(u) {
        this.u = u;
    }
} //End Class
colorInputComponent.ɵfac = function colorInputComponent_Factory(t) { return new (t || colorInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
colorInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: colorInputComponent, selectors: [["", "app-color-input", ""]], inputs: { form: "form", _formControlName: ["fcn", "_formControlName"], lable: "lable", formSubmitError: "formSubmitError" }, attrs: _c0, decls: 4, vars: 4, consts: [[3, "formGroup"], [3, "innerHtml"], ["type", "color", 1, "form-control", 3, "formControlName"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], [1, "invalid-data", 3, "innerHtml"]], template: function colorInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, colorInputComponent_small_3_Template, 1, 1, "small", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.lable, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx._formControlName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitError && ctx.form.get(ctx._formControlName).hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["input[_ngcontent-%COMP%]{\n\n    height: 50px;\n}"] });


/***/ }),

/***/ "TkX7":
/*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
/*! exports provided: english, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "english", function() { return english; });
const english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: (nth) => {
        const s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false,
};
/* harmony default export */ __webpack_exports__["default"] = (english);


/***/ }),

/***/ "X2Dv":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/options */ "nFBg");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l10n/default */ "TkX7");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "N3r0");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "YqbJ");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dates */ "C0Yq");
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/formatting */ "gsBn");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/polyfills */ "cW3J");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);







const DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
    const self = {
        config: Object.assign(Object.assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"]), flatpickr.defaultConfig),
        l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"],
    };
    self.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({ config: self.config, l10n: self.l10n });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"];
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth(month = self.currentMonth, yr = self.currentYear) {
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
            build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            }
            updateValue(false);
        }
        setCalendarWidth();
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) {
            positionCalendar();
        }
        triggerEvent("onReady");
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function setCalendarWidth() {
        const config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) {
            return;
        }
        else if (config.noCalendar !== true) {
            window.requestAnimationFrame(function () {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.style.visibility = "hidden";
                    self.calendarContainer.style.display = "block";
                }
                if (self.daysContainer !== undefined) {
                    const daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                    self.daysContainer.style.width = daysWidth + "px";
                    self.calendarContainer.style.width =
                        daysWidth +
                            (self.weekWrapper !== undefined
                                ? self.weekWrapper.offsetWidth
                                : 0) +
                            "px";
                    self.calendarContainer.style.removeProperty("visibility");
                    self.calendarContainer.style.removeProperty("display");
                }
            });
        }
    }
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            const defaultDate = self.config.minDate === undefined ||
                Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(new Date(), self.config.minDate) >= 0
                ? new Date()
                : new Date(self.config.minDate.getTime());
            const defaults = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [defaultDate];
            self.latestSelectedDateObj = defaultDate;
        }
        if (e !== undefined && e.type !== "blur") {
            timeWrapper(e);
        }
        const prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) {
            self._debouncedChange();
        }
    }
    function ampm2military(hour, amPM) {
        return (hour % 12) + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(amPM === self.l10n.amPM[1]);
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        let hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined) {
            hours = ampm2military(hours, self.amPM.textContent);
        }
        const limitMinHours = self.config.minTime !== undefined ||
            (self.config.minDate &&
                self.minDateHasTime &&
                self.latestSelectedDateObj &&
                Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.latestSelectedDateObj, self.config.minDate, true) ===
                    0);
        const limitMaxHours = self.config.maxTime !== undefined ||
            (self.config.maxDate &&
                self.maxDateHasTime &&
                self.latestSelectedDateObj &&
                Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.latestSelectedDateObj, self.config.maxDate, true) ===
                    0);
        if (limitMaxHours) {
            const maxTime = self.config.maxTime !== undefined
                ? self.config.maxTime
                : self.config.maxDate;
            hours = Math.min(hours, maxTime.getHours());
            if (hours === maxTime.getHours())
                minutes = Math.min(minutes, maxTime.getMinutes());
            if (minutes === maxTime.getMinutes())
                seconds = Math.min(seconds, maxTime.getSeconds());
        }
        if (limitMinHours) {
            const minTime = self.config.minTime !== undefined
                ? self.config.minTime
                : self.config.minDate;
            hours = Math.max(hours, minTime.getHours());
            if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                minutes = minTime.getMinutes();
            if (minutes === minTime.getMinutes())
                seconds = Math.max(seconds, minTime.getSeconds());
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        const date = dateObj || self.latestSelectedDateObj;
        if (date) {
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(!self.config.time_24hr
            ? ((12 + hours) % 12) + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(hours % 12 === 0)
            : hours);
        self.minuteElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(hours >= 12)];
        if (self.secondElement !== undefined)
            self.secondElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(seconds);
    }
    function onYearInput(event) {
        const eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(event);
        const year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 ||
            (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
            changeYear(year);
        }
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array)
            return event.forEach((ev) => bind(element, ev, handler, options));
        if (element instanceof Array)
            return element.forEach((el) => bind(el, event, handler, options));
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: () => element.removeEventListener(event, handler),
        });
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach((evt) => {
                Array.prototype.forEach.call(self.element.querySelectorAll(`[data-${evt}]`), (el) => bind(el, "click", self[evt]));
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        const debouncedResize = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(onResize, 50);
        self._debouncedChange = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
            bind(self.daysContainer, "mouseover", (e) => {
                if (self.config.mode === "range")
                    onMouseOver(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e));
            });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document, "touchstart", documentClick);
        else
            bind(window.document, "mousedown", documentClick);
        bind(window.document, "focus", documentClick, { capture: true });
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
        }
        if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "click", selectDate);
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            const selText = (e) => Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e).select();
            bind(self.timeContainer, ["increment"], updateTime);
            bind(self.timeContainer, "blur", updateTime, { capture: true });
            bind(self.timeContainer, "click", timeIncrement);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", () => self.secondElement && self.secondElement.select());
            if (self.amPM !== undefined) {
                bind(self.amPM, "click", (e) => {
                    updateTime(e);
                    triggerChange();
                });
            }
        }
        if (self.config.allowInput) {
            bind(self._input, "blur", onBlur);
        }
    }
    function jumpToDate(jumpDate, triggerChange) {
        const jumpTo = jumpDate !== undefined
            ? self.parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        const oldYear = self.currentYear;
        const oldMonth = self.currentMonth;
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
        }
        if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        if (triggerChange &&
            (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
            triggerEvent("onMonthChange");
        }
        self.redraw();
    }
    function timeIncrement(e) {
        const eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
        if (~eventTarget.className.indexOf("arrow"))
            incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        const target = e && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
        const input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        const event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        const fragment = window.document.createDocumentFragment();
        self.calendarContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                const { weekWrapper, weekNumbers } = buildWeeks();
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rangeMode", self.config.mode === "range");
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "animate", self.config.animate === true);
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        const customAppend = self.config.appendTo !== undefined &&
            self.config.appendTo.nodeType !== undefined;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline) {
                if (!customAppend && self.element.parentNode)
                    self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                else if (self.config.appendTo !== undefined)
                    self.config.appendTo.appendChild(self.calendarContainer);
            }
            if (self.config.static) {
                const wrapper = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, dayNumber, i) {
        const dateIsEnabled = isEnabled(date, true), dayElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 &&
            Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
            dayElement.setAttribute("aria-current", "date");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(dayElement, "startRange", self.selectedDates[0] &&
                        Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[0], true) === 0);
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(dayElement, "endRange", self.selectedDates[1] &&
                        Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[1], true) === 0);
                    if (className === "nextMonthDay")
                        dayElement.classList.add("inRange");
                }
            }
        }
        else {
            dayElement.classList.add("flatpickr-disabled");
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
        }
        if (self.weekNumbers &&
            self.config.showMonths === 1 &&
            className !== "prevMonthDay" &&
            dayNumber % 7 === 1) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range")
            onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
        const startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        const endMonth = delta > 0 ? self.config.showMonths : -1;
        for (let m = startMonth; m != endMonth; m += delta) {
            const month = self.daysContainer.children[m];
            const startIndex = delta > 0 ? 0 : month.children.length - 1;
            const endIndex = delta > 0 ? month.children.length : -1;
            for (let i = startIndex; i != endIndex; i += delta) {
                const c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                    return c;
            }
        }
        return undefined;
    }
    function getNextAvailableDay(current, delta) {
        const givenMonth = current.className.indexOf("Month") === -1
            ? current.dateObj.getMonth()
            : self.currentMonth;
        const endMonth = delta > 0 ? self.config.showMonths : -1;
        const loopDelta = delta > 0 ? 1 : -1;
        for (let m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
            const month = self.daysContainer.children[m];
            const startIndex = givenMonth - self.currentMonth === m
                ? current.$i + delta
                : delta < 0
                    ? month.children.length - 1
                    : 0;
            const numMonthDays = month.children.length;
            for (let i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                const c = month.children[i];
                if (c.className.indexOf("hidden") === -1 &&
                    isEnabled(c.dateObj) &&
                    Math.abs(current.$i - i) >= Math.abs(delta))
                    return focusOnDayElem(c);
            }
        }
        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
    }
    function focusOnDay(current, offset) {
        const dayFocused = isInView(document.activeElement || document.body);
        const startElem = current !== undefined
            ? current
            : dayFocused
                ? document.activeElement
                : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                    ? self.selectedDateElem
                    : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                        ? self.todayDateElem
                        : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) {
            self._input.focus();
        }
        else if (!dayFocused) {
            focusOnDayElem(startElem);
        }
        else {
            getNextAvailableDay(startElem, offset);
        }
    }
    function buildMonthDays(year, month) {
        const firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        const prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
        const daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        let dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }
        for (let dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
            (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        const dayContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) {
            return;
        }
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.daysContainer);
        if (self.weekNumbers)
            Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.weekNumbers);
        const frag = document.createDocumentFragment();
        for (let i = 0; i < self.config.showMonths; i++) {
            const d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }
        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;
        if (self.config.mode === "range" && self.selectedDates.length === 1) {
            onMouseOver();
        }
    }
    function buildMonthSwitch() {
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType !== "dropdown")
            return;
        const shouldBuildMonth = function (month) {
            if (self.config.minDate !== undefined &&
                self.currentYear === self.config.minDate.getFullYear() &&
                month < self.config.minDate.getMonth()) {
                return false;
            }
            return !(self.config.maxDate !== undefined &&
                self.currentYear === self.config.maxDate.getFullYear() &&
                month > self.config.maxDate.getMonth());
        };
        self.monthsDropdownContainer.tabIndex = -1;
        self.monthsDropdownContainer.innerHTML = "";
        for (let i = 0; i < 12; i++) {
            if (!shouldBuildMonth(i))
                continue;
            const month = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", "flatpickr-monthDropdown-month");
            month.value = new Date(self.currentYear, i).getMonth().toString();
            month.textContent = Object(_utils_formatting__WEBPACK_IMPORTED_MODULE_5__["monthToStr"])(i, self.config.shorthandCurrentMonth, self.l10n);
            month.tabIndex = -1;
            if (self.currentMonth === i) {
                month.selected = true;
            }
            self.monthsDropdownContainer.appendChild(month);
        }
    }
    function buildMonth() {
        const container = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-month");
        const monthNavFragment = window.document.createDocumentFragment();
        let monthElement;
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType === "static") {
            monthElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "cur-month");
        }
        else {
            self.monthsDropdownContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", (e) => {
                const target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
                const selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent("onMonthChange");
            });
            buildMonthSwitch();
            monthElement = self.monthsDropdownContainer;
        }
        const yearInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("cur-year", { tabindex: "-1" });
        const yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) {
            yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        }
        if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        const currentMonth = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
            container,
            yearElement,
            monthElement,
        };
    }
    function buildMonths() {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);
        if (self.config.showMonths) {
            self.yearElements = [];
            self.monthElements = [];
        }
        for (let m = self.config.showMonths; m--;) {
            const month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
        }
        self.monthNav.appendChild(self.nextMonthNav);
    }
    function buildMonthNav() {
        self.monthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: () => self.__hidePrevMonthArrow,
            set(bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.prevMonthNav, "flatpickr-disabled", bool);
                    self.__hidePrevMonthArrow = bool;
                }
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: () => self.__hideNextMonthArrow,
            set(bool) {
                if (self.__hideNextMonthArrow !== bool) {
                    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.nextMonthNav, "flatpickr-disabled", bool);
                    self.__hideNextMonthArrow = bool;
                }
            },
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        const defaults = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config);
        self.timeContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        const separator = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-time-separator", ":");
        const hourInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel,
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        const minuteInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel,
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? defaults.hours
                : military2ampm(defaults.hours));
        self.minuteElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.hourElement.setAttribute("maxlength", "2");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.minuteElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
            self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            const secondInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-am-pm", self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer)
            self.weekdayContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekdays");
        else
            Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.weekdayContainer);
        for (let i = self.config.showMonths; i--;) {
            const container = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
    }
    function updateWeekdays() {
        if (!self.weekdayContainer) {
            return;
        }
        const firstDayOfWeek = self.l10n.firstDayOfWeek;
        let weekdays = [...self.l10n.weekdays.shorthand];
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = [
                ...weekdays.splice(firstDayOfWeek, weekdays.length),
                ...weekdays.splice(0, firstDayOfWeek),
            ];
        }
        for (let i = self.config.showMonths; i--;) {
            self.weekdayContainer.children[i].innerHTML = `
      <span class='flatpickr-weekday'>
        ${weekdays.join("</span><span class='flatpickr-weekday'>")}
      </span>
      `;
        }
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        const weekWrapper = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        const weekNumbers = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper,
            weekNumbers,
        };
    }
    function changeMonth(value, isOffset = true) {
        const delta = isOffset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow === true) ||
            (delta > 0 && self._hideNextMonthArrow === true))
            return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
    }
    function clear(triggerChangeEvent = true, toInitial = true) {
        self.input.value = "";
        if (self.altInput !== undefined)
            self.altInput.value = "";
        if (self.mobileInput !== undefined)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
        }
        if (self.config.enableTime === true) {
            const { hours, minutes, seconds } = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config);
            setHours(hours, minutes, seconds);
        }
        self.redraw();
        if (triggerChangeEvent)
            triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            if (self.calendarContainer !== undefined) {
                self.calendarContainer.classList.remove("open");
            }
            if (self._input !== undefined) {
                self._input.classList.remove("active");
            }
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        for (let i = self._handlers.length; i--;) {
            self._handlers[i].remove();
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config.static && self.calendarContainer.parentNode) {
                const wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                    while (wrapper.firstChild)
                        wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                }
            }
            else
                self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode)
                self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "monthsDropdownContainer",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
        ].forEach((k) => {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem))
            return true;
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            const eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
            const isCalendarElement = isCalendarElem(eventTarget);
            const isInput = eventTarget === self.input ||
                eventTarget === self.altInput ||
                self.element.contains(eventTarget) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            const lostFocus = e.type === "blur"
                ? isInput &&
                    e.relatedTarget &&
                    !isCalendarElem(e.relatedTarget)
                : !isInput &&
                    !isCalendarElement &&
                    !isCalendarElem(e.relatedTarget);
            const isIgnored = !self.config.ignoredFocusElements.some((elem) => elem.contains(eventTarget));
            if (lostFocus && isIgnored) {
                if (self.timeContainer !== undefined &&
                    self.minuteElement !== undefined &&
                    self.hourElement !== undefined &&
                    self.input.value !== "" &&
                    self.input.value !== undefined) {
                    updateTime();
                }
                self.close();
                if (self.config &&
                    self.config.mode === "range" &&
                    self.selectedDates.length === 1) {
                    self.clear(false);
                    self.redraw();
                }
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
            (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
            return;
        const newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
    }
    function isEnabled(date, timeless = true) {
        var _a;
        const dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable && self.config.disable.length === 0)
            return true;
        if (dateToCheck === undefined)
            return false;
        const bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for (let i = 0, d; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string") {
                const parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function isInView(elem) {
        if (self.daysContainer !== undefined)
            return (elem.className.indexOf("hidden") === -1 &&
                elem.className.indexOf("flatpickr-disabled") === -1 &&
                self.daysContainer.contains(elem));
        return false;
    }
    function onBlur(e) {
        const isInput = e.target === self._input;
        if (isInput &&
            (self.selectedDates.length > 0 || self._input.value.length > 0) &&
            !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
            self.setDate(self._input.value, true, e.target === self.altInput
                ? self.config.altFormat
                : self.config.dateFormat);
        }
    }
    function onKeyDown(e) {
        const eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
        const isInput = self.config.wrap
            ? element.contains(eventTarget)
            : eventTarget === self._input;
        const allowInput = self.config.allowInput;
        const allowKeydown = self.isOpen && (!allowInput || !isInput);
        const allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, eventTarget === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                return eventTarget.blur();
            }
            else {
                self.open();
            }
        }
        else if (isCalendarElem(eventTarget) ||
            allowKeydown ||
            allowInlineKeydown) {
            const isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(eventTarget);
            switch (e.keyCode) {
                case 13:
                    if (isTimeObj) {
                        e.preventDefault();
                        updateTime();
                        focusAndClose();
                    }
                    else
                        selectDate(e);
                    break;
                case 27:
                    e.preventDefault();
                    focusAndClose();
                    break;
                case 8:
                case 46:
                    if (isInput && !self.config.allowInput) {
                        e.preventDefault();
                        self.clear();
                    }
                    break;
                case 37:
                case 39:
                    if (!isTimeObj && !isInput) {
                        e.preventDefault();
                        if (self.daysContainer !== undefined &&
                            (allowInput === false ||
                                (document.activeElement && isInView(document.activeElement)))) {
                            const delta = e.keyCode === 39 ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(undefined, delta);
                            else {
                                e.stopPropagation();
                                changeMonth(delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case 38:
                case 40:
                    e.preventDefault();
                    const delta = e.keyCode === 40 ? 1 : -1;
                    if ((self.daysContainer &&
                        eventTarget.$i !== undefined) ||
                        eventTarget === self.input ||
                        eventTarget === self.altInput) {
                        if (e.ctrlKey) {
                            e.stopPropagation();
                            changeYear(self.currentYear - delta);
                            focusOnDay(getFirstAvailableDay(1), 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(undefined, delta * 7);
                    }
                    else if (eventTarget === self.currentYearElement) {
                        changeYear(self.currentYear - delta);
                    }
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement)
                            self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case 9:
                    if (isTimeObj) {
                        const elems = [
                            self.hourElement,
                            self.minuteElement,
                            self.secondElement,
                            self.amPM,
                        ]
                            .concat(self.pluginElements)
                            .filter((x) => x);
                        const i = elems.indexOf(eventTarget);
                        if (i !== -1) {
                            const target = elems[i + (e.shiftKey ? -1 : 1)];
                            e.preventDefault();
                            (target || self._input).focus();
                        }
                    }
                    else if (!self.config.noCalendar &&
                        self.daysContainer &&
                        self.daysContainer.contains(eventTarget) &&
                        e.shiftKey) {
                        e.preventDefault();
                        self._input.focus();
                    }
                    break;
                default:
                    break;
            }
        }
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            switch (e.key) {
                case self.l10n.amPM[0].charAt(0):
                case self.l10n.amPM[0].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[0];
                    setHoursFromInputs();
                    updateValue();
                    break;
                case self.l10n.amPM[1].charAt(0):
                case self.l10n.amPM[1].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[1];
                    setHoursFromInputs();
                    updateValue();
                    break;
            }
        }
        if (isInput || isCalendarElem(eventTarget)) {
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 ||
            (elem &&
                (!elem.classList.contains("flatpickr-day") ||
                    elem.classList.contains("flatpickr-disabled"))))
            return;
        const hoverDate = elem
            ? elem.dateObj.getTime()
            : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        let containsDisabled = false;
        let minRange = 0, maxRange = 0;
        for (let t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__["duration"].DAY) {
            if (!isEnabled(new Date(t), true)) {
                containsDisabled =
                    containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                if (t < initialDate && (!minRange || t > minRange))
                    minRange = t;
                else if (t > initialDate && (!maxRange || t < maxRange))
                    maxRange = t;
            }
        }
        for (let m = 0; m < self.config.showMonths; m++) {
            const month = self.daysContainer.children[m];
            for (let i = 0, l = month.children.length; i < l; i++) {
                const dayElem = month.children[i], date = dayElem.dateObj;
                const timestamp = date.getTime();
                const outOfRange = (minRange > 0 && timestamp < minRange) ||
                    (maxRange > 0 && timestamp > maxRange);
                if (outOfRange) {
                    dayElem.classList.add("notAllowed");
                    ["inRange", "startRange", "endRange"].forEach((c) => {
                        dayElem.classList.remove(c);
                    });
                    continue;
                }
                else if (containsDisabled && !outOfRange)
                    continue;
                ["startRange", "inRange", "endRange", "notAllowed"].forEach((c) => {
                    dayElem.classList.remove(c);
                });
                if (elem !== undefined) {
                    elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                        ? "startRange"
                        : "endRange");
                    if (initialDate < hoverDate && timestamp === initialDate)
                        dayElem.classList.add("startRange");
                    else if (initialDate > hoverDate && timestamp === initialDate)
                        dayElem.classList.add("endRange");
                    if (timestamp >= minRange &&
                        (maxRange === 0 || timestamp <= maxRange) &&
                        Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["isBetween"])(timestamp, initialDate, hoverDate))
                        dayElem.classList.add("inRange");
                }
            }
        }
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement = self._positionElement) {
        if (self.isMobile === true) {
            if (e) {
                e.preventDefault();
                const eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
                if (eventTarget) {
                    eventTarget.blur();
                }
            }
            if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        }
        else if (self._input.disabled || self.config.inline) {
            return;
        }
        const wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
            self.calendarContainer.classList.add("open");
            self._input.classList.add("active");
            triggerEvent("onOpen");
            positionCalendar(positionElement);
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.config.allowInput === false &&
                (e === undefined ||
                    !self.timeContainer.contains(e.relatedTarget))) {
                setTimeout(() => self.hourElement.select(), 50);
            }
        }
    }
    function minMaxDateSetter(type) {
        return (date) => {
            const dateObj = (self.config[`_${type}Date`] = self.parseDate(date, self.config.dateFormat));
            const inverseDateObj = self.config[`_${type === "min" ? "max" : "min"}Date`];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter((d) => isEnabled(d));
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        const boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "allowInvalidPreload",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile",
        ];
        const userConfig = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
        const formats = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
            get: () => self.config._enable,
            set: (dates) => {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: () => self.config._disable,
            set: (dates) => {
                self.config._disable = parseDateRules(dates);
            },
        });
        const timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            const defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"].dateFormat;
            formats.dateFormat =
                userConfig.noCalendar || timeMode
                    ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                    : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput &&
            (userConfig.enableTime || timeMode) &&
            !userConfig.altFormat) {
            const defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"].altFormat;
            formats.altFormat =
                userConfig.noCalendar || timeMode
                    ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                    : defaultAltFormat + ` h:i${userConfig.enableSeconds ? ":S" : ""} K`;
        }
        Object.defineProperty(self.config, "minDate", {
            get: () => self.config._minDate,
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: () => self.config._maxDate,
            set: minMaxDateSetter("max"),
        });
        const minMaxTimeSetter = (type) => (val) => {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
        };
        Object.defineProperty(self.config, "minTime", {
            get: () => self.config._minTime,
            set: minMaxTimeSetter("min"),
        });
        Object.defineProperty(self.config, "maxTime", {
            get: () => self.config._maxTime,
            set: minMaxTimeSetter("max"),
        });
        if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
        }
        Object.assign(self.config, formats, userConfig);
        for (let i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        _types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].filter((hook) => self.config[hook] !== undefined).forEach((hook) => {
            self.config[hook] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (let i = 0; i < self.config.plugins.length; i++) {
            const pluginConf = self.config.plugins[i](self) || {};
            for (const key in pluginConf) {
                if (_types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].indexOf(key) > -1) {
                    self.config[key] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        if (!userConfig.altInputClass) {
            self.config.altInputClass =
                getInputElem().className + " " + self.config.altInputClass;
        }
        triggerEvent("onParseConfig");
    }
    function getInputElem() {
        return self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            self.config.errorHandler(new Error(`flatpickr: invalid locale ${self.config.locale}`));
        self.l10n = Object.assign(Object.assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined));
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].K = `(${self.l10n.amPM[0]}|${self.l10n.amPM[1]}|${self.l10n.amPM[0].toLowerCase()}|${self.l10n.amPM[1].toLowerCase()})`;
        const userConfig = Object.assign(Object.assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
        if (userConfig.time_24hr === undefined &&
            flatpickr.defaultConfig.time_24hr === undefined) {
            self.config.time_24hr = self.l10n.time_24hr;
        }
        self.formatDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateFormatter"])(self);
        self.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({ config: self.config, l10n: self.l10n });
    }
    function positionCalendar(customPositionElement) {
        if (typeof self.config.position === "function") {
            return void self.config.position(self, customPositionElement);
        }
        if (self.calendarContainer === undefined)
            return;
        triggerEvent("onPreCalendarPosition");
        const positionElement = customPositionElement || self._positionElement;
        const calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, ((acc, child) => acc + child.offsetHeight), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
            (configPosVertical !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        const top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowTop", !showOnTop);
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        let left = window.pageXOffset + inputBounds.left;
        let isCenter = false;
        let isRight = false;
        if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
        }
        else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
        }
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowCenter", isCenter);
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowRight", isRight);
        const right = window.document.body.offsetWidth -
            (window.pageXOffset + inputBounds.right);
        const rightMost = left + calendarWidth > window.document.body.offsetWidth;
        const centerMost = right + calendarWidth > window.document.body.offsetWidth;
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = `${top}px`;
        if (!rightMost) {
            self.calendarContainer.style.left = `${left}px`;
            self.calendarContainer.style.right = "auto";
        }
        else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = `${right}px`;
        }
        else {
            const doc = getDocumentStyleSheet();
            if (doc === undefined)
                return;
            const bodyWidth = window.document.body.offsetWidth;
            const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            const centerBefore = ".flatpickr-calendar.centerMost:before";
            const centerAfter = ".flatpickr-calendar.centerMost:after";
            const centerIndex = doc.cssRules.length;
            const centerStyle = `{left:${inputBounds.left}px;right:auto;}`;
            Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rightMost", false);
            Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "centerMost", true);
            doc.insertRule(`${centerBefore},${centerAfter}${centerStyle}`, centerIndex);
            self.calendarContainer.style.left = `${centerLeft}px`;
            self.calendarContainer.style.right = "auto";
        }
    }
    function getDocumentStyleSheet() {
        let editableSheet = null;
        for (let i = 0; i < document.styleSheets.length; i++) {
            const sheet = document.styleSheets[i];
            try {
                sheet.cssRules;
            }
            catch (err) {
                continue;
            }
            editableSheet = sheet;
            break;
        }
        return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
        const style = document.createElement("style");
        document.head.appendChild(style);
        return style.sheet;
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile)
            return;
        buildMonthSwitch();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function focusAndClose() {
        self._input.focus();
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
            navigator.msMaxTouchPoints !== undefined) {
            setTimeout(self.close, 0);
        }
        else {
            self.close();
        }
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        const isSelectable = (day) => day.classList &&
            day.classList.contains("flatpickr-day") &&
            !day.classList.contains("flatpickr-disabled") &&
            !day.classList.contains("notAllowed");
        const t = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["findParent"])(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e), isSelectable);
        if (t === undefined)
            return;
        const target = t;
        const selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        const shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
            selectedDate.getMonth() >
                self.currentMonth + self.config.showMonths - 1) &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            const selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) {
                self.clear(false, false);
            }
            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if (Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            const isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            triggerEvent("onMonthChange");
        }
        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (!shouldChangeMonth &&
            self.config.mode !== "range" &&
            self.config.showMonths === 1)
            focusOnDayElem(target);
        else if (self.selectedDateElem !== undefined &&
            self.hourElement === undefined) {
            self.selectedDateElem && self.selectedDateElem.focus();
        }
        if (self.hourElement !== undefined)
            self.hourElement !== undefined && self.hourElement.focus();
        if (self.config.closeOnSelect) {
            const single = self.config.mode === "single" && !self.config.enableTime;
            const range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range) {
                focusAndClose();
            }
        }
        triggerChange();
    }
    const CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
        minDate: [jumpToDate],
        maxDate: [jumpToDate],
        clickOpens: [
            () => {
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                else {
                    self._input.removeEventListener("focus", self.open);
                    self._input.removeEventListener("click", self.open);
                }
            },
        ],
    };
    function set(option, value) {
        if (option !== null && typeof option === "object") {
            Object.assign(self.config, option);
            for (const key in option) {
                if (CALLBACKS[key] !== undefined)
                    CALLBACKS[key].forEach((x) => x());
            }
        }
        else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined)
                CALLBACKS[option].forEach((x) => x());
            else if (_types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].indexOf(option) > -1)
                self.config[option] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(value);
        }
        self.redraw();
        updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
        let dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map((d) => self.parseDate(d, format));
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                case "time":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split(self.config.conjunction)
                        .map((date) => self.parseDate(date, format));
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map((date) => self.parseDate(date, format));
                    break;
                default:
                    break;
            }
        }
        else
            self.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(inputDate)}`));
        self.selectedDates = (self.config.allowInvalidPreload
            ? dates
            : dates.filter((d) => d instanceof Date && isEnabled(d, false)));
        if (self.config.mode === "range")
            self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
    }
    function setDate(date, triggerChange = false, format = self.config.dateFormat) {
        if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.latestSelectedDateObj =
            self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate(undefined, triggerChange);
        setHoursFromDate();
        if (self.selectedDates.length === 0) {
            self.clear(false);
        }
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .slice()
            .map((rule) => {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter((x) => x);
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        const preloadedDate = self.config.defaultDate ||
            ((self.input.nodeName === "INPUT" ||
                self.input.nodeName === "TEXTAREA") &&
                self.input.placeholder &&
                self.input.value === self.input.placeholder
                ? null
                : self.input.value);
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate =
            self.selectedDates.length > 0
                ? self.selectedDates[0]
                : self.config.minDate &&
                    self.config.minDate.getTime() > self.now.getTime()
                    ? self.config.minDate
                    : self.config.maxDate &&
                        self.config.maxDate.getTime() < self.now.getTime()
                        ? self.config.maxDate
                        : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0)
            self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined)
            self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined)
            self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
        self.input = getInputElem();
        if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        const inputType = self.config.enableTime
            ? self.config.noCalendar
                ? "time"
                : "datetime-local"
            : "date";
        self.mobileInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date"
                    ? "Y-m-d"
                    : "H:i:S";
        if (self.selectedDates.length > 0) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        if (self.input.getAttribute("step"))
            self.mobileInput.step = String(self.input.getAttribute("step"));
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        bind(self.mobileInput, "change", (e) => {
            self.setDate(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e).value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle(e) {
        if (self.isOpen === true)
            return self.close();
        self.open(e);
    }
    function triggerEvent(event, data) {
        if (self.config === undefined)
            return;
        const hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (let i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        const e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (let i = 0; i < self.selectedDates.length; i++) {
            if (Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.selectedDates[i], date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return (Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[0]) >= 0 &&
            Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.yearElements.forEach((yearElement, i) => {
            const d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                self.monthElements[i].textContent =
                    Object(_utils_formatting__WEBPACK_IMPORTED_MODULE_5__["monthToStr"])(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            }
            else {
                self.monthsDropdownContainer.value = d.getMonth().toString();
            }
            yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
    }
    function getDateStr(format) {
        return self.selectedDates
            .map((dObj) => self.formatDate(dObj, format))
            .filter((d, i, arr) => self.config.mode !== "range" ||
            self.config.enableTime ||
            arr.indexOf(d) === i)
            .join(self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator);
    }
    function updateValue(triggerChange = true) {
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== undefined) {
            self.altInput.value = getDateStr(self.config.altFormat);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
        const eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
        const isPrevMonth = self.prevMonthNav.contains(eventTarget);
        const isNextMonth = self.nextMonthNav.contains(eventTarget);
        if (isPrevMonth || isNextMonth) {
            changeMonth(isPrevMonth ? -1 : 1);
        }
        else if (self.yearElements.indexOf(eventTarget) >= 0) {
            eventTarget.select();
        }
        else if (eventTarget.classList.contains("arrowUp")) {
            self.changeYear(self.currentYear + 1);
        }
        else if (eventTarget.classList.contains("arrowDown")) {
            self.changeYear(self.currentYear - 1);
        }
    }
    function timeWrapper(e) {
        e.preventDefault();
        const isKeyDown = e.type === "keydown", eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e), input = eventTarget;
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            self.amPM.textContent =
                self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(self.amPM.textContent === self.l10n.amPM[0])];
        }
        const min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
        let newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            const isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!isHourElem) +
                        (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(isHourElem) && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step)) {
                self.amPM.textContent =
                    self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(self.amPM.textContent === self.l10n.amPM[0])];
            }
            input.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    const nodes = Array.prototype.slice
        .call(nodeList)
        .filter((x) => x instanceof HTMLElement);
    const instances = [];
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.error(e);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" &&
    typeof HTMLCollection !== "undefined" &&
    typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr = function (selector, config) {
    if (typeof selector === "string") {
        return _flatpickr(window.document.querySelectorAll(selector), config);
    }
    else if (selector instanceof Node) {
        return _flatpickr([selector], config);
    }
    else {
        return _flatpickr(selector, config);
    }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
    en: Object.assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
    default: Object.assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
};
flatpickr.localize = (l10n) => {
    flatpickr.l10ns.default = Object.assign(Object.assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = (config) => {
    flatpickr.defaultConfig = Object.assign(Object.assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({});
flatpickr.formatDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateFormatter"])({});
flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"];
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
}
/* harmony default export */ __webpack_exports__["default"] = (flatpickr);


/***/ }),

/***/ "XBrH":
/*!************************************************************************************!*\
  !*** ./src/app/back-end/shared/form-inputs/select-input/select-input.component.ts ***!
  \************************************************************************************/
/*! exports provided: SelectInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectInputComponent", function() { return SelectInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_pipes_select_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pipes/select.filter */ "XyUH");





const _c0 = ["app-select-input", ""];
function SelectInputComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectInputComponent_div_7_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.searchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r0.u.r.search)("ngModel", ctx_r0.searchText);
} }
function SelectInputComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectInputComponent_div_8_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.newItem = $event; })("keyup.enter", function SelectInputComponent_div_8_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onAddNewItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectInputComponent_div_8_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onAddNewItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r1.u.r.enterNewValueManually)("ngModel", ctx_r1.newItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.u.r.add);
} }
const _c1 = function (a0) { return { "selected": a0 }; };
function SelectInputComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectInputComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.selectItem(item_r10.name || item_r10, item_r10[ctx_r11.optionValue] || item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, (item_r10[ctx_r2.optionValue] || item_r10) == ctx_r2.form.controls[ctx_r2._formControlName].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.name || item_r10);
} }
function SelectInputComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "small", 16);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r3.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class SelectInputComponent {
    constructor(u) {
        this.u = u;
        this.list = [];
        this.formSubmitError = false;
        this.isAllowAddNewItem = false;
        this.optionValue = '_id';
        this.textSelected = this.u.r.selectItem;
    }
    ngOnInit() {
        //Listene Any Change From Anyware
        this.form.controls[this._formControlName].valueChanges.subscribe(value => {
            var _a;
            if (!value)
                return;
            this.textSelected = ((_a = this.list) === null || _a === void 0 ? void 0 : _a.find(item => (item[this.optionValue] || item) == value).name) || value;
        });
    }
    /** On User Select Item */
    selectItem(text, value) {
        this.form.controls[this._formControlName].setValue(value);
        this.textSelected = text;
    }
    /** Add And Select New Item  ... Used With Numbers */
    onAddNewItem() {
        this.list.push(this.newItem);
        this.selectItem(this.newItem, this.newItem);
        this.newItem = null;
        document.body.click(); //To Clost Deopdwon
    }
} //End Class
SelectInputComponent.ɵfac = function SelectInputComponent_Factory(t) { return new (t || SelectInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
SelectInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectInputComponent, selectors: [["", "app-select-input", ""]], inputs: { list: "list", form: "form", _formControlName: ["fcn", "_formControlName"], lable: "lable", formSubmitError: "formSubmitError", isAllowAddNewItem: "isAllowAddNewItem", optionValue: ["valueField", "optionValue"] }, attrs: _c0, decls: 14, vars: 16, consts: [[3, "innerHtml"], [1, "dropdown"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", 3, "id", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-chevron-down"], ["points", "6 9 12 15 18 9"], [1, "dropdown-menu"], ["class", "bs-searchbox", 4, "ngIf"], ["class", "mb-1 mt-1 input-group", 4, "ngIf"], [1, "dropdown-item", 3, "ngClass", "click"], ["class", "dropdown-item  ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], [1, "bs-searchbox"], ["type", "text", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [1, "mb-1", "mt-1", "input-group"], ["type", "text", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], ["type", "button", 1, "btn", "btn-primary", 3, "value", "click"], [1, "invalid-data", 3, "innerHtml"]], template: function SelectInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "polyline", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SelectInputComponent_div_7_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SelectInputComponent_div_8_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectInputComponent_Template_a_click_9_listener() { return ctx.selectItem(ctx.u.r.selectItem, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SelectInputComponent_a_11_Template, 2, 4, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "selectFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SelectInputComponent_small_13_Template, 1, 1, "small", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.lable, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._formControlName)("disabled", ctx.form.controls[ctx._formControlName].disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.textSelected, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._formControlName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.list == null ? null : ctx.list.length) > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAllowAddNewItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, null == ctx.form.controls[ctx._formControlName].value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.u.r.selectItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 11, ctx.list, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitError && ctx.form.get(ctx._formControlName).hasError("required"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [src_pipes_select_filter__WEBPACK_IMPORTED_MODULE_4__["SelectFilterPipe"]], styles: [".dropdown-menu[_ngcontent-%COMP%]{\n            width: 100%;\n            transform:none !important\n        }\n        .btn-primary.dropdown-toggle[_ngcontent-%COMP%]{\n            background: none !important;\n            box-shadow: none;\n            border: 1px solid #bfc9d4;\n            color: #3b3f5c !important;\n            height: calc(1.4em + 1.4rem + 2px);\n        }\n        button[_ngcontent-%COMP%] {\n            width: 100%;\n        }\n        .selected[_ngcontent-%COMP%]{\n            background: #bfc9d43d;\n            \n        }"] });


/***/ }),

/***/ "XyUH":
/*!************************************!*\
  !*** ./src/pipes/select.filter.ts ***!
  \************************************/
/*! exports provided: SelectFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFilterPipe", function() { return SelectFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

/**
 * Fop Filter
 */
class SelectFilterPipe {
    constructor() { }
    transform(items, searchText) {
        if (!items || !searchText || searchText == "")
            return items;
        let regx = new RegExp(searchText, "gmi");
        return items.filter(item => regx.test((item.name || item)));
    }
} //End Clss
SelectFilterPipe.ɵfac = function SelectFilterPipe_Factory(t) { return new (t || SelectFilterPipe)(); };
SelectFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "selectFilterPipe", type: SelectFilterPipe, pure: true });


/***/ }),

/***/ "YqbJ":
/*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
/*! exports provided: toggleClass, createElement, clearNode, findParent, createNumberInput, getEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearNode", function() { return clearNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParent", function() { return findParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNumberInput", function() { return createNumberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventTarget", function() { return getEventTarget; });
function toggleClass(elem, className, bool) {
    if (bool === true)
        return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    const e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined)
        e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild)
        node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node))
        return node;
    else if (node.parentNode)
        return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName, opts) {
    const wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
        numInput.type = "number";
    }
    else {
        numInput.type = "text";
        numInput.pattern = "\\d*";
    }
    if (opts !== undefined)
        for (const key in opts)
            numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}
function getEventTarget(event) {
    try {
        if (typeof event.composedPath === "function") {
            const path = event.composedPath();
            return path[0];
        }
        return event.target;
    }
    catch (error) {
        return event.target;
    }
}


/***/ }),

/***/ "cW3J":
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (typeof Object.assign !== "function") {
    Object.assign = function (target, ...args) {
        if (!target) {
            throw TypeError("Cannot convert undefined or null to object");
        }
        for (const source of args) {
            if (source) {
                Object.keys(source).forEach((key) => (target[key] = source[key]));
            }
        }
        return target;
    };
}


/***/ }),

/***/ "gsBn":
/*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
/*! exports provided: monthToStr, revFormat, tokenRegex, formats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthToStr", function() { return monthToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revFormat", function() { return revFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenRegex", function() { return tokenRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formats", function() { return formats; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "N3r0");

const doNothing = () => undefined;
const monthToStr = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
const revFormat = {
    D: doNothing,
    F: function (dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: (dateObj, hour) => {
        dateObj.setHours(parseFloat(hour));
    },
    H: (dateObj, hour) => {
        dateObj.setHours(parseFloat(hour));
    },
    J: (dateObj, day) => {
        dateObj.setDate(parseFloat(day));
    },
    K: (dateObj, amPM, locale) => {
        dateObj.setHours((dateObj.getHours() % 12) +
            12 * Object(_utils__WEBPACK_IMPORTED_MODULE_0__["int"])(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: (dateObj, seconds) => {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: (_, unixSeconds) => new Date(parseFloat(unixSeconds) * 1000),
    W: function (dateObj, weekNum, locale) {
        const weekNumber = parseInt(weekNum);
        const date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
        return date;
    },
    Y: (dateObj, year) => {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: (_, ISODate) => new Date(ISODate),
    d: (dateObj, day) => {
        dateObj.setDate(parseFloat(day));
    },
    h: (dateObj, hour) => {
        dateObj.setHours(parseFloat(hour));
    },
    i: (dateObj, minutes) => {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: (dateObj, day) => {
        dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: (dateObj, month) => {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: (dateObj, month) => {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: (dateObj, seconds) => {
        dateObj.setSeconds(parseFloat(seconds));
    },
    u: (_, unixMillSeconds) => new Date(parseFloat(unixMillSeconds)),
    w: doNothing,
    y: (dateObj, year) => {
        dateObj.setFullYear(2000 + parseFloat(year));
    },
};
const tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
const formats = {
    Z: (date) => date.toISOString(),
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(formats.h(date, locale, options));
    },
    H: (date) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getHours()),
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: (date, locale) => locale.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["int"])(date.getHours() > 11)],
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: (date) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getSeconds()),
    U: (date) => date.getTime() / 1000,
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: (date) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getFullYear(), 4),
    d: (date) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getDate()),
    h: (date) => (date.getHours() % 12 ? date.getHours() % 12 : 12),
    i: (date) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getMinutes()),
    j: (date) => date.getDate(),
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: (date) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getMonth() + 1),
    n: (date) => date.getMonth() + 1,
    s: (date) => date.getSeconds(),
    u: (date) => date.getTime(),
    w: (date) => date.getDay(),
    y: (date) => String(date.getFullYear()).substring(2),
};


/***/ }),

/***/ "hF2r":
/*!************************************************************************************!*\
  !*** ./src/app/back-end/shared/form-inputs/switch-input/switch.input.component.ts ***!
  \************************************************************************************/
/*! exports provided: SwitchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchInputComponent", function() { return SwitchInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const _c0 = ["app-switch-input", ""];
class SwitchInputComponent {
    constructor(u) {
        this.u = u;
        /**
         * من اجل اضافة زر تعديل فى الحقل  اذا كان يريد ذالك
         */
        this.isShowAllowEditButton = false;
        /**
         * Toggl Flag
         * حقل من اجل التحقق هل نسمح بعتح العنصر للتعديل ام لا
         */
        this.isAllowEdit = false;
    }
    /** Allow Input Edit Toggl */
    allowToEditToggl() {
        //Update Toggle Flag
        this.isAllowEdit = !this.isAllowEdit;
        if (this.isAllowEdit)
            this.form.controls[this._formControlName].enable();
        else
            this.form.controls[this._formControlName].disable();
    }
} //End Class
SwitchInputComponent.ɵfac = function SwitchInputComponent_Factory(t) { return new (t || SwitchInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
SwitchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwitchInputComponent, selectors: [["", "app-switch-input", ""]], inputs: { form: "form", _formControlName: ["fcn", "_formControlName"], lable: "lable", formSubmitError: "formSubmitError", isShowAllowEditButton: "isShowAllowEditButton" }, attrs: _c0, decls: 5, vars: 3, consts: [[3, "innerHtml"], [3, "formGroup"], [1, "switch", "s-icons", "s-outline", "s-outline-primary", "mr-2"], ["type", "checkbox", 3, "formControlName"], [1, "slider", "round"]], template: function SwitchInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.lable, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx._formControlName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], encapsulation: 2 });


/***/ }),

/***/ "mmFQ":
/*!****************************************************!*\
  !*** ./src/modules/back-end/form.inputs.module.ts ***!
  \****************************************************/
/*! exports provided: FormInputsModeul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputsModeul", function() { return FormInputsModeul; });
/* harmony import */ var src_app_back_end_shared_form_inputs_color_input_color_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/color-input/color.input.component */ "R6pW");
/* harmony import */ var src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/date-input/date.input.component */ "3CG7");
/* harmony import */ var src_app_back_end_shared_form_inputs_report_input_report_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/report-input/report.input.component */ "FOL+");
/* harmony import */ var src_app_back_end_shared_form_inputs_report_url_report_url_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/report-url/report.url.component */ "HTjQ");
/* harmony import */ var src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/select-input/select-input.component */ "XBrH");
/* harmony import */ var src_app_back_end_shared_form_inputs_switch_input_switch_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/switch-input/switch.input.component */ "hF2r");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_big_input_text_big_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-big-input/text.big.input.component */ "6tZz");
/* harmony import */ var src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/back-end/shared/form-inputs/text-input/text.input.component */ "QkSp");
/* harmony import */ var src_pipes_select_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pipes/select.filter */ "XyUH");
/* harmony import */ var _shared_back_end_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared.back.end.module */ "0sbA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class FormInputsModeul {
}
FormInputsModeul.ɵfac = function FormInputsModeul_Factory(t) { return new (t || FormInputsModeul)(); };
FormInputsModeul.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: FormInputsModeul });
FormInputsModeul.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_shared_back_end_module__WEBPACK_IMPORTED_MODULE_9__["SharedBackEndModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](FormInputsModeul, { declarations: [src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_4__["SelectInputComponent"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__["TextInputComponent"], src_app_back_end_shared_form_inputs_text_big_input_text_big_input_component__WEBPACK_IMPORTED_MODULE_6__["TextBigInputComponent"], src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_1__["DateInputComponent"], src_app_back_end_shared_form_inputs_report_input_report_input_component__WEBPACK_IMPORTED_MODULE_2__["RepportInputComponent"],
        src_app_back_end_shared_form_inputs_color_input_color_input_component__WEBPACK_IMPORTED_MODULE_0__["colorInputComponent"],
        src_app_back_end_shared_form_inputs_switch_input_switch_input_component__WEBPACK_IMPORTED_MODULE_5__["SwitchInputComponent"],
        src_app_back_end_shared_form_inputs_report_url_report_url_component__WEBPACK_IMPORTED_MODULE_3__["RepportUrlComponent"],
        src_pipes_select_filter__WEBPACK_IMPORTED_MODULE_8__["SelectFilterPipe"]], imports: [_shared_back_end_module__WEBPACK_IMPORTED_MODULE_9__["SharedBackEndModule"]], exports: [src_app_back_end_shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_4__["SelectInputComponent"], src_app_back_end_shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_7__["TextInputComponent"], src_app_back_end_shared_form_inputs_text_big_input_text_big_input_component__WEBPACK_IMPORTED_MODULE_6__["TextBigInputComponent"], src_app_back_end_shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_1__["DateInputComponent"], src_app_back_end_shared_form_inputs_report_input_report_input_component__WEBPACK_IMPORTED_MODULE_2__["RepportInputComponent"],
        src_app_back_end_shared_form_inputs_color_input_color_input_component__WEBPACK_IMPORTED_MODULE_0__["colorInputComponent"],
        src_app_back_end_shared_form_inputs_switch_input_switch_input_component__WEBPACK_IMPORTED_MODULE_5__["SwitchInputComponent"],
        src_app_back_end_shared_form_inputs_report_url_report_url_component__WEBPACK_IMPORTED_MODULE_3__["RepportUrlComponent"],
        src_pipes_select_filter__WEBPACK_IMPORTED_MODULE_8__["SelectFilterPipe"]] }); })();


/***/ }),

/***/ "nFBg":
/*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
/*! exports provided: HOOKS, defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOKS", function() { return HOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
const HOOKS = [
    "onChange",
    "onClose",
    "onDayCreate",
    "onDestroy",
    "onKeyDown",
    "onMonthChange",
    "onOpen",
    "onParseConfig",
    "onReady",
    "onValueUpdate",
    "onYearChange",
    "onPreCalendarPosition",
];
const defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" &&
        window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: (err) => typeof console !== "undefined" && console.warn(err),
    getWeek: (givenDate) => {
        const date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        var week1 = new Date(date.getFullYear(), 0, 4);
        return (1 +
            Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                3 +
                ((week1.getDay() + 6) % 7)) /
                7));
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
};


/***/ })

}]);
//# sourceMappingURL=default~back-end-contact-us-messages-module~back-end-containers-module~back-end-deletes-module~back-~be657f6c.js.map