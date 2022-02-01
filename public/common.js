(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Fh2x":
/*!*****************************************!*\
  !*** ./src/enums/freight.cases.enum.ts ***!
  \*****************************************/
/*! exports provided: FreightCasesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightCasesEnum", function() { return FreightCasesEnum; });
var FreightCasesEnum;
(function (FreightCasesEnum) {
    /**تم التسليم في ميناء الخمس */
    FreightCasesEnum[FreightCasesEnum["Delivery_at_The_Fiveth_Port"] = 1] = "Delivery_at_The_Fiveth_Port";
    /**تم التسليم في ميناء مصراتة */
    FreightCasesEnum[FreightCasesEnum["Delivery_at_Misrata_port"] = 2] = "Delivery_at_Misrata_port";
    /**الحاوية في ميناء الخمس */
    FreightCasesEnum[FreightCasesEnum["Container_in_The_Port_of_Fiveth"] = 3] = "Container_in_The_Port_of_Fiveth";
    /**الحاوية في ميناء مصراتة */
    FreightCasesEnum[FreightCasesEnum["Container_in_Misrata_port"] = 4] = "Container_in_Misrata_port";
    /**تم التحميل في حاوية الى ميناء مصراتة */
    FreightCasesEnum[FreightCasesEnum["Loaded_in_container_to_Misrata_port"] = 5] = "Loaded_in_container_to_Misrata_port";
    /**الحاوية في البحر */
    FreightCasesEnum[FreightCasesEnum["Container_at_sea"] = 6] = "Container_at_sea";
    /**تم التحميل في حاوية الى ميناء الخمس */
    FreightCasesEnum[FreightCasesEnum["Loaded_in_container_to_port_of_five"] = 7] = "Loaded_in_container_to_port_of_five";
    /**قيد التحميل في حاوية */
    FreightCasesEnum[FreightCasesEnum["Loaded_in_a_container"] = 8] = "Loaded_in_a_container";
    /**في موقع المزاد */
    FreightCasesEnum[FreightCasesEnum["At_the_auction_place"] = 9] = "At_the_auction_place";
    /**قيد النقل الداخلي */
    FreightCasesEnum[FreightCasesEnum["In_house_transport"] = 10] = "In_house_transport";
    /**في مخزن التعبئة */
    FreightCasesEnum[FreightCasesEnum["In_the_packing_store"] = 11] = "In_the_packing_store";
})(FreightCasesEnum || (FreightCasesEnum = {}));
;


/***/ }),

/***/ "FyP3":
/*!******************************************!*\
  !*** ./src/enums/freitght.types.enum.ts ***!
  \******************************************/
/*! exports provided: FreitghtTypesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreitghtTypesEnum", function() { return FreitghtTypesEnum; });
var FreitghtTypesEnum;
(function (FreitghtTypesEnum) {
    FreitghtTypesEnum[FreitghtTypesEnum["Bidding"] = 1] = "Bidding";
    FreitghtTypesEnum[FreitghtTypesEnum["SectorSale"] = 2] = "SectorSale";
    FreitghtTypesEnum[FreitghtTypesEnum["FreightForDealer"] = 3] = "FreightForDealer";
    FreitghtTypesEnum[FreitghtTypesEnum["FreightForOffic"] = 4] = "FreightForOffic";
})(FreitghtTypesEnum || (FreitghtTypesEnum = {}));


/***/ }),

/***/ "TEQo":
/*!*******************************************!*\
  !*** ./src/consts/freight.cases.const.ts ***!
  \*******************************************/
/*! exports provided: freightCasesCreateUpdateArray, freightCasesArray, freightCasesContainerArray, freightCasesObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freightCasesCreateUpdateArray", function() { return freightCasesCreateUpdateArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freightCasesArray", function() { return freightCasesArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freightCasesContainerArray", function() { return freightCasesContainerArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freightCasesObject", function() { return freightCasesObject; });
/* harmony import */ var src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/freight.cases.enum */ "Fh2x");

const freightCasesCreateUpdateArray = [
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].At_the_auction_place, name: "في موقع المزاد" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].In_house_transport, name: "قيد النقل الداخلي" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].In_the_packing_store, name: "في مخزن التعبئة" }
];
const freightCasesArray = [
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Delivery_at_The_Fiveth_Port, name: "تم التسليم في ميناء الخمس" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Delivery_at_Misrata_port, name: "تم التسليم في ميناء مصراتة" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Container_in_The_Port_of_Fiveth, name: "الحاوية في ميناء الخمس" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Container_in_Misrata_port, name: "الحاوية في ميناء مصراتة" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Loaded_in_container_to_Misrata_port, name: "تم التحميل في حاوية الى ميناء مصراتة" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Container_at_sea, name: "الحاوية في البحر" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Loaded_in_container_to_port_of_five, name: "تم التحميل في حاوية الى ميناء الخمس" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Loaded_in_a_container, name: "قيد التحميل في حاوية" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].At_the_auction_place, name: "في موقع المزاد" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].In_house_transport, name: "قيد النقل الداخلي" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].In_the_packing_store, name: "في مخزن التعبئة" }
];
const freightCasesContainerArray = [
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Container_in_The_Port_of_Fiveth, name: "الحاوية في ميناء الخمس" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Container_in_Misrata_port, name: "الحاوية في ميناء مصراتة" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Loaded_in_container_to_Misrata_port, name: "تم التحميل في حاوية الى ميناء مصراتة" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Container_at_sea, name: "الحاوية في البحر" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Loaded_in_container_to_port_of_five, name: "تم التحميل في حاوية الى ميناء الخمس" },
    { _id: src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Loaded_in_a_container, name: "قيد التحميل في حاوية" },
];
const freightCasesObject = {
    [src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Delivery_at_The_Fiveth_Port]: "تم التسليم في ميناء الخمس",
    [src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Delivery_at_Misrata_port]: "تم التسليم في ميناء مصراتة",
    [src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Container_in_The_Port_of_Fiveth]: "الحاوية في ميناء الخمس",
    [src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Container_in_Misrata_port]: "الحاوية في ميناء مصراتة",
    [src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Loaded_in_container_to_Misrata_port]: "تم التحميل في حاوية الى ميناء مصراتة",
    [src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Container_at_sea]: "الحاوية في البحر",
    [src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Loaded_in_container_to_port_of_five]: "تم التحميل في حاوية الى ميناء الخمس",
    [src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].Loaded_in_a_container]: "قيد التحميل في حاوية",
    [src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].At_the_auction_place]: "في موقع المزاد",
    [src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].In_house_transport]: "قيد النقل الداخلي",
    [src_enums_freight_cases_enum__WEBPACK_IMPORTED_MODULE_0__["FreightCasesEnum"].In_the_packing_store]: "في مخزن التعبئة"
};
Object.freeze(freightCasesObject);
Object.freeze(freightCasesArray);


/***/ }),

/***/ "XJrW":
/*!************************************!*\
  !*** ./src/enums/branches.enum.ts ***!
  \************************************/
/*! exports provided: BranchesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesEnum", function() { return BranchesEnum; });
/**
 * فروع الشركة
 */
var BranchesEnum;
(function (BranchesEnum) {
    BranchesEnum[BranchesEnum["Main"] = 1] = "Main";
    BranchesEnum[BranchesEnum["Mesrata"] = 2] = "Mesrata";
    BranchesEnum[BranchesEnum["Trables"] = 3] = "Trables";
})(BranchesEnum || (BranchesEnum = {}));


/***/ }),

/***/ "hLCK":
/*!*************************************!*\
  !*** ./src/enums/car.sizes.enum.ts ***!
  \*************************************/
/*! exports provided: CarSizesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarSizesEnum", function() { return CarSizesEnum; });
var CarSizesEnum;
(function (CarSizesEnum) {
    CarSizesEnum[CarSizesEnum["small"] = 1] = "small";
    CarSizesEnum[CarSizesEnum["medium"] = 2] = "medium";
    CarSizesEnum[CarSizesEnum["big"] = 3] = "big";
})(CarSizesEnum || (CarSizesEnum = {}));


/***/ }),

/***/ "qB6b":
/*!***************************************!*\
  !*** ./src/consts/car.sizes.const.ts ***!
  \***************************************/
/*! exports provided: carSizesArray, carSizesObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carSizesArray", function() { return carSizesArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carSizesObject", function() { return carSizesObject; });
/* harmony import */ var _enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../enums/car.sizes.enum */ "hLCK");

const carSizesArray = [{ _id: _enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].small, name: "صغيرة" },
    { _id: _enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].medium, name: "متوسطة" },
    { _id: _enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].big, name: "كبيرة" }];
const carSizesObject = {
    [_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].small]: "صغيرة",
    [_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].medium]: "متوسطة",
    [_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].big]: "كبيرة"
};
Object.freeze(carSizesObject);
Object.freeze(carSizesArray);


/***/ }),

/***/ "tGjv":
/*!**************************************!*\
  !*** ./src/consts/branches.const.ts ***!
  \**************************************/
/*! exports provided: BranchesArray, BranchesObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesArray", function() { return BranchesArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesObject", function() { return BranchesObject; });
/* harmony import */ var _enums_branches_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../enums/branches.enum */ "XJrW");

const BranchesArray = [{ branchIndex: _enums_branches_enum__WEBPACK_IMPORTED_MODULE_0__["BranchesEnum"].Main, name: "الرئيسيى" },
    { branchIndex: _enums_branches_enum__WEBPACK_IMPORTED_MODULE_0__["BranchesEnum"].Mesrata, name: "مصراته" },
    { branchIndex: _enums_branches_enum__WEBPACK_IMPORTED_MODULE_0__["BranchesEnum"].Trables, name: "طرابلس" }];
const BranchesObject = {
    [_enums_branches_enum__WEBPACK_IMPORTED_MODULE_0__["BranchesEnum"].Main]: "الرئيسيى",
    [_enums_branches_enum__WEBPACK_IMPORTED_MODULE_0__["BranchesEnum"].Mesrata]: "مصراته",
    [_enums_branches_enum__WEBPACK_IMPORTED_MODULE_0__["BranchesEnum"].Trables]: "طرابلس"
};
Object.freeze(BranchesObject);
Object.freeze(BranchesArray);


/***/ })

}]);
//# sourceMappingURL=common.js.map