"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreightCasesEnum = void 0;
var FreightCasesEnum;
(function (FreightCasesEnum) {
    /**تم التسليم في ميناء الخمس */
    FreightCasesEnum[FreightCasesEnum["Delivery_at_The_Fiveth_Port"] = 1] = "Delivery_at_The_Fiveth_Port";
    /**تم التسليم في ميناء مصراتة */
    FreightCasesEnum[FreightCasesEnum["Delivery_at_Misrata_port"] = 2] = "Delivery_at_Misrata_port";
    /**الحاوية في ميناء الخمس */
    FreightCasesEnum[FreightCasesEnum["Container_in_The_Port_of_Fiveth"] = 3] = "Container_in_The_Port_of_Fiveth";
    /**الحاوية في ميناء مصراتة */
    FreightCasesEnum[FreightCasesEnum["Container_in_Misrata_port"] = 4] = "Container_in_Misrata_port";
    /**تم التحميل في حاوية الى ميناء مصراتة */
    FreightCasesEnum[FreightCasesEnum["Loaded_in_container_to_Misrata_port"] = 5] = "Loaded_in_container_to_Misrata_port";
    /**الحاوية في البحر */
    FreightCasesEnum[FreightCasesEnum["Container_at_sea"] = 6] = "Container_at_sea";
    /**تم التحميل في حاوية الى ميناء الخمس */
    FreightCasesEnum[FreightCasesEnum["Loaded_in_container_to_port_of_five"] = 7] = "Loaded_in_container_to_port_of_five";
    /**قيد التحميل في حاوية */
    FreightCasesEnum[FreightCasesEnum["Loaded_in_a_container"] = 8] = "Loaded_in_a_container";
    /**في موقع المزاد */
    FreightCasesEnum[FreightCasesEnum["At_the_auction_place"] = 9] = "At_the_auction_place";
    /**قيد النقل الداخلي */
    FreightCasesEnum[FreightCasesEnum["In_house_transport"] = 10] = "In_house_transport";
    /**في مخزن التعبئة */
    FreightCasesEnum[FreightCasesEnum["In_the_packing_store"] = 11] = "In_the_packing_store";
})(FreightCasesEnum = exports.FreightCasesEnum || (exports.FreightCasesEnum = {}));
;
