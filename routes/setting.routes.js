"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingRouter = void 0;
const express_1 = require("express");
const setting_controller_1 = require("../controllers/setting.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new setting_controller_1.SettingController(), r = express_1.Router();
exports.settingRouter = r;
/** Get General Settings #Admin : api/setting/getGeneralSettings/:skip/:take/:pageTargetName */
r.get('/getGeneralSettings/:skip/:take/:pageTargetName', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getGeneralSettings);
/** Get Genral Setting From Server To Update #Admin : api/setting/getGenralSettingToUpdate/:id/:pageTargetName */
r.get('/getGenralSettingToUpdate/:id/:pageTargetName', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getGenralSettingToUpdate);
/** Create New General Setting #Admin : api/setting/createNewGeneralSetting/:pageTargetName */
r.post('/createNewGeneralSetting/:pageTargetName', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.createNewGeneralSetting);
/** Update General Setting #Admin : api/setting/updateGeneralSetting/:pageTargetName */
r.put('/updateGeneralSetting/:pageTargetName', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.updateGeneralSetting);
/** Delete General Setting #Admin : api/setting/updateGeneralSetting/:pageTargetName */
r.put('/deleteGeneralSetting/:pageTargetName', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.deleteGeneralSetting);
