// 使用 multer 插件处理上传的图片以及回显
import { Request } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import multer from 'multer';
import path from 'path';
import fs from 'fs';

// 路径处理
const pathHandleFn = (dir: string | any): string => {
    const curDir = path.join(__dirname, '../', dir);
    // console.log(`Handle path: ${curDir}`);
    if (!fs.existsSync(curDir)) { // 判断目录是否存在 没有就创建
        fs.mkdirSync(curDir, {
            recursive: true
        });
    }
    return curDir;
}

const callbackError: Error = { name: 'IMAGE_TYPE_INVALID', message: '仅支持 jpg/png/gif 格式的图片...' };
const fileSizeMaximum: number | undefined = 10 * 1024 * 1024; // 10MB

const destinationFn = (storage_path: string | any) => {
    return function (req: Request, file: Express.Multer.File,
                     callback: (error: Error | null, destination: string) => void) {
        // console.log('file.mimetype = ' + file.mimetype);
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
            callback(null, pathHandleFn(storage_path));
        } else {
            callback(callbackError, '');
        }
    }
}
const filenameFn = (filename_prefix: string | any) => {
    return function (req: Request, file: Express.Multer.File,
                     callback: (error: Error | null, filename: string) => void) {
        const arr = file.originalname.split('.');
        let suffix = arr[arr.length - 1], name = arr[0];
        callback(null, filename_prefix + '_' + name + '.' + suffix);
    }
}

// storage设置
const userAvatarStorage = multer.diskStorage({
    destination: destinationFn('/static/images/user/avatar/'), // 设置存储路径
    filename: filenameFn('avatar_' + Date.now()) // 存储名
});
const dynamicPhotosStorage = multer.diskStorage({
    destination: destinationFn('/static/images/dynamic/'),
    filename: filenameFn('dy_photo_' + Date.now())
});
const defaultStorage = multer.diskStorage({
    destination: destinationFn(process.env.APP_IMAGE_DEFAULT_PATH),
    filename: filenameFn('image_' + Date.now())
});


export const multerConfigForUserAvatar = multer({
    storage: userAvatarStorage,
    limits: { fileSize: fileSizeMaximum }
});
export const multerConfigForDynamicPhotos = multer({
    storage: dynamicPhotosStorage,
    limits: { fileSize: fileSizeMaximum }
});
const multerConfig = multer({
    storage: defaultStorage,
    limits: { fileSize: fileSizeMaximum }
});
export default multerConfig;










