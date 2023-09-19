import express, { Router } from "express";
import ossController from "../controller/OssController";

const ossRouter = express.Router();

ossRouter.post('/avatar-upload', ossController.avatarUpload); // 头像上传
ossRouter.post('/photos-upload', ossController.dynamicPhotosUpload); // 多图片上传

export default ossRouter;