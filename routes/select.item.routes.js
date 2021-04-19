"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectItemRouter = void 0;
const express_1 = require("express");
const select_item_controller_1 = require("../controllers/select.item.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new select_item_controller_1.SelectItemController(), r = express_1.Router();
exports.selectItemRouter = r;
/** Get Items #Admin : api/item/getItems */
r.post('/getSelectItems', auth_guard_service_1.AuthGuardService.checkIfAuthrized, cont.getSelectItems);
