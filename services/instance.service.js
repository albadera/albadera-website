"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instances = void 0;
const app_setting_module_1 = require("../modules/app.setting.module");
const branch_module_1 = require("../modules/branch.module");
const contact_us_module_1 = require("../modules/contact.us.module");
const container_module_1 = require("../modules/container.module");
const delete_module_1 = require("../modules/delete.module");
const financial_transfer_module_1 = require("../modules/financial.transfer.module");
const freight_module_1 = require("../modules/freight.module");
const port_module_1 = require("../modules/port.module");
const report_module_1 = require("../modules/report.module");
const sector_sale_module_1 = require("../modules/sector.sale.module");
const select_item_module_1 = require("../modules/select.item.module");
const setting_module_1 = require("../modules/setting.module");
const state_module_1 = require("../modules/state.module");
const transaction_module_1 = require("../modules/transaction.module");
const user_module_1 = require("../modules/user.module");
const instances = {
    userModule: new user_module_1.UserModule(),
    transactionModule: new transaction_module_1.TransactionModule(),
    containerModule: new container_module_1.ContainerModule(),
    deletedModule: new delete_module_1.DeletedModule(),
    financialTransferModule: new financial_transfer_module_1.FinancialTransferModule(),
    freightModule: new freight_module_1.FreightModule(),
    portModule: new port_module_1.PortModule(),
    sectorSaleModule: new sector_sale_module_1.SectorSaleModule(),
    selectItemModule: new select_item_module_1.SelectItemModule(),
    settingModule: new setting_module_1.SettingModule(),
    stateModule: new state_module_1.StateModule(),
    reportModule: new report_module_1.ReportModule(),
    branchModule: new branch_module_1.BranchModule(),
    appSettingModule: new app_setting_module_1.AppSettngModule(),
    contactUsModule: new contact_us_module_1.ContactUsModule()
};
exports.instances = instances;
