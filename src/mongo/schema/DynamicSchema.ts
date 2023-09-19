import mongoose from 'mongoose';
import { IDynamic } from "../interfaces";

const dynamicSchema = new mongoose.Schema<IDynamic>({
    promulgatorId: String, // 发布人Id
    promulgatorName: String, // 发布人姓名,
    promulgatorAvatar: { type: String, default: '' }, // 发布人头像
    city: String, // 所属城市
    content: String, // 贴文内容
    photos: Array, // 图片集合
    likes: Array, // 点赞者集合
    createTime: String, // 创建时间
    updateTime: String, // 更新时间
}, {
    versionKey: false
});
export default dynamicSchema;