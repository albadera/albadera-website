"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedModule = void 0;
const freight_cases_const_1 = require("../consts/freight.cases.const");
const mongodb_1 = require("mongodb");
const response_service_1 = require("../services/response.service");
const mongo_db_service_1 = require("../services/mongo.db.service");
const basic_module_1 = require("./basic.module");
const collections_conse_1 = require("../consts/collections.conse");
const freight_service_1 = require("../services/freight.service");
const transaction_type_enum_1 = require("../enums/transaction.type.enum");
const freitght_types_enum_1 = require("../enums/freitght.types.enum");
class DeletedModule extends basic_module_1.BasicModule {
    constructor() {
        super(...arguments);
        this.freightService = new freight_service_1.FreightService();
    }
    /*** Get Freights Deleted*/
    getFreightsDeleted(loggedUser, skip, take, filterOptions) {
        let filter1 = {
            $match: {
                transactionType: transaction_type_enum_1.TransactionTypeEnum.freight,
                freightTypeId: { $ne: freitght_types_enum_1.FreitghtTypesEnum.SectorSale },
                freightCaseId: { $in: freight_cases_const_1.freightCasesNotContainerArrayIds },
                isDeleted: true
            }
        };
        let filter2 = { $match: {} };
        if (filterOptions.carMark)
            filter1.$match.carMark = { "$regex": filterOptions.carMark, "$options": "igm" };
        if (filterOptions.carBodyNumber)
            filter1.$match.carBodyNumber = { "$regex": filterOptions.carBodyNumber, "$options": "igm" };
        if (filterOptions.refranceNumber)
            filter1.$match.refranceNumber = +filterOptions.refranceNumber;
        if (filterOptions.buySourceId)
            filter1.$match.buySourceId = new mongodb_1.ObjectId(filterOptions.buySourceId);
        if (filterOptions.freightStateId)
            filter1.$match.freightStateId = new mongodb_1.ObjectId(filterOptions.freightStateId);
        if (filterOptions.cityId)
            filter1.$match.cityId = new mongodb_1.ObjectId(filterOptions.cityId);
        if (filterOptions.freightPortId)
            filter1.$match.freightPortId = new mongodb_1.ObjectId(filterOptions.freightPortId);
        if (filterOptions.navigationalWayeId)
            filter1.$match.navigationalWayeId = new mongodb_1.ObjectId(filterOptions.navigationalWayeId);
        if (filterOptions.arrivalPortId)
            filter1.$match.arrivalPortId = new mongodb_1.ObjectId(filterOptions.arrivalPortId);
        if (filterOptions.carSizeId)
            filter1.$match.carSizeId = filterOptions.carSizeId;
        if (filterOptions.createdDate) {
            filter1.$match.createdDate = {
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
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).aggregate([
            filter1,
            { $lookup: { from: collections_conse_1.cols.users, localField: "userId", foreignField: "_id", as: "clinet" } },
            { $unwind: { path: "$clinet", preserveNullAndEmptyArrays: true } },
            filter2,
            { $sort: { _id: -1 } },
            { $skip: skip },
            { $limit: take },
            { $lookup: { from: collections_conse_1.cols.states, localField: "freightStateId", foreignField: "_id", as: "freightState" } },
            { $lookup: { from: collections_conse_1.cols.buySources, localField: "buySourceId", foreignField: "_id", as: "buySource" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "freightPortId", foreignField: "_id", as: "freightPort" } },
            { $lookup: { from: collections_conse_1.cols.navigationalWayes, localField: "navigationalWayeId", foreignField: "_id", as: "navigationalWaye" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "arrivalPortId", foreignField: "_id", as: "arrivalPort" } },
            { $unwind: { path: "$freightState", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$buySource", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$navigationalWaye", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$arrivalPort", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$freightPort", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    refranceNumber: 1,
                    landFreightPrice: 1,
                    maritimeFreightPrice: 1,
                    createdDate: 1,
                    generatedDateToFilter: 1,
                    carMark: 1,
                    carBodyNumber: 1,
                    financialTransferId: 1,
                    landCost: 1,
                    arrivalDate: 1,
                    clinetName: { $ifNull: ["$clinet.name", "$clinetName"] },
                    freightStateName: "$freightState.name",
                    freightPortName: "$freightPort.name",
                    arrivalPortName: "$arrivalPort.name",
                    portBackgroundColor: "$freightPort.backgroundColor",
                    portFontColor: "$freightPort.fontColor",
                    buySourceName: "$buySource.name",
                    navigationalWayeName: "$navigationalWaye.name",
                    carSizeName: 1,
                    freightCaseName: 1,
                    containerNumber: 1,
                    maritimeFreightPriceIsPaidName: 1
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
    /**Get Financial Transfers Deleted */
    getFinancialTransfersDeleted(loggedUser, skip, take, filterOptions) {
        let filter = {
            $match: {
                isDeleted: true
            }
        };
        let filter2 = { $match: {} };
        if (filterOptions.commissionTransfare)
            filter.$match.commissionTransfare = { "$regex": filterOptions.commissionTransfare, "$options": "igm" };
        if (filterOptions.refranceNumber)
            filter.$match.refranceNumber = +filterOptions.refranceNumber;
        if (filterOptions.createdDate) {
            filter.$match.createdDate = {
                $gte: new Date(new Date(filterOptions.createdDate).setHours(0)),
                $lte: new Date(new Date(filterOptions.createdDate).setHours(24))
            };
        }
        if (filterOptions.userName)
            filter2.$match["clinet.name"] = filter2.$match["$or"] = [
                { "clinet.name": { "$regex": filterOptions.clinetName, "$options": "igm" } },
                { "clinetName": { "$regex": filterOptions.clinetName, "$options": "igm" } }
            ];
        if (filterOptions.phoneNumber)
            filter2.$match["clinet.phoneNumber"] = filter2.$match["$or"] = [
                { "clinet.name": { "$regex": filterOptions.clinetName, "$options": "igm" } },
                { "clinetName": { "$regex": filterOptions.clinetName, "$options": "igm" } }
            ];
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).aggregate([
            filter,
            { $lookup: { from: collections_conse_1.cols.users, localField: "userId", foreignField: "_id", as: "clinet" } },
            { $unwind: { path: "$clinet", preserveNullAndEmptyArrays: true } },
            filter2,
            { $sort: { _id: -1 } },
            { $skip: skip },
            { $limit: take },
            {
                $project: {
                    clinetName: { $ifNull: ["$clinet.name", "$clinetName"] },
                    clinetPhoneNumber: { $ifNull: ["$clinet.phoneNumber", "$clinetPhoneNumber"] },
                    refranceNumber: 1,
                    createdDate: 1,
                    freightId: 1,
                    swift: 1,
                    commissionTransfare: 1,
                    totalAmount_dollar: 1,
                    totalAmount_dinar: 1,
                    totalPaidAmount_dollar: 1,
                    totalPaidAmount_dinar: 1,
                    totalDueAmount_dollar: 1,
                    totalDueAmount_dinar: 1,
                    transactionType: 1,
                    isFreight: { $eq: ["$transactionType", transaction_type_enum_1.TransactionTypeEnum.freight] },
                    isPaidAllAmountName: {
                        $switch: {
                            branches: [
                                { case: { $eq: ["$isPaidAllAmount", true] }, then: "تم الاستلام" },
                                { case: { $eq: ["$isPaidAllAmount", false] }, then: "" },
                            ],
                            default: ""
                        }
                    }
                }
            }
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
    /**Get Sector Sales Deleted */
    getSectorSalesDeleted(loggedUser, skip, take, filterOptions) {
        let filter = {
            $match: {
                isDeleted: true,
                transactionType: transaction_type_enum_1.TransactionTypeEnum.freight,
                freightTypeId: freitght_types_enum_1.FreitghtTypesEnum.SectorSale,
            }
        };
        let filter2 = { $match: {} };
        if (filterOptions.refranceNumber)
            filter.$match.refranceNumber = +filterOptions.refranceNumber;
        if (filterOptions.createdDate) {
            filter.$match.createdDate = {
                $gte: new Date(new Date(filterOptions.createdDate).setHours(0)),
                $lte: new Date(new Date(filterOptions.createdDate).setHours(24))
            };
        }
        if (filterOptions.userName)
            filter2.$match["clinet.name"] = filter2.$match["$or"] = [
                { "clinet.name": { "$regex": filterOptions.clinetName, "$options": "igm" } },
                { "clinetName": { "$regex": filterOptions.clinetName, "$options": "igm" } }
            ];
        if (filterOptions.phoneNumber)
            filter2.$match["clinet.phoneNumber"] = filter2.$match["$or"] = [
                { "clinet.name": { "$regex": filterOptions.clinetName, "$options": "igm" } },
                { "clinetName": { "$regex": filterOptions.clinetName, "$options": "igm" } }
            ];
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).aggregate([
            filter,
            { $lookup: { from: collections_conse_1.cols.users, localField: "userId", foreignField: "_id", as: "clinet" } },
            { $unwind: { path: "$clinet", preserveNullAndEmptyArrays: true } },
            filter2,
            { $sort: { _id: -1 } },
            { $skip: skip },
            { $limit: take },
            { $lookup: { from: collections_conse_1.cols.states, localField: "freightStateId", foreignField: "_id", as: "freightState" } },
            { $lookup: { from: collections_conse_1.cols.buySources, localField: "buySourceId", foreignField: "_id", as: "buySource" } },
            { $lookup: { from: collections_conse_1.cols.ports, localField: "freightPortId", foreignField: "_id", as: "freightPort" } },
            { $unwind: "$freightState" },
            { $unwind: "$buySource" },
            { $unwind: "$freightPort" },
            {
                $project: {
                    clinetName: { $ifNull: ["$clinet.name", "$clinetName"] },
                    clinetPhoneNumber: { $ifNull: ["$clinet.phoneNumber", "$clinetPhoneNumber"] },
                    freightStateName: "$freightState.name",
                    buySourceName: "$buySource.name",
                    freightPortName: "$freightPort.name",
                    portBackgroundColor: "$freightPort.backgroundColor",
                    portFontColor: "$freightPort.fontColor",
                    freightId: 1,
                    refranceNumber: 1,
                    createdDate: 1,
                    carMark: 1,
                    carBodyNumber: 1,
                    carPrice: 1,
                    carSizeId: 1,
                    carSizeName: 1,
                    landFreightPrice: 1,
                    maritimeFreightPrice: 1,
                    arrivalDate: 1,
                    carCost: 1,
                    netProfit: 1,
                    sellPrice: 1,
                }
            }
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
} //End Class
exports.DeletedModule = DeletedModule;
