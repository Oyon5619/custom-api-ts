import mongoose, { Types } from 'mongoose';
import { IComment } from "../interfaces";

const commentSchema = new mongoose.Schema<IComment>({
    senderId: String, // 评论人id
    senderName: String, // 评论人名字
    senderAvatar: String, // 评论人头像
    receiverId: String, // 被评论人id
    receiverName: String, // 被评论人名字
    content: String, // 评论内容
    targetContent: String, // 被评论的内容
    likes: Array, // 点赞者集合
    dynamicId: String, // 所在动态的id
    createTime: String // 创建时间(发布时间)
}, {
    versionKey: false
});

export default commentSchema;