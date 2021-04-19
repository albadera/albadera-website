"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    port: ((_a = process.env) === null || _a === void 0 ? void 0 : _a.PORT) || 41001,
    loggedUerInformation: "loggedUerInformation",
    loggedUerAccessToken: "loggedUerAccessToken",
    mongoDataBaseUrl: "mongodb+srv://Admin:Zz01013056689@cluster0.qejot.mongodb.net/AlAber",
    //Local=> "mongodb://127.0.0.1:27017/AlAber",
    //Live=> "mongodb+srv://Admin:<password>@cluster0.qejot.mongodb.net/AlAber?retryWrites=true&w=majority",
    apiFullPath: 'https://alaberapi.herokuapp.com',
};
/**
 * mongodump -d posty5 -o ~/Desktop/back
 * sudo mongorestore --uri mongodb+srv://ahmed:01013056689@posty5.vrggh.mongodb.net -d posty5   ~/Desktop/back/posty5
 *
 */
