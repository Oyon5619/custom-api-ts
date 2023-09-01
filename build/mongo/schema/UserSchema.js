"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: String,
    password: String,
    sex: { type: String, default: 'PRIVATE' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    priority: { type: String, default: 0 }
}, {
    versionKey: false
});
exports.default = userSchema;
