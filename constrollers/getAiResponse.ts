import OpenAI from 'npm:openai';

const configuration = {
    apiKey: Deno.env.get('OPEN_AI_API_KEY'),
};

const openAi = new OpenAI(configuration);

const getAiResponse = async (messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]) => {
    const response = await openAi.chat.completions.create({
        model: 'gpt-4',
        messages,
        max_tokens: 200,
        temperature: 0.2,
    });
    return response.choices[0].message.content;
};

export const getAiResponseController = async (reqBody: { messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] }) => {
    const aiResp = await getAiResponse(reqBody.messages);
    return aiResp;
};
