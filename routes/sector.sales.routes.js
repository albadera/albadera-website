"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectorSaleRouter = void 0;
const express_1 = require("express");
const sector_sale_controller_1 = require("../controllers/sector.sale.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new sector_sale_controller_1.SectorSaleController(), r = express_1.Router();
exports.sectorSaleRouter = r;
/** Get Sector Sales #Admin : api/sectorSale/getSectorSales/:skip/:take */
r.post('/getSectorSales/:skip/:take', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getSectorSales);
/** Get SectorSalee  To Delete #Admin : api/sectorSale/getSectorSaleeToDelete/:id */
r.get('/getSectorSaleToDelete/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getSectorSaleToDelete);
/** Delete SectorSalee #Admin : api/sectorSale/deleteSectorSale/:id */
r.put('/deleteSectorSale/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.deleteSectorSale);
