"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingController = void 0;
const instance_service_1 = require("../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class SettingController {
    /**
     *  Get General Settings
     */
    getGeneralSettings(req, res) {
        instance_service_1.instances.settingModule.getGeneralSettings(gi(req, res), +req.params.skip, +req.params.take, req.params.pageTargetName);
    }
    ;
    /**
     *  Get Genral Setting From Server To Update
     */
    getGenralSettingToUpdate(req, res) {
        instance_service_1.instances.settingModule.getGenralSettingToUpdate(gi(req, res), req.params.id, req.params.pageTargetName);
    }
    ;
    /**
       *  Create New General Setting
       */
    createNewGeneralSetting(req, res) {
        instance_service_1.instances.settingModule.createNewGeneralSetting(gi(req, res), req.params.pageTargetName, req.body);
    }
    ;
    /**
       *  Update General Setting
       */
    updateGeneralSetting(req, res) {
        instance_service_1.instances.settingModule.updateGeneralSetting(gi(req, res), req.params.pageTargetName, req.body);
    }
    ;
    /**Delete General Setting */
    deleteGeneralSetting(req, res) {
        instance_service_1.instances.settingModule.deleteGeneralSetting(gi(req, res), req.params.pageTargetName, req.body);
    }
} //End Class
exports.SettingController = SettingController;
