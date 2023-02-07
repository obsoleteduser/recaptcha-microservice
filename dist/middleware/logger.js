"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, 'access.log'), { flags: 'a' });
const logger = (req, res, next) => {
    const log = `${new Date().toISOString()} ${req.method} ${req.url} IP: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`;
    console.log(log);
    accessLogStream.write(`${log}\n`);
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map