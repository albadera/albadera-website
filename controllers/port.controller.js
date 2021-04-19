"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortController = void 0;
const instance_service_1 = require("../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class PortController {
    /**
     *  Get  Ports
     */
    getPorts(req, res) {
        instance_service_1.instances.portModule.getPorts(gi(req, res), +req.params.skip, +req.params.take, +req.params.portType);
    }
    ;
    /**
     *  Get Port From Server To Update
     */
    getPortToUpdate(req, res) {
        instance_service_1.instances.portModule.getPortToUpdate(gi(req, res), req.params.id);
    }
    ;
    /**
     * Get Port To Delete
     * @param req
     * @param res
     */
    getPortToDelete(req, res) {
        instance_service_1.instances.portModule.getPortToDelete(gi(req, res), req.params.id);
    }
    ;
    /**
       *  Create New  Port
       */
    createNewPort(req, res) {
        instance_service_1.instances.portModule.createNewPort(gi(req, res), req.body);
    }
    ;
    /**
       *  Update  Port
       */
    updatePort(req, res) {
        instance_service_1.instances.portModule.updatePort(gi(req, res), req.body);
    }
    ;
    /**Delete  Port */
    deletePort(req, res) {
        instance_service_1.instances.portModule.deletePort(gi(req, res), req.params.id);
    }
} //End Class
exports.PortController = PortController;
