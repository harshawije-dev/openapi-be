//https://nitro.unjs.io/config
export default defineNitroConfig({
  preset: 'netlify',
  runtimeConfig: {
    apiToken: process.env.NITRO_API_TOKEN,
  },
});
