"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My Brand API',
            description: "Blogs API NODE/EXPRESS ANG MONGODB",
            contact: {
                name: "Irakiza Sabin",
                email: "irakizasabin12@gmail.com",
            },
            version: '1.0.0',
        },
        components: {
            securitySchemes: {
                Authorization: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                    value: "Bearer <JWT token here>"
                }
            }
        },
        servers: [
            {
                url: "http://localhost:5000/",
                description: "Server"
            },
        ]
    },
    apis: ['./src/**/*.ts'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
function setupSwagger(app) {
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
}
exports.default = setupSwagger;
