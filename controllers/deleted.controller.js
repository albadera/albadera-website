"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedController = void 0;
const instance_service_1 = require("./../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class DeletedController {
    /**Get Sector Sales Deleted */
    getSectorSalesDeleted(req, res) {
        instance_service_1.instances.deletedModule.getSectorSalesDeleted(gi(req, res), +req.params.skip, +req.params.take, req.body);
    }
    /**Get Financial Transfers Deleted */
    getFinancialTransfersDeleted(req, res) {
        instance_service_1.instances.deletedModule.getFinancialTransfersDeleted(gi(req, res), +req.params.skip, +req.params.take, req.body);
    }
    /*** Get Freights Deleted*/
    getFreightsDeleted(req, res) {
        instance_service_1.instances.deletedModule.getFreightsDeleted(gi(req, res), +req.params.skip, +req.params.take, req.body);
    }
    /*** Get Deleted Transaction Tp Recover*/
    getDeletedTrnasactionToRecover(req, res) {
        instance_service_1.instances.transactionModule.getDeletedTrnasactionToRecover(gi(req, res), req.params.id);
    }
    /**
     * Get Deleted User To Recover
     * @param req
     * @param res
     */
    getDeletedUserToRecover(req, res) {
        instance_service_1.instances.transactionModule.getDeletedUserToRecover(gi(req, res), req.params.id);
    }
    /**
     * Recover Transaction
     */
    recoverTrnasaction(req, res) {
        instance_service_1.instances.transactionModule.deleteSwitchTrnasaction(gi(req, res), req.params.id, false);
    }
    recoverUser(req, res) {
        instance_service_1.instances.userModule.deleteSwitch(gi(req, res), req.params.id, false);
    }
    ;
} //End Class
exports.DeletedController = DeletedController;
