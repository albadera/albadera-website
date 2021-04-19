"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const congif_const_1 = require("../consts/congif.const");
const resource_ar_1 = require("../resources/resource.ar");
const string_hashing_service_1 = require("./string.hashing.service");
const clinet_types_const_1 = require("../consts/clinet.types.const");
const roles_const_1 = require("../consts/roles.const");
const branches_const_1 = require("../consts/branches.const");
let UserService = /** @class */ (() => {
    class UserService {
        /**
         * Update User Fields
         * Hash Password And Fix Another
         */
        static fixUserFileds(user) {
            user.roleId = +user.roleId;
            user.clinetTypeId = +user.clinetTypeId;
            user.branchIndex = +user.branchIndex;
            user.name = user.fullName || user.userName;
            user.clinetTypeName = clinet_types_const_1.ClinetTypesObject[user.clinetTypeId];
            user.roleName = roles_const_1.RolesObject[user.roleId];
            user.branchName = branches_const_1.BranchesObject[user.branchIndex];
            if (user.password)
                user.password = string_hashing_service_1.StringHashingService.hash(user.password);
        }
        /**
         * Get Valid User Picture Path
         */
        static getUserPicturePath(usre) {
            return congif_const_1.config.apiFullPath + (usre.picturePath || "/files/users/default.png");
        }
        /**
         * Get Logged User Information
         * @param req
         * @param res
         */
        static getLoggedUserInformation(req, res) {
            let lang = req.headers["accept-language"].toLowerCase();
            return Object.assign(Object.assign({}, res.locals[congif_const_1.config.loggedUerInformation]), { languageCode: lang, request: req, response: res, resources: new resource_ar_1.ResourceAr() });
        }
    }
    /** Logout Sessions
     *
     */
    UserService.logoutsSessions = {};
    return UserService;
})(); //End Class
exports.UserService = UserService;
