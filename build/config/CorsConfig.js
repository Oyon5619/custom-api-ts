"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const R_1 = __importDefault(require("../utils/R"));
const CorsConfig = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    if (req.method.toLowerCase() == 'options')
        res.send(R_1.default.success('OK!')); // 让 options 尝试请求快速结束
    else
        next();
};
exports.default = CorsConfig;
