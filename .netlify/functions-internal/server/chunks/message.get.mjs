import { d as defineEventHandler, g as getRouterParam } from './nitro/netlify.mjs';
import { o as openApi } from './openAI.config.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'openai';

const message_get = defineEventHandler(async (event) => {
  getRouterParam(event, "prompt");
  const response = await openApi.chat.completions.create({
    messages: [{ role: "user", content: "Are you a daemon ?" }],
    model: "gpt-3.5-turbo"
  });
  return { message: response.choices[0] };
});

export { message_get as default };
//# sourceMappingURL=message.get.mjs.map
