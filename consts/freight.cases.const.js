"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freightCasesObject = exports.freightCasesNotContainerArrayIds = exports.freightCasesContainerArrayIds = exports.freightCasesContainerArray = exports.freightCasesArray = void 0;
const freight_casaes_enum_1 = require("../enums/freight.casaes.enum");
exports.freightCasesArray = [
    { _id: freight_casaes_enum_1.FreightCasesEnum.Delivery_at_The_Fiveth_Port, name: "تم التسليم في ميناء الخمس" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Delivery_at_Misrata_port, name: "تم التسليم في ميناء مصراتة" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Container_in_The_Port_of_Fiveth, name: "الحاوية في ميناء الخمس" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Container_in_Misrata_port, name: "الحاوية في ميناء مصراتة" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Loaded_in_container_to_Misrata_port, name: "تم التحميل في حاوية الى ميناء مصراتة" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Container_at_sea, name: "الحاوية في البحر" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Loaded_in_container_to_port_of_five, name: "تم التحميل في حاوية الى ميناء الخمس" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Loaded_in_a_container, name: "قيد التحميل في حاوية" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.At_the_auction_place, name: "في موقع المزاد" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.In_house_transport, name: "قيد النقل الداخلي" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.In_the_packing_store, name: "في مخزن التعبئة" }
];
exports.freightCasesContainerArray = [
    { _id: freight_casaes_enum_1.FreightCasesEnum.Container_in_The_Port_of_Fiveth, name: "الحاوية في ميناء الخمس" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Container_in_Misrata_port, name: "الحاوية في ميناء مصراتة" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Loaded_in_container_to_Misrata_port, name: "تم التحميل في حاوية الى ميناء مصراتة" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Container_at_sea, name: "الحاوية في البحر" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Loaded_in_container_to_port_of_five, name: "تم التحميل في حاوية الى ميناء الخمس" },
    { _id: freight_casaes_enum_1.FreightCasesEnum.Loaded_in_a_container, name: "قيد التحميل في حاوية" },
];
/**
 * معرفات حالات الشحن الذى سوف تعرض شحنتها فى شاشة الحاويات
 */
exports.freightCasesContainerArrayIds = [
    freight_casaes_enum_1.FreightCasesEnum.Container_in_The_Port_of_Fiveth,
    freight_casaes_enum_1.FreightCasesEnum.Container_in_Misrata_port,
    freight_casaes_enum_1.FreightCasesEnum.Loaded_in_container_to_Misrata_port,
    freight_casaes_enum_1.FreightCasesEnum.Container_at_sea,
    freight_casaes_enum_1.FreightCasesEnum.Loaded_in_container_to_port_of_five,
    freight_casaes_enum_1.FreightCasesEnum.Loaded_in_a_container,
];
/**
 * معرفات حالات الشحن الغير تابعة للحاويات
 */
exports.freightCasesNotContainerArrayIds = [
    freight_casaes_enum_1.FreightCasesEnum.At_the_auction_place,
    freight_casaes_enum_1.FreightCasesEnum.Delivery_at_The_Fiveth_Port,
    freight_casaes_enum_1.FreightCasesEnum.Delivery_at_Misrata_port,
    freight_casaes_enum_1.FreightCasesEnum.In_house_transport,
    freight_casaes_enum_1.FreightCasesEnum.In_the_packing_store,
];
exports.freightCasesObject = {
    [freight_casaes_enum_1.FreightCasesEnum.Delivery_at_The_Fiveth_Port]: "تم التسليم في ميناء الخمس",
    [freight_casaes_enum_1.FreightCasesEnum.Delivery_at_Misrata_port]: "تم التسليم في ميناء مصراتة",
    [freight_casaes_enum_1.FreightCasesEnum.Container_in_The_Port_of_Fiveth]: "الحاوية في ميناء الخمس",
    [freight_casaes_enum_1.FreightCasesEnum.Container_in_Misrata_port]: "الحاوية في ميناء مصراتة",
    [freight_casaes_enum_1.FreightCasesEnum.Loaded_in_container_to_Misrata_port]: "تم التحميل في حاوية الى ميناء مصراتة",
    [freight_casaes_enum_1.FreightCasesEnum.Container_at_sea]: "الحاوية في البحر",
    [freight_casaes_enum_1.FreightCasesEnum.Loaded_in_container_to_port_of_five]: "تم التحميل في حاوية الى ميناء الخمس",
    [freight_casaes_enum_1.FreightCasesEnum.Loaded_in_a_container]: "قيد التحميل في حاوية",
    [freight_casaes_enum_1.FreightCasesEnum.At_the_auction_place]: "في موقع المزاد",
    [freight_casaes_enum_1.FreightCasesEnum.In_house_transport]: "قيد النقل الداخلي",
    [freight_casaes_enum_1.FreightCasesEnum.In_the_packing_store]: "في مخزن التعبئة"
};
Object.freeze(exports.freightCasesObject);
Object.freeze(exports.freightCasesArray);
