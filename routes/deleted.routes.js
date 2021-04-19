"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedRouter = void 0;
const express_1 = require("express");
const deleted_controller_1 = require("../controllers/deleted.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new deleted_controller_1.DeletedController(), r = express_1.Router();
exports.deletedRouter = r;
/**Get Sector Sales Deleted /api/deleted/getSectorSalesDeleted/:skip/:take */
r.post('/getSectorSalesDeleted/:skip/:take', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getSectorSalesDeleted);
/**Get Financial Transfers Deleted  /api/deleted/getFinancialTransfersDeleted/:skip/:take*/
r.post('/getFinancialTransfersDeleted/:skip/:take', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getFinancialTransfersDeleted);
/*** Get Freights Deleted /api/deleted/getFreightsDeleted/:skip/:take */
r.post('/getFreightsDeleted/:skip/:take', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getFreightsDeleted);
/*** Get Deleted Trnasaction To Recover /api/deleted/getDeletedTrnasactionToRecover/:id */
r.get('/getDeletedTrnasactionToRecover/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getDeletedTrnasactionToRecover);
/*** Get Deleted User To Recover /api/deleted/getDeletedUserToRecover/:id */
r.get('/getDeletedUserToRecover/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getDeletedUserToRecover);
/*** Recover Trnasaction /api/deleted/recoverTrnasaction/:id */
r.put('/recoverTrnasaction/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.recoverTrnasaction);
/*** Recover User /api/deleted/recoverUser/:id */
r.put('/recoverUser/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.recoverUser);
