"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const index_1 = __importDefault(require("./route/index"));
const config_1 = require("./configuration/config");
const swagger_1 = __importDefault(require("./swagger"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/api/v1', index_1.default);
// Integrate Swagger documentation
(0, swagger_1.default)(app);
if (require.main === module) {
    config_1.db.once('open', () => {
        app.listen(5000, () => {
            console.log('Server has started!');
        });
    });
}
exports.default = app;
