"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialTransferModule = void 0;
const mongodb_1 = require("mongodb");
const collections_conse_1 = require("../consts/collections.conse");
const transaction_type_enum_1 = require("../enums/transaction.type.enum");
const app_setting_service_1 = require("../services/app.setting.service");
const mongo_db_service_1 = require("../services/mongo.db.service");
const response_service_1 = require("../services/response.service");
const basic_module_1 = require("./basic.module");
const freight_service_1 = require("../services/freight.service");
const instance_service_1 = require("../services/instance.service");
/**
 * مديول الحولات الماليه
 */
class FinancialTransferModule extends basic_module_1.BasicModule {
    /**Get Financial Transfers */
    getFinancialTransfers(loggedUser, skip, take, filterOptions) {
        let filter = {
            $match: {
                isDeleted: false
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
    /** Get Transfer Details */
    getDetails(loggedUser, id) {
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).aggregate([
            { $match: { _id: new mongodb_1.ObjectId(id) } },
            { $lookup: { from: collections_conse_1.cols.users, localField: "userId", foreignField: "_id", as: "clinet" } },
            { $unwind: "$clinet" },
            {
                $project: {
                    clinetName: "$clinet.name",
                    clinetPhoneNumber: "$clinet.phoneNumber",
                    notes: 1,
                    createdDate: 1,
                    refranceNumber: 1,
                    totalAmount_dollar: 1,
                    totalAmount_dinar: 1,
                    totalPaidAmount_dollar: 1,
                    totalPaidAmount_dinar: 1,
                    totalDueAmount_dollar: 1,
                    totalDueAmount_dinar: 1,
                    isPaidAllAmount: 1,
                    swift: 1,
                    commissionTransfare: 1,
                    paymentsTransaction: 1,
                    dinarOnDueDollar: 1,
                    dueDollarCommissionTransfare: 1,
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
            if (res.length == 0)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.itemIsNotFound);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, res[0]);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**
     * Get Financial Transfer To Update
     */
    getFinancialTransferToUpdate(loggedUser, id, isCalledAffterUpdated = false) {
        //Insert Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).findOne({ _id: new mongodb_1.ObjectId(id), isDeleted: false }, {
            projection: {
                _id: 1,
                userId: 1,
                totalAmount_dollar: 1,
                totalAmount_dinar: 1,
                commissionTransfare: 1,
                totalPaidAmount_dollar: 1,
                totalPaidAmount_dinar: 1,
                totalDueAmount_dollar: 1,
                totalDueAmount_dinar: 1,
                swift: 1,
                refranceNumber: 1,
                notes: 1,
                freightId: 1,
                dueDollarCommissionTransfare: 1,
                branchIndex: 1,
                clinetName: 1,
                clinetPhoneNumber: 1
            }
        }).then(trans => {
            let allowUpdate = this.checkIfAllowUpdate(trans);
            if (!allowUpdate.isAllow)
                return response_service_1.ResponseService.end_failed(loggedUser, allowUpdate.message);
            if (isCalledAffterUpdated) {
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updated, trans);
            }
            else {
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, trans);
            }
        }).catch(error => {
            response_service_1.ResponseService.catchError(loggedUser, error);
        });
    }
    /**
    * Get Item To Payment Amount
    * @param loggedUser
    * @param id
    */
    getFinancialTransferToPayment(loggedUser, id) {
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).aggregate([
            {
                $match: {
                    _id: new mongodb_1.ObjectId(id),
                    isDeleted: false
                }
            },
            { $lookup: { from: collections_conse_1.cols.users, localField: "userId", foreignField: "_id", as: "clinet" } },
            { $unwind: { path: "$clinet", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    clinetName: { $ifNull: ["$clinet.name", "$clinetName"] },
                    refranceNumber: 1,
                    totalAmount_dollar: 1,
                    totalAmount_dinar: 1,
                    totalPaidAmount_dollar: 1,
                    totalPaidAmount_dinar: 1,
                    totalDueAmount_dollar: 1,
                    totalDueAmount_dinar: 1,
                    isPaidAllAmount: 1,
                    dinarOnDueDollar: 1
                }
            }
        ]).toArray().then(trans => {
            let allowDelete = this.checkIfAllowPaymentAmount(trans[0], null);
            if (!allowDelete.isAllow)
                return response_service_1.ResponseService.end_failed(loggedUser, allowDelete.message);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, trans[0]);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**
     *  Create New Financial Transfer
     * @param loggedUser
     */
    createNewFinancialTransfer(loggedUser, trans) {
        trans.refranceNumber = app_setting_service_1.AppSettingService.newRefranceNumber;
        delete trans._id;
        freight_service_1.FreightService.convertIdsStrinToObjectId(trans);
        freight_service_1.FreightService.convertToNumber(trans);
        freight_service_1.FreightService.fixFieldsBeforSaveFinanicalTrnasfer(trans);
        trans.totalPaidAmount_dollar = 0;
        trans.totalPaidAmount_dinar = 0;
        trans.totalDueAmount_dollar = +trans.totalAmount_dollar;
        trans.totalDueAmount_dinar = +trans.totalAmount_dinar;
        trans.createdDate = new Date();
        trans.paymentsTransaction = [];
        trans.isPaidAllAmount = false;
        trans.isDeleted = false;
        //Insert Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).insertOne(trans).then(res => {
            if (!res.result.ok)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantCreateTheNewItem);
            //Push 'TransferId' To User
            instance_service_1.instances.userModule.pushOrPullUserArrayField(trans.userId, trans._id, "$push");
            //Push 'TransferId' To Branch
            instance_service_1.instances.branchModule.pushOrPullUserArrayField(trans.branchIndex, trans._id, "$push");
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.created, { _id: res.insertedId });
        }).catch(error => {
            response_service_1.ResponseService.catchError(loggedUser, error);
        });
    }
    /** Update Financial Transfer */
    updateFinancialTransfer(loggedUser, trans) {
        let targetId = new mongodb_1.ObjectId(trans._id);
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).findOne({ _id: targetId, isDeleted: false }, {
            projection: {
                totalPaidAmount_dollar: 1,
                totalPaidAmount_dinar: 1
            }
        }).then(target => {
            let allowUpdate = this.checkIfAllowUpdate(target);
            if (!allowUpdate.isAllow)
                return response_service_1.ResponseService.end_failed(loggedUser, allowUpdate.message);
            delete trans._id;
            freight_service_1.FreightService.convertIdsStrinToObjectId(trans);
            freight_service_1.FreightService.convertToNumber(trans);
            freight_service_1.FreightService.fixFieldsBeforSaveFinanicalTrnasfer(trans);
            trans.totalDueAmount_dollar = trans.totalAmount_dollar - target.totalPaidAmount_dollar;
            trans.totalDueAmount_dinar = trans.totalAmount_dinar - target.totalPaidAmount_dinar;
            //Update Now
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).updateOne({ _id: targetId }, { $set: trans }).then(res => {
                //Updaet User Target Information If Changed
                if (trans.userId != target.userId) {
                    //Remove 'TransfersId' From Old User
                    instance_service_1.instances.userModule.pushOrPullUserArrayField(new mongodb_1.ObjectId(target.userId), targetId, "$pull");
                    //Add 'TransfersId' To New User
                    instance_service_1.instances.userModule.pushOrPullUserArrayField(trans.userId, targetId, "$push");
                }
                //Updaet Branch Target Information If Changed
                if (trans.branchIndex != target.branchIndex) {
                    //Remove 'TransfersId' From Old Branch
                    instance_service_1.instances.branchModule.pushOrPullUserArrayField(target.branchIndex, targetId, "$pull");
                    //Add 'TransfersId' To New Branch
                    instance_service_1.instances.branchModule.pushOrPullUserArrayField(trans.branchIndex, targetId, "$push");
                }
                this.getFinancialTransferToUpdate(loggedUser, targetId, true);
            }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /** انشاء حركة دفع جديدة */
    paymentAmount(loggedUser, value) {
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).findOne({ _id: new mongodb_1.ObjectId(value._id), isDeleted: false })
            .then(tran => {
            let allowDelete = this.checkIfAllowPaymentAmount(tran, value);
            if (!allowDelete.isAllow)
                return response_service_1.ResponseService.end_failed(loggedUser, allowDelete.message);
            //Create Payment Transaction
            let paymentTransaction = {
                paymentDate: new Date(),
                paymentAmount_dollar: +value.paymentAmount_dollar,
                paymentAmount_dinar: +value.paymentAmount_dinar,
                paymentPlace: value.paymentPlace || '',
                notes: value.notes || '',
            };
            //Incress Amounts
            let updateing = {
                totalPaidAmount_dollar: freight_service_1.FreightService.cultTotalPaidAmount_dollar(tran, tran.paymentsTransaction, paymentTransaction),
                totalPaidAmount_dinar: tran.totalPaidAmount_dinar + Number(value.paymentAmount_dinar),
                totalDueAmount_dollar: tran.totalDueAmount_dollar - Number(value.paymentAmount_dollar),
                totalDueAmount_dinar: tran.totalDueAmount_dinar - Number(value.paymentAmount_dinar),
                isPaidAllAmount: false,
                dueDollarCommissionTransfare: tran.dueDollarCommissionTransfare
            };
            updateing.dinarOnDueDollar = freight_service_1.FreightService.cultDinarOnDueDollar(updateing);
            if (updateing.totalDueAmount_dinar < 0)
                updateing.totalDueAmount_dinar = 0;
            if (updateing.totalDueAmount_dollar < 0)
                updateing.totalDueAmount_dollar = 0;
            //Check If User Paid All Amount
            if (updateing.totalDueAmount_dinar == 0 && updateing.totalDueAmount_dollar == 0)
                updateing.isPaidAllAmount = true;
            //Update Document Now
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).updateOne({ _id: new mongodb_1.ObjectId(value._id) }, {
                $set: updateing,
                $push: {
                    paymentsTransaction: paymentTransaction
                }
            }).then(res => {
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.paymentSuccessFully, {
                    totalPaidAmount_dollar: updateing.totalPaidAmount_dollar,
                    totalPaidAmount_dinar: updateing.totalPaidAmount_dinar,
                    totalDueAmount_dollar: updateing.totalDueAmount_dollar,
                    totalDueAmount_dinar: updateing.totalDueAmount_dinar,
                });
            }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Check If Allow Update
    */
    checkIfAllowUpdate(trans) {
        if (!trans)
            return { isAllow: false, message: this.r.itemIsNotFound };
        return { isAllow: true, message: null };
    }
    /** Check If Allow Payment Amount
     - لا يمكن اتمام حركة دفع جديدة على حوالة ما اذا كان المستخدم قد دفع كل الرصيد المستحق.
     - لا يمكن اتمام حركة دفع اذا كان المطلوب اكثر من المراد دفعة.
     */
    checkIfAllowPaymentAmount(trans, paymentValue) {
        if (!trans)
            return { isAllow: false, message: this.r.itemIsNotFound };
        //Chekc If User Paid All Deu Amouont
        if (trans.isPaidAllAmount)
            return { isAllow: false, message: this.r.userPaidAllDueAmountDes1 };
        //Return If This Calling Only Get Information To Make Payment 
        if (!paymentValue)
            return { isAllow: true, message: null };
        //Cant Not Payment Dollar More Than "Total Due Dollar"
        if (paymentValue.paymentAmount_dollar > trans.totalDueAmount_dollar)
            return { isAllow: false, message: `البملغ المطلوب دفعة بالدولار هو ${trans.totalDueAmount_dollar} وانت تدفع ${paymentValue.paymentAmount_dollar} ولا يجوز دفع مبالغ مالية اكبر من المطلوبة` };
        //Cant Not Payment Dollar More Than "Total Due Dinar"
        if (paymentValue.paymentAmount_dinar > trans.totalDueAmount_dinar)
            return { isAllow: false, message: `البملغ المطلوب دفعة بالدينار هو ${trans.totalDueAmount_dinar} وانت تدفع ${paymentValue.paymentAmount_dinar} ولا يجوز دفع مبالغ مالية اكبر من المطلوبة` };
        return { isAllow: true, message: null };
    }
} //End Class
exports.FinancialTransferModule = FinancialTransferModule;
