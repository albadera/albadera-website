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
exports.StateModule = void 0;
const response_service_1 = require("../services/response.service");
const mongo_db_service_1 = require("../services/mongo.db.service");
const basic_module_1 = require("./basic.module");
const mongodb_1 = require("mongodb");
const collections_conse_1 = require("../consts/collections.conse");
const instance_service_1 = require("../services/instance.service");
class StateModule extends basic_module_1.BasicModule {
    /*** Get States*/
    getStates(loggedUser, skip, take) {
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.states).aggregate([
            { $sort: { _id: -1 } },
            { $skip: skip },
            { $limit: take },
            {
                $project: {
                    name: 1,
                    numberOfCities: { $size: "$cities" }
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
    /**Get Car Mark From Server To Update */
    getStateToUpdate(loggedUser, id) {
        //Filter Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.states).findOne({ _id: new mongodb_1.ObjectId(id) })
            .then(item => {
            //Check If Not Found
            if (!item)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.itemIsNotFound);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, item);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Create Car Mark */
    createNewState(loggedUser, stateValue) {
        stateValue = {
            name: stateValue.name,
            freightPortId: new mongodb_1.ObjectId(stateValue.freightPortId),
            cities: stateValue.cities.map(ci => {
                return {
                    _id: new mongodb_1.ObjectId(),
                    name: ci.name,
                    landFreightPrice: ci.landFreightPrice
                };
            })
        };
        //Insert Now
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.states).insertOne(stateValue)
            .then(item => {
            //Check If Not Found
            if (!item.insertedCount)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantCreateTheNewItem);
            //Update Local States
            instance_service_1.instances.selectItemModule.updateItem("states");
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.created, stateValue);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Update Car Mark */
    updateState(loggedUser, stateValue) {
        //Get Target  
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.states).findOne({ _id: new mongodb_1.ObjectId(stateValue._id) })
            .then((item) => __awaiter(this, void 0, void 0, function* () {
            //Check If Not Found
            if (!item)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.itemIsNotFound);
            let numerOfNotDeleteing = 0;
            //Update "IsDeleting" All Citeis Can't Delete To Felse, Becuse In Below I Repalce Cities Array With New Array
            if (stateValue.cities)
                for (const ci of stateValue.cities.filter(ci => ci.IsDeleting)) {
                    if ((yield mongo_db_service_1.MongoDBService.numberOfUsed("cities", new mongodb_1.ObjectId(ci._id))) > 0) {
                        ci.IsDeleting = false;
                        numerOfNotDeleteing++;
                    }
                }
            let updateingState = {
                name: stateValue.name,
                freightPortId: new mongodb_1.ObjectId(stateValue.freightPortId),
                //Repalce Cites Array And Skip All Suucess Delete Elemtes
                cities: (stateValue.cities || []).filter(ci => !ci.IsDeleting).map(ci => {
                    return {
                        _id: new mongodb_1.ObjectId(ci._id || null),
                        name: ci.name,
                        landFreightPrice: ci.landFreightPrice
                    };
                })
            };
            //Update Now
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.states).updateOne({ _id: new mongodb_1.ObjectId(stateValue._id) }, {
                $set: updateingState
            }).then(item => {
                //Check If Not Found
                if (!item.matchedCount)
                    return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantUpdateTheNewItem);
                //Update Local States
                instance_service_1.instances.selectItemModule.updateItem("states");
                updateingState._id = stateValue._id;
                if (numerOfNotDeleteing > 0)
                    return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updatedAndIHaveSomeCitiesCantBeDeleteBecuseAreUesd, updateingState);
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updated, updateingState);
            }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
        })).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**Delete Car Mark */
    deleteState(loggedUser, stateValue) {
        return __awaiter(this, void 0, void 0, function* () {
            //Check Before Delete
            if (yield mongo_db_service_1.MongoDBService.numberOfUsed(collections_conse_1.cols.states, new mongodb_1.ObjectId(stateValue._id)))
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.canNotDeleteBecseItsUsed);
            //Delete Now
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.states).deleteOne({ _id: new mongodb_1.ObjectId(stateValue._id) }).then(item => {
                //Check If Not Found
                if (!item.deletedCount)
                    return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCantDeleteTheNewItem);
                //Update Local States
                instance_service_1.instances.selectItemModule.updateItem("states");
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.deleted);
            }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
        });
    }
} //End Class
exports.StateModule = StateModule;
