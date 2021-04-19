"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuardModule = void 0;
const resource_ar_1 = require("./../resources/resource.ar");
const user_service_1 = require("./../services/user.service");
const jwt = __importStar(require("jsonwebtoken"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const response_service_1 = require("../services/response.service");
const date_time_service_1 = require("../services/date.time.service");
let AuthGuardModule = /** @class */ (() => {
    class AuthGuardModule {
        /**
         * Generate New Access Token
         * @param userInfo Target User Infro
         */
        static generateAccessToken(userInfo, isLoginByGoogel = false) {
            return new Promise((resolve, reject) => {
                jwt.sign(this._getUserAccessTokeData(userInfo, isLoginByGoogel), this.privateKey, {
                    algorithm: "RS256",
                    expiresIn: '40 days',
                }, (error, accessToken) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(accessToken);
                    }
                });
            });
        }
        /**
         * Refrash Access Token Data And Expire Date
         * @param userInfo userTargett
         * @param loggedUserInfo Current User Information
         * @param callBack
         */
        static refrashAccessToken(userInfo, loggedUserInfo, callBack) {
            jwt.sign(this._getUserAccessTokeData(userInfo), this.privateKey, {
                algorithm: "RS256",
                //Set Dayes 
                expiresIn: date_time_service_1.DateTimeService.calculateNumberDays(new Date(loggedUserInfo.exp * 1000), 1) + " days"
            }, callBack);
        }
        /**
         * Verify And Decoded Access Token
         * @param req Request
         * @param callBack Call Back Function For Passing Access Token Decoded Or Null
         */
        static verifyAccessToken(request, callBack) {
            try {
                let authorization = request.headers['authorization'];
                if (!authorization) {
                    callBack(null, null);
                }
                else {
                    let accessToken = authorization.split(' ')[1];
                    //verify Now
                    jwt.verify(accessToken, this.publicKey, {
                        algorithms: ["RS256"]
                    }, (error, accessTokenData) => {
                        if (error || !accessTokenData)
                            callBack(null, accessToken);
                        else if (user_service_1.UserService.logoutsSessions[accessTokenData._id] &&
                            user_service_1.UserService.logoutsSessions[accessTokenData._id] > new Date(accessTokenData.iat * 1000))
                            callBack(null, null);
                        else
                            callBack(accessTokenData, accessToken);
                    });
                }
            }
            catch (error) {
                callBack(null, null);
            }
        }
        /**
         * Chrck If User Logged .. And This Called Only With Apis Must Be Authrized
        static  checkIfAuthrized(rreq: Request, rres: Response, next: NextFunction) {
            if (!rres.locals) {
                //Send Status Unauthorized
                ResponseService.end_invalidAccessToken(rres);
            }
            //Check If Passed Access Token
            else if (!rres.locals[config.loggedUerAccessToken]) {
                //Send Status Invalid accessToken
                ResponseService.end_invalidAccessToken(rres);
            }
            else {
                next();
                // //Check If User Is Activve
                // (<MongoClient>res.locals[Defaults.db]).db().collection(DataBaseCollections.users)
                //     .findOne({ _id: new ObjectId(res.locals[Defaults.responseLocalLoggedUser].userId), isActive: true })
                //     .then((userInfo: any) => {
                //         if (userInfo == null)
                //             res.json(ResponseModel.userNotActive)
                //         else
                //             //Success Authrized
                //             next();
                //     });
            }
        }
         */
        /**
         * Sign In
         * @param user
         * @param isRememberMe
         * @param isLoginByGoogel
         */
        static signIn(loggedUserId, user, isLoginByGoogel = false) {
            //SignIn Now And Return SignIn Information
            this.generateAccessToken(user, isLoginByGoogel)
                .then(accessToken => {
                response_service_1.ResponseService.end_successfully(loggedUserId, this.r.signInSuccessfully, accessToken);
            }).catch(error => {
                return response_service_1.ResponseService.end_failed(loggedUserId, this.r.iCouldNotSignYouIn);
            });
        }
        /**
         * Get Access Token Date For Generate New AccessToken
         * @param userTarget
         * @param isRememberMe
         */
        static _getUserAccessTokeData(userTarget, isLoginedByGoogel = false) {
            let info = {
                _id: userTarget._id,
                userName: userTarget.userName,
                picturePath: user_service_1.UserService.getUserPicturePath(userTarget),
                isLoginedByGoogel: isLoginedByGoogel,
                fullName: userTarget.fullName || userTarget.userName,
                roleId: userTarget.roleId,
                branchIndex: userTarget.branchIndex
            };
            return info;
        }
    }
    AuthGuardModule.privateKey = fs.readFileSync(path.join(__dirname, "../files/_config/jwt.keys/private.key"), "utf8");
    AuthGuardModule.publicKey = fs.readFileSync(path.join(__dirname, "../files/_config/jwt.keys/public.key"), "utf8");
    AuthGuardModule.r = new resource_ar_1.ResourceAr();
    return AuthGuardModule;
})(); //End Class  
exports.AuthGuardModule = AuthGuardModule;
