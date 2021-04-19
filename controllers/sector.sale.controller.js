"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorSaleController = void 0;
const instance_service_1 = require("../services/instance.service");
const user_service_1 = require("../services/user.service");
const 
/** Get Logged User Information */
gi = user_service_1.UserService.getLoggedUserInformation;
class SectorSaleController {
    /**
     *  Get  SectorSales
     */
    getSectorSales(req, res) {
        instance_service_1.instances.sectorSaleModule.getSectorSales(gi(req, res), +req.params.skip, +req.params.take, req.body);
    }
    ;
    /**
     *  Get SectorSale  To Delete
     */
    getSectorSaleToDelete(req, res) {
        instance_service_1.instances.transactionModule.getTrnasactionToDelete(gi(req, res), req.params.id);
    }
    ;
    /**Delete  SectorSale */
    deleteSectorSale(req, res) {
        instance_service_1.instances.transactionModule.deleteSwitchTrnasaction(gi(req, res), req.params.id, true);
    }
} //End Class
exports.SectorSaleController = SectorSaleController;
