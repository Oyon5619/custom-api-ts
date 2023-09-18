import express, { Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import CorsConfig from "./config/CorsConfig";
import TokenInterceptor from "./middleware/Interceptor";
import UserRouter from "./router/UserRouter";

const app = express();

// 配置
app.all('*', CorsConfig);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(TokenInterceptor);


app.get('/view-test', async (req: Request, res: Response) => {
    // res.send('/test OK!');
    res.sendFile(path.join(__dirname, './views/test.html'));
});
app.use('/user', UserRouter);

const PORT = process.env.APP_PORT;
app.listen(PORT, async () => {
    console.log(`ts-App is listening at http://localhost:${PORT}/...`);
});