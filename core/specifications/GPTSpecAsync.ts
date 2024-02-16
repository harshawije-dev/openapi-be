import openApi from "../../config/openAI.config";

async function GPTSpecAsync() {
  const response = await openApi.chat.completions.create({
    messages: [{ role: "user", content: "Hello There" }],
    model: "gpt-3.5-turbo",
  });

  return response.choices[0];
}

export default GPTSpecAsync;
