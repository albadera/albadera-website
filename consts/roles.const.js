"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesObject = exports.RolesArray = void 0;
const roles_enum_1 = require("../enums/roles.enum");
exports.RolesArray = [{ _id: roles_enum_1.RolesEnum.Admin, name: "ادمن" },
    { _id: roles_enum_1.RolesEnum.BranchManger, name: "مدير فرع" },
    { _id: roles_enum_1.RolesEnum.Clinet, name: "زبون" }];
exports.RolesObject = {
    [roles_enum_1.RolesEnum.Admin]: "امن",
    [roles_enum_1.RolesEnum.BranchManger]: "مدير فرع",
    [roles_enum_1.RolesEnum.Clinet]: "زبون"
};
Object.freeze(exports.RolesObject);
Object.freeze(exports.RolesArray);
