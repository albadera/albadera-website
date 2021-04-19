"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUsModule = void 0;
const mongodb_1 = require("mongodb");
const collections_conse_1 = require("../consts/collections.conse");
const mongo_db_service_1 = require("../services/mongo.db.service");
const basic_module_1 = require("./basic.module");
const response_service_1 = require("../services/response.service");
class ContactUsModule extends basic_module_1.BasicModule {
    /**
   * Get Messages To #Admin
   * @param skip
   * @param limit
   * @param body
   */
    getMessages(loggedUser, skip, limit, filterFields) {
        let filter = { $match: { isAdmin: { $ne: true } } };
        if (filterFields.name)
            filter.$match.name = { "$regex": filterFields.name, "$options": "igm" };
        if (filterFields.subject)
            filter.$match.subject = { "$regex": filterFields.subject, "$options": "igm" };
        if (filterFields.email)
            filter.$match.email = { "$regex": filterFields.email, "$options": "igm" };
        if (filterFields.createdDate) {
            filter.$match.createdDate = {
                $gte: new Date(new Date(filterFields.createdDate).setHours(0)),
                $lte: new Date(new Date(filterFields.createdDate).setHours(24))
            };
        }
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.contactUs).aggregate([
            filter,
            { $lookup: { from: collections_conse_1.cols.users, localField: "userId", foreignField: "_id", as: "clinet" } },
            { $unwind: { path: "$clinet", preserveNullAndEmptyArrays: true } },
            { $sort: { createdDate: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $project: {
                    name: 1,
                    subject: 1,
                    email: 1,
                    message: 1,
                    createdDate: 1,
                    userId: 1,
                    clinetName: "$clinet.name",
                    clinetPhoneNumber: "$clinet.phoneNumber",
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
            response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, res);
        }).catch(c => response_service_1.ResponseService.catchError(loggedUser, c));
    }
    /** Send Message */
    send(loggedUser, value) {
        let contactUs = {
            email: value.email,
            name: value.name,
            subject: value.subject,
            message: value.message,
            userId: loggedUser._id ? new mongodb_1.ObjectId(loggedUser._id) : null,
            createdDate: new Date()
        };
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.contactUs).insertOne(contactUs).then(res => {
            if (res.insertedId)
                return response_service_1.ResponseService.end_info(loggedUser, this.r.messageSedSuccessFully);
            else
                return response_service_1.ResponseService.catchError(loggedUser, this.r.someErrorHasBeen);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
} //End Class
exports.ContactUsModule = ContactUsModule;
