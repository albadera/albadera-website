"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateController = void 0;
const instance_service_1 = require("../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class StateController {
    /**
     *  Get  States
     */
    getStates(req, res) {
        instance_service_1.instances.stateModule.getStates(gi(req, res), +req.params.skip, +req.params.take);
    }
    ;
    /**
     *  Get State From Server To Update
     */
    getStateToUpdate(req, res) {
        instance_service_1.instances.stateModule.getStateToUpdate(gi(req, res), req.params.id);
    }
    ;
    /**
       *  Create New  State
       */
    createNewState(req, res) {
        instance_service_1.instances.stateModule.createNewState(gi(req, res), req.body);
    }
    ;
    /**
       *  Update  State
       */
    updateState(req, res) {
        instance_service_1.instances.stateModule.updateState(gi(req, res), req.body);
    }
    ;
    /**Delete  State */
    deleteState(req, res) {
        instance_service_1.instances.stateModule.deleteState(gi(req, res), req.body);
    }
} //End Class
exports.StateController = StateController;
