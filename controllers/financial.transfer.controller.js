"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialTransferController = void 0;
const instance_service_1 = require("./../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class FinancialTransferController {
    /**
     *  Get  FinancialTransfers
     */
    getFinancialTransfers(req, res) {
        instance_service_1.instances.financialTransferModule.getFinancialTransfers(gi(req, res), +req.params.skip, +req.params.take, req.body);
    }
    ;
    /**
     *  Get FinancialTransfer  To Update
     */
    getFinancialTransferToUpdate(req, res) {
        instance_service_1.instances.financialTransferModule.getFinancialTransferToUpdate(gi(req, res), req.params.id);
    }
    ;
    /**
     *  Get FinancialTransfer  To Delete
     */
    getFinancialTransferToDelete(req, res) {
        instance_service_1.instances.transactionModule.getTrnasactionToDelete(gi(req, res), req.params.id);
    }
    ;
    /**
     *  Get FinancialTransfer  To Payment
     */
    getFinancialTransferToPayment(req, res) {
        instance_service_1.instances.financialTransferModule.getFinancialTransferToPayment(gi(req, res), req.params.id);
    }
    ;
    /**
       *  Create New  FinancialTransfer
       */
    createNewFinancialTransfer(req, res) {
        instance_service_1.instances.financialTransferModule.createNewFinancialTransfer(gi(req, res), req.body);
    }
    ;
    /**
       *  Update  FinancialTransfer
       */
    updateFinancialTransfer(req, res) {
        instance_service_1.instances.financialTransferModule.updateFinancialTransfer(gi(req, res), req.body);
    }
    ;
    /**Delete  FinancialTransfer */
    deleteFinancialTransfer(req, res) {
        instance_service_1.instances.transactionModule.deleteSwitchTrnasaction(gi(req, res), req.params.id, true);
    }
    /** Payment Amount */
    paymentAmount(req, res) {
        instance_service_1.instances.financialTransferModule.paymentAmount(gi(req, res), req.body);
    }
    /** Get Details */
    getDetails(req, res) {
        instance_service_1.instances.financialTransferModule.getDetails(gi(req, res), req.params.id);
    }
} //End Class
exports.FinancialTransferController = FinancialTransferController;
