"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalSettingCollections = exports.cols = void 0;
/**
 * Data Base Collections
 */
exports.cols = {
    users: "users",
    buySources: "buySources",
    ports: "ports",
    states: "states",
    navigationalWayes: "navigationalWayes",
    transactions: "transactions",
    branches: "branches",
    appSetting: "appSetting",
    contactUs: "contactUs"
};
exports.generalSettingCollections = [
    exports.cols.buySources,
    //cols.freightCases,
    exports.cols.states,
    exports.cols.navigationalWayes,
];
Object.freeze(exports.cols);
