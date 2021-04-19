"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuardService = void 0;
const user_service_1 = require("./user.service");
const congif_const_1 = require("../consts/congif.const");
const http_code_1 = require("../consts/http.code");
const response_service_1 = require("./response.service");
const resources_service_1 = require("./resources.service");
const roles_enum_1 = require("../enums/roles.enum");
class AuthGuardService {
    /**
   * Chrck If User Logged .. And This Called Only With Apis Must Be Authrized
   */
    static checkIfAuthrized(req, res, next) {
        let loggedUser = user_service_1.UserService.getLoggedUserInformation(req, res);
        if (!res.locals ||
            !res.locals[congif_const_1.config.loggedUerInformation] ||
            !res.locals[congif_const_1.config.loggedUerAccessToken]) {
            //Send Status Unauthorized
            response_service_1.ResponseService.end_failed(loggedUser, resources_service_1.ResourceService.r.invalidAccessToken, http_code_1.HttpCodes.forbidden);
        }
        else {
            //Check If User Logout From Old Session
            next();
        }
    }
    /**
      * Chrck If User Logged  As Admin .. And This Called Only With Apis Must Be Authrized
      */
    static checkIfAuthrizedAdmin(req, res, next) {
        let loggedUserInfo = (res.locals ? res.locals[congif_const_1.config.loggedUerInformation] : null);
        //Check Isn't Admin
        if (!loggedUserInfo || loggedUserInfo.roleId != roles_enum_1.RolesEnum.Admin) {
            //Send Status Unauthorized
            let loggedUser = user_service_1.UserService.getLoggedUserInformation(req, res);
            response_service_1.ResponseService.end_failed(loggedUser, resources_service_1.ResourceService.r.invalidAccessToken);
        }
        else {
            next();
        }
    }
    /**
        * Chrck If User Logged  As Clinet .. And This Called Only With Apis Must Be Authrized
        */
    static checkIfAuthrizedClinet(req, res, next) {
        let loggedUserInfo = (res.locals ? res.locals[congif_const_1.config.loggedUerInformation] : null);
        //Check Isn't Clinet
        if (!loggedUserInfo || (loggedUserInfo.roleId != roles_enum_1.RolesEnum.Clinet)) {
            //Send Status Unauthorized
            let loggedUser = user_service_1.UserService.getLoggedUserInformation(req, res);
            response_service_1.ResponseService.end_failed(loggedUser, resources_service_1.ResourceService.r.invalidAccessToken);
        }
        else {
            next();
        }
    }
} //End Class
exports.AuthGuardService = AuthGuardService;
