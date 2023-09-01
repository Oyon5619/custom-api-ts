import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import CorsConfig from "./config/CorsConfig";
import TokenInterceptor from "./middleware/Interceptor";
import UserRouter from "./router/UserRouter";

const app = express();

// 配置
app.all('*', CorsConfig);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(TokenInterceptor);


app.get('/test', async (req: Request, res: Response) => {
    res.send('/test OK!');
});
app.use('/user', UserRouter);

const PORT = 2085;
app.listen(PORT, async () => {
    console.log(`ts-App is listening at http://localhost:${PORT}/...`);
});