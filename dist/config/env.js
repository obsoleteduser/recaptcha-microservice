"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_URL = exports.RECAPTCHA_VERIFICATION_URL = exports.RECAPTCHA_SECRET_KEY = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = +process.env.PORT || 5000;
exports.RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET;
exports.RECAPTCHA_VERIFICATION_URL = process.env.RECAPTCHA_VERIFICATION_URL;
exports.DB_URL = 'mongodb+srv://tahirdibirov:mongodbdefault@cluster0.popsa.mongodb.net/?retryWrites=true&w=majority';
//# sourceMappingURL=env.js.map