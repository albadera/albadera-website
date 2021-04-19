"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreightModule = void 0;
const freight_cases_const_1 = require("./../consts/freight.cases.const");
const freight_casaes_enum_1 = require("../enums/freight.casaes.enum");
const mongodb_1 = require("mongodb");
const response_service_1 = require("../services/response.service");
const mongo_db_service_1 = require("../services/mongo.db.service");
const basic_module_1 = require("./basic.module");
const collections_conse_1 = require("../consts/collections.conse");
const formidable = __importStar(require("formidable"));
const file_services_1 = require("../services/file.services");
const path = __importStar(require("path"));
const app_setting_service_1 = require("../services/app.setting.service");
const congif_const_1 = require("../consts/congif.const");
const freight_service_1 = require("../services/freight.service");
const transaction_type_enum_1 = require("../enums/transaction.type.enum");
const freight_cases_const_2 = require("../consts/freight.cases.const");
const instance_service_1 = require("../services/instance.service");
const freitght_types_enum_1 = require("../enums/freitght.types.enum");
class FreightModule extends basic_module_1.BasicModule {
    /*** Get Freights*/
    getFreights(loggedUser, skip, take, filterOptions) {
        let filter1 = {
            $match: {
                transactionType: { $ne: transaction_type_enum_1.TransactionTypeEnum.financialTransfers },
                freightTypeId: { $ne: freitght_types_enum_1.FreitghtTypesEnum.SectorSale },
                freightCaseId: { $in: freight_cases_const_1.freightCasesNotContainerArrayIds },
                isDeleted: false
            }
        };
        let filter2 = { $match: {} };
        if (filterOptions.carMark)
            filter1.$match.carMark = { "$regex": filterOptions.carMark, "$options": "igm" };
        if (filterOptions.carBodyNumber)
            filter1.$match.carBodyNumber = { "$regex": filterOptions.carBodyNumber, "$options": "igm" };
        if (filterOptions.refranceNumber)
            filter1.$match.refranceNumber = +filterOptions.refranceNumber;
        //  if (filterOptions.freightCaseId) filter1.$match.freightCaseId = +filterOptions.freightCaseId;
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
        //  if (filterOptions.clinetName) filter2.$match["clinetName"] = { "$regex": filterOptions.clinetName, "$options": "igm" };
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
                    maritimeFreightPriceIsPaidName: 1,
                    branchName: 1
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
    /**Get Freight From Server To Update */
    getFreightToUpdate(loggedUser, id, isCalledAffterUpdated = false) {
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).findOne({ _id: new mongodb_1.ObjectId(id), isDeleted: false }, {
            projection: {
                userId: 1,
                carMark: 1,
                freightCaseId: 1,
                buySourceId: 1,
                freightStateId: 1,
                cityId: 1,
                carSizeId: 1,
                freightPortId: 1,
                navigationalWayeId: 1,
                arrivalPortId: 1,
                carBodyNumber: 1,
                notes: 1,
                carPrice: 1,
                landFreightPrice: 1,
                maritimeFreightPrice: 1,
                commissionPurchase: 1,
                commissionTransfare: 1,
                swift: 1,
                sellPrice: 1,
                auctionFines: 1,
                storeFines: 1,
                titlePrice: 1,
                titleDifference: 1,
                titleCost: 1,
                landCost: 1,
                maritimeCost: 1,
                arrivalDate: 1,
                refranceNumber: 1,
                carPicture: 1,
                lotOrStock: 1,
                trackLink: 1,
                containerNumber: 1,
                transactionType: 1,
                maritimeFreightPriceIsPaid: 1,
                clinetName: 1,
                clinetPhoneNumber: 1,
                dueDollarCommissionTransfare: 1,
                branchIndex: 1,
                freightTypeId: 1
            }
        })
            .then(item => {
            //Check If Not Found
            if (!item)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.itemIsNotFound);
            item.carPicture = `${congif_const_1.config.apiFullPath}${item.carPicture}`;
            let result = Object.assign({
                navigationalWayeId: null,
                arrivalPortId: null,
                notes: null,
                arrivalDate: null,
                trackLink: null,
                maritimeFreightPriceIsPaid: null,
                clinetName: null,
                clinetPhoneNumber: null,
                dueDollarCommissionTransfare: 0
            }, item);
            if (isCalledAffterUpdated)
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updated, result);
            else
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, result);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Create Freight */
    createNewFreight(loggedUser) {
        let form = new formidable.IncomingForm();
        let freightCreating;
        form.parse(loggedUser.request, (formParseError, fields, files) => __awaiter(this, void 0, void 0, function* () {
            //Parse Json To Object Now
            freightCreating = JSON.parse(fields.values);
            freightCreating._id = new mongodb_1.ObjectId();
            //Return Error I Icant Saved Picture
            if (formParseError)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCouldNotSaveNewPicture);
            //Check If Fetight Has A  Car Picture
            if (files.carPicture) {
                freightCreating.carPicture = `/files/cars/${freightCreating._id}.png}`;
            }
            else {
                freightCreating.carPicture = null;
            }
            freight_service_1.FreightService.convertIdsStrinToObjectId(freightCreating);
            freight_service_1.FreightService.convertToNumber(freightCreating);
            freight_service_1.FreightService.fixFieldsBeforSave(freightCreating);
            freightCreating.totalDueAmount_dollar = freightCreating.totalAmount_dollar;
            freightCreating.totalDueAmount_dinar = freightCreating.totalAmount_dinar;
            freightCreating.refranceNumber = app_setting_service_1.AppSettingService.newRefranceNumber;
            freightCreating.createdDate = new Date();
            freightCreating.freightCasees = [{
                    freightCaseId: freightCreating.freightCaseId,
                    freightCaseName: freightCreating.freightCaseName,
                    changedDate: new Date()
                }];
            freightCreating.paymentsTransaction = [];
            freightCreating.isDeleted = false;
            //Insert Now
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).insertOne(freightCreating)
                .then(item => {
                //Check If Not Found
                if (!item.insertedCount)
                    return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantCreateTheNewItem);
                //Rename Car Image Image Now
                if (freightCreating.carPicture)
                    file_services_1.FileService.rename(files.carPicture.path, path.join(__dirname, '..', freightCreating.carPicture));
                instance_service_1.instances.userModule.pushOrPullUserArrayField(freightCreating.userId, freightCreating._id, "$push");
                instance_service_1.instances.branchModule.pushOrPullUserArrayField(freightCreating.branchIndex, freightCreating._id, "$push");
                //تحديث المكسب البحري لكل شحنة
                instance_service_1.instances.containerModule.updateMaritimeGain(freightCreating.containerNumber);
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.created, { _id: freightCreating._id, refranceNumber: freightCreating.refranceNumber });
            }).catch(error => {
                var _a;
                file_services_1.FileService.removeFiles((_a = files.carPicture) === null || _a === void 0 ? void 0 : _a.path);
                response_service_1.ResponseService.catchError(loggedUser, error);
            });
        }));
    }
    /**Update Freight */
    updateFreight(loggedUser) {
        let form = new formidable.IncomingForm();
        let freightEditing;
        form.parse(loggedUser.request, (formParseError, fields, files) => {
            //Return Error I Icant Saved Picture
            if (formParseError)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCouldNotSaveNewPicture);
            //Parse Json To Object Now
            freightEditing = JSON.parse(fields.values);
            let targetId = freightEditing._id;
            let updateingTargetId = new mongodb_1.ObjectId(targetId);
            delete freightEditing._id;
            //Check If Fetight Has A  Car Picture
            if (files.carPicture) {
                freightEditing.carPicture = `/files/cars/${targetId}.png`;
            }
            //Get Target
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).findOne({ _id: updateingTargetId, isDeleted: false })
                .then(freightTarget => {
                //Check If Not Found
                if (!freightTarget)
                    return response_service_1.ResponseService.end_failed(loggedUser, this.r.itemIsNotFound);
                let updateCollection = {};
                //If Case Is Changed I Will Save That With The Freight
                if (freightTarget.freightCaseId != freightEditing.freightCaseId) {
                    updateCollection.$push = {
                        freightCasees: {
                            freightCaseId: freightEditing.freightCaseId,
                            changedDate: new Date()
                        }
                    };
                }
                freight_service_1.FreightService.convertIdsStrinToObjectId(freightEditing);
                freight_service_1.FreightService.convertToNumber(freightEditing);
                freight_service_1.FreightService.fixFieldsBeforSave(freightEditing);
                freightEditing.totalDueAmount_dollar = freightEditing.totalAmount_dollar - freightTarget.totalPaidAmount_dollar;
                freightEditing.totalDueAmount_dinar = freightEditing.totalAmount_dinar - freightTarget.totalPaidAmount_dinar;
                //Check If User Paid All Amount
                if (freightEditing.totalDueAmount_dinar > 0 || freightEditing.totalDueAmount_dollar > 0)
                    freightEditing.isPaidAllAmount = false;
                updateCollection.$set = freightEditing;
                //Update Another Data Now
                mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).updateOne({ _id: updateingTargetId }, updateCollection).then(item => {
                    //Check If Not Found
                    if (!item.matchedCount)
                        return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantUpdateTheNewItem);
                    //Rename New Images If Changed And Remove Odl Image From The Server
                    if (files.carPicture) {
                        file_services_1.FileService.rename(files.carPicture.path, path.join(__dirname, '..', freightEditing.carPicture));
                        file_services_1.FileService.removeFiles(path.join(__dirname, "..", freightTarget.carPicture));
                    }
                    //Updaet User Target Information If Changed
                    if (freightEditing.userId != freightTarget.userId) {
                        //Remove 'SectorSaleId' From Old User
                        instance_service_1.instances.userModule.pushOrPullUserArrayField(freightTarget.userId, updateingTargetId, "$pull");
                        //Add 'SectorSaleId' To New User
                        instance_service_1.instances.userModule.pushOrPullUserArrayField(freightEditing.userId, updateingTargetId, "$push");
                    }
                    //Updaet Branch Target Information If Changed
                    if (freightEditing.branchIndex != freightTarget.branchIndex) {
                        //Remove 'SectorSaleId' From Old User
                        instance_service_1.instances.branchModule.pushOrPullUserArrayField(freightTarget.branchIndex, updateingTargetId, "$pull");
                        //Add 'SectorSaleId' To New User
                        instance_service_1.instances.branchModule.pushOrPullUserArrayField(freightEditing.branchIndex, updateingTargetId, "$push");
                    }
                    //تحديث المكسب البحري للشحنات فى الحاوية لانة ربما تم تعديل حج السيارة اوى شىء وبالتالى ياثر على المكسب للشحنة                            
                    instance_service_1.instances.containerModule.updateMaritimeGain(freightEditing.containerNumber);
                    //تحديث المكسب البحري للشحنات فى الحاوية القديمة
                    if (freightEditing.containerNumber != freightTarget.containerNumber)
                        instance_service_1.instances.containerModule.updateMaritimeGain(freightTarget.containerNumber);
                    /** Loadd Data With Response To Update The Page */
                    this.getFreightToUpdate(loggedUser, freightTarget._id, true);
                }).catch(error => {
                    var _a;
                    file_services_1.FileService.removeFiles((_a = files.carPicture) === null || _a === void 0 ? void 0 : _a.path);
                    response_service_1.ResponseService.catchError(loggedUser, error);
                });
            }).catch(error => {
                var _a;
                file_services_1.FileService.removeFiles((_a = files.carPicture) === null || _a === void 0 ? void 0 : _a.path);
                response_service_1.ResponseService.catchError(loggedUser, error);
            });
        });
    }
    /** Change Freight Case */
    changeFreightCase(loggedUser, freightCaseId, ids) {
        let _freightIds = ids.map(f => new mongodb_1.ObjectId(f));
        let freightCaseName = freight_cases_const_2.freightCasesArray.find(res => res._id == freightCaseId).name;
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).updateMany({ transactionType: transaction_type_enum_1.TransactionTypeEnum.freight, _id: { $in: _freightIds } }, {
            $set: {
                freightCaseId: +freightCaseId,
                freightCaseName: freightCaseName
            }
        }).then(res => {
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updated);
        }).catch(error => {
            response_service_1.ResponseService.catchError(loggedUser, error);
        });
    }
    /** Update By Containers Ids */
    updateByContainersNumbers(loggedUser, body) {
        freight_service_1.FreightService.convertIdsStrinToObjectId(body.updateingData);
        body.updateingData.freightCaseId = +body.updateingData.freightCaseId;
        body.updateingData.freightCaseName = freight_cases_const_2.freightCasesArray.find(res => res._id == body.updateingData.freightCaseId).name;
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).updateMany({ containerNumber: { $in: body.containerNumbers } }, { $set: body.updateingData }).then(res => {
            //تحديث المكسب البحري لكل شحنة
            body.containerNumbers.forEach(con => instance_service_1.instances.containerModule.updateMaritimeGain(con));
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updated);
        }).catch(error => {
            response_service_1.ResponseService.catchError(loggedUser, error);
        });
    }
    /** Change Container Number */
    changeContainerNumber(loggedUser, containerNumber, ids) {
        let _freightIds = ids.map(f => new mongodb_1.ObjectId(f));
        let update = {};
        /**
         * اذا لا يوجد هناك رقم حاوية فهذا يعنى ان تم النداء على هذة الوظيفة من اجل فك الارتباط الشحنات من الحاوية
         * وفى حالة فك الارتباط نوع حالة الشحنة فى مخزن التعبئة
         */
        if (containerNumber == "null")
            update = {
                containerNumber: null,
                freightCaseId: freight_casaes_enum_1.FreightCasesEnum.In_the_packing_store,
                freightCaseName: freight_cases_const_2.freightCasesArray.find(res => res._id == freight_casaes_enum_1.FreightCasesEnum.In_the_packing_store).name
            };
        else
            update = {
                containerNumber: containerNumber.trim(),
            };
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).updateMany({ _id: { $in: _freightIds } }, { $set: update }).then(res => {
            //تحديث المكسب البحري لكل شحنة
            if (containerNumber)
                instance_service_1.instances.containerModule.updateMaritimeGain(containerNumber);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updated);
        }).catch(error => {
            response_service_1.ResponseService.catchError(loggedUser, error);
        });
    }
} //End Class
exports.FreightModule = FreightModule;
