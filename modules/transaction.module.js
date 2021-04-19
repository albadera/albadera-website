"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModule = void 0;
const mongodb_1 = require("mongodb");
const collections_conse_1 = require("../consts/collections.conse");
const freight_service_1 = require("../services/freight.service");
const mongo_db_service_1 = require("../services/mongo.db.service");
const response_service_1 = require("../services/response.service");
const basic_module_1 = require("./basic.module");
/**
* تم انشاء هذا الموجيل من اجل العمليات المشتركة بين كل المعاملات
*/
class TransactionModule extends basic_module_1.BasicModule {
    constructor() {
        super(...arguments);
        this.freightService = new freight_service_1.FreightService();
    }
    /**
   * Get Item To Deleted
   * @param id
   */
    getTrnasactionToDelete(loggedUser, id) {
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).aggregate([
            {
                $match: {
                    _id: new mongodb_1.ObjectId(id)
                }
            },
            { $lookup: { from: collections_conse_1.cols.users, localField: "userId", foreignField: "_id", as: "clinet" } },
            { $unwind: { path: "$clinet", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    clinetName: { $ifNull: ["$clinet.name", "$clinetName"] },
                    refranceNumber: 1,
                    paymentAmount_dollar: 1,
                    paymentAmount_dinar: 1,
                }
            }
        ]).toArray().then(feis => {
            let allowDelete = this.checkIfAllowDelete(feis[0]);
            if (!allowDelete.isAllow)
                return response_service_1.ResponseService.end_failed(loggedUser, allowDelete.message);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, feis[0]);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /** Get Deleted Trnasaction To Recover */
    getDeletedTrnasactionToRecover(loggedUser, id) {
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).aggregate([
            {
                $match: {
                    _id: new mongodb_1.ObjectId(id)
                }
            },
            { $lookup: { from: collections_conse_1.cols.users, localField: "userId", foreignField: "_id", as: "clinet" } },
            { $unwind: { path: "$clinet", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    clinetName: { $ifNull: ["$clinet.name", "$clinetName"] },
                    refranceNumber: 1,
                    paymentAmount_dollar: 1,
                    paymentAmount_dinar: 1,
                }
            }
        ]).toArray().then(feis => {
            let allowDelete = this.checkIfAllowRecover(feis[0]);
            if (!allowDelete.isAllow)
                return response_service_1.ResponseService.end_failed(loggedUser, allowDelete.message);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, feis[0]);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /** Get Deleted User To Recover */
    getDeletedUserToRecover(loggedUser, id) {
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).aggregate([
            {
                $match: {
                    _id: new mongodb_1.ObjectId(id),
                    isDeleted: true
                }
            },
            {
                $project: {
                    name: 1,
                }
            }
        ]).toArray().then(feis => {
            if (!feis.length)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.userAccountIsNotFound);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, feis[0]);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Delete Or Revocer Trnasaction */
    deleteSwitchTrnasaction(loggedUser, id, isDelete) {
        let findTransactioon = { _id: new mongodb_1.ObjectId(id) };
        //Check Before Un Delete 
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).findOne(findTransactioon).then(trnasTarget => {
            let allowDelete = this.checkIfAllowDelete(trnasTarget);
            if (!allowDelete.isAllow)
                return response_service_1.ResponseService.end_failed(loggedUser, allowDelete.message);
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).updateOne(findTransactioon, {
                $set: { isDeleted: isDelete }
            }).then(item => {
                if (!item.modifiedCount)
                    return response_service_1.ResponseService.end_failed(loggedUser, isDelete ? this.r.iCantNotDelete : this.r.iCantNotRecover);
                //If This Revocer Action Must Be Recover User IF Deleted
                if (!isDelete) {
                    this.recoverUser(new mongodb_1.ObjectId(trnasTarget.userId));
                }
                return response_service_1.ResponseService.end_successfully(loggedUser, isDelete ? this.r.deleted : this.r.recoverd);
            }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Delete Or Recover Trnasactions */
    deleteSwitchTrnasactions(ids, isDelete) {
        //Check Before Un Delete 
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).find({ _id: { $in: ids } }).toArray().then(trnas => {
            trnas.forEach(tr => tr._id = new mongodb_1.ObjectId(tr._id));
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).updateMany({ _id: { $in: ids } }, {
                $set: {
                    isDeleted: isDelete
                }
            }).catch(() => { });
        }).catch(error => { });
    }
    /** Recover User Is Deleted */
    recoverUser(userId) {
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).updateOne({ _id: userId }, { $set: { isDeleted: false } });
    }
    /**Check If Allow Delete
     *
     */
    checkIfAllowDelete(trans) {
        if (!trans)
            return { isAllow: false, message: this.r.itemIsNotFound };
        //Chekc If User Paid Amouont
        //    if (trans.totalPaidAmount_dinar > 0 || trans.totalPaidAmount_dollar > 0)
        //      return { isAllow: false, message: this.r.youCanNotDeleteTheTransferDes };
        return { isAllow: true, message: null };
    }
    /**
     * Check If Allow Recover
     *
     */
    checkIfAllowRecover(trans) {
        if (!trans)
            return { isAllow: false, message: this.r.itemIsNotFound };
        //Chekc If User Paid Amouont
        //    if (trans.totalPaidAmount_dinar > 0 || trans.totalPaidAmount_dollar > 0)
        //      return { isAllow: false, message: this.r.youCanNotDeleteTheTransferDes };
        return { isAllow: true, message: null };
    }
} //End Class
exports.TransactionModule = TransactionModule;
