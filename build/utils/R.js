"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CodeStatus_1 = __importDefault(require("./CodeStatus"));
class R {
    constructor(code, msg, data) {
        this._code = code;
        this._msg = msg;
        this._data = data;
    }
    static success(msg, data = null) {
        return new R(CodeStatus_1.default.OK.toString(), msg, data);
    }
    static fail(msg, data = null) {
        return new R(CodeStatus_1.default.FAILED.toString(), msg, data);
    }
    static error(msg, data = null) {
        return new R(CodeStatus_1.default.CUSTOM_ERROR.toString(), msg, data);
    }
}
exports.default = R;
