"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorSaleModule = void 0;
const collections_conse_1 = require("../consts/collections.conse");
const freitght_types_enum_1 = require("../enums/freitght.types.enum");
const transaction_type_enum_1 = require("../enums/transaction.type.enum");
const mongo_db_service_1 = require("../services/mongo.db.service");
const response_service_1 = require("../services/response.service");
const basic_module_1 = require("./basic.module");
/**
* مديول مبيعات القطاعى
*/
class SectorSaleModule extends basic_module_1.BasicModule {
    /**Get Sector Sales */
    getSectorSales(loggedUser, skip, take, filterOptions) {
        let filter = {
            $match: {
                isDeleted: false,
                transactionType: transaction_type_enum_1.TransactionTypeEnum.freight,
                freightTypeId: freitght_types_enum_1.FreitghtTypesEnum.SectorSale
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
    /**Check If Allow Update
    */
    checkIfAllowUpdate(trans) {
        if (!trans)
            return { isAllow: false, message: this.r.itemIsNotFound };
        return { isAllow: true, message: null };
    }
} //End Class
exports.SectorSaleModule = SectorSaleModule;
