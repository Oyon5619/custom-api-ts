import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    sex: { type: String, default: 'PRIVATE' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    priority: { type: String, default: 0 }
}, {
    versionKey: false
});

export default userSchema;

