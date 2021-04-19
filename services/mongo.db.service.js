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
exports.MongoDBService = void 0;
const mongodb_1 = require("mongodb");
const collections_conse_1 = require("../consts/collections.conse");
const string_hashing_service_1 = require("./string.hashing.service");
const roles_enum_1 = require("../enums/roles.enum");
const congif_const_1 = require("../consts/congif.const");
const app_setting_service_1 = require("./app.setting.service");
const instance_service_1 = require("./instance.service");
class MongoDBService {
    /**
     * Init DataBase
     */
    static init() {
        //Open Connection With DataBase
        mongodb_1.MongoClient.connect(congif_const_1.config.mongoDataBaseUrl, { useUnifiedTopology: true }).then(_db => {
            this.db = _db.db();
            //Update The Application Setting
            app_setting_service_1.AppSettingService.updatLocalAppSetting();
            // MongoDBService.deleteMainValues()
            instance_service_1.instances.selectItemModule.updateAllItems();
        }).catch(c => { throw "I Can Not Access To Data Base " + congif_const_1.config.mongoDataBaseUrl; });
    }
    /**
      * نرجع عدد المرات الذى استخدم فيها العنصر المراد حذف .. من اجل اتخاذ قرار حذف ام لا
      * @param collectionName
      * @param targetId
      */
    static numberOfUsed(collectionName, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let matchQuery = {};
            switch (collectionName) {
                case collections_conse_1.cols.buySources:
                    matchQuery = { buySourceId: id };
                    break;
                case collections_conse_1.cols.navigationalWayes:
                    matchQuery = { navigationalWayeId: id };
                    break;
                case collections_conse_1.cols.states:
                    matchQuery = { freightStateId: id };
                    break;
                case "cities":
                    matchQuery = { cityId: id };
                    break;
            }
            return (yield this.db.collection(collections_conse_1.cols.transactions).countDocuments(matchQuery));
        });
    }
    /**
     * Call This Method Whene Access To New Database
     */
    static insertSetupValues() {
        //Insert Admin User To Login In System
        MongoDBService.db.collection("users").insertOne({
            userName: "admin$pa$$word",
            password: string_hashing_service_1.StringHashingService.hash("123456"),
            roleId: roles_enum_1.RolesEnum.Admin,
            isDeleted: false
        });
        //Insert Branches
        MongoDBService.db.collection(collections_conse_1.cols.branches).insertMany([
            {
                name: "الرئيسي",
                branchIndex: 1
            },
            {
                name: "مصراتة",
                branchIndex: 2
            },
            {
                name: "طرابلس",
                branchIndex: 3
            }
        ]);
        console.log('Inserted Setup Values');
    }
    /** Deleted Main Values */
    static deleteMainValues() {
        this.db.collection(collections_conse_1.cols.transactions).deleteMany({});
        this.db.collection(collections_conse_1.cols.branches).deleteMany({});
        this.db.collection(collections_conse_1.cols.users).deleteMany({});
        this.insertSetupValues();
    }
}
exports.MongoDBService = MongoDBService;
;
