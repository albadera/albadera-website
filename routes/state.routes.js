"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
const express_1 = require("express");
const state_controller_1 = require("../controllers/state.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new state_controller_1.StateController(), r = express_1.Router();
exports.stateRouter = r;
/** Get States #Admin : api/state/getStates/:skip/:take */
r.get('/getStates/:skip/:take', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getStates);
/** Get State From Server To Update #Admin : api/state/getStateToUpdate/:id */
r.get('/getStateToUpdate/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getStateToUpdate);
/** Create New State #Admin : api/state/createNewState */
r.post('/createNewState', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.createNewState);
/** Update State #Admin : api/state/updateState */
r.put('/updateState', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.updateState);
/** Delete State #Admin : api/state/updateState */
r.put('/deleteState', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.deleteState);
