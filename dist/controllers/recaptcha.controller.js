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
const recaptcha_service_1 = require("../services/recaptcha.service");
class RecaptchaController {
    constructor() {
        this.recaptchaService = new recaptcha_service_1.RecaptchaService();
    }
    verify(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const secret = process.env.RECAPTCHA_SECRET;
            const { response } = req.body;
            const verificationURL = process.env.RECAPTCHA_VERIFICATION_URL;
            console.log(response);
            const recaptcha = {
                response,
                secret,
                verificationURL
            };
            try {
                const result = yield this.recaptchaService.verifyRecaptcha(recaptcha);
                if (result.success) {
                    res.status(200).send({ message: 'Recaptcha verification successful' });
                }
                else {
                    res.status(400).send({ message: 'Recaptcha verification failed' });
                }
            }
            catch (error) {
                res.status(500).send({ message: 'Internal server error' });
            }
        });
    }
}
exports.RecaptchaController = RecaptchaController;
//# sourceMappingURL=recaptcha.controller.js.map