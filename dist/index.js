"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const recaptcha_route_1 = __importDefault(require("./routes/recaptcha.route"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/recaptcha', recaptcha_route_1.default);
app.get('/', (req, res) => {
    res.send(`
    
    <form action="/recaptcha/verify" method="post">
  <div class="form-group">
    <!-- form inputs here -->
  </div>
  <div class="form-group">
    <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
  </div>
  <button type="submit">Submit</button>
</form>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

    
    `);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map