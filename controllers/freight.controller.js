"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreightController = void 0;
const user_service_1 = require("../services/user.service");
const instance_service_1 = require("../services/instance.service");
/** Get Logged User Information */
const gi = user_service_1.UserService.getLoggedUserInformation;
class FreightController {
    /**
     *  Get  Freights
     */
    getFreights(req, res) {
        instance_service_1.instances.freightModule.getFreights(gi(req, res), +req.params.skip, +req.params.take, req.body);
    }
    ;
    /**
     *  Get Freight  To Update
     */
    getFreightToUpdate(req, res) {
        instance_service_1.instances.freightModule.getFreightToUpdate(gi(req, res), req.params.id);
    }
    ;
    /**
   *  Get Freight  To Delete
   */
    getFreightToDelete(req, res) {
        instance_service_1.instances.transactionModule.getTrnasactionToDelete(gi(req, res), req.params.id);
    }
    ;
    /**
       *  Create New  Freight
       */
    createNewFreight(req, res) {
        instance_service_1.instances.freightModule.createNewFreight(gi(req, res));
    }
    ;
    /**
       *  Update  Freight
       */
    updateFreight(req, res) {
        instance_service_1.instances.freightModule.updateFreight(gi(req, res));
    }
    ;
    /**Delete  Freight */
    deleteFreight(req, res) {
        instance_service_1.instances.transactionModule.deleteSwitchTrnasaction(gi(req, res), req.params.id, true);
    }
    changeFreightState(req, res) {
        instance_service_1.instances.freightModule.changeFreightCase(gi(req, res), +req.params.freightCaseId, req.body);
    }
    /** Update Fields By Containers Numbers */
    updateByContainersNumbers(req, res) {
        instance_service_1.instances.freightModule.updateByContainersNumbers(gi(req, res), req.body);
    }
    /** Change Container Number */
    changeContainerNumber(req, res) {
        instance_service_1.instances.freightModule.changeContainerNumber(gi(req, res), req.params.containerNumber, req.body);
    }
} //End Class
exports.FreightController = FreightController;
