import {Request, Response} from "express";
import { avatarUploadFn, dynamicPhotosUploadFn } from "../utils/FileUpload";
import R from "../utils/R";

class OssController {
    // user avatar upload
    public avatarUpload = async (req: Request, res: Response) => {
        try {
            const avatarUploadRes = await avatarUploadFn(req, res);
            res.send(R.success('头像上传成功!', avatarUploadRes));
        } catch (err) {
            res.send(R.error('头像上传失败!', err));
        }
    }

    // dynamic photos upload
    public dynamicPhotosUpload = async (req: Request, res: Response) => {
        try {
            const dynamicPhotosUploadRes = await dynamicPhotosUploadFn(req, res);
            res.send(R.success('上传图片成功!', dynamicPhotosUploadRes));
        } catch (err) {
            res.send(R.error('上传图片失败!', err));
        }
    }
}

export default new OssController();