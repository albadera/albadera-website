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
exports.PortModule = void 0;
const response_service_1 = require("../services/response.service");
const mongo_db_service_1 = require("../services/mongo.db.service");
const basic_module_1 = require("./basic.module");
const mongodb_1 = require("mongodb");
const collections_conse_1 = require("../consts/collections.conse");
const instance_service_1 = require("../services/instance.service");
class PortModule extends basic_module_1.BasicModule {
    /*** Get Ports By Port Type*/
    getPorts(loggedUser, skip, take, portType) {
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.ports).aggregate([
            {
                $match: {
                    portType: portType
                }
            },
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
    /**Get Car Mark From Server To Update */
    getPortToUpdate(loggedUser, id) {
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.ports).findOne({ _id: new mongodb_1.ObjectId(id) }, {
            projection: {
                name: 1,
                maritimeFreightPriceToBigCar: 1,
                maritimeFreightPriceToSmallCar: 1,
                maritimeFreightPriceToMediumCar: 1,
                portType: 1,
                backgroundColor: 1,
                fontColor: 1,
            }
        })
            .then(item => {
            //Check If Not Found
            if (!item)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.itemIsNotFound);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, item);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /** Get PortTo Delete */
    getPortToDelete(loggedUser, id) {
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.ports).aggregate([
            { $match: { _id: new mongodb_1.ObjectId(id) } },
            { $lookup: { from: collections_conse_1.cols.states, localField: "_id", foreignField: "freightPortId", as: "states" } },
            {
                $project: {
                    name: 1,
                    numberOfStates: { $size: "$states" }
                }
            }
        ]).toArray()
            .then(item => {
            //Check If Allow Delete
            let allowUpdate = this.checkIfAllowDelete(item[0]);
            if (!allowUpdate.isAllow)
                return response_service_1.ResponseService.end_failed(loggedUser, allowUpdate.message);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, item[0]);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Create Car Mark */
    createNewPort(loggedUser, portValue) {
        portValue.maritimeFreightPriceToBigCar = +portValue.maritimeFreightPriceToBigCar;
        portValue.maritimeFreightPriceToSmallCar = +portValue.maritimeFreightPriceToSmallCar;
        portValue.maritimeFreightPriceToMediumCar = +portValue.maritimeFreightPriceToMediumCar;
        portValue.portType = +portValue.portType;
        portValue.backgroundColor = portValue.backgroundColor;
        portValue.fontColor = portValue.fontColor;
        //Insert Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.ports).insertOne(portValue)
            .then(item => {
            //Check If Not Found
            if (!item.insertedCount)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantCreateTheNewItem);
            //Update Local Ports
            instance_service_1.instances.selectItemModule.updateItem("ports");
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.created, portValue);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Update Car Mark */
    updatePort(loggedUser, portValue) {
        //Get Target  
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.ports).findOne({ _id: new mongodb_1.ObjectId(portValue._id) })
            .then((item) => __awaiter(this, void 0, void 0, function* () {
            //Check If Not Found
            if (!item)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.itemIsNotFound);
            let numerOfNotDeleteing = 0;
            let updateingPort = {
                name: portValue.name,
                maritimeFreightPriceToBigCar: +portValue.maritimeFreightPriceToBigCar,
                maritimeFreightPriceToSmallCar: +portValue.maritimeFreightPriceToSmallCar,
                maritimeFreightPriceToMediumCar: +portValue.maritimeFreightPriceToMediumCar,
                portType: +portValue.portType,
                backgroundColor: portValue.backgroundColor,
                fontColor: portValue.fontColor,
            };
            //Update Now
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.ports).updateOne({ _id: new mongodb_1.ObjectId(portValue._id) }, {
                $set: updateingPort
            }).then(item => {
                //Check If Not Found
                if (!item.matchedCount)
                    return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantUpdateTheNewItem);
                //Update Local Ports
                instance_service_1.instances.selectItemModule.updateItem("ports");
                updateingPort._id = portValue._id;
                if (numerOfNotDeleteing > 0)
                    return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updatedAndIHaveSomeCitiesCantBeDeleteBecuseAreUesd, updateingPort);
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updated, updateingPort);
            }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
        })).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Delete Car Mark */
    deletePort(loggedUser, id) {
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.ports).aggregate([
            { $match: { _id: new mongodb_1.ObjectId(id) } },
            { $lookup: { from: collections_conse_1.cols.states, localField: "_id", foreignField: "freightPortId", as: "states" } },
            {
                $project: {
                    name: 1,
                    numberOfStates: { $size: "$states" }
                }
            }
        ]).toArray()
            .then(item => {
            //Check If Allow Delete
            let allowUpdate = this.checkIfAllowDelete(item[0]);
            if (!allowUpdate.isAllow)
                return response_service_1.ResponseService.end_failed(loggedUser, allowUpdate.message);
            //Delete Now
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.ports).deleteOne({ _id: new mongodb_1.ObjectId(id) }).then(item => {
                //Check If Not Found
                if (!item.deletedCount)
                    return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantDeleteTheNewItem);
                //Update Local Ports
                instance_service_1.instances.selectItemModule.updateItem("ports");
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.deleted);
            }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Check If Allow Delete
 */
    checkIfAllowDelete(port) {
        if (!port)
            return { isAllow: false, message: this.r.itemIsNotFound };
        //Check If Used With Ant States
        if (port.numberOfStates)
            return { isAllow: false, message: this.r.canNotDeleteBecseItsUsed };
        return { isAllow: true, message: null };
    }
} //End Class
exports.PortModule = PortModule;
