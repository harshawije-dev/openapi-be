import openApi from "../../config/openAI.config";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const response = await openApi.chat.completions.create({
        messages: [{ role: "user", content: String(body.message) }],
        model: "gpt-3.5-turbo",
    });

    return {
        prompt: body.message,
        result: response.choices[0]
    }
})