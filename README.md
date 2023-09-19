

# CUSTOM-API-TS

一份简易的node服务端api模板（ts语言编写）,能够实现简单的登录和注册(JWT方式)

技术栈: **nodejs** + **typescript** + **jwt** + **express** + **mongodb**

环境: node.js v16.17.1



## 项目启动

```shell
npm i cnpm --global
cnpm i
npm start
```



## 目录结构

```
src
│  app.ts                            
│                                    
├─config                             
│      CorsConfig.ts                 
│      MulterConfig.ts               
│      TokenConfig.ts                
│
├─controller
│      OssController.ts
│      UserController.ts
│
├─dto
├─middleware
│      Interceptor.ts
│
├─mongo
│  │  index.ts
│  │
│  ├─model
│  │      UserModel.ts
│  │
│  └─schema
│          CommentSchema.ts
│          DynamicSchema.ts
│          UserSchema.ts
│
├─router
│      OssRouter.ts
│      UserRouter.ts
│
├─static
│  └─images
│      ├─dynamic
│      └─user
│          └─avatar
│                  user_default_avatar.JPG
│
├─utils
│      CodeStatus.ts
│      FileUpload.ts
│      R.ts
│
└─views
        test.html

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



## 转js

如果自己的浏览器不支持ts，则可以新建一个文件夹(命名随便)，将`build`文件夹里的文件拿出来放在这个文件夹里，然后安装好运行所需要的包，最后启动即可
