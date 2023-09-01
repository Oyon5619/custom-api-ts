import R from '../utils/R';
import jwt from 'jsonwebtoken';
import CodeStatus from "../utils/CodeStatus";
import { SECRET_KEY } from '../config/TokenConfig';
import { NextFunction, Request, Response } from "express";

// api白名单(不用被拦截的url集合)
const whiteList = [
    /^\/user\/login/,
    /^\/user\/register/,
    /^\/public\/*/,
    /^\/test/
];

// 拦截器配置 (token验证机制)
const tokenInterceptor = function(req: Request, res: Response, next: NextFunction) {
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
    let xToken: string | any = req.headers['x-token'] || ''; // 拿到请求头里的token
    // console.log(xToken);

    // 去掉前缀
    if (xToken.indexOf('Bearer') >= 0) {
        xToken = xToken.replace('Bearer ', '');
    }

    // token验证
    jwt.verify(xToken, SECRET_KEY, (err: jwt.VerifyErrors | null, decode: any) => {
        // console.log(err);
        if (err) {
            res.send(new R(CodeStatus.TOKEN_INVALID.toString(), 'token无效或已过期, 请重新登录!', err));
        } else {
            // 验证通过就放行
            next();
        }
    });
}

export default tokenInterceptor;