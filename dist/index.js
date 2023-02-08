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
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const recaptcha_route_1 = __importDefault(require("./routes/recaptcha.route"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./config/env");
const logger_1 = __importDefault(require("./middleware/logger"));
const dbConnection_1 = require("./config/dbConnection");
const logs_route_1 = __importDefault(require("./routes/logs.route"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use('/recaptcha', recaptcha_route_1.default);
app.use('/api', logs_route_1.default);
app.use(logger_1.default);
const server = http_1.default.createServer(app);
exports.io = new socket_io_1.Server(server);
app.get('/', (req, res) => {
    res.render('main', { title: 'reCAPTCHA Microservice' });
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, dbConnection_1.connectToDb)();
    server.listen(env_1.PORT, () => {
        console.log(`Server is running on port ${env_1.PORT}`);
    });
});
start();
//# sourceMappingURL=index.js.map