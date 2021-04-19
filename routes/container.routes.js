"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containerRouter = void 0;
const container_controller_1 = require("./../controllers/container.controller");
const express_1 = require("express");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new container_controller_1.ContainerController(), r = express_1.Router();
exports.containerRouter = r;
/** Get Containers Report #Admin : api/container/getContainers/:skip/:take */
r.post('/getContainers/:skip/:take', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getContainers);
