import OpenAI from "openai";

const openApi = new OpenAI({
  apiKey: process.env.API_KEY,
});

export default openApi;
