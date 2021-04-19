"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSettingController = void 0;
const instance_service_1 = require("../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class AppSettingController {
    /**Get App Setting Values  */
    getValues(req, res) {
        instance_service_1.instances.appSettingModule.getValues(gi(req, res));
    }
    /**Update*/
    update(req, res) {
        instance_service_1.instances.appSettingModule.update(gi(req, res), req.body);
    }
} //End Class
exports.AppSettingController = AppSettingController;
