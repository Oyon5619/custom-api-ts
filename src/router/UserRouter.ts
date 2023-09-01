import express, { Router } from "express";
import UserController from "../controller/UserController";

const userRouter = express.Router();

userRouter.post('/login', UserController.login);
userRouter.get('/all', UserController.queryAll);

export default userRouter;