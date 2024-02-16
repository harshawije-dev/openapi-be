import { d as defineEventHandler, u as useRuntimeConfig } from './nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';

const security_get = defineEventHandler((event) => {
  return useRuntimeConfig(event).apiToken;
});

export { security_get as default };
//# sourceMappingURL=security.get.mjs.map
