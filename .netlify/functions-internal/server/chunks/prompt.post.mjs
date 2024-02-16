import { d as defineEventHandler, r as readBody } from './nitro/netlify.mjs';
import { o as openApi } from './openAI.config.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'openai';

const prompt_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const response = await openApi.chat.completions.create({
    messages: [{ role: "user", content: String(body.message) }],
    model: "gpt-3.5-turbo"
  });
  return {
    prompt: body.message,
    result: response.choices[0]
  };
});

export { prompt_post as default };
//# sourceMappingURL=prompt.post.mjs.map
