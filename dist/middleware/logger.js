"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, 'access.log'), { flags: 'a' });
const logger = (req, res, next) => {
    let clientIp = req.headers['x-forwarded-for'];
    const geop = geoip_lite_1.default.lookup(String(clientIp));
    const log = `${new Date().toISOString()} ${req.method} ${req.url} GEO: ${geop} IP: ${clientIp}`;
    console.log(log);
    accessLogStream.write(`${log}\n`);
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map