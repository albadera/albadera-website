"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSettngModule = void 0;
const collections_conse_1 = require("../consts/collections.conse");
const app_setting_service_1 = require("../services/app.setting.service");
const mongo_db_service_1 = require("../services/mongo.db.service");
const response_service_1 = require("../services/response.service");
const basic_module_1 = require("./basic.module");
class AppSettngModule extends basic_module_1.BasicModule {
    /** Get App Setting Values To update */
    getValues(loggedUser) {
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.appSetting).findOne({})
            .then(res => {
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, res);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /** Update Values */
    update(loggedUser, values) {
        //Must Be The Next Refranc Number More Than The Last Trasnaction Refrance Number
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.transactions).find({}, { projection: { refranceNumber: 1 } })
            .sort({ refranceNumber: -1 }).limit(1).toArray()
            .then(trasns => {
            if (trasns.length > 0 && trasns[0].refranceNumber >= values.nextRefranceNumber)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.minimumReferenceNumberMustBeMoreThan + trasns[0].refranceNumber);
            app_setting_service_1.AppSettingService.appSetting.nextRefranceNumber = +values.nextRefranceNumber;
            //Now I Can Update
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.appSetting).updateOne({}, { $set: app_setting_service_1.AppSettingService.appSetting }).then(res => {
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updated);
            }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
} //End Class
exports.AppSettngModule = AppSettngModule;
