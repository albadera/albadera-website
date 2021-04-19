"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_guard_service_1 = require("../services/auth.guard.service");
const cont = new user_controller_1.UserController(), r = express_1.Router();
exports.userRouter = r;
/** Create User By #Admin : api/user/createUser */
r.post('/createUser', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.createUser);
/** User Sign-in : api/user/signInByUserName */
r.post('/signInByUserName', cont.signInByUserName);
/** User Update Account Information : api/user/update */
r.put('/update', auth_guard_service_1.AuthGuardService.checkIfAuthrized, cont.update);
/** Get Current Account Infromation For Update : api/user/getCurrentUserInformationForUpdate */
r.get('/getCurrentUserInformationForUpdate', auth_guard_service_1.AuthGuardService.checkIfAuthrized, cont.getCurrentUserInformationForUpdate);
/** Get Account Infromation For Update #Admin : api/user/getUserInformationToUpdate/:id */
r.get('/getUserInformationToUpdate/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getUserInformationToUpdate);
/** Get Users To #Admin : api/user/getUsers/:skip/:limit   */
r.post('/getUsers/:skip/:limit', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getUsers);
/** Update User Data To #Admin : api/user/updateUserData   */
r.put('/updateUserData', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.updateUserByAdmin);
/** Get User To Delete : api/user/getToDelete/:id   */
r.get('/getToDelete/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.getToDelete);
/** Get User To Delete : api/user/delete/:id   */
r.put('/delete/:id', auth_guard_service_1.AuthGuardService.checkIfAuthrizedAdmin, cont.delete);
