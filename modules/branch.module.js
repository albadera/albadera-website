"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchModule = void 0;
const collections_conse_1 = require("../consts/collections.conse");
const mongo_db_service_1 = require("../services/mongo.db.service");
const basic_module_1 = require("./basic.module");
class BranchModule extends basic_module_1.BasicModule {
    /**
     * Push Or Pull Id From Array Field In User Document
     * @param branchIndex Branch Index Target
     * @param idTarget Id You Want Push Or Pull
     * @param arrayFieldName Array Field Target
     * @param updateState Updaet Case Key
     */
    pushOrPullUserArrayField(branchIndex, idTarget, updateState) {
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.branches).updateOne({ branchIndex }, {
            [updateState]: {
                "transactionsIds": idTarget
            }
        });
    }
}
exports.BranchModule = BranchModule;
