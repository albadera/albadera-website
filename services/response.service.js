"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseService = void 0;
const response_type_enum_1 = require("./../enums/response.type.enum");
const http_code_1 = require("../consts/http.code");
const resource_ar_1 = require("../resources/resource.ar");
let ResponseService = /** @class */ (() => {
    class ResponseService {
        /**
       * End This Request With Failed
       */
        static end_failed(loggedUserInfo, message, exeption = null) {
            loggedUserInfo.response.json({
                responseType: response_type_enum_1.ResponseTypeEnum.error,
                message,
                exeption
            });
        }
        /**
         * End With unAuthorized
         */
        static end_unauthorized(loggedUserInfo, message) {
            loggedUserInfo.response.json({
                responseType: response_type_enum_1.ResponseTypeEnum.unauthorized,
                message
            });
        }
        /**
         * End With Invalid Access Token
         */
        static end_invalidAccessToken(loggedUserInfo, message) {
            loggedUserInfo.response.status(http_code_1.HttpCodes.forbidden).json({
                responseType: response_type_enum_1.ResponseTypeEnum.invalidAccessToken,
                message
            });
        }
        /**
         * End This Request With Successfully
         */
        static end_successfully(loggedUserInfo, message, result = null, noMoreOfResult = null) {
            loggedUserInfo.response.status(http_code_1.HttpCodes.ok).json({
                responseType: response_type_enum_1.ResponseTypeEnum.success,
                message,
                result,
                noMoreOfResult,
                isSuccess: true
            });
        }
        /**`
          * End This Request With Info
          */
        static end_info(loggedUserInfo, message, noMoreOfResult = null) {
            loggedUserInfo.response.status(http_code_1.HttpCodes.ok).json({
                responseType: response_type_enum_1.ResponseTypeEnum.info,
                message,
                noMoreOfResult
            });
        }
        /**
       * Catch Error Method For Any Promis Catch
       * @param exp
       */
        static catchError(loggedUserInfo, exp) {
            loggedUserInfo.response.json({
                responseType: response_type_enum_1.ResponseTypeEnum.info,
                message: this.r.someErrorHasBeen,
                exeption: exp.toString()
            });
        }
    }
    ResponseService.r = new resource_ar_1.ResourceAr();
    return ResponseService;
})(); //End Class
exports.ResponseService = ResponseService;
