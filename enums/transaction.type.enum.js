"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTypeEnum = void 0;
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
})(TransactionTypeEnum = exports.TransactionTypeEnum || (exports.TransactionTypeEnum = {}));
