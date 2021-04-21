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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const congif_const_1 = require("./consts/congif.const");
const user_router_1 = require("./routes/user.router");
const auth_guard_module_1 = require("./modules/auth.guard.module");
const path_1 = require("path");
const http = __importStar(require("http"));
const mongo_db_service_1 = require("./services/mongo.db.service");
const setting_routes_1 = require("./routes/setting.routes");
const state_routes_1 = require("./routes/state.routes");
const select_item_routes_1 = require("./routes/select.item.routes");
const freight_routes_1 = require("./routes/freight.routes");
const financial_transfers_routes_1 = require("./routes/financial.transfers.routes");
const report_routes_1 = require("./routes/report.routes");
const sector_sales_routes_1 = require("./routes/sector.sales.routes");
const port_routes_1 = require("./routes/port.routes");
const container_routes_1 = require("./routes/container.routes");
const deleted_routes_1 = require("./routes/deleted.routes");
const app_setting_router_1 = require("./routes/app.setting.router");
const contactUs_routes_1 = require("./routes/contactUs.routes");
const heroku_ssl_redirect_1 = __importDefault(require("heroku-ssl-redirect"));
//Add TMPDIR  For Upaldo Image In This, Then Rename File Uplaoded
process.env.TMPDIR = path_1.join(__dirname, "./files/temp/");
//reate Server From Expreess
// var privateKey = readFileSync(join(__dirname, 'files/_config/ssl_keys/server.key'), 'utf8');
// var certificate = readFileSync(join(__dirname,'files/_config/ssl_keys/server.cert'), 'utf8');
// var credentials = { key: privateKey, cert: certificate };
const app = express_1.default();
const httpServer = new http.Server(app);
//Init DataBase
mongo_db_service_1.MongoDBService.init();
//For Parsing application/json And Set Linit To Request Body
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json({ limit: '100mb' }));
app.use(express_1.default.static(path_1.join(__dirname, "public")));
app.use('files', express_1.default.static(path_1.join(__dirname, "files")));
// enable ssl redirect
app.use(heroku_ssl_redirect_1.default());
// app.set('trust proxy', true);
//Set Defualt For Any Request 
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //   res.setHeader('Access-Control-Allow-Credentials', true);
    //Login 
    auth_guard_module_1.AuthGuardModule.verifyAccessToken(req, (loggenUserInfo, accessToken) => {
        //Fill Data To Response For Use In Next Function
        res.locals[congif_const_1.config.loggedUerInformation] = loggenUserInfo;
        res.locals[congif_const_1.config.loggedUerAccessToken] = accessToken;
        //Now Continue Working
        next();
    });
});
// //Router Send File To Render In Browser
// app.get('/files/:folderName/:fileName/:any1?/:any2?/:any3?/:any4?/:any5?/:any6?', (req: Request, res: Response) => {
//   res.sendFile(join(__dirname, '.', req.url))
// });
app.get('/', (req, res) => {
    res.redirect('https://' + req.headers.host + req.url);
});
app.get('/', (req, res) => {
    res.sendFile(path_1.join(__dirname, "index.html"));
});
//Render User Routers
app.use('/api/user', user_router_1.userRouter);
//Render Setting Routers
app.use('/api/setting', setting_routes_1.settingRouter);
//Render State Routers
app.use('/api/state', state_routes_1.stateRouter);
//Render Select Items
app.use('/api/selectItem', select_item_routes_1.selectItemRouter);
//Render Freights Router
app.use('/api/freight', freight_routes_1.freightRouter);
//Render Financial Transfer Router
app.use('/api/financialTransfer', financial_transfers_routes_1.financialTransferRouter);
//Render Sector Sale Router
app.use('/api/sectorSale', sector_sales_routes_1.sectorSaleRouter);
//Render Port Router
app.use('/api/port', port_routes_1.portRouter);
//Render Report Router
app.use('/api/report', report_routes_1.reportRouter);
//Render Deleted Router
app.use('/api/deleted', deleted_routes_1.deletedRouter);
//Render App Setting Router
app.use('/api/appSetting', app_setting_router_1.appSettingRouter);
//Render Container Router
app.use('/api/container', container_routes_1.containerRouter);
//Render Contact Us Router
app.use('/api/contactUs', contactUs_routes_1.contactUsRouter);
app.get('*', (req, res) => {
    res.sendFile(path_1.join(__dirname, "index.html"));
});
httpServer.listen(congif_const_1.config.port, () => {
    console.log(`Server Working At ${congif_const_1.config.port} 
  http://localhost:${congif_const_1.config.port}
  mongoDataBaseUrl :${congif_const_1.config.mongoDataBaseUrl}
    `);
});
/* "start": "node dist/app.js", */ 
