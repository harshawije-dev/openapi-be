//https://nitro.unjs.io/config
export default defineNitroConfig({
  runtimeConfig: {
    apiToken: process.env.API_KEY, // `dev_token` is the default value
  },
});
