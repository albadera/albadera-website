"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerController = void 0;
const instance_service_1 = require("../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class ContainerController {
    /**Get Containers Report */
    getContainers(req, res) {
        instance_service_1.instances.containerModule.getContainers(gi(req, res), +req.params.skip, +req.params.take, req.body);
    }
} //End Class
exports.ContainerController = ContainerController;
