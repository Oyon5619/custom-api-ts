"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const CorsConfig_1 = __importDefault(require("./config/CorsConfig"));
const Interceptor_1 = __importDefault(require("./middleware/Interceptor"));
const UserRouter_1 = __importDefault(require("./router/UserRouter"));
const app = (0, express_1.default)();
// 配置
app.all('*', CorsConfig_1.default);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(Interceptor_1.default);
app.get('/test', async (req, res) => {
    res.send('/test OK!');
});
app.use('/user', UserRouter_1.default);
const PORT = 2085;
app.listen(PORT, async () => {
    console.log(`ts-App is listening at http://localhost:${PORT}/...`);
});
