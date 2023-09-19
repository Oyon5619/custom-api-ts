import mongoose from '../index';
import DynamicSchema from "../schema/DynamicSchema";
import {IDynamic} from "../interfaces";

const dynamicModel = mongoose.model<IDynamic>('DynamicModel', DynamicSchema, 't_dynamic');
export default dynamicModel;