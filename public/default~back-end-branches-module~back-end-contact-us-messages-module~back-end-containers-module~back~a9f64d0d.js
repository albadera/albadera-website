(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d"],{

/***/ "/TAO":
/*!****************************************************!*\
  !*** ./src/directives/file.drag.drop.directive.ts ***!
  \****************************************************/
/*! exports provided: FileDragDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDragDirective", function() { return FileDragDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class FileDragDirective {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        /** On Selected Files Event */
        this.onSelectFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.accept = "image/*";
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.drag_class = 'dropzone-dragover';
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.drag_class = null;
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.drag_class = null;
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
        this.onSelectFiles.emit(newFile);
    }
} // End Class
FileDragDirective.ɵfac = function FileDragDirective_Factory(t) { return new (t || FileDragDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
FileDragDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FileDragDirective, selectors: [["", "appDrag", ""]], hostVars: 2, hostBindings: function FileDragDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function FileDragDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function FileDragDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function FileDragDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("click", function FileDragDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.drag_class);
    } }, outputs: { onSelectFiles: "onSelectFiles" } });


/***/ }),

/***/ "0sbA":
/*!********************************************************!*\
  !*** ./src/modules/back-end/shared.back.end.module.ts ***!
  \********************************************************/
/*! exports provided: SharedBackEndModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedBackEndModule", function() { return SharedBackEndModule; });
/* harmony import */ var _app_back_end_shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/back-end/shared/breadcrumb/breadcrumb.component */ "9Ulh");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/sort.pipe */ "MODS");
/* harmony import */ var _app_back_end_shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/back-end/shared/fop/fop-sort/fop-sort.component */ "lyqo");
/* harmony import */ var _app_back_end_shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/back-end/shared/fop/fop-paging/fop.paging.component */ "VjaU");
/* harmony import */ var _app_back_end_shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/back-end/shared/fop/fop-header/fop-header.component */ "OhZK");
/* harmony import */ var src_directives_file_drag_drop_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/directives/file.drag.drop.directive */ "/TAO");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/directives/deopify.directive */ "nTwK");
/* harmony import */ var src_app_back_end_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/back-end/shared/export-buttons/export.buttons.component */ "TbMG");
/* harmony import */ var src_app_back_end_shared_notes_notes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/back-end/shared/notes/notes.component */ "Z5Tv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class SharedBackEndModule {
}
SharedBackEndModule.ɵfac = function SharedBackEndModule_Factory(t) { return new (t || SharedBackEndModule)(); };
SharedBackEndModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: SharedBackEndModule });
SharedBackEndModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            // GoogleChartsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        // GoogleChartsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SharedBackEndModule, { declarations: [_app_back_end_shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_4__["FopHeaderComponent"],
        _app_back_end_shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_3__["FopPagingComponent"],
        _app_back_end_shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_2__["FopSortComponent"],
        src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FopFilterPipe"],
        src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_6__["FopSortPipe"],
        src_directives_file_drag_drop_directive__WEBPACK_IMPORTED_MODULE_5__["FileDragDirective"],
        _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_1__["SortPipe"],
        src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_10__["DeopifyDirective"],
        _app_back_end_shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbComponent"],
        src_app_back_end_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_11__["ExportButtonsComponent"],
        src_app_back_end_shared_notes_notes_component__WEBPACK_IMPORTED_MODULE_12__["NotsCompoenent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        // GoogleChartsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]], exports: [_app_back_end_shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_4__["FopHeaderComponent"],
        _app_back_end_shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_3__["FopPagingComponent"],
        _app_back_end_shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_2__["FopSortComponent"],
        src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FopFilterPipe"],
        src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_6__["FopSortPipe"],
        src_directives_file_drag_drop_directive__WEBPACK_IMPORTED_MODULE_5__["FileDragDirective"],
        _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_1__["SortPipe"],
        src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_10__["DeopifyDirective"],
        _app_back_end_shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbComponent"],
        src_app_back_end_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_11__["ExportButtonsComponent"],
        src_app_back_end_shared_notes_notes_component__WEBPACK_IMPORTED_MODULE_12__["NotsCompoenent"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        // GoogleChartsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]] }); })();


/***/ }),

/***/ "9Ulh":
/*!********************************************************************!*\
  !*** ./src/app/back-end/shared/breadcrumb/breadcrumb.component.ts ***!
  \********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/behavior.subject.service */ "okBh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { "active": a0 }; };
function BreadcrumbComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const isLast_r3 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, isLast_r3 && !ctx_r0.allowStaticBreadcrumd));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.u.r[item_r2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function BreadcrumbComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r1.title.getTitle(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class BreadcrumbComponent {
    constructor(u, title) {
        this.u = u;
        this.title = title;
        this.items = [];
    }
    ngOnInit() {
        _services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].activePage.subscribe(res => {
            this.items = [];
            this.allowStaticBreadcrumd = res.isActiveByNesterUrls && res.isAllowShowBreadcrumbToNestedUrls;
            if (res.menu)
                this.items.push(res.menu.resourceKey_title);
            if (res.subMenu)
                this.items.push(res.subMenu.resourceKey_title);
        });
    }
} //End Class
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 6, vars: 3, consts: [["aria-label", "breadcrumb", 1, "breadcrumb-two"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/", 3, "innerHtml"], ["class", "breadcrumb-item ", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", 3, "ngClass"], [3, "innerHtml"], [1, "breadcrumb-item", "active"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BreadcrumbComponent_li_4_Template, 2, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BreadcrumbComponent_li_5_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx.u.r.home, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allowStaticBreadcrumd);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], encapsulation: 2 });


/***/ }),

/***/ "BV3C":
/*!*******************************************!*\
  !*** ./src/models/fop/fop.paging.mode.ts ***!
  \*******************************************/
/*! exports provided: FopPagingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopPagingModel", function() { return FopPagingModel; });
/* harmony import */ var _fop_paging_limt_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fop.paging.limt.model */ "UEro");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local.storage.service */ "LKR5");


/**
* هذة الكلاس هيا مهمتها القيام بعمليات التقسيم للعناصر والتنقل بين الصفح وخلافة من هذا القبيل
 *
 */
class FopPagingModel {
    /**
     * هذة الكلاس هيا مهمتها القيام بعمليات التقسيم للعناصر والتنقل بين الصفح وخلافة من هذا القبيل
     * @param {Number} from من
     * @param {Number} to الى
     * @param {Number} countItems جميع عدد العناصر
     * @param {Number} currentPage رقم الصفحة الحالية
     * @param {bool} allowNextPage السماح بتفعيل زر الصفحة القادة
     * @param {bool} allowPreviousPage السماح بتفعيل زر الصفحة السابقة
        * @param {number} pagesSeliceTakeC عدد ارقام الصفح التى سوف تعرض للمستخدم للتنقل بينهم
     * @param {number} pagesSeliceSkipC عدد ارفام الصفحة التى سوف نتخطبها على المستخدم
     * @param {Number[]} pages ارقام الصفح
     * @param {PagingLimt} pagingLimt الحدود
        
     */
    constructor(from, to, takeItemsCount, itemsCount, currentPage, allowNextPage, allowPreviousPage, pagesSeliceTake, pagesSeliceSkip) {
        this.pagesSeliceTakeDefault = 5;
        this.pagesSeliceSkipDefault = 0;
        this.from = from;
        this.to = to;
        this.takeItemsCount = takeItemsCount;
        this.itemsCount = itemsCount;
        this.currentPage = currentPage;
        this.allowNextPage = allowNextPage;
        this.allowPreviousPage = allowPreviousPage;
        this.pagesSeliceTake = pagesSeliceTake;
        this.pagesSeliceSkip = pagesSeliceSkip;
        this.pagingLimt = new _fop_paging_limt_model__WEBPACK_IMPORTED_MODULE_0__["FopPagingLimtModel"](0, takeItemsCount);
        ;
        this.pagination(itemsCount, takeItemsCount);
    }
    //change count item displayed 
    changeCountItemDisplaying(countResultDisplay) {
        //Save Last Take Count In Local Storage
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].fopNumberOfDisplayResultInPage = countResultDisplay;
        //if -1 as all items
        if (countResultDisplay == -1)
            countResultDisplay = this.itemsCount;
        this.takeItemsCount = countResultDisplay;
        //change limit items
        this.pagingLimt.skip = 0;
        this.pagingLimt.take = countResultDisplay;
        //reset pages number
        this.pagination(this.itemsCount, countResultDisplay);
        //got page number 1
        this.gotoPage(1, true);
    }
    ;
    //go to page by page number 
    gotoPage(pageNum, resetPages = false) {
        //Now we calculate and for limit items 
        /*
        The equation:
        vrtialTake =  pageNum * currentTake
        Skip =vrtialTake-  currentTake
        */
        var vrtialTake = pageNum * this.takeItemsCount;
        this.pagingLimt.skip = vrtialTake - (this.takeItemsCount);
        this.pagingLimt.take = this.takeItemsCount * pageNum;
        //change paging lable
        this.resetPaging(pageNum, resetPages);
    }
    ;
    //change Paging numbers 
    resetPaging(pageNum, resetPages = false) {
        //reset page num to default if falsy
        if (!pageNum)
            pageNum = 1;
        var vrtialTo = pageNum * this.pagingLimt.take;
        debugger;
        //rewset showing for lable
        this.to = vrtialTo > this.itemsCount ? this.itemsCount : vrtialTo;
        ;
        this.from = !this.itemsCount ? 0 : this.pagingLimt.skip + 1;
        //reset allow buttons newxt and Previous
        this.allowNextPage = pageNum + 1 <= this.pages.length;
        this.allowPreviousPage = pageNum - 1 >= 1;
        if (resetPages) {
            this.pagesSeliceTake = this.pagesSeliceTakeDefault;
            this.pagesSeliceSkip = this.pagesSeliceSkipDefault;
        }
        //reset showing pages number
        if (this.pages.length + 1 != this.pagesSeliceTakeDefault) {
            //الغرض هوا جلب نفس مجموعة الصفح الذى تعرض الان
            var pagesVrtial = [...this.pages].splice(this.pagesSeliceSkip, this.pagesSeliceTakeDefault);
            //نتحقق هل الرقم الصفحة التى بعد بعد صفحة المستخدم موجود ام لاء وفى هذة الحالة هوا يذهب للامام 
            var findNextPageIndex = pagesVrtial.findIndex(p => p == pageNum + 1);
            //  نتحقق هل الرقم الصفحة التى قبل قبل صفحة المستخدم موجود ام لا وفى هذة الحالة هوا يرجع للخلف 
            var findPreviousIndex = pagesVrtial.findIndex(p => p == pageNum - 1);
            //اذا كانت ليست موجود والصفحة هى ليست آخر صفحة نزيد معدل الاخفاء عرض الصفح 
            if (findNextPageIndex == -1 && this.allowNextPage)
                this.pagesSeliceSkip += 2;
            //اذا كانت الصفحة السابقة والصفحة هى ليست اول صفحة ليست موجودة ننقص معدل الاخفاء
            else if (findPreviousIndex == -1 && this.allowPreviousPage)
                this.pagesSeliceSkip -= 2;
            this.pagesSeliceTake = (this.pagesSeliceSkip + this.pagesSeliceTakeDefault);
        }
        //set current page for active class
        this.currentPage = pageNum;
    }
    ;
    //Go next Page
    gotoNextPage() {
        if (this.allowNextPage)
            this.gotoPage(this.currentPage + 1);
    }
    ;
    //Go previous Page
    gotoPreviousPage() {
        if (this.allowPreviousPage)
            this.gotoPage(this.currentPage - 1);
    }
    ;
    /**
    * هذة الوظيفة من اجالة اعادة انشاء ترقيم الصفحات
    *  ستم المداء عليها فى حالة زيادة او نقصاد عدد العناصر
     * @param {Number} itemsCount عدد العناصر
     * @param {Number} currentTake عدد العناصر المراد عرضها فى الصفحة الواحدة
     */
    pagination(itemsCount, currentTake, notTrdrtPsging = false) {
        /*
    The equation:
    pagesCount= itemsCount / currentTake;
    */
        var pages = [];
        var pagesCount = itemsCount / currentTake;
        for (var i = 0; i < pagesCount; i++) {
            pages.push(i + 1);
        }
        this.pages = pages;
        if (itemsCount != this.itemsCount) {
            this.itemsCount = itemsCount;
            this.pages = pages;
            this.resetPaging(1);
        }
        else {
            this.itemsCount = itemsCount;
            if (notTrdrtPsging)
                this.resetPaging(this.currentPage);
        }
    }
}


/***/ }),

/***/ "MODS":
/*!********************************!*\
  !*** ./src/pipes/sort.pipe.ts ***!
  \********************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");


/**
 * Sort By Dynamic Value From Resourcs
 */
class SortPipe {
    constructor(u) {
        this.u = u;
    }
    transform(items, fieldName, reverse) {
        if (!items || !fieldName) {
            return items;
        }
        if (reverse) {
            return items.sort((a, b) => {
                var _a, _b;
                const curretnValue = (_a = this.u.r[b[fieldName]]) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase();
                const nextValue = (_b = this.u.r[a[fieldName]]) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase();
                if (curretnValue < nextValue) {
                    return -1;
                }
                else if (curretnValue > nextValue) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            return items.sort((a, b) => {
                var _a, _b;
                const curretnValue = (_a = this.u.r[b[fieldName]]) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase();
                const nextValue = (_b = this.u.r[a[fieldName]]) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase();
                if (curretnValue < nextValue) {
                    return 1;
                }
                else if (curretnValue > nextValue) {
                    return -1;
                }
                return 0;
            });
        }
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
SortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sortPipe", type: SortPipe, pure: true });


/***/ }),

/***/ "O0Z9":
/*!****************************************!*\
  !*** ./src/pipes/fop/fop.sort.pipe.ts ***!
  \****************************************/
/*! exports provided: FopSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopSortPipe", function() { return FopSortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FopSortPipe {
    constructor() { }
    transform(items, fieldName, reverse) {
        if (!items || !fieldName) {
            return items;
        }
        if (reverse) {
            return items.sort((a, b) => {
                var _a, _b;
                const curretnValue = (_a = b[fieldName]) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase();
                const nextValue = (_b = a[fieldName]) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase();
                if (curretnValue < nextValue) {
                    return -1;
                }
                else if (curretnValue > nextValue) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            return items.sort((a, b) => {
                var _a, _b;
                const curretnValue = (_a = b[fieldName]) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase();
                const nextValue = (_b = a[fieldName]) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase();
                if (curretnValue < nextValue) {
                    return 1;
                }
                else if (curretnValue > nextValue) {
                    return -1;
                }
                return 0;
            });
        }
    }
}
FopSortPipe.ɵfac = function FopSortPipe_Factory(t) { return new (t || FopSortPipe)(); };
FopSortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fopSortPipe", type: FopSortPipe, pure: true });


/***/ }),

/***/ "OhZK":
/*!************************************************************************!*\
  !*** ./src/app/back-end/shared/fop/fop-header/fop-header.component.ts ***!
  \************************************************************************/
/*! exports provided: FopHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopHeaderComponent", function() { return FopHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var table_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! table-export */ "RWDY");
/* harmony import */ var table_export__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(table_export__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class FopHeaderComponent {
    constructor(u) {
        this.u = u;
        /**
         *
         */
        this.searchText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.styleLinks = "";
    }
    ngOnInit() {
        let allStylesLink = document.querySelectorAll('title,link,style');
        for (let index = 0; index <= allStylesLink.length - 1; index++)
            this.styleLinks += allStylesLink.item(index).outerHTML;
    }
    //Output Search Text
    sendSearchText(val) {
        this.searchText.emit(val);
    }
    /**Export Table To Excel */
    exportAs(exportType) {
        table_export__WEBPACK_IMPORTED_MODULE_2__(this.tableId, document.title + " " + new Date().toDateString().replace(/\//g, '-'), exportType);
    }
    /**
     * Print
     */
    print() {
        let printWindow = window.open(null, "");
        printWindow.document.write(`
    <html >
        <head>
        <base href="${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].website_url}">
            <style>
            @media print{
                app-export-buttons{
                    display:none
                }
                }
            }
            </style>
            ${this.styleLinks}
        </head>
        <body>
        ${document.getElementById(this.tableId).outerHTML}
        </body>
    </html>`);
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.document.close();
            printWindow.close();
        }, 100);
    }
} //End Class
FopHeaderComponent.ɵfac = function FopHeaderComponent_Factory(t) { return new (t || FopHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"])); };
FopHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FopHeaderComponent, selectors: [["fop-header"]], inputs: { tableId: "tableId" }, outputs: { searchText: "searchText" }, decls: 18, vars: 2, consts: [[1, "d-flex", "justify-content-between", "mb-3"], ["type", "search", 1, "form-control", "form-control-sm", 3, "placeholder", "ngModel", "ngModelChange", "input"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function FopHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FopHeaderComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchValue = $event; })("input", function FopHeaderComponent_Template_input_input_2_listener() { return ctx.sendSearchText(ctx.searchValue); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_4_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_6_listener() { return ctx.exportAs("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_8_listener() { return ctx.exportAs("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_10_listener() { return ctx.exportAs("xml"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "XML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_12_listener() { return ctx.exportAs("xls"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_14_listener() { return ctx.exportAs("doc"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Word");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_16_listener() { return ctx.exportAs("image"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.u.r.searchInResult + ". . .")("ngModel", ctx.searchValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], encapsulation: 2 });


/***/ }),

/***/ "RL+I":
/*!*************************************!*\
  !*** ./src/models/fop/fop.model.ts ***!
  \*************************************/
/*! exports provided: FOPModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOPModel", function() { return FOPModel; });
/* harmony import */ var _fop_sort_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fop.sort.model */ "mdi9");
/* harmony import */ var src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/local.storage.service */ "LKR5");
/* harmony import */ var _fop_paging_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fop.paging.mode */ "BV3C");



/**
     * FOP : Filter OrderBy Paging
 *
 */
class FOPModel {
    /**
     *  FOP : Filter OrderBy Paging
     * @param {number} itemsCount  مجموع عدد العناصر التالية
     * @param {number} currentPageNumber رقم الصفحة الحالية
     * @param {number} pagesSeliceTakeC عدد ارقام الصفح التى سوف تعرض للمستخدم للتنقل بينهم
     * @param {number} pagesSeliceSkipC عدد ارفام الصفحة التى سوف نتخطبها على المستخدم
     */
    constructor(fieldNames = [], itemsCount = 0, currentPageNumber = 1, pagesSeliceTake = 5, pagesSeliceSkip = 0, sort = new _fop_sort_model__WEBPACK_IMPORTED_MODULE_0__["FopSortModel"]()) {
        this.fieldNames = fieldNames;
        this.itemsCount = itemsCount;
        this.sort = sort;
        //نقوم بـ التالى بحيث عند تزويد الداتا لا نرحع الى اول صفحة لا نثق عند آخر صفحة وايضا نظهر نفس مجموعة ارقام الصفح
        let currentPageNo = currentPageNumber;
        let displayEntiriesCount = src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].fopNumberOfDisplayResultInPage;
        //Check If User Want Display All Item In One Page
        if (displayEntiriesCount == -1)
            this.numberOfDisplayResiltInPage = this.itemsCount;
        else
            this.numberOfDisplayResiltInPage = displayEntiriesCount || 10;
        //Paging
        this.paging = new _fop_paging_mode__WEBPACK_IMPORTED_MODULE_2__["FopPagingModel"](
        //From
        this.itemsCount == 0 ? 0 : 1, 
        //To
        this.numberOfDisplayResiltInPage > this.itemsCount ? this.itemsCount : this.numberOfDisplayResiltInPage, this.numberOfDisplayResiltInPage, itemsCount, currentPageNo, true, false, pagesSeliceTake, pagesSeliceSkip);
    }
    reFop(itemsCount, numberOfDisplayResiltInPage = this.numberOfDisplayResiltInPage) {
        this.itemsCount = itemsCount >= 0 ? itemsCount : this.itemsCount;
        this.numberOfDisplayResiltInPage = numberOfDisplayResiltInPage;
        this.paging.pagination(this.itemsCount, this.numberOfDisplayResiltInPage);
    }
}


/***/ }),

/***/ "RWDY":
/*!*******************************************************!*\
  !*** ./node_modules/table-export/dist/tableExport.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=14)}([function(t,e){e.getText=function(t){var e=t.textContent||t.innerText;return null==e?"":e.replace(/^\s*(.*?)\s+$/,"$1")},e.template=function(t,e){return t.replace(/{{(\w+)}}/g,function(t,n){return e[n]})}},function(t,e,n){var r,o=o||function(t){"use strict";if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document,n=function(){return t.URL||t.webkitURL||t},r=e.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,i=function(t){var e=new MouseEvent("click");t.dispatchEvent(e)},a=/constructor/i.test(t.HTMLElement)||t.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent),c=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},u=function(t){var e=function(){"string"==typeof t?n().revokeObjectURL(t):t.remove()};setTimeout(e,4e4)},f=function(t,e,n){e=[].concat(e);for(var r=e.length;r--;){var o=t["on"+e[r]];if("function"==typeof o)try{o.call(t,n||t)}catch(t){c(t)}}},l=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},d=function(e,c,d){d||(e=l(e));var h,p=this,g=e.type,v="application/octet-stream"===g,m=function(){f(p,"writestart progress write writeend".split(" "))};if(p.readyState=p.INIT,o)return h=n().createObjectURL(e),void setTimeout(function(){r.href=h,r.download=c,i(r),m(),u(h),p.readyState=p.DONE});!function(){if((s||v&&a)&&t.FileReader){var r=new FileReader;return r.onloadend=function(){var e=s?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(e,"_blank")||(t.location.href=e),e=void 0,p.readyState=p.DONE,m()},r.readAsDataURL(e),void(p.readyState=p.INIT)}h||(h=n().createObjectURL(e)),v?t.location.href=h:t.open(h,"_blank")||(t.location.href=h),p.readyState=p.DONE,m(),u(h)}()},h=d.prototype,p=function(t,e,n){return new d(t,e||t.name||"download",n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=l(t)),navigator.msSaveOrOpenBlob(t,e)}:(h.abort=function(){},h.readyState=h.INIT=0,h.WRITING=1,h.DONE=2,h.error=h.onwritestart=h.onprogress=h.onwrite=h.onabort=h.onerror=h.onwriteend=null,p)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);void 0!==t&&t.exports?t.exports.saveAs=o:null!==n(12)&&null!==n(13)&&void 0!==(r=function(){return o}.call(e,n,e,t))&&(t.exports=r)},function(t,e,n){var r=n(0),o=function(t){var e=-1!==t.indexOf(",")||-1!==t.indexOf("\r")||-1!==t.indexOf("\n"),n=-1!==t.indexOf('"');return n&&(t=t.replace(/"/g,'""')),(e||n)&&(t='"'+t+'"'),"\t"+t};t.exports=function(t){for(var e,n="\ufeff",i=0;e=t.rows[i];i++){for(var a,s=0;a=e.cells[s];s++)n=n+(s?",":"")+o(r.getText(a));n+="\r\n"}return n}},function(t,e,n){var r=n(0);t.exports=function(t,e,n){var o='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:{{type}}" xmlns="http://www.w3.org/TR/REC-html40">';o+='<head><meta charset="{{charset}}" />\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>',o+="表格1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e",o+="</head><body><table>{{table}}</table></body></html>";for(var i,a="",s=[["<thead><tr>","</tr></thead>"],["<tbody><tr>","</tr></tbody>"],["<tr>","</tr>"]],c=[["<th>","</th>"],['<td style="vnd.ms-excel.numberformat:@">',"</td>"]],u=+!t.tHead,f=1-u,l=0;i=t.rows[l];l++){u=l>f?2:u,a+=s[u][0];for(var d,h=0;d=i.cells[h];h++)a+=c[+!!u][0]+r.getText(d)+c[+!!u][1];a+=s[u][1],u++}return r.template(o,{charset:e,type:n,table:a})}},function(t,e,n){var r=n(0),o=function(t){function e(t){return("0"+parseInt(t).toString(16)).slice(-2)}return"transparent"===t.toLowerCase()||"rgba(0, 0, 0, 0)"===t?"#fff":-1===t.search("rgb")?t:(t=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/),"#"+e(t[1])+e(t[2])+e(t[3]))},i=function(t,e){var n=new Image,r="data:image/svg+xml;utf8,"+encodeURIComponent(t),o=function(){n.onload=null,n.onerror=null};n.onload=function(){o(),e(n)},n.src=r};t.exports=function(t,e,n){var a=t.offsetWidth,s=t.offsetHeight+8,c=document.createElement("canvas"),u=c.getContext("2d");c.width=a,c.height=s;var f=new DOMParser,l=f.parseFromString(t.outerHTML,"text/html"),d=(new XMLSerializer).serializeToString(l),h=r.template('<svg xmlns="http://www.w3.org/2000/svg" width="{{width}}" height="{{height}}"><style scoped="">html::-webkit-scrollbar { display: none; }</style><foreignObject x="0" y="0" width="{{width}}" height="{{height}}" style="float: left;" externalResourcesRequired="true">{{xhtml}}</foreignObject></svg>',{width:a,height:s,xhtml:d});"function"==typeof e&&(n=e,e=null),i(h,function(r){e&&"png"!==e.format&&(u.fillStyle=o(t.style.backgroundColor||getComputedStyle(t,null).getPropertyValue("background-color")),u.fillRect(0,0,r.width,r.height)),u.drawImage(r,0,0),n(c)})}},function(t,e,n){var r=n(1).saveAs;n(9);var o=n(4);t.exports=function(t,e){o(t,function(t){t.toBlob(function(t){r(t,e+".png")})})}},function(t,e,n){var r=n(0);t.exports=function(t){var e=[],n=[];if(t.tHead)for(var o,i=0;o=t.tHead.rows[0].cells[i];i++)e.push(r.getText(o));if(t.tBodies)for(var a,s=0;a=t.tBodies[s];s++)for(var c,u=0;c=a.rows[u];u++){var f=n.length;n[f]=[];for(var l,d=0;l=c.cells[d];d++)n[f].push(r.getText(l))}return JSON.stringify({header:e,data:n})}},function(t,e,n){var r=n(1).saveAs,o=n(0),i=n(15);t.exports=function(t,e){var n=new i("p","pt","a4",!1),a=20,s=0,c=0,u=1,f=function(t){r(t.output("blob"),e+".pdf")};if(n.setFontSize(14),/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi.test(o.getText(t)))n.addDOM(t,a,20,function(){f(n)});else{for(var l,d=0,h=[],p=0;l=t.rows[p];p++){0===p&&(d=l.clientHeight),(p+1)%26==0&&(n.addPage(),u++,a+=10),c=a+p*d-280*(u-1);for(var g,v=0;g=l.cells[v];v++){0===p&&(h[v]=g.clientWidth),s=20;for(var m=0;m<v;m++)s+=h[m];n.text(o.getText(g),s,c)}}f(n)}}},function(t,e,n){var r=n(0);t.exports=function(t){for(var e,n='<?xml version="1.0" encoding="utf-8"?><table>',o=0;e=t.rows[o];o++){n+='<row id="'+o+'">';for(var i,a=0;i=e.cells[a];a++)n+="<column>"+r.getText(i)+"</column>";n+="</row>"}return n+="</table>"}},function(t,e,n){var r;!function(o){"use strict";var i=o.HTMLCanvasElement&&o.HTMLCanvasElement.prototype,a=o.Blob&&function(){try{return Boolean(new Blob)}catch(t){return!1}}(),s=a&&o.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(t){return!1}}(),c=o.BlobBuilder||o.WebKitBlobBuilder||o.MozBlobBuilder||o.MSBlobBuilder,u=(a||c)&&o.atob&&o.ArrayBuffer&&o.Uint8Array&&function(t){var e,n,r,o,i,u,f,l,d;if(!(e=t.match(/^data:((.*?)(;charset=.*?)?)(;base64)?,/)))throw new Error("invalid data URI");for(n=e[2]?e[1]:"text/plain"+(e[3]||";charset=US-ASCII"),r=!!e[4],o=t.slice(e[0].length),i=r?atob(o):decodeURIComponent(o),u=new ArrayBuffer(i.length),f=new Uint8Array(u),l=0;l<i.length;l+=1)f[l]=i.charCodeAt(l);return a?new Blob([s?f:u],{type:n}):(d=new c,d.append(u),d.getBlob(n))};o.HTMLCanvasElement&&!i.toBlob&&(i.mozGetAsFile?i.toBlob=function(t,e,n){t(n&&i.toDataURL&&u?u(this.toDataURL(e,n)):this.mozGetAsFile("blob",e))}:i.toDataURL&&u&&(i.toBlob=function(t,e,n){t(u(this.toDataURL(e,n)))})),void 0!==(r=function(){return u}.call(e,n,e,t))&&(t.exports=r)}(window)},function(t,e,n){var r;!function(o){"use strict";function i(t){var e={};this.subscribe=function(t,n,r){if("function"!=typeof n)return!1;e.hasOwnProperty(t)||(e[t]={});var o=Math.random().toString(35);return e[t][o]=[n,!!r],o},this.unsubscribe=function(t){for(var n in e)if(e[n][t])return delete e[n][t],!0;return!1},this.publish=function(n){if(e.hasOwnProperty(n)){var r=Array.prototype.slice.call(arguments,1),i=[];for(var a in e[n]){var s=e[n][a];try{s[0].apply(t,r)}catch(t){o.console&&console.error("jsPDF PubSub Error",t.message,t)}s[1]&&i.push(a)}i.length&&i.forEach(this.unsubscribe)}}}function a(t,e,n,r){var u={};"object"==typeof t&&(u=t,t=u.orientation,e=u.unit||e,n=u.format||n,r=u.compress||u.compressPdf||r),e=e||"mm",n=n||"a4",t=(""+(t||"P")).toLowerCase();var f,l,d,h,p,g,v,m,b,y=((""+n).toLowerCase(),!!r&&"function"==typeof Uint8Array),w=u.textColor||"0 g",C=u.drawColor||"0 G",A=u.fontSize||16,x=u.lineHeight||1.15,E=u.lineWidth||.200025,I=2,S=!1,j=[],D={},O={},P=0,T=[],B=[],R=[],F=[],U=[],L=0,k=0,M=0,N={title:"",subject:"",author:"",keywords:"",creator:""},_={},G=new i(_),W=u.hotfixes||[],H=function(t){return t.toFixed(2)},z=function(t){return t.toFixed(3)},J=function(t){return("0"+parseInt(t)).slice(-2)},V=function(t){S?T[h].push(t):(M+=t.length+1,F.push(t))},X=function(){return I++,j[I]=M,V(I+" 0 obj"),I},Y=function(){var t=2*T.length+1;t+=U.length;var e={objId:t,content:""};return U.push(e),e},q=function(){return I++,j[I]=function(){return M},I},K=function(t){j[t]=M},Z=function(t){V("stream"),V(t),V("endstream")},$=function(){var t,e,n,r,i,s,c,u,f,d=[];for(c=o.adler32cs||a.adler32cs,y&&void 0===c&&(y=!1),t=1;t<=P;t++){if(d.push(X()),u=(p=R[t].width)*l,f=(g=R[t].height)*l,V("<</Type /Page"),V("/Parent 1 0 R"),V("/Resources 2 0 R"),V("/MediaBox [0 0 "+H(u)+" "+H(f)+"]"),G.publish("putPage",{pageNumber:t,page:T[t]}),V("/Contents "+(I+1)+" 0 R"),V(">>"),V("endobj"),e=T[t].join("\n"),X(),y){for(n=[],r=e.length;r--;)n[r]=e.charCodeAt(r);s=c.from(e),i=new Deflater(6),i.append(new Uint8Array(n)),e=i.flush(),n=new Uint8Array(e.length+6),n.set(new Uint8Array([120,156])),n.set(e,2),n.set(new Uint8Array([255&s,s>>8&255,s>>16&255,s>>24&255]),e.length+2),e=String.fromCharCode.apply(null,n),V("<</Length "+e.length+" /Filter [/FlateDecode]>>")}else V("<</Length "+e.length+">>");Z(e),V("endobj")}j[1]=M,V("1 0 obj"),V("<</Type /Pages");var h="/Kids [";for(r=0;r<P;r++)h+=d[r]+" 0 R ";V(h+"]"),V("/Count "+P),V(">>"),V("endobj"),G.publish("postPutPages")},Q=function(t){t.objectNumber=X(),V("<</BaseFont/"+t.PostScriptName+"/Type/Font"),"string"==typeof t.encoding&&V("/Encoding/"+t.encoding),V("/Subtype/Type1>>"),V("endobj")},tt=function(){for(var t in D)D.hasOwnProperty(t)&&Q(D[t])},et=function(){G.publish("putXobjectDict")},nt=function(){V("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),V("/Font <<");for(var t in D)D.hasOwnProperty(t)&&V("/"+t+" "+D[t].objectNumber+" 0 R");V(">>"),V("/XObject <<"),et(),V(">>")},rt=function(){tt(),G.publish("putResources"),j[2]=M,V("2 0 obj"),V("<<"),nt(),V(">>"),V("endobj"),G.publish("postPutResources")},ot=function(){G.publish("putAdditionalObjects");for(var t=0;t<U.length;t++){var e=U[t];j[e.objId]=M,V(e.objId+" 0 obj"),V(e.content),V("endobj")}I+=U.length,G.publish("postPutAdditionalObjects")},it=function(t,e,n){O.hasOwnProperty(e)||(O[e]={}),O[e][n]=t},at=function(t,e,n,r){var o="F"+(Object.keys(D).length+1).toString(10),i=D[o]={id:o,PostScriptName:t,fontName:e,fontStyle:n,encoding:r,metadata:{}};return it(o,e,n),G.publish("addFont",i),o},st=function(t,e){var n,r,o,i,a,s,c,u,l;if(e=e||{},o=e.sourceEncoding||"Unicode",a=e.outputEncoding,(e.autoencode||a)&&D[f].metadata&&D[f].metadata[o]&&D[f].metadata[o].encoding&&(i=D[f].metadata[o].encoding,!a&&D[f].encoding&&(a=D[f].encoding),!a&&i.codePages&&(a=i.codePages[0]),"string"==typeof a&&(a=i[a]),a)){for(c=!1,s=[],n=0,r=t.length;n<r;n++)u=a[t.charCodeAt(n)],u?s.push(String.fromCharCode(u)):s.push(t[n]),s[n].charCodeAt(0)>>8&&(c=!0);t=s.join("")}for(n=t.length;void 0===c&&0!==n;)t.charCodeAt(n-1)>>8&&(c=!0),n--;if(!c)return t;for(s=e.noBOM?[]:[254,255],n=0,r=t.length;n<r;n++){if(u=t.charCodeAt(n),(l=u>>8)>>8)throw new Error("Character at position "+n+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");s.push(l),s.push(u-(l<<8))}return String.fromCharCode.apply(void 0,s)},ct=function(t,e){return st(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},ut=function(){V("/Producer (jsPDF "+a.version+")");for(var t in N)N.hasOwnProperty(t)&&N[t]&&V("/"+t.substr(0,1).toUpperCase()+t.substr(1)+" ("+ct(N[t])+")");var e=new Date,n=e.getTimezoneOffset(),r=n<0?"+":"-",o=Math.floor(Math.abs(n/60)),i=Math.abs(n%60),s=[r,J(o),"'",J(i),"'"].join("");V(["/CreationDate (D:",e.getFullYear(),J(e.getMonth()+1),J(e.getDate()),J(e.getHours()),J(e.getMinutes()),J(e.getSeconds()),s,")"].join(""))},ft=function(){switch(V("/Type /Catalog"),V("/Pages 1 0 R"),m||(m="fullwidth"),m){case"fullwidth":V("/OpenAction [3 0 R /FitH null]");break;case"fullheight":V("/OpenAction [3 0 R /FitV null]");break;case"fullpage":V("/OpenAction [3 0 R /Fit]");break;case"original":V("/OpenAction [3 0 R /XYZ null null 1]");break;default:var t=""+m;"%"===t.substr(t.length-1)&&(m=parseInt(m)/100),"number"==typeof m&&V("/OpenAction [3 0 R /XYZ null null "+H(m)+"]")}switch(b||(b="continuous"),b){case"continuous":V("/PageLayout /OneColumn");break;case"single":V("/PageLayout /SinglePage");break;case"two":case"twoleft":V("/PageLayout /TwoColumnLeft");break;case"tworight":V("/PageLayout /TwoColumnRight")}v&&V("/PageMode /"+v),G.publish("putCatalog")},lt=function(){V("/Size "+(I+1)),V("/Root "+I+" 0 R"),V("/Info "+(I-1)+" 0 R")},dt=function(t,e){var n="string"==typeof e&&e.toLowerCase();if("string"==typeof t){var r=t.toLowerCase();c.hasOwnProperty(r)&&(t=c[r][0]/l,e=c[r][1]/l)}if(Array.isArray(t)&&(e=t[1],t=t[0]),n){switch(n.substr(0,1)){case"l":e>t&&(n="s");break;case"p":t>e&&(n="s")}"s"===n&&(d=t,t=e,e=d)}S=!0,T[++P]=[],R[P]={width:Number(t)||p,height:Number(e)||g},B[P]={},gt(P)},ht=function(){dt.apply(this,arguments),V(H(E*l)+" w"),V(C),0!==L&&V(L+" J"),0!==k&&V(k+" j"),G.publish("addPage",{pageNumber:P})},pt=function(t){t>0&&t<=P&&(T.splice(t,1),R.splice(t,1),P--,h>P&&(h=P),this.setPage(h))},gt=function(t){t>0&&t<=P&&(h=t,p=R[t].width,g=R[t].height)},vt=function(t,e){var n;switch(t=void 0!==t?t:D[f].fontName,e=void 0!==e?e:D[f].fontStyle,void 0!==t&&(t=t.toLowerCase()),t){case"sans-serif":case"verdana":case"arial":case"helvetica":t="helvetica";break;case"fixed":case"monospace":case"terminal":case"courier":t="courier";break;case"serif":case"cursive":case"fantasy":default:t="times"}try{n=O[t][e]}catch(t){}return n||null==(n=O.times[e])&&(n=O.times.normal),n},mt=function(){S=!1,I=2,M=0,F=[],j=[],U=[],G.publish("buildDocument"),V("%PDF-"+s),$(),ot(),rt(),X(),V("<<"),ut(),V(">>"),V("endobj"),X(),V("<<"),ft(),V(">>"),V("endobj");var t,e=M,n="0000000000";for(V("xref"),V("0 "+(I+1)),V(n+" 65535 f "),t=1;t<=I;t++){var r=j[t];V("function"==typeof r?(n+j[t]()).slice(-10)+" 00000 n ":(n+j[t]).slice(-10)+" 00000 n ")}return V("trailer"),V("<<"),lt(),V(">>"),V("startxref"),V(""+e),V("%%EOF"),S=!0,F.join("\n")},bt=function(t){var e="S";return"F"===t?e="f":"FD"===t||"DF"===t?e="B":"f"!==t&&"f*"!==t&&"B"!==t&&"B*"!==t||(e=t),e},yt=function(){for(var t=mt(),e=t.length,n=new ArrayBuffer(e),r=new Uint8Array(n);e--;)r[e]=t.charCodeAt(e);return n},wt=function(){return new Blob([yt()],{type:"application/pdf"})},Ct=function(t){return t.foo=function(){try{return t.apply(this,arguments)}catch(t){var e=t.stack||"";~e.indexOf(" at ")&&(e=e.split(" at ")[1]);var n="Error in function "+e.split("\n")[0].split("<")[0]+": "+t.message;if(!o.console)throw new Error(n);o.console.error(n,t),o.alert&&alert(n)}},t.foo.bar=t,t.foo}(function(t,e){var n="dataur"===(""+t).substr(0,6)?"data:application/pdf;base64,"+btoa(mt()):0;switch(t){case void 0:return mt();case"save":if(navigator.getUserMedia&&(void 0===o.URL||void 0===o.URL.createObjectURL))return _.output("dataurlnewwindow");saveAs(wt(),e),"function"==typeof saveAs.unload&&o.setTimeout&&setTimeout(saveAs.unload,911);break;case"arraybuffer":return yt();case"blob":return wt();case"bloburi":case"bloburl":return o.URL&&o.URL.createObjectURL(wt())||void 0;case"datauristring":case"dataurlstring":return n;case"dataurlnewwindow":var r=o.open(n);if(r||"undefined"==typeof safari)return r;case"datauri":case"dataurl":return o.document.location.href=n;default:throw new Error('Output type "'+t+'" is not supported.')}}),At=function(t){return!0===Array.isArray(W)&&W.indexOf(t)>-1};switch(e){case"pt":l=1;break;case"mm":l=72/25.4000508;break;case"cm":l=72/2.54000508;break;case"in":l=72;break;case"px":l=1==At("px_scaling")?.75:96/72;break;case"pc":case"em":l=12;break;case"ex":l=6;break;default:throw"Invalid unit: "+e}_.internal={pdfEscape:ct,getStyle:bt,getFont:function(){return D[vt.apply(_,arguments)]},getFontSize:function(){return A},getLineHeight:function(){return A*x},write:function(t){V(1===arguments.length?t:Array.prototype.join.call(arguments," "))},getCoordinateString:function(t){return H(t*l)},getVerticalCoordinateString:function(t){return H((g-t)*l)},collections:{},newObject:X,newAdditionalObject:Y,newObjectDeferred:q,newObjectDeferredBegin:K,putStream:Z,events:G,scaleFactor:l,pageSize:{get width(){return p},get height(){return g}},output:function(t,e){return Ct(t,e)},getNumberOfPages:function(){return T.length-1},pages:T,out:V,f2:H,getPageInfo:function(t){return{objId:2*(t-1)+3,pageNumber:t,pageContext:B[t]}},getCurrentPageInfo:function(){return{objId:2*(h-1)+3,pageNumber:h,pageContext:B[h]}},getPDFVersion:function(){return s},hasHotfix:At},_.addPage=function(){return ht.apply(this,arguments),this},_.setPage=function(){return gt.apply(this,arguments),this},_.insertPage=function(t){return this.addPage(),this.movePage(h,t),this},_.movePage=function(t,e){if(t>e){for(var n=T[t],r=R[t],o=B[t],i=t;i>e;i--)T[i]=T[i-1],R[i]=R[i-1],B[i]=B[i-1];T[e]=n,R[e]=r,B[e]=o,this.setPage(e)}else if(t<e){for(var n=T[t],r=R[t],o=B[t],i=t;i<e;i++)T[i]=T[i+1],R[i]=R[i+1],B[i]=B[i+1];T[e]=n,R[e]=r,B[e]=o,this.setPage(e)}return this},_.deletePage=function(){return pt.apply(this,arguments),this},_.setDisplayMode=function(t,e,n){if(m=t,b=e,v=n,-1==[void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(n))throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+n+'" is not recognized.');return this},_.text=function(t,e,n,r,o,i){function a(t){return t=t.split("\t").join(Array(u.TabLen||9).join(" ")),ct(t,r)}"number"==typeof t&&(d=n,n=e,e=t,t=d),"string"==typeof t&&(t=t.match(/[\n\r]/)?t.split(/\r\n|\r|\n/g):[t]),"string"==typeof o&&(i=o,o=null),"string"==typeof r&&(i=r,r=null),"number"==typeof r&&(o=r,r=null);var s="",c="Td";if(o){o*=Math.PI/180;var h=Math.cos(o),p=Math.sin(o);s=[H(h),H(p),H(-1*p),H(h),""].join(" "),c="Tm"}r=r||{},"noBOM"in r||(r.noBOM=!0),"autoencode"in r||(r.autoencode=!0);var v="",m=this.internal.getCurrentPageInfo().pageContext;if(!0===r.stroke?!0!==m.lastTextWasStroke&&(v="1 Tr\n",m.lastTextWasStroke=!0):(m.lastTextWasStroke&&(v="0 Tr\n"),m.lastTextWasStroke=!1),void 0===this._runningPageHeight&&(this._runningPageHeight=0),"string"==typeof t)t=a(t);else{if("[object Array]"!==Object.prototype.toString.call(t))throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');for(var b=t.concat(),y=[],C=b.length;C--;)y.push(a(b.shift()));if(0<=Math.ceil((g-n-this._runningPageHeight)*l/(A*x))&&y.length,i){var E,I,S,j=A*x,D=t.map(function(t){return this.getStringUnitWidth(t)*A/l},this);if(S=Math.max.apply(Math,D),"center"===i)E=e-S/2,e-=D[0]/2;else{if("right"!==i)throw new Error('Unrecognized alignment option, use "center" or "right".');E=e-S,e-=D[0]}I=e,t=y[0];for(var O=1,C=y.length;O<C;O++){var P=S-D[O];"center"===i&&(P/=2),t+=") Tj\n"+(E-I+P)+" -"+j+" Td ("+y[O],I=E+P}}else t=y.join(") Tj\nT* (")}var T;return T=H((g-n)*l),V("BT\n/"+f+" "+A+" Tf\n"+A*x+" TL\n"+v+w+"\n"+s+H(e*l)+" "+T+" "+c+"\n("+t+") Tj\nET"),this},_.lstext=function(t,e,n,r){console.warn("jsPDF.lstext is deprecated");for(var o=0,i=t.length;o<i;o++,e+=r)this.text(t[o],e,n);return this},_.line=function(t,e,n,r){return this.lines([[n-t,r-e]],t,e)},_.clip=function(){V("W"),V("S")},_.clip_fixed=function(t){V("evenodd"===t?"W*":"W"),V("n")},_.lines=function(t,e,n,r,o,i){var a,s,c,u,f,h,p,v,m,b,y;for("number"==typeof t&&(d=n,n=e,e=t,t=d),r=r||[1,1],V(z(e*l)+" "+z((g-n)*l)+" m "),a=r[0],s=r[1],u=t.length,b=e,y=n,c=0;c<u;c++)f=t[c],2===f.length?(b=f[0]*a+b,y=f[1]*s+y,V(z(b*l)+" "+z((g-y)*l)+" l")):(h=f[0]*a+b,p=f[1]*s+y,v=f[2]*a+b,m=f[3]*s+y,b=f[4]*a+b,y=f[5]*s+y,V(z(h*l)+" "+z((g-p)*l)+" "+z(v*l)+" "+z((g-m)*l)+" "+z(b*l)+" "+z((g-y)*l)+" c"));return i&&V(" h"),null!==o&&V(bt(o)),this},_.rect=function(t,e,n,r,o){return bt(o),V([H(t*l),H((g-e)*l),H(n*l),H(-r*l),"re"].join(" ")),null!==o&&V(bt(o)),this},_.triangle=function(t,e,n,r,o,i,a){return this.lines([[n-t,r-e],[o-n,i-r],[t-o,e-i]],t,e,[1,1],a,!0),this},_.roundedRect=function(t,e,n,r,o,i,a){var s=4/3*(Math.SQRT2-1);return this.lines([[n-2*o,0],[o*s,0,o,i-i*s,o,i],[0,r-2*i],[0,i*s,-o*s,i,-o,i],[2*o-n,0],[-o*s,0,-o,-i*s,-o,-i],[0,2*i-r],[0,-i*s,o*s,-i,o,-i]],t+o,e,[1,1],a),this},_.ellipse=function(t,e,n,r,o){var i=4/3*(Math.SQRT2-1)*n,a=4/3*(Math.SQRT2-1)*r;return V([H((t+n)*l),H((g-e)*l),"m",H((t+n)*l),H((g-(e-a))*l),H((t+i)*l),H((g-(e-r))*l),H(t*l),H((g-(e-r))*l),"c"].join(" ")),V([H((t-i)*l),H((g-(e-r))*l),H((t-n)*l),H((g-(e-a))*l),H((t-n)*l),H((g-e)*l),"c"].join(" ")),V([H((t-n)*l),H((g-(e+a))*l),H((t-i)*l),H((g-(e+r))*l),H(t*l),H((g-(e+r))*l),"c"].join(" ")),V([H((t+i)*l),H((g-(e+r))*l),H((t+n)*l),H((g-(e+a))*l),H((t+n)*l),H((g-e)*l),"c"].join(" ")),null!==o&&V(bt(o)),this},_.circle=function(t,e,n,r){return this.ellipse(t,e,n,n,r)},_.setProperties=function(t){for(var e in N)N.hasOwnProperty(e)&&t[e]&&(N[e]=t[e]);return this},_.setFontSize=function(t){return A=t,this},_.setFont=function(t,e){return f=vt(t,e),this},_.setFontStyle=_.setFontType=function(t){return f=vt(void 0,t),this},_.getFontList=function(){var t,e,n,r={};for(t in O)if(O.hasOwnProperty(t)){r[t]=n=[];for(e in O[t])O[t].hasOwnProperty(e)&&n.push(e)}return r},_.addFont=function(t,e,n){at(t,e,n,"StandardEncoding")},_.setLineWidth=function(t){return V((t*l).toFixed(2)+" w"),this},_.setDrawColor=function(t,e,n,r){var o;return o=void 0===e||void 0===r&&t===e===n?"string"==typeof t?t+" G":H(t/255)+" G":void 0===r?"string"==typeof t?[t,e,n,"RG"].join(" "):[H(t/255),H(e/255),H(n/255),"RG"].join(" "):"string"==typeof t?[t,e,n,r,"K"].join(" "):[H(t),H(e),H(n),H(r),"K"].join(" "),V(o),this},_.setFillColor=function(t,e,n,r){var o;return void 0===e||void 0===r&&t===e===n?o="string"==typeof t?t+" g":H(t/255)+" g":void 0===r||"object"==typeof r?(o="string"==typeof t?[t,e,n,"rg"].join(" "):[H(t/255),H(e/255),H(n/255),"rg"].join(" "),r&&0===r.a&&(o=["255","255","255","rg"].join(" "))):o="string"==typeof t?[t,e,n,r,"k"].join(" "):[H(t),H(e),H(n),H(r),"k"].join(" "),V(o),this},_.setTextColor=function(t,e,n){if("string"==typeof t&&/^#[0-9A-Fa-f]{6}$/.test(t)){var r=parseInt(t.substr(1),16);t=r>>16&255,e=r>>8&255,n=255&r}return w=0===t&&0===e&&0===n||void 0===e?z(t/255)+" g":[z(t/255),z(e/255),z(n/255),"rg"].join(" "),this},_.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},_.setLineCap=function(t){var e=this.CapJoinStyles[t];if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return L=e,V(e+" J"),this},_.setLineJoin=function(t){var e=this.CapJoinStyles[t];if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return k=e,V(e+" j"),this},_.output=Ct,_.save=function(t){_.output("save",t)};for(var xt in a.API)a.API.hasOwnProperty(xt)&&("events"===xt&&a.API.events.length?function(t,e){var n,r,o;for(o=e.length-1;-1!==o;o--)n=e[o][0],r=e[o][1],t.subscribe.apply(t,[n].concat("function"==typeof r?[r]:r))}(G,a.API.events):_[xt]=a.API[xt]);return function(){for(var t=[["Helvetica","helvetica","normal"],["Helvetica-Bold","helvetica","bold"],["Helvetica-Oblique","helvetica","italic"],["Helvetica-BoldOblique","helvetica","bolditalic"],["Courier","courier","normal"],["Courier-Bold","courier","bold"],["Courier-Oblique","courier","italic"],["Courier-BoldOblique","courier","bolditalic"],["Times-Roman","times","normal"],["Times-Bold","times","bold"],["Times-Italic","times","italic"],["Times-BoldItalic","times","bolditalic"],["ZapfDingbats","zapfdingbats"]],e=0,n=t.length;e<n;e++){var r=at(t[e][0],t[e][1],t[e][2],"StandardEncoding"),o=t[e][0].split("-");it(r,o[0],o[1]||"")}G.publish("addFonts",{fonts:D,dictionary:O})}(),f="F1",ht(n,t),G.publish("initialized"),_}var s="1.3",c={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};a.API={events:[]},a.version="1.x-master",void 0!==(r=function(){return a}.call(e,n,e,t))&&(t.exports=r)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this)},function(t,e){!function(t){"use strict";var e=["jpeg","jpg","png"],n=function(t){var e=this.internal.newObject(),r=this.internal.write,o=this.internal.putStream;if(t.n=e,r("<</Type /XObject"),r("/Subtype /Image"),r("/Width "+t.w),r("/Height "+t.h),t.cs===this.color_spaces.INDEXED?r("/ColorSpace [/Indexed /DeviceRGB "+(t.pal.length/3-1)+" "+("smask"in t?e+2:e+1)+" 0 R]"):(r("/ColorSpace /"+t.cs),t.cs===this.color_spaces.DEVICE_CMYK&&r("/Decode [1 0 1 0 1 0 1 0]")),r("/BitsPerComponent "+t.bpc),"f"in t&&r("/Filter /"+t.f),"dp"in t&&r("/DecodeParms <<"+t.dp+">>"),"trns"in t&&t.trns.constructor==Array){for(var i="",a=0,s=t.trns.length;a<s;a++)i+=t.trns[a]+" "+t.trns[a]+" ";r("/Mask ["+i+"]")}if("smask"in t&&r("/SMask "+(e+1)+" 0 R"),r("/Length "+t.data.length+">>"),o(t.data),r("endobj"),"smask"in t){var c="/Predictor "+t.p+" /Colors 1 /BitsPerComponent "+t.bpc+" /Columns "+t.w,u={w:t.w,h:t.h,cs:"DeviceGray",bpc:t.bpc,dp:c,data:t.smask};"f"in t&&(u.f=t.f),n.call(this,u)}t.cs===this.color_spaces.INDEXED&&(this.internal.newObject(),r("<< /Length "+t.pal.length+">>"),o(this.arrayBufferToBinaryString(new Uint8Array(t.pal))),r("endobj"))},r=function(){var t=this.internal.collections.addImage_images;for(var e in t)n.call(this,t[e])},o=function(){var t,e=this.internal.collections.addImage_images,n=this.internal.write;for(var r in e)t=e[r],n("/I"+t.i,t.n,"0","R")},i=function(e){return e&&"string"==typeof e&&(e=e.toUpperCase()),e in t.image_compression?e:t.image_compression.NONE},a=function(){var t=this.internal.collections.addImage_images;return t||(this.internal.collections.addImage_images=t={},this.internal.events.subscribe("putResources",r),this.internal.events.subscribe("putXobjectDict",o)),t},s=function(t){var e=0;return t&&(e=Object.keys?Object.keys(t).length:function(t){var e=0;for(var n in t)t.hasOwnProperty(n)&&e++;return e}(t)),e},c=function(t){return void 0===t||null===t},u=function(e){return"string"==typeof e&&t.sHashCode(e)},f=function(t){return-1===e.indexOf(t)},l=function(e){return"function"!=typeof t["process"+e.toUpperCase()]},d=function(t){return"object"==typeof t&&1===t.nodeType},h=function(t,e,n){if("IMG"===t.nodeName&&t.hasAttribute("src")){var r=""+t.getAttribute("src");if(!n&&0===r.indexOf("data:image/"))return r;!e&&/\.png(?:[?#].*)?$/i.test(r)&&(e="png")}if("CANVAS"===t.nodeName)var o=t;else{var o=document.createElement("canvas");o.width=t.clientWidth||t.width,o.height=t.clientHeight||t.height;var i=o.getContext("2d");if(!i)throw"addImage requires canvas to be supported by browser.";if(n){var a,s,c,u,f,l,d,h,p=Math.PI/180;"object"==typeof n&&(a=n.x,s=n.y,c=n.bg,n=n.angle),h=n*p,u=Math.abs(Math.cos(h)),f=Math.abs(Math.sin(h)),l=o.width,d=o.height,o.width=d*f+l*u,o.height=d*u+l*f,isNaN(a)&&(a=o.width/2),isNaN(s)&&(s=o.height/2),i.clearRect(0,0,o.width,o.height),i.fillStyle=c||"white",i.fillRect(0,0,o.width,o.height),i.save(),i.translate(a,s),i.rotate(h),i.drawImage(t,-l/2,-d/2),i.rotate(-h),i.translate(-a,-s),i.restore()}else i.drawImage(t,0,0,o.width,o.height)}return o.toDataURL("png"==(""+e).toLowerCase()?"image/png":"image/jpeg")},p=function(t,e){var n;if(e)for(var r in e)if(t===e[r].alias){n=e[r];break}return n},g=function(t,e,n){return t||e||(t=-96,e=-96),t<0&&(t=-1*n.w*72/t/this.internal.scaleFactor),e<0&&(e=-1*n.h*72/e/this.internal.scaleFactor),0===t&&(t=e*n.w/n.h),0===e&&(e=t*n.h/n.w),[t,e]},v=function(t,e,n,r,o,i,a){var s=g.call(this,n,r,o),c=this.internal.getCoordinateString,u=this.internal.getVerticalCoordinateString;n=s[0],r=s[1],a[i]=o,this.internal.write("q",c(n),"0 0",c(r),c(t),u(e+r),"cm /I"+o.i,"Do Q")};t.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"},t.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"},t.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},t.sHashCode=function(t){return Array.prototype.reduce&&t.split("").reduce(function(t,e){return(t=(t<<5)-t+e.charCodeAt(0))&t},0)},t.isString=function(t){return"string"==typeof t},t.extractInfoFromBase64DataURI=function(t){return/^data:([\w]+?\/([\w]+?));base64,(.+?)$/g.exec(t)},t.supportsArrayBuffer=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array},t.isArrayBuffer=function(t){return!!this.supportsArrayBuffer()&&t instanceof ArrayBuffer},t.isArrayBufferView=function(t){return!!this.supportsArrayBuffer()&&"undefined"!=typeof Uint32Array&&(t instanceof Int8Array||t instanceof Uint8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)},t.binaryStringToUint8Array=function(t){for(var e=t.length,n=new Uint8Array(e),r=0;r<e;r++)n[r]=t.charCodeAt(r);return n},t.arrayBufferToBinaryString=function(t){this.isArrayBuffer(t)&&(t=new Uint8Array(t));for(var e="",n=t.byteLength,r=0;r<n;r++)e+=String.fromCharCode(t[r]);return e},t.arrayBufferToBase64=function(t){for(var e,n,r,o,i,a="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=new Uint8Array(t),u=c.byteLength,f=u%3,l=u-f,d=0;d<l;d+=3)i=c[d]<<16|c[d+1]<<8|c[d+2],e=(16515072&i)>>18,n=(258048&i)>>12,r=(4032&i)>>6,o=63&i,a+=s[e]+s[n]+s[r]+s[o];return 1==f?(i=c[l],e=(252&i)>>2,n=(3&i)<<4,a+=s[e]+s[n]+"=="):2==f&&(i=c[l]<<8|c[l+1],e=(64512&i)>>10,n=(1008&i)>>4,r=(15&i)<<2,a+=s[e]+s[n]+s[r]+"="),a},t.createImageInfo=function(t,e,n,r,o,i,a,s,c,u,f,l,d){var h={alias:s,w:e,h:n,cs:r,bpc:o,i:a,data:t};return i&&(h.f=i),c&&(h.dp=c),u&&(h.trns=u),f&&(h.pal=f),l&&(h.smask=l),d&&(h.p=d),h},t.addImage=function(t,n,r,o,g,m,b,y,w){if("string"!=typeof n){var C=m;m=g,g=o,o=r,r=n,n=C}if("object"==typeof t&&!d(t)&&"imageData"in t){var A=t;t=A.imageData,n=A.format||n,r=A.x||r||0,o=A.y||o||0,g=A.w||g,m=A.h||m,b=A.alias||b,y=A.compression||y,w=A.rotation||A.angle||w}if(isNaN(r)||isNaN(o))throw console.error("jsPDF.addImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addImage");var x,E=a.call(this);if(!(x=p(t,E))){var I;if(d(t)&&(t=h(t,n,w)),c(b)&&(b=u(t)),!(x=p(b,E))){if(this.isString(t)){var S=this.extractInfoFromBase64DataURI(t);S?(n=S[2],t=atob(S[3])):137===t.charCodeAt(0)&&80===t.charCodeAt(1)&&78===t.charCodeAt(2)&&71===t.charCodeAt(3)&&(n="png")}if(n=(n||"JPEG").toLowerCase(),f(n))throw new Error("addImage currently only supports formats "+e+", not '"+n+"'");if(l(n))throw new Error("please ensure that the plugin for '"+n+"' support is added");if(this.supportsArrayBuffer()&&(t instanceof Uint8Array||(I=t,t=this.binaryStringToUint8Array(t))),!(x=this["process"+n.toUpperCase()](t,s(E),b,i(y),I)))throw new Error("An unkwown error occurred whilst processing the image")}}return v.call(this,r,o,g,m,x,x.i,E),this};var m=function(t){var e,n,r;if(255===!t.charCodeAt(0)||216===!t.charCodeAt(1)||255===!t.charCodeAt(2)||224===!t.charCodeAt(3)||!t.charCodeAt(6)==="J".charCodeAt(0)||!t.charCodeAt(7)==="F".charCodeAt(0)||!t.charCodeAt(8)==="I".charCodeAt(0)||!t.charCodeAt(9)==="F".charCodeAt(0)||0===!t.charCodeAt(10))throw new Error("getJpegSize requires a binary string jpeg file");for(var o=256*t.charCodeAt(4)+t.charCodeAt(5),i=4,a=t.length;i<a;){if(i+=o,255!==t.charCodeAt(i))throw new Error("getJpegSize could not find the size of the image");if(192===t.charCodeAt(i+1)||193===t.charCodeAt(i+1)||194===t.charCodeAt(i+1)||195===t.charCodeAt(i+1)||196===t.charCodeAt(i+1)||197===t.charCodeAt(i+1)||198===t.charCodeAt(i+1)||199===t.charCodeAt(i+1))return n=256*t.charCodeAt(i+5)+t.charCodeAt(i+6),e=256*t.charCodeAt(i+7)+t.charCodeAt(i+8),r=t.charCodeAt(i+9),[e,n,r];i+=2,o=256*t.charCodeAt(i)+t.charCodeAt(i+1)}},b=function(t){if(65496!=(t[0]<<8|t[1]))throw new Error("Supplied data is not a JPEG");for(var e,n,r,o,i=t.length,a=(t[4]<<8)+t[5],s=4;s<i;){if(s+=a,e=y(t,s),a=(e[2]<<8)+e[3],(192===e[1]||194===e[1])&&255===e[0]&&a>7)return e=y(t,s+5),n=(e[2]<<8)+e[3],r=(e[0]<<8)+e[1],o=e[4],{width:n,height:r,numcomponents:o};s+=2}throw new Error("getJpegSizeFromBytes could not find the size of the image")},y=function(t,e){return t.subarray(e,e+5)};t.processJPEG=function(t,e,n,r,o){var i,a=this.color_spaces.DEVICE_RGB,s=this.decode.DCT_DECODE;return this.isString(t)?(i=m(t),this.createImageInfo(t,i[0],i[1],1==i[3]?this.color_spaces.DEVICE_GRAY:a,8,s,e,n)):(this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)?(i=b(t),t=o||this.arrayBufferToBinaryString(t),this.createImageInfo(t,i.width,i.height,1==i.numcomponents?this.color_spaces.DEVICE_GRAY:a,8,s,e,n)):null)},t.processJPG=function(){return this.processJPEG.apply(this,arguments)}}(jsPDF.API)},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){(function(e){t.exports=e}).call(e,{})},function(t,e,n){t.exports=function(t,e,r){var o=document,i=o.getElementById(t),a=o.characterSet,s={json:"application/json;charset="+a,txt:"csv/txt;charset="+a,csv:"csv/txt;charset="+a,xml:"application/xml",doc:"application/msword",xls:"application/vnd.ms-excel",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},c={json:n(6),txt:n(2),csv:n(2),xml:n(8),doc:n(3),xls:n(3),image:n(5),pdf:n(7),docx:""},u=c[r];if("function"!=typeof u)throw new Error("the supported types are: json, txt, csv, xml, doc, xls, image, pdf");if("image"===r||"pdf"===r)u(i,e);else{var f=u(i,a,r);n(1).saveAs(new Blob([f],{type:s[r]}),e+"."+r)}}},function(t,e,n){var r=window.jsPDF=n(10);n(11),function(t){"use strict";t.addDOM=function(t,e,r,o,i){var a=n(4);"number"!=typeof e&&(o=e,i=r),"function"==typeof o&&(i=o,o=null);var s=this.internal,c=s.scaleFactor,u=s.pageSize.width,f=s.pageSize.height;o=o||{},o.onrendered=function(t){e=parseInt(e)||0,r=parseInt(r)||0;var n=o.dim||{},a=n.h||0,s=n.w||Math.min(u,t.width/c)-e,l="JPEG";if(o.format&&(l=o.format),t.height>f&&o.pagesplit){var d=function(){for(var n=0;;){var o=document.createElement("canvas");o.width=Math.min(u*c,t.width),o.height=Math.min(f*c,t.height-n),o.getContext("2d").drawImage(t,0,n,t.width,o.height,0,0,o.width,o.height);var a=[o,e,n?0:r,o.width/c,o.height/c,l,null,"SLOW"];if(this.addImage.apply(this,a),(n+=o.height)>=t.height)break;this.addPage()}i(s,n,null,a)}.bind(this);if("CANVAS"===t.nodeName){var h=new Image;h.onload=d,h.src=t.toDataURL("image/png"),t=h}else d()}else{var p=Math.random().toString(35),g=[t,e,r,s,a,l,p,"SLOW"];this.addImage.apply(this,g),i(s,a,p,g)}}.bind(this),a(t,{format:"jpg"},function(t){o.onrendered(t)})}}(r.API),t.exports=r}])});

/***/ }),

/***/ "TbMG":
/*!****************************************************************************!*\
  !*** ./src/app/back-end/shared/export-buttons/export.buttons.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExportButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportButtonsComponent", function() { return ExportButtonsComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");



class ExportButtonsComponent {
    constructor(u) {
        this.u = u;
        this.styleLinks = "";
    }
    ngOnInit() {
        let allStylesLink = document.querySelectorAll('title,link,style');
        for (let index = 0; index <= allStylesLink.length - 1; index++)
            this.styleLinks += allStylesLink.item(index).outerHTML;
    }
    /**
     * Print Content
     */
    print() {
        debugger;
        let printWindow = window.open(null, "");
        printWindow.document.write(`
        <html >
            <head>
            <base href="${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].website_url}">
                <style>
                @media print{
                    app-export-buttons{
                        display:none
                    }
                    }
                }
                </style>
                ${this.styleLinks}
            </head>
            <body>
            ${document.getElementById(this.targetDivId).outerHTML}
            </body>
        </html>`);
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.document.close();
            printWindow.close();
        }, 100);
    }
} //End Class
ExportButtonsComponent.ɵfac = function ExportButtonsComponent_Factory(t) { return new (t || ExportButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
ExportButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExportButtonsComponent, selectors: [["app-export-buttons"]], inputs: { targetDivId: ["divId", "targetDivId"] }, decls: 1, vars: 1, consts: [[1, "btn", "btn-outline-primary", "m-1", 3, "innerText", "click"]], template: function ExportButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExportButtonsComponent_Template_button_click_0_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx.u.r.print);
    } }, styles: [""] });


/***/ }),

/***/ "UEro":
/*!*************************************************!*\
  !*** ./src/models/fop/fop.paging.limt.model.ts ***!
  \*************************************************/
/*! exports provided: FopPagingLimtModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopPagingLimtModel", function() { return FopPagingLimtModel; });
/**
 * Paging Limt class
 */
class FopPagingLimtModel {
    /**
     *
     * @param {number} skip skip items
     * @param {number} take take items
     * @param {string} allName name from resources
     */
    constructor(skip = 0, take = 10) {
        this.skip = skip,
            this.take = take;
        this.limitOptions = [{ limit: 5, name: '5' },
            { limit: 10, name: '10' },
            { limit: 20, name: '20' },
            { limit: 70, name: '70' },
            { limit: 100, name: '100' },
            { limit: -1, name: 'All' }];
    }
}


/***/ }),

/***/ "VjaU":
/*!************************************************************************!*\
  !*** ./src/app/back-end/shared/fop/fop-paging/fop.paging.component.ts ***!
  \************************************************************************/
/*! exports provided: FopPagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopPagingComponent", function() { return FopPagingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FopPagingComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 18);
} if (rf & 2) {
    const li_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", li_r4.limit)("innerHtml", li_r4.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function FopPagingComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopPagingComponent_li_14_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const pagNum_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.fop.paging.gotoPage(pagNum_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pagNum_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, pagNum_r5 == ctx_r1.fop.paging.currentPage))("title", ctx_r1.u.r.page + " " + pagNum_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", pagNum_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FopPagingComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopPagingComponent_a_22_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.fop.paging.disableGetMoreButton ? null : ctx_r8.getMoreItems.emit(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.u.r.getMoreItems)("innerHtml", ctx_r2.u.r.getMoreItems, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FopPagingComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r3.u.r.loadingData);
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
class FopPagingComponent {
    constructor(u) {
        this.u = u;
        //Get More Items Firreing With Click On Display More Buttons
        this.getMoreItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ;
    ngOnInit() {
    }
} //End Class
FopPagingComponent.ɵfac = function FopPagingComponent_Factory(t) { return new (t || FopPagingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
FopPagingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FopPagingComponent, selectors: [["fop-paging"]], inputs: { fop: "fop" }, outputs: { getMoreItems: "getMoreItems" }, decls: 24, vars: 26, consts: [[1, "d-flex", "justify-content-between"], [1, "pagination"], [1, "page-item"], [1, "form-control", "form-control-sm", 2, "height", "35px", "border-radius", "0%", "border-top-left-radius", ".25rem", "border-bottom-left-radius", ".25rem", 3, "ngModel", "ngModelChange", "change"], [3, "value", "innerHtml", 4, "ngFor", "ngForOf"], [1, "page-link"], [1, "page-item", 3, "ngClass", "title", "click"], ["href", "javascript:void(0)", 1, "page-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-arrow-left"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], ["class", "page-item ", 3, "ngClass", "title", 4, "ngFor", "ngForOf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-arrow-right"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], [1, "page-item", 3, "ngClass"], ["class", "page-link", "href", "javascript:void(0)", 3, "title", "innerHtml", "click", 4, "ngIf"], ["class", "page-link ", "href", "javascript:void(0)", "style", "height: 35px;", 3, "title", 4, "ngIf"], [3, "value", "innerHtml"], [1, "page-item", 3, "ngClass", "title"], ["href", "javascript:void(0)", 1, "page-link", 3, "innerHtml", "click"], ["href", "javascript:void(0)", 1, "page-link", 3, "title", "innerHtml", "click"], ["href", "javascript:void(0)", 1, "page-link", 2, "height", "35px", 3, "title"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"]], template: function FopPagingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FopPagingComponent_Template_select_ngModelChange_3_listener($event) { return ctx.fop.numberOfDisplayResiltInPage = $event; })("change", function FopPagingComponent_Template_select_change_3_listener() { return ctx.fop.paging.changeCountItemDisplaying(ctx.fop.numberOfDisplayResiltInPage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FopPagingComponent_option_4_Template, 1, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopPagingComponent_Template_li_click_9_listener() { return ctx.fop.paging.gotoPreviousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "polyline", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FopPagingComponent_li_14_Template, 2, 5, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopPagingComponent_Template_li_click_16_listener() { return ctx.fop.paging.gotoNextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "polyline", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FopPagingComponent_a_22_Template, 1, 2, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FopPagingComponent_a_23_Template, 2, 1, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fop.numberOfDisplayResiltInPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fop.paging.pagingLimt.limitOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"](" ", ctx.u.r.showing, " ", ctx.fop.paging.from, " - ", ctx.fop.paging.to, " ", ctx.u.r.of, " ", ctx.fop.paging.itemsCount, " ", ctx.u.r.entiries, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, !ctx.fop.paging.allowPreviousPage))("title", ctx.u.r.privousPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](15, 16, ctx.fop.paging.pages, ctx.fop.paging.pagesSeliceSkip, ctx.fop.paging.pagesSeliceTake));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, !ctx.fop.paging.allowNextPage))("title", ctx.u.r.nextPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.fop.paging.disableGetMoreButton));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], encapsulation: 2 });


/***/ }),

/***/ "Z5Tv":
/*!**********************************************************!*\
  !*** ./src/app/back-end/shared/notes/notes.component.ts ***!
  \**********************************************************/
/*! exports provided: NotsCompoenent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotsCompoenent", function() { return NotsCompoenent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");


class NotsCompoenent {
    constructor(u) {
        this.u = u;
        this.notes = "";
    }
}
NotsCompoenent.ɵfac = function NotsCompoenent_Factory(t) { return new (t || NotsCompoenent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
NotsCompoenent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotsCompoenent, selectors: [["app-notes"]], inputs: { notes: "notes" }, decls: 3, vars: 2, consts: [["role", "alert", 1, "alert", "alert-danger", "mb-4"], [3, "innerText"]], template: function NotsCompoenent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.u.r.importantNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.notes, " ");
    } }, encapsulation: 2 });


/***/ }),

/***/ "ePWN":
/*!******************************************!*\
  !*** ./src/pipes/fop/fop.filter.pipe.ts ***!
  \******************************************/
/*! exports provided: FopFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopFilterPipe", function() { return FopFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");


/**
 * Fop Filter
 */
class FopFilterPipe {
    constructor(u) {
        this.u = u;
    }
    transform(items, searchText, fop) {
        if (!items || !searchText)
            return items;
        return this.filterArray(items, searchText, fop);
    }
    /**
 * اتمام عغملية الفلترة
 * @param {any} items العناصر الذى سوف تفلتر
 * @param {any} searchText
 * @param {any} fieldTargets الحقول الذى سوف نبحث بها
 */
    filterArray(items, searchText, fop) {
        let result = [], searchTextIsNotNumber = isNaN(Number(searchText));
        //Filter Now
        items.forEach(it => {
            let isAllow = false;
            for (const field of fop.fieldNames) {
                /**
                               * اذا كان البحث عن نص اذا سوف نبحث عن القيم الى ما بين "" فقط
                               * اذا كان رقم يبقى نبحث عادى لاكن الارقم لا توضع بين علامات تنصيص لذا اعتمدت على ان يكون هوا اخر حقل فى الاوبجكت او يلية حقل جديد  وطبيع الفاصل بينهم بيكون العلامة , دى
                               */
                let pattern = searchTextIsNotNumber ? `"${field}":".*${searchText}.*"` : `"${field}":.*${searchText}.*(,|\})`, reg = RegExp(pattern, "mi");
                isAllow = reg.test(JSON.stringify(it));
                //Out Fro Loop If Current Object Is Allow 
                if (isAllow)
                    break;
            }
            if (isAllow)
                result.push(it);
        });
        //ReFop Now For Update pagination
        fop.reFop(result.length);
        return result;
    }
} //End Clss
FopFilterPipe.ɵfac = function FopFilterPipe_Factory(t) { return new (t || FopFilterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
FopFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fopFilterPipe", type: FopFilterPipe, pure: true });


/***/ }),

/***/ "lyqo":
/*!********************************************************************!*\
  !*** ./src/app/back-end/shared/fop/fop-sort/fop-sort.component.ts ***!
  \********************************************************************/
/*! exports provided: FopSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopSortComponent", function() { return FopSortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1) { return { "ascending": a0, "descending": a1 }; };
class FopSortComponent {
    constructor(u) {
        this.u = u;
    }
    ngOnInit() {
        //Add Field Name To Array Fro Using in Filter 
        this.fop.fieldNames.push(this.filedName);
    }
    //Sort
    sort() {
        this.fop.sort.fieldName = this.filedName;
        this.fop.sort.reverse = !this.fop.sort.reverse;
    }
}
FopSortComponent.ɵfac = function FopSortComponent_Factory(t) { return new (t || FopSortComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
FopSortComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FopSortComponent, selectors: [["fop-sort"]], inputs: { fop: "fop", filedName: "filedName", fieldText: "fieldText" }, decls: 1, vars: 5, consts: [[1, "fop-sort", 3, "ngClass", "innerHtml", "click"]], template: function FopSortComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopSortComponent_Template_div_click_0_listener() { return ctx.sort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.fop.sort.reverse && ctx.fop.sort.fieldName == ctx.filedName, !ctx.fop.sort.reverse && ctx.fop.sort.fieldName == ctx.filedName))("innerHtml", ctx.fieldText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Atc29ydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "mdi9":
/*!******************************************!*\
  !*** ./src/models/fop/fop.sort.model.ts ***!
  \******************************************/
/*! exports provided: FopSortModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopSortModel", function() { return FopSortModel; });
/**
 * sort items
 */
class FopSortModel {
    /**
     * sort items
     * @param {String} propName اسم البروبرتى الافتراية
     * @param {Bool} reverse طريقة الترتيب الافتراضية
     */
    constructor(fieldName = null, reverse = null) {
        this.fieldName = fieldName;
        this.reverse = reverse;
    }
    //set property name for sort
    sortBy(_fieldName) {
        if (_fieldName === this.fieldName)
            this.reverse = !this.reverse;
        else
            this.reverse = true;
        this.fieldName = _fieldName;
    }
    ;
    //check from sort case and name for set specific class
    ifSortClass(fieldName, sortCase) {
        return this.fieldName === fieldName && this.reverse == sortCase;
    }
    ;
}


/***/ })

}]);
//# sourceMappingURL=default~back-end-branches-module~back-end-contact-us-messages-module~back-end-containers-module~back~a9f64d0d.js.map