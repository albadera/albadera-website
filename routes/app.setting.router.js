"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSettingRouter = void 0;
const express_1 = require("express");
const app_setting_controller_1 = require("../controllers/app.setting.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new app_setting_controller_1.AppSettingController(), r = express_1.Router();
exports.appSettingRouter = r;
/*** Get App Setting Values /api/appSetting/getValues */
r.get('/getValues', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getValues);
/*** Update App Setting /api/appSetting/update */
r.put('/update', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.update);
