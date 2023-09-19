import mongoose from '../index';
import CommentSchema from "../schema/CommentSchema";
import { IComment } from "../interfaces";

const commentModel = mongoose.model<IComment>('CommentModel', CommentSchema, 't_comment');
export default commentModel;