"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost:27017/custom_db');
// 成功连接 mongodb
mongoose_1.default.connection.on('connected', () => {
    console.log('mongodb连接成功! url是: mongodb://localhost:27017/custom_db');
});
// 连接失败
mongoose_1.default.connection.on('error', (err) => {
    console.log('mongodb连接失败...', err);
});
// disconnect
mongoose_1.default.connection.on('disconnection', () => {
    console.log('已与mongodb断开连接...');
});
exports.default = mongoose_1.default;
