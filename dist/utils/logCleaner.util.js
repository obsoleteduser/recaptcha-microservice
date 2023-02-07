"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = void 0;
const fs_1 = require("fs");
const log_model_1 = __importDefault(require("../models/log.model"));
const clearTime = 1000 * 36000;
const clear = () => {
    (0, fs_1.access)('src/middleware/access.log', (err) => {
        if (err) {
            console.log("File doesn't exit");
            return;
        }
        const clear = () => {
            setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
                (0, fs_1.unlink)('src/middleware/access.log', (err) => {
                    console.log(err);
                    return;
                });
                console.log("Logs has been cleared!");
                yield log_model_1.default.deleteMany({});
            }), clearTime);
        };
        clear();
    });
};
exports.clear = clear;
//# sourceMappingURL=logCleaner.util.js.map