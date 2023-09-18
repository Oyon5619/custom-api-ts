import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String, // 用户名
    password: String, // 密码
    sex: { type: String, default: 'PRIVATE' }, // 性别
    email: { type: String, default: '' }, // 邮箱
    phone: { type: String, default: '' }, // 电话
    priority: { type: String, default: 0 } // 权限
}, {
    versionKey: false
});

export default userSchema;

