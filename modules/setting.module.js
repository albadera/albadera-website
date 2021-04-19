"use strict";
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
exports.SettingModule = void 0;
const collections_conse_1 = require("./../consts/collections.conse");
const response_service_1 = require("../services/response.service");
const mongo_db_service_1 = require("../services/mongo.db.service");
const basic_module_1 = require("./basic.module");
const mongodb_1 = require("mongodb");
const instance_service_1 = require("../services/instance.service");
class SettingModule extends basic_module_1.BasicModule {
    /*** Get General Settings*/
    getGeneralSettings(loggedUser, skip, take, settingCollectionName) {
        //Check From Collection Name
        if (collections_conse_1.generalSettingCollections.findIndex(c => c == settingCollectionName) == -1) {
            return response_service_1.ResponseService.end_failed(loggedUser, this.r.iDidNotFoundThePage);
        }
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(settingCollectionName).aggregate([
            { $sort: { _id: -1 } },
            { $skip: skip },
            { $limit: take }
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
    /**Get Genral Setting From Server To Update */
    getGenralSettingToUpdate(loggedUser, id, settingCollectionName) {
        //Check From Collection Name
        if (collections_conse_1.generalSettingCollections.findIndex(c => c == settingCollectionName) == -1) {
            return response_service_1.ResponseService.end_failed(loggedUser, this.r.iDidNotFoundThePage);
        }
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(settingCollectionName).findOne({ _id: new mongodb_1.ObjectId(id) })
            .then(item => {
            //Check If Not Found
            if (!item)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.itemIsNotFound);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, item);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Create New General Setting */
    createNewGeneralSetting(loggedUser, settingCollectionName, settingValue) {
        //Check From Collection Name
        if (collections_conse_1.generalSettingCollections.findIndex(c => c == settingCollectionName) == -1) {
            return response_service_1.ResponseService.end_failed(loggedUser, this.r.iDidNotFoundThePage);
        }
        settingValue = {
            name: settingValue.name
        };
        //Insert Now
        mongo_db_service_1.MongoDBService.db.collection(settingCollectionName).insertOne(settingValue)
            .then(item => {
            //Check If Not Found
            if (!item.insertedCount)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantCreateTheNewItem);
            //Update Local Setting
            instance_service_1.instances.selectItemModule.updateItem(settingCollectionName);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.created, settingValue);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Update General Setting */
    updateGeneralSetting(loggedUser, settingCollectionName, settingValue) {
        //Check From Collection Name
        if (collections_conse_1.generalSettingCollections.findIndex(c => c == settingCollectionName) == -1) {
            return response_service_1.ResponseService.end_failed(loggedUser, this.r.iDidNotFoundThePage);
        }
        //Get Target  
        mongo_db_service_1.MongoDBService.db.collection(settingCollectionName).findOne({ _id: new mongodb_1.ObjectId(settingValue._id) })
            .then(item => {
            //Check If Not Found
            if (!item)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.itemIsNotFound);
            //Update Now
            mongo_db_service_1.MongoDBService.db.collection(settingCollectionName).updateOne({ _id: new mongodb_1.ObjectId(settingValue._id) }, {
                $set: {
                    name: settingValue.name
                }
            }).then(item => {
                //Check If Not Found
                if (!item.matchedCount)
                    return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantUpdateTheNewItem);
                //Update Local Setting
                instance_service_1.instances.selectItemModule.updateItem(settingCollectionName);
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updated, settingValue);
            }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Delete General Setting */
    deleteGeneralSetting(loggedUser, settingCollectionName, settingValue) {
        return __awaiter(this, void 0, void 0, function* () {
            //Check From Collection Name
            if (collections_conse_1.generalSettingCollections.findIndex(c => c == settingCollectionName) == -1) {
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.iDidNotFoundThePage);
            }
            //Check If Used
            if (yield mongo_db_service_1.MongoDBService.numberOfUsed(settingCollectionName, new mongodb_1.ObjectId(settingValue._id)))
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.canNotDeleteBecseItsUsed);
            //Update Now
            mongo_db_service_1.MongoDBService.db.collection(settingCollectionName).deleteOne({ _id: new mongodb_1.ObjectId(settingValue._id) }).then(item => {
                //Check If Not Found
                if (!item.deletedCount)
                    return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantDeleteTheNewItem);
                //Update Local Setting
                instance_service_1.instances.selectItemModule.updateItem(settingCollectionName);
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.deleted);
            }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
        });
    }
} //End Class
exports.SettingModule = SettingModule;
