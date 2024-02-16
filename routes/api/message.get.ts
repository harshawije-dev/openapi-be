import openApi from "../../config/openAI.config";

export default defineEventHandler(async (event) => {
  const prompt = getRouterParam(event, "prompt");

  const response = await openApi.chat.completions.create({
    messages: [{ role: "user", content: "Are you a daemon ?" }],
    model: "gpt-3.5-turbo",
  });

  return { message: response.choices[0] };
});
