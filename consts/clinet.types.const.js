"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinetTypesObject = exports.ClinetTypesArray = void 0;
const clinet_type_enum_1 = require("../enums/clinet.type.enum");
exports.ClinetTypesArray = [
    { _id: clinet_type_enum_1.ClinetTypeEnum.company, name: "شركة" },
    { _id: clinet_type_enum_1.ClinetTypeEnum.personal, name: "فردى" }
];
exports.ClinetTypesObject = {
    [clinet_type_enum_1.ClinetTypeEnum.company]: "شركة",
    [clinet_type_enum_1.ClinetTypeEnum.personal]: "فردى"
};
Object.freeze(exports.ClinetTypesObject);
Object.freeze(exports.ClinetTypesArray);
