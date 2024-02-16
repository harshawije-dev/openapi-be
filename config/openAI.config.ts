import OpenAI from "openai";

const openApi = new OpenAI({
  apiKey: process.env.NITRO_API_TOKEN,
});

export default openApi;
