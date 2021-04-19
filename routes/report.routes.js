"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportRouter = void 0;
const express_1 = require("express");
const report_controller_1 = require("../controllers/report.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new report_controller_1.ReportController(), r = express_1.Router();
exports.reportRouter = r;
/** Get Clinet Freights Report  #Clinet Or #Admin: api/report/getClinetFreightsReport/:skip/:take */
r.post('/getClinetFreightsReport/:skip/:take', auth_guard_service_1.AuthGuardService.checkIfAuthrized, cont.getClinetFreightsReport);
/** Get Freight Details Report #Clinet Or #Admin : api/report/getFreightDetailsToClinet/:id */
r.post('/getFreightDetailsToClinet/:id/:clinetId', auth_guard_service_1.AuthGuardService.checkIfAuthrized, cont.getFreightDetailsToClinet);
/** Get Freight Details Report #Admin : api/report/getFreightDetails/:id */
r.post('/getFreightDetails/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getFreightDetails);
/** Get Maritime Freight Price Total Due From Clinet #Clinet Or #Admin  : api/report/getMaritimeFreightPriceTotalDueForClinet/:clinetTargetId */
r.get('/getMaritimeFreightPriceTotalDueForClinet/:clinetTargetId', auth_guard_service_1.AuthGuardService.checkIfAuthrized, cont.getMaritimeFreightPriceTotalDueForClinet);
/** Get Branch Freights Report  #Branch Or #Admin: api/report/getBranchFreightsReport/:skip/:take */
r.post('/getBranchFreightsReport/:skip/:take', auth_guard_service_1.AuthGuardService.checkIfAuthrized, cont.getBranchFreightsReport);
/** Get Maritime Freight Price Total Due From Branch #Branch Or #Admin  : api/report/getMaritimeFreightPriceTotalDueFromBranch/:branchIndex */
r.get('/getMaritimeFreightPriceTotalDueForBranch/:branchIndex', auth_guard_service_1.AuthGuardService.checkIfAuthrized, cont.getMaritimeFreightPriceTotalDueForBranch);
