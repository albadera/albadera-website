"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportController = void 0;
const instance_service_1 = require("../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class ReportController {
    /**Get Clinet Freights Report */
    getClinetFreightsReport(req, res) {
        instance_service_1.instances.reportModule.getClinetFreightsReport(gi(req, res), +req.params.skip, +req.params.take, req.body);
    }
    /**Get Freight Details Report To Clinet */
    getFreightDetailsToClinet(req, res) {
        instance_service_1.instances.reportModule.getFreightDetailsToClinet(gi(req, res), req.params.id, req.params.clinetId);
    }
    /**Get Freight Details Report To Admin */
    getFreightDetails(req, res) {
        instance_service_1.instances.reportModule.getFreightDetails(gi(req, res), req.params.id);
    }
    /**Get Maritime Freight Price Total Due From Clinet */
    getMaritimeFreightPriceTotalDueForClinet(req, res) {
        instance_service_1.instances.reportModule.getMaritimeFreightPriceTotalDueForClinet(gi(req, res), req.params.clinetTargetId);
    }
    /**Get Branch Freights Report */
    getBranchFreightsReport(req, res) {
        instance_service_1.instances.reportModule.getBranchFreightsReport(gi(req, res), +req.params.skip, +req.params.take, req.body);
    }
    /**Get Maritime Freight Price Total Due From Branch */
    getMaritimeFreightPriceTotalDueForBranch(req, res) {
        instance_service_1.instances.reportModule.getMaritimeFreightPriceTotalDueForBranch(gi(req, res), +req.params.branchIndex);
    }
} //End Class
exports.ReportController = ReportController;
