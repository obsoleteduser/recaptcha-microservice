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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const dotenv_1 = require("dotenv");
const mongoose_1 = require("mongoose");
const env_1 = require("./env");
(0, dotenv_1.config)();
(0, mongoose_1.set)('strictQuery', false);
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connect)(env_1.DB_URL);
        console.log("Connected to database!");
    }
    catch (err) {
        console.log("Connection failed!");
    }
});
exports.connectToDb = connectToDb;
//# sourceMappingURL=dbConnection.js.map