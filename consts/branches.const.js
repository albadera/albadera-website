"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchesObject = exports.BranchesArray = void 0;
const branches_enum_1 = require("../enums/branches.enum");
exports.BranchesArray = [{ _id: branches_enum_1.BranchesEnum.Main, name: "الرئيسيى" },
    { _id: branches_enum_1.BranchesEnum.Mesrata, name: "مصراته" },
    { _id: branches_enum_1.BranchesEnum.Trables, name: "طرابلس" }];
exports.BranchesObject = {
    [branches_enum_1.BranchesEnum.Main]: "الرئيسيى",
    [branches_enum_1.BranchesEnum.Mesrata]: "مصراته",
    [branches_enum_1.BranchesEnum.Trables]: "طرابلس"
};
Object.freeze(exports.BranchesObject);
Object.freeze(exports.BranchesArray);
