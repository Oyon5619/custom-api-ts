"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../mongo/model/UserModel"));
const R_1 = __importDefault(require("../utils/R"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const TokenConfig_1 = require("../config/TokenConfig");
class UserController {
    constructor() {
        // login
        this.login = async (req, res) => {
            const { username, password } = req.body || {};
            try {
                const result = await UserModel_1.default.find({ username, password });
                if (result.length !== 0) {
                    const { _id, username, sex, email, phone } = result[0];
                    const userinfo = { _id, username, sex, email, phone };
                    let xToken = jsonwebtoken_1.default.sign({ userinfo }, TokenConfig_1.SECRET_KEY, { expiresIn: TokenConfig_1.VALID_TIME });
                    res.send(R_1.default.success('登录成功!', { 'x-Token': 'Bearer ' + xToken }));
                }
                else {
                    res.send(R_1.default.fail('登录失败, 用户名或密码错误!'));
                }
            }
            catch (err) {
                res.send(R_1.default.error('出错!', err));
            }
        };
        // register
        this.register = async (req, res) => {
            // console.log(req.body);
            const newUser = req.body || {};
            const { username } = newUser;
            try {
                // 先查询有无此用户
                const existResult = await UserModel_1.default.find({ username });
                // console.log(existResult);
                if (existResult.length !== 0) {
                    res.send(R_1.default.fail('注册失败, 该用户名已存在!'));
                }
                else {
                    // 继续注册流程
                    const createResult = await UserModel_1.default.create(newUser);
                    // console.log(createResult);
                    if (createResult) {
                        res.send(R_1.default.success('注册成功!', createResult._id));
                    }
                    else {
                        res.send(R_1.default.fail('注册失败!'));
                    }
                }
            }
            catch (err) {
                res.send(R_1.default.error('出错!', err));
            }
        };
        // query all user
        this.queryAll = async (req, res) => {
            // console.log('UserController.queryAll');
            try {
                const resultArr = await UserModel_1.default.find({ priority: 0 });
                // console.log(resultArr);
                res.send(R_1.default.success('获取所有用户数据成功!', resultArr));
            }
            catch (err) {
                res.send(R_1.default.error('出错!', err));
            }
        };
    }
}
exports.default = new UserController();
