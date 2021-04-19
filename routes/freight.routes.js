"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freightRouter = void 0;
const express_1 = require("express");
const freight_controller_1 = require("../controllers/freight.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new freight_controller_1.FreightController(), r = express_1.Router();
exports.freightRouter = r;
/** Get Freights #Admin : api/freight/getFreights/:skip/:take */
r.post('/getFreights/:skip/:take', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getFreights);
/** Get Freight From Server To Update #Admin : api/freight/getFreightToUpdate/:id */
r.get('/getFreightToUpdate/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getFreightToUpdate);
/** Get Freight From Server To Delete #Admin : api/freight/getFreightToDelete/:id */
r.get('/getFreightToDelete/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getFreightToDelete);
/** Create New Freight #Admin : api/freight/createNewFreight */
r.post('/createNewFreight', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.createNewFreight);
/** Update Freight #Admin : api/freight/updateFreight */
r.put('/updateFreight', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.updateFreight);
/** Delete Freight #Admin : api/freight/updateFreight:/id */
r.put('/deleteFreight/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.deleteFreight);
/** Change Freight State  #Admin : api/freight/changeFreightState/:freightCaseId */
r.post('/changeFreightState/:freightCaseId', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.changeFreightState);
/** Update Fields By Containers Numbers  #Admin : api/freight/updateByContainersNumbers */
r.put('/updateByContainersNumbers', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.updateByContainersNumbers);
/** Change Container Number  #Admin : api/freight/changeContainerNumber/:containerNumber */
r.post('/changeContainerNumber/:containerNumber', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.changeContainerNumber);
