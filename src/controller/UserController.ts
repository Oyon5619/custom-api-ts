import UserModel from "../mongo/model/UserModel";
import R from '../utils/R';
import jwt from 'jsonwebtoken';
import { SECRET_KEY, VALID_TIME } from '../config/TokenConfig';
import { Request, Response } from 'express';
import {IUser} from "../mongo/interfaces";

class UserController {
    // login
    public login = async (req: Request, res: Response) => {
        const { username, password }: { username: string, password: string } = req.body || {};

        try {
            const result: IUser[] = await UserModel.find({ username, password });

            if (result.length !== 0) {
                const { _id, username, sex, email, phone } = result[0];
                const userinfo = { _id, username, sex, email, phone };

                let xToken = jwt.sign({ userinfo }, SECRET_KEY, { expiresIn: VALID_TIME });
                res.send(R.success('登录成功!', { 'x-Token': 'Bearer ' + xToken }));
            } else {
                res.send(R.fail('登录失败, 用户名或密码错误!'));
            }
        } catch (err: any) {
            res.send(R.error('出错!', err));
        }
    }

    // register
    public register = async (req: Request, res: Response) => {
        // console.log(req.body);
        const newUser = req.body || {};
        const { username } = newUser;

        try {
            // 先查询有无此用户
            const existResult: IUser[] = await UserModel.find({ username });
            // console.log(existResult);

            if (existResult.length !== 0) {
                res.send(R.fail('注册失败, 该用户名已存在!'))
            } else {
                // 继续注册流程
                const createResult = await UserModel.create(newUser);
                // console.log('UserModel.create', createResult);
                if (createResult) {
                    res.send(R.success('注册成功!', createResult._id));
                } else {
                    res.send(R.fail('注册失败!'));
                }
            }
        } catch(err) {
            res.send(R.error('出错!', err));
        }
    }

    // query single user
    public queryOne = async (req: Request, res: Response) => {
        // console.log(req.query);
        const { id } = req.query || {};

        try {
            const result: IUser[] = await UserModel.find({ _id: id });
            result[0].password = '';
            // console.log('UserModel.find', result[0]);
            res.send(R.success('单个用户查询成功!', result));
        } catch(err) {
            res.send(R.error('内部异常!', err));
        }
    }

    // query all user
    public queryAll = async (req: Request, res: Response) => {
        // console.log('UserController.queryAll');
        try {
            const resultArr = await UserModel.find({ priority: 0 });
            // console.log(resultArr);
            res.send(R.success('获取所有用户数据成功!', resultArr));
        } catch(err) {
            res.send(R.error('出错!', err));
        }
    }
}

export default new UserController();