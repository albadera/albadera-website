"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financialTransferRouter = void 0;
const express_1 = require("express");
const financial_transfer_controller_1 = require("../controllers/financial.transfer.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new financial_transfer_controller_1.FinancialTransferController(), r = express_1.Router();
exports.financialTransferRouter = r;
/** Get Financial Transfers #Admin : api/financialTransfer/getFinancialTransfers/:skip/:take */
r.post('/getFinancialTransfers/:skip/:take', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getFinancialTransfers);
/** Get FinancialTransfere  To Update #Admin : api/financialTransfer/getFinancialTransfereToUpdate/:id */
r.get('/getFinancialTransferToUpdate/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getFinancialTransferToUpdate);
/** Get FinancialTransfere  To Delete #Admin : api/financialTransfer/getFinancialTransfereToDelete/:id */
r.get('/getFinancialTransferToDelete/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getFinancialTransferToDelete);
/** Get Financial Transfer To Payment #Admin : api/financialTransfer/getFinancialTransferToPayment/:id */
r.get('/getFinancialTransferToPayment/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getFinancialTransferToPayment);
/** Create New FinancialTransfere #Admin : api/financialTransfer/createNewFinancialTransfere */
r.post('/createNewFinancialTransfer', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.createNewFinancialTransfer);
/** Update FinancialTransfere #Admin : api/financialTransfer/updateFinancialTransfere */
r.put('/updateFinancialTransfer', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.updateFinancialTransfer);
/** Delete FinancialTransfere #Admin : api/financialTransfer/deleteFinancialTransfer/:id */
r.put('/deleteFinancialTransfer/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.deleteFinancialTransfer);
/** Payment Amount #Admin : api/financialTransfer/paymentAmount */
r.post('/paymentAmount', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.paymentAmount);
/** Get Transfer Details #Admin : api/financialTransfer/getDetails/:id */
r.get('/getDetails/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getDetails);
