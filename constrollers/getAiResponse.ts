import OpenAI from 'npm:openai';

const configuration = {
    apiKey: Deno.env.get('OPEN_AI_API_KEY'),
};

const openAi = new OpenAI(configuration);

const getAiResponse = async (messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]) => {
    console.log('Received message:', messages);
    const response = await openAi.chat.completions.create({
        model: 'chatgpt-4o-latest',
        messages,
        max_tokens: 200,
        temperature: 0.2,
    });
    return response.choices[0].message.content;
};

export const getAiResponseController = async (reqBody: string) => {
    const parsedReqBody = JSON.parse(reqBody);
    const aiResp = await getAiResponse(parsedReqBody.messages);
    return aiResp;
};
