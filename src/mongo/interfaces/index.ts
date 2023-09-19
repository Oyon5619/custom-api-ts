import { Types } from "mongoose";

// 用户
export interface IUser {
    _id: Types.ObjectId;
    username: string;
    password: string,
    avatar: string;
    sex: string;
    email: string;
    phone: string;
    priority: number;
}

// 动态
export interface IDynamic {
    _id: Types.ObjectId;
    promulgatorId: string;
    promulgatorName: string;
    promulgatorAvatar: string;
    city: string,
    content: string;
    photos: Array<string>;
    likes: Array<string>;
    createTime: string;
    updateTime: string;
}

// 评论
export interface IComment {
    _id: Types.ObjectId;
    senderId: string;
    senderName: string;
    senderAvatar: string;
    receiverId?: string;
    receiverName?: string;
    content: string;
    targetContent?: string;
    likes: Array<string>;
    dynamicId: string;
    createTime: string
}