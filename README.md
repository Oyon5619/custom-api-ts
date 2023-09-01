

# CUSTOM-API-TS

一份简易的node服务端api模板（ts语言编写）,能够实现简单的登录和注册(JWT方式)

技术栈: **nodejs** + **typescript** + **jwt** + **express** + **mongodb**



## 项目启动

```shell
npm i cnpm rimraf --global

cnpm i body-parser
cnpm i express
cnpm i cors
cnpm i jsonwebtoken
cnpm i mongoose
cnpm i --save @types/body-parser
cnpm i --save @types/express
cnpm i --save @types/cors
cnpm i --save @types/jsonwebtoken
cnpm i --save @types/mongoose

npm start
```



## 目录结构

```
├─exec.txt 里面记录了该项目要安装的包的命令
├─package-lock.json
├─package.json
├─README.md
├─tsconfig.json
├─src
|  ├─app.ts 入口文件
|  ├─utils 工具文件夹
|  |   ├─CodeStatus.ts 状态码
|  |   └R.ts 数据返回类
|  ├─router 路由
|  |   └UserRouter.ts
|  ├─mongo mongodb配置
|  |   ├─index.ts
|  |   ├─schema
|  |   |   └UserSchema.ts
|  |   ├─model
|  |   |   └UserModel.ts
|  ├─middleware 中间件
|  |     └Interceptor.ts 拦截器
|  ├─controller 控制器
|  |     └UserController.ts 里面实现了简单的登录和注册方法
|  ├─config 存放配置的文件夹
|  |   ├─CorsConfig.ts
|  |   └TokenConfig.ts
├─build
```



## 接口一览

- `/user/all`：获取所有用户数据
- `/user/login`：登录
- `/user/register`：注册

```http
###
GET http://localhost:2085/user/all
"x-Token": "Bearer xxxx..."
###
POST http://localhost:2085/user/login
content-type: application/json
{
    "username": "xiaoming",
    "password": "123456"
}
###
POST http://localhost:2085/user/register
content-type: application/json
{
    "username": "xiaoming",
    "password": "123456"
}
```



## 注意

如果自己的浏览器不支持ts，则可以新建一个文件夹(明明随便)，将`build`文件夹里的文件拿出来放在这个文件夹里，然后安装好运行所需要的包，最后启动即可