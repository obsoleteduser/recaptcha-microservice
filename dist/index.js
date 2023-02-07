"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const recaptcha_route_1 = __importDefault(require("./routes/recaptcha.route"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./config/env");
const logger_1 = __importDefault(require("./middleware/logger"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/recaptcha', recaptcha_route_1.default);
app.use(logger_1.default);
app.get('/', (req, res) => {
    res.render('main', { title: 'reCAPTCHA Microservice' });
});
app.listen(env_1.PORT, () => {
    console.log(`Server is running on port ${env_1.PORT}`);
});
//# sourceMappingURL=index.js.map