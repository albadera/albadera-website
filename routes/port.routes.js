"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portRouter = void 0;
const express_1 = require("express");
const port_controller_1 = require("../controllers/port.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new port_controller_1.PortController(), r = express_1.Router();
exports.portRouter = r;
/** Get Ports #Admin : api/port/getPorts/:skip/:take/:portType */
r.get('/getPorts/:skip/:take/:portType', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getPorts);
/** Get Port From Server To Update #Admin : api/port/getPortToUpdate/:id */
r.get('/getPortToUpdate/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getPortToUpdate);
/** Get Port From Server To Delete #Admin : api/port/getPortToDelete/:id */
r.get('/getPortToDelete/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getPortToDelete);
/** Create New Port #Admin : api/port/createNewPort */
r.post('/createNewPort', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.createNewPort);
/** Update Port #Admin : api/port/updatePort */
r.put('/updatePort', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.updatePort);
/** Delete Port #Admin : api/port/updatePort/:id */
r.put('/deletePort/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.deletePort);
