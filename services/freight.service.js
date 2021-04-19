"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreightService = void 0;
const mongodb_1 = require("mongodb");
const car_sizes_const_1 = require("../consts/car.sizes.const");
const freight_cases_const_1 = require("../consts/freight.cases.const");
const branches_const_1 = require("../consts/branches.const");
const instance_service_1 = require("./instance.service");
const freight_types_const_1 = require("../consts/freight.types.const");
class FreightService {
    /**
     * Convert Ids String To Object Id
     * @param obj
     */
    static convertIdsStrinToObjectId(obj) {
        if (obj.userId) {
            //معنى ذالك ان المستخدم يريد ادخال بيانات العميل يدويا
            if (obj.userId == "-1")
                obj.userId = null;
            else
                obj.userId = new mongodb_1.ObjectId(obj.userId);
        }
        if (obj.buySourceId)
            obj.buySourceId = new mongodb_1.ObjectId(obj.buySourceId);
        if (obj.freightStateId)
            obj.freightStateId = new mongodb_1.ObjectId(obj.freightStateId);
        if (obj.cityId)
            obj.cityId = new mongodb_1.ObjectId(obj.cityId);
        if (obj.freightPortId)
            obj.freightPortId = new mongodb_1.ObjectId(obj.freightPortId);
        if (obj.navigationalWayeId)
            obj.navigationalWayeId = new mongodb_1.ObjectId(obj.navigationalWayeId);
        else
            obj.navigationalWayeId = null;
        if (obj.arrivalPortId)
            obj.arrivalPortId = new mongodb_1.ObjectId(obj.arrivalPortId);
        else
            obj.arrivalPortId = null;
    }
    /**
     * اجمالى المبلغ بالدولار=(سعر السيارة + سعر الشحن الداخلى + سعر الشحن الخارجى + عمولة الشراء + سويفت + غرامات مزاد + غرامات مخزن + سعر تايتل)
     * @param obj
     */
    static cultTotalAmount_dollar(obj) {
        return (obj.carPrice + obj.landFreightPrice + obj.maritimeFreightPrice +
            obj.commissionTransfare + obj.swift +
            obj.auctionFines + obj.storeFines +
            obj.titlePrice);
    }
    /**
     * حساب المبلغ المدفوع بالدولار
     * هو اجمالى المبالغ الذى دفعها المستخدم بالدولار + (الشحن البحري اذا كان قد تم دفع الشحن البحرى مقدما)
     */
    static cultTotalPaidAmount_dollar(obj, oldPayments = [], newPayment = { paymentAmount_dollar: 0 }) {
        //جمالى المدفوع من قبل المستخدم
        let totalPaid = (!oldPayments.length) ? 0 : oldPayments.map(c => c.paymentAmount_dollar).reduce((privousItem, newItem, currentIndex, array) => (privousItem || 0) + (newItem || 0));
        totalPaid += newPayment.paymentAmount_dollar;
        //يضاف علية الشحن البحري
        if (obj.maritimeFreightPriceIsPaid)
            totalPaid += obj.maritimeFreightPrice;
        return totalPaid;
    }
    /**
     * مكسب الشحن العام
     * هو عبارة عن  = مكسب الشحن الداخلى + مكسب الشحن البحري +عمولة شراء +سويفت +فرق تايتل
     *
     */
    static cultFreightPublicGain(obj) {
        return (obj.landGain + obj.maritimeGain + obj.commissionPurchase + obj.swift + obj.titleDifference);
    }
    /**
     * تكلفة السيارة
     * وهي عبارة عن = سعر السيارة + الشحن الدخلى + الشحن البحري
     */
    static cultCarCost(obj) {
        return (obj.carPrice + obj.landFreightPrice + obj.maritimeFreightPrice);
    }
    /**
       * صافى الربح
       * وهو عبارة عن = سعر البيع - تكلفة السيارة
       */
    static cultNetProfit(obj) {
        return Math.abs(obj.carCost - obj.sellPrice);
    }
    /** حساب مكسب  الداخلى
    * مكسب داخلى =  سعر الشحن الداخلى للمدينة - تكلغة داخلى
    */
    static cultLandGain(obj) {
        return Math.abs(obj.landCost - obj.landFreightPrice);
    }
    /** حساب مكسب تايتل
     * = تكلفة تايتل - سعر تايتل
     */
    static cultTitleGain(obj) {
        return Math.abs(obj.titlePrice - obj.titleCost);
    }
    /** حساب قيمة الدينار على المتبقى بالدولار
   * = عمولة التحويل على المتبقى بالدولار * المتبقى بالدولار
   */
    static cultDinarOnDueDollar(obj) {
        return obj.dueDollarCommissionTransfare * obj.totalDueAmount_dollar;
    }
    /**
     * Convert Transaction Fields To Number
     */
    static convertToNumber(obj) {
        let fieldsNames = [
            "carPrice", "carSizeId", "landFreightPrice", "maritimeFreightPrice", "commissionPurchase",
            "commissionTransfare", "swift", "auctionFines", "storeFines",
            "titlePrice", "titleDifference", "titleCost", "titleGain",
            "landCost", "landGain", "maritimeCost", "maritimeGain",
            "freightPublicGain", "totalAmount_dollar",
            "totalAmount_dinar", "totalPaidAmount_dollar",
            "totalPaidAmount_dinar", "totalDueAmount_dollar",
            "totalDueAmount_dinar", "carCost", "netProfit", "sellPrtotalPaidAmount_dollarice", "paymentAmount_dollar", "paymentAmount_dinar",
            "containerPrice", "dueDollarCommissionTransfare", "branchIndex", "freightCaseId", "transactionType",
            "freightTypeId"
        ];
        fieldsNames.forEach(fieldName => {
            if (obj[fieldName])
                obj[fieldName] = Number(obj[fieldName]) || 0;
        });
    }
    static fixFieldsBeforSave(freight) {
        freight.carSizeName = car_sizes_const_1.carSizesObject[freight.carSizeId];
        freight.freightCaseName = freight_cases_const_1.freightCasesObject[freight.freightCaseId];
        freight.freightTypeName = freight_types_const_1.FreitghtTypesObject[freight.freightTypeId];
        if (freight.containerNumber == "null")
            freight.containerNumber = null;
        else if (freight.containerNumber)
            freight.containerNumber = freight.containerNumber.trim();
        freight.maritimeFreightPriceIsPaidName = freight.maritimeFreightPriceIsPaid.toString() == "true" ? "نعم" : "لا";
        freight.freightPublicGain = this.cultFreightPublicGain(freight);
        freight.totalAmount_dollar = this.cultTotalAmount_dollar(freight);
        freight.totalAmount_dinar = freight.totalAmount_dollar * freight.commissionTransfare;
        freight.totalPaidAmount_dollar = this.cultTotalPaidAmount_dollar(freight, freight.paymentsTransaction);
        freight.totalPaidAmount_dinar = 0;
        freight.dinarOnDueDollar = this.cultDinarOnDueDollar(freight);
        freight.carCost = this.cultCarCost(freight);
        freight.netProfit = this.cultNetProfit(freight);
        freight.landGain = this.cultLandGain(freight);
        freight.titleGain = this.cultTitleGain(freight);
        freight.branchName = branches_const_1.BranchesObject[freight.branchIndex];
        //Check if will create user manually
        if (!freight.userId) {
            freight.userId = new mongodb_1.ObjectId();
            instance_service_1.instances.userModule.createUserManually(freight.userId, freight.clinetName, freight.clinetPhoneNumber, freight.branchIndex);
            freight.clinetName = null;
            freight.clinetPhoneNumber = null;
            freight.isClinetCreatedManually = true;
        }
        else {
            freight.isClinetCreatedManually = false;
        }
    }
    /**
     * Fix Fields Befor Save Finanical Trnasfer
     */
    static fixFieldsBeforSaveFinanicalTrnasfer(finfan) {
        finfan.dinarOnDueDollar = FreightService.cultDinarOnDueDollar(finfan);
        //Check if will create user manually
        if (!finfan.userId) {
            finfan.userId = new mongodb_1.ObjectId();
            instance_service_1.instances.userModule.createUserManually(finfan.userId, finfan.clinetName, finfan.clinetPhoneNumber, finfan.branchIndex);
            finfan.clinetName = null;
            finfan.clinetPhoneNumber = null;
            finfan.isClinetCreatedManually = true;
        }
        else {
            finfan.isClinetCreatedManually = false;
        }
    }
} //End Class
exports.FreightService = FreightService;
