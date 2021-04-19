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
exports.AppSettingService = void 0;
const mongo_db_service_1 = require("./mongo.db.service");
const collections_conse_1 = require("../consts/collections.conse");
/**
 * هنا نضع اعدادت الموقع المتغير
 * يمكن ان تغير فى اى وقت سواء بواسطة صفحة او يدويا او من خلال الكود
 */
class AppSettingService {
    /**
     * Update App Setting From DB
     */
    static updatLocalAppSetting() {
        return __awaiter(this, void 0, void 0, function* () {
            this.appSetting = (yield mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.appSetting).findOne({}, {
                projection: {
                    nextRefranceNumber: 1
                }
            }));
            //If We Havn't Any App Setting We Will Insert New Documetn With Default Value
            if (!this.appSetting) {
                this.appSetting = { nextRefranceNumber: 1 };
                console.log('I Will Create New App Setting Document');
                console.log(this.appSetting);
                mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.appSetting).insertOne(this.appSetting);
            }
        });
    }
    /** Get The Next Referanc Numnber */
    static get newRefranceNumber() {
        let refrancId = +this.appSetting.nextRefranceNumber;
        if (!refrancId)
            throw new Error("Next Refrance Number Isn't Found");
        //Increment Last Refrance Number Id
        this.appSetting.nextRefranceNumber++;
        //Save The New Referance In "App Setting Collection"
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.appSetting).updateOne({}, { $set: this.appSetting });
        //Return The New Referance Number Id
        return refrancId;
    }
} //End Class
exports.AppSettingService = AppSettingService;
