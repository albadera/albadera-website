"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportModule = void 0;
const transaction_type_enum_1 = require("./../enums/transaction.type.enum");
const mongodb_1 = require("mongodb");
const collections_conse_1 = require("../consts/collections.conse");
const response_service_1 = require("../services/response.service");
const mongo_db_service_1 = require("../services/mongo.db.service");
const basic_module_1 = require("./basic.module");
const congif_const_1 = require("../consts/congif.const");
const roles_enum_1 = require("../enums/roles.enum");
class ReportModule extends basic_module_1.BasicModule {
    /**
     * Get Clinet Freights Report
     */
    getClinetFreightsReport(loggedUser, skip, take, filterOptions) {
        //اذا المستخدم الحالي ليس ادمن وفى نفس الوقت يريد جلب شحنات عميل ليس هوا شخصيل اذا نرجع بخطاء
        if (!this.checkIfAllowAccessToClinetFreights(loggedUser, filterOptions.clinetTargetId))
            return;
        let filter1 = { $match: {} };
        if (filterOptions.carMark)
            filter1.$match["freight.carMark"] = { "$regex": filterOptions.carMark, "$options": "igm" };
        if (filterOptions.carBodyNumber)
            filter1.$match["freight.carBodyNumber"] = { "$regex": filterOptions.carBodyNumber, "$options": "igm" };
        if (filterOptions.refranceNumber)
            filter1.$match["freight.refranceNumber"] = +filterOptions.refranceNumber;
        if (filterOptions.buySourceId)
            filter1.$match["freight.buySourceId"] = new mongodb_1.ObjectId(filterOptions.buySourceId);
        if (filterOptions.arrivalPortId)
            filter1.$match["freight.arrivalPortId"] = new mongodb_1.ObjectId(filterOptions.arrivalPortId);
        if (filterOptions.carSizeId)
            filter1.$match["freight.carSizeId"] = filterOptions.carSizeId;
        if (filterOptions.createdDate) {
            filter1.$match["freight.createdDate"] = {
                $gte: new Date(new Date(filterOptions.createdDate).setHours(0)),
                $lte: new Date(new Date(filterOptions.createdDate).setHours(24))
            };
        }
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).aggregate([
            { $match: { _id: new mongodb_1.ObjectId(filterOptions.clinetTargetId) } },
            { $lookup: { from: collections_conse_1.cols.transactions, localField: "transactionsIds", foreignField: "_id", as: "freight" } },
            { $unwind: "$freight" },
            filter1,
            { $sort: { "freight._id": -1 } },
            { $skip: skip },
            { $limit: take },
            { $lookup: { from: collections_conse_1.cols.states, localField: "freight.freightStateId", foreignField: "_id", as: "freightState" } },
            { $lookup: { from: collections_conse_1.cols.buySources, localField: "freight.buySourceId", foreignField: "_id", as: "buySource" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "freight.freightPortId", foreignField: "_id", as: "freightPort" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "freight.arrivalPortId", foreignField: "_id", as: "arrivalPort" } },
            { $lookup: { from: collections_conse_1.cols.navigationalWayes, localField: "freight.navigationalWayeId", foreignField: "_id", as: "navigationalWaye" } },
            { $unwind: { path: "$freightPort", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$buySource", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$freightState", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$navigationalWaye", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$arrivalPort", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    _id: "$freight._id",
                    lotOrStock: "$freight.lotOrStock",
                    containerNumber: "$freight.containerNumber",
                    freightCaseName: "$freight.freightCaseName",
                    sellPrice: "$freight.sellPrice",
                    auctionFines: "$freight.auctionFines",
                    storeFines: "$freight.storeFines",
                    title: "$freight.title",
                    swift: "$freight.swift",
                    commissionTransfare: "$freight.commissionTransfare",
                    trackLink: "$freight.trackLink",
                    arrivalDate: "$freight.arrivalDate",
                    refranceNumber: "$freight.refranceNumber",
                    landFreightPrice: "$freight.landFreightPrice",
                    maritimeFreightPrice: "$freight.maritimeFreightPrice",
                    createdDate: "$freight.createdDate",
                    generatedDateToFilter: "$freight.generatedDateToFilter",
                    carMark: "$freight.carMark",
                    carBodyNumber: "$freight.carBodyNumber",
                    carPrice: "$freight.carPrice",
                    commissionPurchase: "$freight.commissionPurchase",
                    freightStateName: "$freightState.name",
                    buySourceName: "$buySource.name",
                    freightPortName: "$freightPort.name",
                    navigationalWayeName: "$navigationalWaye.name",
                    arrivalPortName: "$arrivalPort.name",
                    city: {
                        $arrayElemAt: [
                            {
                                $filter: {
                                    input: "$freightState.cities",
                                    as: "cityfilter",
                                    cond: {
                                        $eq: ["$$cityfilter._id", "$freight.cityId"]
                                    }
                                }
                            },
                            0
                        ]
                    },
                    carSizeName: "$freight.carSizeName",
                }
            },
        ]).toArray().then(res => {
            //Check From Length
            if (res.length == 0) {
                //Check For First Time
                if (skip == 0)
                    return response_service_1.ResponseService.end_info(loggedUser, this.r.noRecordesFound);
                return response_service_1.ResponseService.end_info(loggedUser, this.r.noMoreRecordes);
            }
            res.forEach(item => { var _a; return item.cityName = (_a = item.city) === null || _a === void 0 ? void 0 : _a.name; });
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, res);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**
     * Get Freight Details To Onwer Clinet
     */
    getFreightDetailsToClinet(loggedUser, id, clinetId) {
        //اذا المستخدم الحالي ليس ادمن وفى نفس الوقت يريد جلب تفاصيل شحنة لـعميل ليس هوا شخصيل اذا نرجع بخطاء
        if (!this.checkIfAllowAccessToClinetFreights(loggedUser, clinetId))
            return;
        /** يجب ان ابكون هوا العميل المالك للحنة الذى يريد تفاصيله */
        let filter = { $match: { transactionType: transaction_type_enum_1.TransactionTypeEnum.freight, _id: new mongodb_1.ObjectId(id) } };
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).aggregate([
            filter,
            { $lookup: { from: collections_conse_1.cols.users, localField: "userId", foreignField: "_id", as: "clinet" } },
            { $lookup: { from: collections_conse_1.cols.states, localField: "freightStateId", foreignField: "_id", as: "freightState" } },
            { $lookup: { from: collections_conse_1.cols.buySources, localField: "buySourceId", foreignField: "_id", as: "buySource" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "freightPortId", foreignField: "_id", as: "freightPort" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "arrivalPortId", foreignField: "_id", as: "arrivalPort" } },
            { $lookup: { from: collections_conse_1.cols.navigationalWayes, localField: "navigationalWayeId", foreignField: "_id", as: "navigationalWaye" } },
            { $unwind: { path: "$freightState", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$clinet", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$buySource", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$navigationalWaye", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$freightPort", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$navigationalWaye", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$arrivalPort", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    clinetName: { $ifNull: ["$clinet.name", "$clinetName"] },
                    clinetPhoneNumber: { $ifNull: ["$clinet.phoneNumber", "$clinetPhoneNumber"] },
                    createdDate: 1,
                    carPicture: 1,
                    lotOrStock: 1,
                    sellPrice: 1,
                    title: 1,
                    swift: 1,
                    commissionTransfare: 1,
                    auctionFines: 1,
                    storeFines: 1,
                    arrivalDate: 1,
                    freightCasees: 1,
                    refranceNumber: 1,
                    landFreightPrice: 1,
                    maritimeFreightPrice: 1,
                    carMark: 1,
                    carBodyNumber: 1,
                    carPrice: 1,
                    commissionPurchase: "$commissionPurchase",
                    freightStateName: "$freightState.name",
                    buySourceName: "$buySource.name",
                    freightPortName: "$freightPort.name",
                    navigationalWayeName: "$navigationalWaye.name",
                    arrivalPortName: "$arrivalPort.name",
                    carSizeName: 1,
                    freightCaseName: 1,
                    containerNumber: 1,
                    maritimeFreightPriceIsPaidName: 1,
                    dinarOnDueDollar: 1,
                    dueDollarCommissionTransfare: 1,
                    branchName: 1,
                    freightTypeId: 1,
                    city: {
                        $arrayElemAt: [
                            {
                                $filter: {
                                    input: "$freightState.cities",
                                    as: "cityfilter",
                                    cond: {
                                        $eq: ["$$cityfilter._id", "$cityId"]
                                    }
                                }
                            },
                            0
                        ]
                    },
                }
            },
        ]).toArray().then(res => {
            var _a;
            //Check From Length
            if (res.length == 0) {
                return response_service_1.ResponseService.end_info(loggedUser, this.r.itemIsNotFound);
            }
            let target = res[0];
            if (target.carPicture)
                target.carPicture = congif_const_1.config.apiFullPath + target.carPicture;
            target.cityName = (_a = target.city) === null || _a === void 0 ? void 0 : _a.name;
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, res[0]);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**
     * Get Freight Details To Onwer Admin
     */
    getFreightDetails(loggedUser, id) {
        let filter = { $match: { _id: new mongodb_1.ObjectId(id) } };
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).aggregate([
            filter,
            { $lookup: { from: collections_conse_1.cols.users, localField: "userId", foreignField: "_id", as: "clinet" } },
            { $lookup: { from: collections_conse_1.cols.states, localField: "freightStateId", foreignField: "_id", as: "freightState" } },
            { $lookup: { from: collections_conse_1.cols.buySources, localField: "buySourceId", foreignField: "_id", as: "buySource" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "freightPortId", foreignField: "_id", as: "freightPort" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "arrivalPortId", foreignField: "_id", as: "arrivalPort" } },
            { $lookup: { from: collections_conse_1.cols.navigationalWayes, localField: "navigationalWayeId", foreignField: "_id", as: "navigationalWaye" } },
            { $unwind: "$freightState" },
            { $unwind: "$buySource" },
            { $unwind: "$freightPort" },
            { $unwind: { path: "$clinet", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$navigationalWaye", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$arrivalPort", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    clinetName: { $ifNull: ["$clinet.name", "$clinetName"] },
                    clinetPhoneNumber: { $ifNull: ["$clinet.phoneNumber", "$clinetPhoneNumber"] },
                    swift: 1,
                    createdDate: 1,
                    carPicture: 1,
                    commissionTransfare: 1,
                    auctionFines: 1,
                    storeFines: 1,
                    titlePrice: 1,
                    titleDifference: 1,
                    titleCost: 1,
                    titleGain: 1,
                    landCost: 1,
                    landGain: 1,
                    maritimeCost: 1,
                    maritimeGain: 1,
                    arrivalDate: 1,
                    refranceNumber: 1,
                    landFreightPrice: 1,
                    maritimeFreightPrice: 1,
                    carMark: 1,
                    carBodyNumber: 1,
                    carPrice: 1,
                    notes: 1,
                    lotOrStock: 1,
                    commissionPurchase: "$commissionPurchase",
                    financialTransfer: "$financialTransfer",
                    freightStateName: "$freightState.name",
                    buySourceName: "$buySource.name",
                    freightPortName: "$freightPort.name",
                    navigationalWayeName: "$navigationalWaye.name",
                    arrivalPortName: "$arrivalPort.name",
                    carSizeName: 1,
                    freightPublicGain: 1,
                    carCost: 1,
                    netProfit: 1,
                    sellPrice: 1,
                    freightCaseName: 1,
                    freightCasees: 1,
                    containerNumber: 1,
                    maritimeFreightPriceIsPaidName: 1,
                    dinarOnDueDollar: 1,
                    dueDollarCommissionTransfare: 1,
                    trackLink: 1,
                    branchName: 1,
                    freightTypeName: 1,
                    freightTypeId: 1,
                    city: {
                        $arrayElemAt: [
                            {
                                $filter: {
                                    input: "$freightState.cities",
                                    as: "cityfilter",
                                    cond: {
                                        $eq: ["$$cityfilter._id", "$cityId"]
                                    }
                                }
                            },
                            0
                        ]
                    }
                }
            },
        ]).toArray().then(res => {
            var _a;
            //Check From Length
            if (res.length == 0) {
                return response_service_1.ResponseService.end_info(loggedUser, this.r.itemIsNotFound);
            }
            let target = res[0];
            if (target.carPicture)
                target.carPicture = congif_const_1.config.apiFullPath + target.carPicture;
            target.cityName = (_a = target.city) === null || _a === void 0 ? void 0 : _a.name;
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, res[0]);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Get Maritime Freight Price Total Due From Clinet */
    getMaritimeFreightPriceTotalDueForClinet(loggedUser, clinetTargetId) {
        if (!this.checkIfAllowAccessToClinetFreights(loggedUser, clinetTargetId))
            return;
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).aggregate([
            { $match: { _id: new mongodb_1.ObjectId(clinetTargetId) } },
            { $lookup: { from: collections_conse_1.cols.transactions, localField: "transactionsIds", foreignField: "_id", as: "freight" } },
            { $unwind: "$freight" },
            {
                $match: {
                    "freight.maritimeFreightPriceIsPaid": { $ne: true }
                }
            },
            {
                $group: {
                    _id: {
                        $sum: "$freight.maritimeFreightPrice"
                    }
                }
            }
        ]).toArray().then(res => {
            //Check From Length
            if (res.length == 0) {
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, 0);
            }
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, res[0]._id || 0);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**
 * Get Branch Freights Report
 */
    getBranchFreightsReport(loggedUser, skip, take, filterOptions) {
        /** اذا كان المستخدم الحالى ليس مدير وفى نفس الوقت ليس مدير فرع الذى ياتى بشحناتة فيجب ان نرجع خطاء  */
        if (!this.checkIfAllowAccessToBranchFreights(loggedUser, filterOptions.branchIndex))
            return;
        let filter1 = { $match: { transactionType: { $ne: transaction_type_enum_1.TransactionTypeEnum.financialTransfers } } };
        let filter2 = { $match: {} };
        if (filterOptions.carMark)
            filter1.$match["freight.carMark"] = { "$regex": filterOptions.carMark, "$options": "igm" };
        if (filterOptions.carBodyNumber)
            filter1.$match["freight.carBodyNumber"] = { "$regex": filterOptions.carBodyNumber, "$options": "igm" };
        if (filterOptions.refranceNumber)
            filter1.$match["freight.refranceNumber"] = +filterOptions.refranceNumber;
        if (filterOptions.buySourceId)
            filter1.$match["freight.buySourceId"] = new mongodb_1.ObjectId(filterOptions.buySourceId);
        if (filterOptions.arrivalPortId)
            filter1.$match["freight.arrivalPortId"] = new mongodb_1.ObjectId(filterOptions.arrivalPortId);
        if (filterOptions.carSizeId)
            filter1.$match["freight.carSizeId"] = filterOptions.carSizeId;
        if (filterOptions.createdDate) {
            filter1.$match["freight.createdDate"] = {
                $gte: new Date(new Date(filterOptions.createdDate).setHours(0)),
                $lte: new Date(new Date(filterOptions.createdDate).setHours(24))
            };
        }
        if (filterOptions.clinetName)
            filter2.$match["clinet.name"] = filter2.$match["$or"] = [
                { "clinet.name": { "$regex": filterOptions.clinetName, "$options": "igm" } },
                { "clinetName": { "$regex": filterOptions.clinetName, "$options": "igm" } }
            ];
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.branches).aggregate([
            { $match: { branchIndex: +filterOptions.branchIndex } },
            { $lookup: { from: collections_conse_1.cols.transactions, localField: "transactionsIds", foreignField: "_id", as: "freight" } },
            { $unwind: { path: "$freight" } },
            filter1,
            { $lookup: { from: collections_conse_1.cols.users, localField: "freight.userId", foreignField: "_id", as: "clinet" } },
            { $unwind: { path: "$clinet", preserveNullAndEmptyArrays: true } },
            filter2,
            { $sort: { _id: -1 } },
            { $skip: skip },
            { $limit: take },
            { $lookup: { from: collections_conse_1.cols.states, localField: "freight.freightStateId", foreignField: "_id", as: "freightState" } },
            { $lookup: { from: collections_conse_1.cols.buySources, localField: "freight.buySourceId", foreignField: "_id", as: "buySource" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "freight.freightPortId", foreignField: "_id", as: "freightPort" } },
            { $lookup: { from: collections_conse_1.cols.navigationalWayes, localField: "freight.navigationalWayeId", foreignField: "_id", as: "navigationalWaye" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "freight.arrivalPortId", foreignField: "_id", as: "arrivalPort" } },
            { $unwind: { path: "$freightState", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$buySource", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$navigationalWaye", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$arrivalPort", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$freightPort", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    refranceNumber: "$freight.refranceNumber",
                    landFreightPrice: "$freight.landFreightPrice",
                    maritimeFreightPrice: "$freight.maritimeFreightPrice",
                    createdDate: "$freight.createdDate",
                    generatedDateToFilter: "$freight.generatedDateToFilter",
                    carMark: "$freight.carMark",
                    carBodyNumber: "$freight.carBodyNumber",
                    financialTransferId: "$freight.financialTransferId",
                    landCost: "$freight.landCost",
                    arrivalDate: "$freight.arrivalDate",
                    clinetName: { $ifNull: ["$clinet.name", "$clinetName"] },
                    freightStateName: "$freightState.name",
                    freightPortName: "$freightPort.name",
                    arrivalPortName: "$arrivalPort.name",
                    portBackgroundColor: "$freightPort.backgroundColor",
                    portFontColor: "$freightPort.fontColor",
                    buySourceName: "$buySource.name",
                    navigationalWayeName: "$navigationalWaye.name",
                    carSizeName: "$freight.carSizeName",
                    freightCaseName: "$freight.freightCaseName",
                    containerNumber: "$freight.containerNumber",
                    maritimeFreightPriceIsPaidName: "$freight.maritimeFreightPriceIsPaidName",
                }
            },
        ]).toArray().then(res => {
            //Check From Length
            if (res.length == 0) {
                //Check For First Time
                if (skip == 0)
                    return response_service_1.ResponseService.end_info(loggedUser, this.r.noRecordesFound);
                return response_service_1.ResponseService.end_info(loggedUser, this.r.noMoreRecordes);
            }
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, res);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Get Maritime Freight Price Total Due From Branch */
    getMaritimeFreightPriceTotalDueForBranch(loggedUser, branchIndex) {
        if (!this.checkIfAllowAccessToBranchFreights(loggedUser, branchIndex))
            return;
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.branches).aggregate([
            { $match: { branchIndex: +branchIndex } },
            { $lookup: { from: collections_conse_1.cols.transactions, localField: "transactionsIds", foreignField: "_id", as: "freight" } },
            { $unwind: "$freight" },
            {
                $match: {
                    "freight.maritimeFreightPriceIsPaid": { $ne: true }
                }
            },
            {
                $group: {
                    _id: {
                        $sum: "$freight.maritimeFreightPrice"
                    }
                }
            }
        ]).toArray().then(res => {
            //Check From Length
            if (res.length == 0) {
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, 0);
            }
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, res[0]._id || 0);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**
     * For Check If Can User Access To Ferights Or Freight Details
     * @param loggedUser
     * @param clinetId
     */
    checkIfAllowAccessToClinetFreights(loggedUser, clinetId) {
        //يجب ان يكون مدير او المستخدم الحالى هوا الصاحب الشحنة
        if (+loggedUser.roleId != roles_enum_1.RolesEnum.Admin && loggedUser._id != clinetId) {
            response_service_1.ResponseService.end_info(loggedUser, this.r.youCanNotAccess);
            return false;
        }
        else {
            return true;
        }
    }
    /**
    * For Check If Can User Access To Branch Ferights Or Freight Details Related With Branch
    * @param loggedUser
    * @param clinetId
    */
    checkIfAllowAccessToBranchFreights(loggedUser, branchIndex) {
        //يجب ان يكون المستخدم الحالى هوا مدير او مدير فرع يريد جلب بيانتة
        if (+loggedUser.roleId != roles_enum_1.RolesEnum.Admin && !(+loggedUser.roleId == roles_enum_1.RolesEnum.BranchManger && loggedUser.branchIndex == branchIndex)) {
            response_service_1.ResponseService.end_info(loggedUser, this.r.youCanNotAccess);
            return false;
        }
        else {
            return true;
        }
    }
} //End Class
exports.ReportModule = ReportModule;
