"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const instance_service_1 = require("../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class UserController {
    /**
     *  Create New Account
     * @param req
     * @param res
     */
    createUser(req, res) {
        instance_service_1.instances.userModule.createUser(gi(req, res));
    }
    ;
    /**
     * Sign In By User Name
     * @param req
     * @param res
     */
    signInByUserName(req, res) {
        instance_service_1.instances.userModule.signInByUserName(gi(req, res), req.body);
    }
    ;
    /**
     * Update Account Information
     * @param req
     * @param res
     */
    update(req, res) { instance_service_1.instances.userModule.update(gi(req, res)); }
    ;
    /** Update User By Admin */
    updateUserByAdmin(req, res) { instance_service_1.instances.userModule.update(gi(req, res), true); }
    ;
    /**
     * Get Current User Information For Update
     * @param req
     * @param res
     */
    getCurrentUserInformationForUpdate(req, res) {
        instance_service_1.instances.userModule.getCurrentUserInformationForUpdate(gi(req, res));
    }
    ;
    /**
     * Get Users To  #Admin
     * @param req
     * @param res
     */
    getUsers(req, res) {
        instance_service_1.instances.userModule.getUsers(gi(req, res), +req.params.skip, +req.params.limit, req.body);
    }
    ;
    /**
  * Get User Information To Update  #Admin
  * @param req
  * @param res
  */
    getUserInformationToUpdate(req, res) {
        instance_service_1.instances.userModule.getUserInformationToUpdate(gi(req, res), req.params.id);
    }
    ;
    /** Get User To Delete */
    getToDelete(req, res) {
        instance_service_1.instances.userModule.getToDelete(gi(req, res), req.params.id);
    }
    ;
    delete(req, res) {
        instance_service_1.instances.userModule.deleteSwitch(gi(req, res), req.params.id, true);
    }
    ;
} //End Class
exports.UserController = UserController;
