"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUsController = void 0;
const instance_service_1 = require("../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class ContactUsController {
    /**Get Contact Us Report */
    send(req, res) {
        instance_service_1.instances.contactUsModule.send(gi(req, res), req.body);
    }
    /** Get Messages */
    getMessages(req, res) {
        instance_service_1.instances.contactUsModule.getMessages(gi(req, res), +req.params.skip, +req.params.take, req.body);
    }
} //End Class
exports.ContactUsController = ContactUsController;
