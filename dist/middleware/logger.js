"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const log_model_1 = __importDefault(require("../models/log.model"));
const logCleaner_util_1 = require("../utils/logCleaner.util");
(0, logCleaner_util_1.clear)();
const logger = (req, res, next) => {
    const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, 'access.log'), { flags: 'a' });
    let clientIp = req.headers['x-forwarded-for'];
    const geop = geoip_lite_1.default.lookup(`${clientIp}`.split(',')[0]);
    const log = `${new Date().toISOString()} ${req.method} ${req.url} Country: ${geop === null || geop === void 0 ? void 0 : geop.country} City: ${geop === null || geop === void 0 ? void 0 : geop.city} IP: ${clientIp}`;
    console.log(log);
    log_model_1.default.create({
        log
    });
    accessLogStream.write(`${log}\n`);
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map