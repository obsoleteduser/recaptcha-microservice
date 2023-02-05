"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recaptcha_controller_1 = require("../controllers/recaptcha.controller");
const router = (0, express_1.Router)();
const recaptchaController = new recaptcha_controller_1.RecaptchaController();
router.post('/verify', recaptchaController.verify);
exports.default = router;
//# sourceMappingURL=recaptcha.route.js.map