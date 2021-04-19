"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const mongodb_1 = require("mongodb");
const path_1 = __importDefault(require("path"));
const collections_conse_1 = require("../consts/collections.conse");
const clinet_type_enum_1 = require("../enums/clinet.type.enum");
const roles_enum_1 = require("../enums/roles.enum");
const file_services_1 = require("../services/file.services");
const mongo_db_service_1 = require("../services/mongo.db.service");
const response_service_1 = require("../services/response.service");
const string_hashing_service_1 = require("../services/string.hashing.service");
const user_service_1 = require("../services/user.service");
const auth_guard_module_1 = require("./auth.guard.module");
const basic_module_1 = require("./basic.module");
const formidable_1 = require("formidable");
const instance_service_1 = require("../services/instance.service");
class UserModule extends basic_module_1.BasicModule {
    /**
     * Update Account Information
     * @param userInfo
     */
    update(loggedUser, isUpdateFromAdmin = false) {
        let form = new formidable_1.IncomingForm();
        let userInfo;
        form.parse(loggedUser.request, (formParseError, fields, files) => {
            var _a;
            //Return Error I Icant Saved Picture
            if (formParseError)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCouldNotSaveNewPicture);
            //Parse Json To Object Now
            userInfo = JSON.parse(fields.values);
            this.updateNow(loggedUser, userInfo, (_a = files === null || files === void 0 ? void 0 : files.image) === null || _a === void 0 ? void 0 : _a.path);
        });
    }
    /**
     * Update User Now In DataBase
     * @param userInfo
     * @param newPictureTepmPath
     */
    updateNow(loggedUser, userInfo, newPictureTepmPath) {
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).findOne({ _id: new mongodb_1.ObjectId(userInfo._id) }).then((user) => __awaiter(this, void 0, void 0, function* () {
            //Check If User Is Not Found
            if (!user) {
                //Remove Temp Picture Id Exsist
                file_services_1.FileService.removeFiles(newPictureTepmPath);
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.accountIsNotFound);
            }
            //Check If Changed User Name Adn Dublicated
            if (user.userName != userInfo.userName && (yield this.userNameUsedCount(userInfo.userName)) > 0) {
                //Remove Temp Picture Id Exsist
                file_services_1.FileService.removeFiles(newPictureTepmPath);
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.userNameBeforeUsed);
            }
            let userUpdate = {};
            //Check If User Want Change Profile Picture
            if (newPictureTepmPath) {
                userUpdate.picturePath = `/files/users/${user.userName}.png`;
            }
            userUpdate._id = user._id;
            userUpdate.fullName = userInfo.fullName;
            userUpdate.phoneNumber = userInfo.phoneNumber;
            userUpdate.roleId = userInfo.roleId;
            userUpdate.clinetTypeId = userInfo.clinetTypeId;
            userUpdate.branchIndex = userInfo.branchIndex;
            user_service_1.UserService.fixUserFileds(userUpdate);
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).updateOne({ userName: userInfo.userName }, {
                $set: userUpdate
            }).then(res => {
                //Remove Old Picture If Add New And Also Is Not Googel Picture Path And Rename The New Picture
                if (newPictureTepmPath)
                    file_services_1.FileService.rename(newPictureTepmPath, path_1.default.join(__dirname, '..', userUpdate.picturePath));
                userUpdate.userName = user.userName;
                userUpdate.password = null;
                userUpdate.picturePath = user_service_1.UserService.getUserPicturePath(newPictureTepmPath ? userUpdate : user);
                //Uodate Clinets
                instance_service_1.instances.selectItemModule.updateItem("clinets");
                return response_service_1.ResponseService.end_successfully(loggedUser, this.r.updated, userUpdate);
            }).catch(err => {
                //Remove Temp Picture Id Exsist
                file_services_1.FileService.removeFiles(newPictureTepmPath);
                response_service_1.ResponseService.catchError(loggedUser, err);
            });
        })).catch(err => {
            //Remove Temp Picture Id Exsist
            file_services_1.FileService.removeFiles(newPictureTepmPath);
            response_service_1.ResponseService.catchError(loggedUser, err);
        });
    }
    /**
     * Create New User
     * @param userCreating
     */
    createUser(loggedUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let form = new formidable_1.IncomingForm();
            let userCreating;
            form.parse(loggedUser.request, (formParseError, fields, files) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                //Parse Json To Object Now
                userCreating = JSON.parse(fields.values);
                //Return Error I Icant Saved Picture
                if (formParseError)
                    return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCouldNotSaveNewPicture);
                //Check From User Name Is Dublicated
                if ((yield this.userNameUsedCount(userCreating.userName)) > 0) {
                    //Remove Temp Picture Id Exsist
                    file_services_1.FileService.removeFiles((_a = files === null || files === void 0 ? void 0 : files.image) === null || _a === void 0 ? void 0 : _a.path);
                    return response_service_1.ResponseService.end_failed(loggedUser, this.r.userNameBeforeUsed);
                }
                //Check If User Has A  Profile Picture
                if (files.image) {
                    userCreating.picturePath = `/files/users/${userCreating.userName}-${files.image.name.replace(/ /gm, '')}`;
                }
                userCreating.createdDate = new Date();
                userCreating.isDeleted = false;
                user_service_1.UserService.fixUserFileds(userCreating);
                //Insert New User Now
                mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).insertOne(userCreating).then(res => {
                    //Check If Inserted
                    if (!userCreating._id)
                        return response_service_1.ResponseService.end_failed(loggedUser, this.r.iCanNotRegisterNewAccount);
                    //Rename User Image Now
                    if (userCreating.picturePath)
                        file_services_1.FileService.rename(files.image.path, path_1.default.join(__dirname, '..', userCreating.picturePath));
                    //Uodate Clinets
                    instance_service_1.instances.selectItemModule.updateItem("clinets");
                    return response_service_1.ResponseService.end_successfully(loggedUser, this.r.userCreatedSuccessFully, userCreating);
                }).catch(error => {
                    var _a;
                    file_services_1.FileService.removeFiles((_a = files === null || files === void 0 ? void 0 : files.image) === null || _a === void 0 ? void 0 : _a.path);
                    response_service_1.ResponseService.catchError(loggedUser, error);
                });
            }));
        });
    }
    /**
     * Sign In By User Name
     * @param userSignIn
     */
    signInByUserName(loggedUser, userSignIn) {
        //Find User
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).findOne({
            userName: userSignIn.userName,
            isDeleted: false
        }).then(res => {
            //Check If Not Found And Check From Password
            if (!res || !string_hashing_service_1.StringHashingService.verify(userSignIn.password, res.password))
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.invalidUserNameOrPassword);
            //SignIn Now And Return SignIn Information
            auth_guard_module_1.AuthGuardModule.signIn(loggedUser, res);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**
     * Get Current User Information For Update
     */
    getCurrentUserInformationForUpdate(loggedUser) {
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).findOne({ _id: new mongodb_1.ObjectId(loggedUser._id) }, {
            projection: {
                fullName: true,
                userName: true,
                phoneNumber: true,
                picturePath: true,
                userTypeId: true,
            }
        })
            .then(user => {
            if (!user)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.userInformationIsNotDefiend);
            user.password = null;
            user.picturePath = user_service_1.UserService.getUserPicturePath(user);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, user);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**
     * Generate New User Name
     * @param userName User Name Affter Updating
     * @param orignalUserName Orignal User Name
     * @param usersCount Current User Count In DB
     * @param callCounter Caounter Call This Function
     */
    generateUniqueUserName(userName, orignalUserName, usersCount, callCounter) {
        return __awaiter(this, void 0, void 0, function* () {
            //Get All User Name Start With New User Name
            if ((yield this.userNameUsedCount(userName)) == 0)
                return userName;
            return this.generateUniqueUserName(orignalUserName + (usersCount + callCounter), orignalUserName, usersCount, callCounter + 1);
        });
    }
    /**
     * Get User Name Used Count
     * @param userName
     */
    userNameUsedCount(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).countDocuments({ userName: { $regex: userName, $options: 'si' } });
        });
    }
    /**
     * Get User By Filter To #Admin
     * @param skip
     * @param limit
     * @param body
     */
    getUsers(loggedUser, skip, limit, filterFields) {
        let filter = { $match: { isAdmin: { $ne: true } } };
        filter.$match.branchIndex = +filterFields.branchIndex;
        filter.$match.isDeleted = (filterFields.isDeleted && filterFields.isDeleted.toString() == "true") ? true : false;
        if (filterFields.userName)
            filter.$match.userName = { "$regex": filterFields.userName, "$options": "igm" };
        if (filterFields.createdDate) {
            filter.$match.createdDate = {
                $gte: new Date(new Date(filterFields.createdDate).setHours(0)),
                $lte: new Date(new Date(filterFields.createdDate).setHours(24))
            };
        }
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).aggregate([
            filter,
            { $sort: { createdDate: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $project: {
                    name: 1,
                    userName: 1,
                    fullName: 1,
                    phoneNumber: 1,
                    createdDate: 1,
                    picturePath: 1,
                    roleName: 1,
                    clinetTypeName: 1,
                    branchName: 1,
                }
            }
        ]).toArray().then(res => {
            //Check From Length
            if (res.length == 0) {
                //Check For First Time
                if (skip == 0)
                    return response_service_1.ResponseService.end_info(loggedUser, this.r.noRecordesFound);
                return response_service_1.ResponseService.end_info(loggedUser, this.r.noMoreRecordes);
            }
            res.forEach(u => u.picturePath = user_service_1.UserService.getUserPicturePath(u));
            response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, res);
        }).catch(c => response_service_1.ResponseService.catchError(loggedUser, c));
    }
    /**
       * Get User Information For Update #Admin
       */
    getUserInformationToUpdate(loggedUser, id) {
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).findOne({ _id: new mongodb_1.ObjectId(id) }, {
            projection: {
                fullName: true,
                userName: true,
                phoneNumber: true,
                picturePath: true,
                clinetTypeId: true,
                roleId: true,
                branchIndex: true
            }
        }).then(user => {
            if (!user)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.userInformationIsNotDefiend);
            user.picturePath = user_service_1.UserService.getUserPicturePath(user);
            user.password = null;
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, user);
        }).catch(error => response_service_1.ResponseService.catchError(loggedUser, error));
    }
    /**
     * Push Or Pull Id From Array Field In User Document
     * @param userId User You Want To Update
     * @param idTarget Id You Want Push Or Pull
     * @param arrayFieldName Array Field Target
     * @param updateState Updaet Case Key
     */
    pushOrPullUserArrayField(userId, idTarget, updateState) {
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).updateOne({ _id: userId }, {
            [updateState]: {
                transactionsIds: idTarget
            }
        });
    }
    /**
     * Create Clinet Manually
     * @param clinetName
     * @param clinetPhoneNumber
     */
    createUserManually(id, fullName, phoneNumber, branchIndex) {
        let newUser = {
            _id: id,
            fullName: fullName,
            name: fullName,
            phoneNumber: phoneNumber,
            roleId: roles_enum_1.RolesEnum.Clinet,
            branchIndex: branchIndex,
            clinetTypeId: clinet_type_enum_1.ClinetTypeEnum.personal,
            isDeleted: false
        };
        user_service_1.UserService.fixUserFileds(newUser);
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).insertOne(newUser).then(result => {
            instance_service_1.instances.selectItemModule.updateItem("clinets");
        });
    }
    /**
     * Delete User If Delete All Transactions Related With This User
     */
    deleteSwitch(loggedUser, id, isDelete) {
        //Get User
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).findOne({ _id: new mongodb_1.ObjectId(id), isDeleted: !isDelete }).then(userInfo => {
            if (!userInfo)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.userAccountIsNotFound);
            mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).updateOne({ _id: new mongodb_1.ObjectId(id) }, {
                $set: { isDeleted: isDelete }
            }).then(res => {
                var _a;
                if (!res.result.ok)
                    return response_service_1.ResponseService.end_failed(loggedUser, isDelete ? this.r.iCantNotDelete : this.r.iCantNotRecover);
                //Delete Trnasactions Now
                if (((_a = userInfo.transactionsIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    let allTransactionsIds = userInfo.transactionsIds.map(v => new mongodb_1.ObjectId(v));
                    instance_service_1.instances.transactionModule.deleteSwitchTrnasactions(allTransactionsIds, isDelete);
                }
                instance_service_1.instances.selectItemModule.updateItem("clinets");
                return response_service_1.ResponseService.end_successfully(loggedUser, isDelete ? this.r.deleted : this.r.recoverd);
            }).catch(c => response_service_1.ResponseService.catchError(loggedUser, c));
        }).catch(c => response_service_1.ResponseService.catchError(loggedUser, c));
    }
    /**
  * Get User To Delete
  */
    getToDelete(loggedUser, id) {
        //Get User
        mongo_db_service_1.MongoDBService.db.collection(collections_conse_1.cols.users).findOne({ _id: new mongodb_1.ObjectId(id), isDeleted: false }, {
            projection: {
                name: 1
            }
        }).then(userInfo => {
            if (!userInfo)
                return response_service_1.ResponseService.end_failed(loggedUser, this.r.userAccountIsNotFound);
            return response_service_1.ResponseService.end_successfully(loggedUser, this.r.successfully, userInfo);
        }).catch(c => response_service_1.ResponseService.catchError(loggedUser, c));
    }
} //End Class
exports.UserModule = UserModule;
