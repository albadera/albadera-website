"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectItemModule = void 0;
const path_1 = require("path");
const response_service_1 = require("../services/response.service");
const basic_module_1 = require("./basic.module");
const mongo_db_service_1 = require("../services/mongo.db.service");
const collections_conse_1 = require("../consts/collections.conse");
const fs_1 = require("fs");
const port_types_enum_1 = require("../enums/port.types.enum");
const roles_enum_1 = require("../enums/roles.enum");
/**
 * هنا نضع العناصر الذى يختار منها المستخدم فى صفح الانشاء او الفلترة
 * وعند حدوث اى تحديث فى اى نوع عنصر نقوم بتحديثه هنا
 * ونحن نقوم باذلك لان هذة العناصر قليل ما يتم غيرها اذا عندما نحتاجها ناتى بها من هنا مباشرة افضل من اعادة جلبها من قاعدة البيانات
 * وبهذة الطريقة سوف نوفر كثير من الوقت
 * ولا ننسى انه يجب تحديث هذة العناصر فى كل مرة نتصل بها مع قاعدة البيانات
 */
class SelectItemModule extends basic_module_1.BasicModule {
    constructor() {
        super(...arguments);
        this.dataPath = path_1.join(__dirname, '..', 'files', '_config', 'data');
    }
    /*** Get Select Items*/
    getSelectItems(loggedUser, itemsName) {
        try {
            let items = {};
            itemsName.forEach(itemName => {
                items[itemName] = this.readItem(itemName);
            });
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.getItemsSuccessfully, items);
        }
        catch (error) {
            return response_service_1.ResponseService.end_failed(loggedUser, this.r.someErrorHasBeen, error);
        }
    }
    /** Update All Items When Conenct On Data Base */
    updateAllItems() {
        this.updateItem("clinets");
        this.updateItem("buySources");
        this.updateItem("states");
        this.updateItem("ports");
        this.updateItem("navigationalWayes");
    }
    /** Update On Item */
    updateItem(itemName) {
        let db = mongo_db_service_1.MongoDBService.db;
        switch (itemName) {
            case "clinets":
                //Fill Clinets
                db.collection(collections_conse_1.cols.users).aggregate([{ $match: { roleId: roles_enum_1.RolesEnum.Clinet, isDeleted: false } }, {
                        $project: {
                            name: { $concat: ["$phoneNumber", ' / ', "$name"] },
                            branchIndex: true
                        }
                    }]).toArray().then(rows => { fs_1.writeFile(path_1.join(this.dataPath, itemName + ".json"), JSON.stringify(rows), () => { }); });
                break;
            case "states":
                //Fill States
                db.collection(itemName).find({}, { projection: { name: true, freightPortId: true, cities: true } })
                    .toArray().then(rows => { fs_1.writeFile(path_1.join(this.dataPath, itemName + ".json"), JSON.stringify(rows), () => { }); });
                break;
            case "ports":
                //Fill Freight 
                db.collection(itemName).find({}, {
                    projection: {
                        name: true,
                        maritimeFreightPriceToBigCar: true,
                        maritimeFreightPriceToSmallCar: true,
                        maritimeFreightPriceToMediumCar: true,
                        portType: 1,
                        cities: true
                    }
                }).toArray().then(rows => {
                    fs_1.writeFile(path_1.join(this.dataPath, "arrivalPorts.json"), JSON.stringify(rows.filter(c => c.portType == port_types_enum_1.PortTypesEnum.arrival)), () => { });
                    fs_1.writeFile(path_1.join(this.dataPath, "freightPorts.json"), JSON.stringify(rows.filter(c => c.portType == port_types_enum_1.PortTypesEnum.freight)), () => { });
                });
                break;
            case "buySources":
            case "navigationalWayes":
                db.collection(itemName).find({}, { projection: { name: true } })
                    .toArray().then(rows => { fs_1.writeFile(path_1.join(this.dataPath, itemName + ".json"), JSON.stringify(rows), () => { }); });
                break;
        }
    }
    /** Update On Item */
    readItem(itemName) {
        return JSON.parse(fs_1.readFileSync(path_1.join(this.dataPath, itemName + ".json")).toString());
    }
} //End Class
exports.SelectItemModule = SelectItemModule;
