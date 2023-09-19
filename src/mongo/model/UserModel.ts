import mongoose from '../index';
import UserSchema from '../schema/UserSchema';
import {IUser} from "../interfaces";

const userModel = mongoose.model<IUser>('UserModel', UserSchema, 't_user');
export default userModel;