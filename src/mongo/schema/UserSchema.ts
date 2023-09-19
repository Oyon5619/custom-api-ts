import mongoose, { Types } from 'mongoose';
import { IUser } from "../interfaces";

const userSchema = new mongoose.Schema<IUser>({
    username: String, // 用户名
    password: String, // 密码
    avatar: { type: String, default: 'http://localhost:2099/static/images/user/avatar/user_default_avatar.jpg' },
    sex: { type: String, default: 'PRIVATE' }, // 性别
    email: { type: String, default: '' }, // 邮箱
    phone: { type: String, default: '' }, // 电话
    priority: { type: Number, default: 0 } // 权限
}, {
    versionKey: false
});

export default userSchema;

