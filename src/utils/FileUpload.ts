import { multerConfigForUserAvatar, multerConfigForDynamicPhotos } from "../config/MulterConfig";
import { Request, Response } from "express";

let serverUrl: string | any = process.env.APP_SERVER_URL;
// let max_count: number | any = process.env.APP_IMAGE_DEFAULT_UPLOAD_LIMIT_NUM;
let max_count: number = 9;
let dynamicPhotoPath: string = '/static/images/dynamic/';
let avatarPath: string = '/static/images/user/avatar/';

// 用户头像上传的Promise处理
const avatarUploadFn = (req: Request, res: Response) => {
    return new Promise((resolve, reject) => {
        multerConfigForUserAvatar.single('avatar')(req, res, (err) => {
            if (err) reject(err);
            else resolve(serverUrl + avatarPath + req.file?.filename);
        });
    });
}

// 动态照片上传的Promise处理
const dynamicPhotosUploadFn = (req: Request, res: Response) => {
    return new Promise((resolve, reject) => {
        multerConfigForDynamicPhotos.array('photos', max_count)(req, res, (err) => {
            if (err) reject(err);
            else {
                let photos = [];
                for (let i in req.files) {
                    // @ts-ignore
                    photos.push(serverUrl + dynamicPhotoPath + req.files[i].filename);
                }
                resolve(photos);
            }
        });
    });
}

export { avatarUploadFn, dynamicPhotosUploadFn }