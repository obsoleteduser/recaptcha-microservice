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
exports.RecaptchaController = void 0;
const __1 = require("../");
const env_1 = require("../config/env");
const recaptcha_service_1 = require("../services/recaptcha.service");
class RecaptchaController {
    constructor() {
        this.recaptchaService = new recaptcha_service_1.RecaptchaService();
        this.verify = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = req.body['g-recaptcha-response'];
            const verificationURL = env_1.RECAPTCHA_VERIFICATION_URL;
            const secret = env_1.RECAPTCHA_SECRET_KEY;
            console.log(response);
            const recaptcha = {
                response,
                secret,
                verificationURL,
                remoteip: req.connection.remoteAddress
            };
            try {
                const result = yield this.recaptchaService.verifyRecaptcha(recaptcha);
                if (result.success) {
                    res.status(200).json({ message: 'Recaptcha verification successful', success: true });
                    __1.io.emit('status', { code: "Verified!" });
                }
                else {
                    res.status(400).json({ message: 'Recaptcha verification failed', success: false });
                    __1.io.emit('status', { code: "Failed!" });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Internal server error' });
                __1.io.emit('status', { code: "Server error!" });
            }
        });
    }
}
exports.RecaptchaController = RecaptchaController;
//# sourceMappingURL=recaptcha.controller.js.map