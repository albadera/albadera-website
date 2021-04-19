"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceService = void 0;
const resource_ar_1 = require("../resources/resource.ar");
let ResourceService = /** @class */ (() => {
    class ResourceService {
    }
    ResourceService.r = new resource_ar_1.ResourceAr();
    return ResourceService;
})();
exports.ResourceService = ResourceService;
