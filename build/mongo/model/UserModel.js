"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const UserSchema_1 = __importDefault(require("../schema/UserSchema"));
const userModel = index_1.default.model('UserModel', UserSchema_1.default, 't_user');
exports.default = userModel;
