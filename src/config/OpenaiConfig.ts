import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openaiConfig = new Configuration({
    apiKey: process.env.OPENAI_SECRET_KEY,
});
const openai = new OpenAIApi(openaiConfig);

export default openai;
