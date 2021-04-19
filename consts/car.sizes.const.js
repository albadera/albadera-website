"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carSizesObject = exports.carSizesArray = void 0;
const car_sizes_enum_1 = require("../enums/car.sizes.enum");
exports.carSizesArray = [{ _id: car_sizes_enum_1.CarSizesEnum.small, name: "صغيرة" },
    { _id: car_sizes_enum_1.CarSizesEnum.medium, name: "متوسطة" },
    { _id: car_sizes_enum_1.CarSizesEnum.big, name: "كبيرة" }];
exports.carSizesObject = {
    [car_sizes_enum_1.CarSizesEnum.small]: "صغيرة",
    [car_sizes_enum_1.CarSizesEnum.medium]: "متوسطة",
    [car_sizes_enum_1.CarSizesEnum.big]: "كبيرة"
};
Object.freeze(exports.carSizesObject);
Object.freeze(exports.carSizesArray);
