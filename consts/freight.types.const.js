"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreitghtTypesObject = exports.FreitghtTypesArray = void 0;
const freitght_types_enum_1 = require("../enums/freitght.types.enum");
exports.FreitghtTypesArray = [{ _id: freitght_types_enum_1.FreitghtTypesEnum.Bidding, name: "مزايدة" },
    { _id: freitght_types_enum_1.FreitghtTypesEnum.SectorSale, name: "بيع قطاعى" },
    { _id: freitght_types_enum_1.FreitghtTypesEnum.FreightForDealer, name: "شحنة لتاجر" },
    { _id: freitght_types_enum_1.FreitghtTypesEnum.FreightForOffic, name: "شحنة لمكتب" }];
exports.FreitghtTypesObject = {
    [freitght_types_enum_1.FreitghtTypesEnum.Bidding]: "مزايدة",
    [freitght_types_enum_1.FreitghtTypesEnum.SectorSale]: "بيع قطاعى",
    [freitght_types_enum_1.FreitghtTypesEnum.FreightForDealer]: "شحنة لتاجر",
    [freitght_types_enum_1.FreitghtTypesEnum.FreightForOffic]: "شحنة لمكتب",
};
Object.freeze(exports.FreitghtTypesObject);
Object.freeze(exports.FreitghtTypesArray);
