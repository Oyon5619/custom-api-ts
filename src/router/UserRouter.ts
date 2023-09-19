import express, { Router } from "express";
import UserController from "../controller/UserController";

const userRouter = express.Router();

userRouter.post('/login', UserController.login);
userRouter.post('/register', UserController.register);
userRouter.get('/one', UserController.queryOne);
userRouter.get('/all', UserController.queryAll);

export default userRouter;