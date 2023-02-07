"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logScheme = new mongoose_1.Schema({
    log: Object
});
const logModel = (0, mongoose_1.model)('log', logScheme);
exports.default = logModel;
//# sourceMappingURL=log.model.js.map