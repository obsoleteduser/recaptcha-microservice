"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logs_controller_1 = __importDefault(require("../controllers/logs.controller"));
const logRouter = (0, express_1.Router)();
logRouter.get('/logs', logs_controller_1.default.getLogs);
exports.default = logRouter;
//# sourceMappingURL=logs.route.js.map