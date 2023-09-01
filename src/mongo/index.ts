import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/custom_db');

// 成功连接 mongodb
mongoose.connection.on('connected', () => {
    console.log('mongodb连接成功! url是: mongodb://localhost:27017/custom_db');
});

// 连接失败
mongoose.connection.on('error', (err) => {
    console.log('mongodb连接失败...', err);
});

// disconnect
mongoose.connection.on('disconnection', () => {
    console.log('已与mongodb断开连接...');
});

export default mongoose;