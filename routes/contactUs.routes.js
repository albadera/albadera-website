"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUsRouter = void 0;
const express_1 = require("express");
const contact_us_controller_1 = require("../controllers/contact.us.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new contact_us_controller_1.ContactUsController(), r = express_1.Router();
exports.contactUsRouter = r;
/*** Send Contact Us Message /api/contactUs/send */
r.post('/send', cont.send);
/*** Get  Contact Us Message /api/contactUs/getMessages/:skip/:take */
r.post('/getMessages/:skip/:take', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getMessages);
