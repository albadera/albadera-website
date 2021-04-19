"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectItemController = void 0;
const instance_service_1 = require("../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class SelectItemController {
    /**
     *  Get Select Items
     */
    getSelectItems(req, res) {
        instance_service_1.instances.selectItemModule.getSelectItems(gi(req, res), req.body);
    }
    ;
} //End Class
exports.SelectItemController = SelectItemController;
