"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const R_1 = __importDefault(require("../utils/R"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const CodeStatus_1 = __importDefault(require("../utils/CodeStatus"));
const TokenConfig_1 = require("../config/TokenConfig");
// api白名单(不用被拦截的url集合)
const whiteList = [
    /^\/user\/login/,
    /^\/user\/register/,
    /^\/public\/*/,
    /^\/test/
];
// 拦截器配置 (token验证机制)
const tokenInterceptor = function (req, res, next) {
    // console.log('tokenInterceptor', req.url);
    // 检查请求的url是否在白名单里(不用携带token的请求名单)
    for (let i in whiteList) {
        let regex = new RegExp(whiteList[i]);
        if (regex.test(req.url)) {
            next();
            return false;
        }
    }
    // 不在白名单时的处理(说明需要进行token验证)
    let xToken = req.headers['x-token'] || ''; // 拿到请求头里的token
    // console.log(xToken);
    // 去掉前缀
    if (xToken.indexOf('Bearer') >= 0) {
        xToken = xToken.replace('Bearer ', '');
    }
    // token验证
    jsonwebtoken_1.default.verify(xToken, TokenConfig_1.SECRET_KEY, (err, decode) => {
        // console.log(err);
        if (err) {
            res.send(new R_1.default(CodeStatus_1.default.TOKEN_INVALID.toString(), 'token无效或已过期, 请重新登录!', err));
        }
        else {
            // 验证通过就放行
            next();
        }
    });
};
exports.default = tokenInterceptor;
