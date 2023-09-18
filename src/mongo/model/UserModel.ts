import mongoose from '../index';
import UserSchema from '../schema/UserSchema';

const userModel = mongoose.model('UserModel', UserSchema, 't_user');
export default userModel;