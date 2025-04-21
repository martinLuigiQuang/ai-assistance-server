import OpenAI from 'npm:openai@4.95.1';

const configuration = {
    apiKey: Deno.env.get('OPEN_AI_API_KEY'),
};

const openAi = new OpenAI(configuration);

const getAiResponse = async (messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]) => {
    const response = await openAi.chat.completions.create({
        model: 'gpt-4o-mini',
        messages,
        max_tokens: 200,
        temperature: 0.2,
    });
    console.log(`Received response from AI modal: ${response.model} - prompt tokens: ${response.usage?.prompt_tokens ?? 0} - completion tokens: ${response.usage?.completion_tokens ?? 0}`)
    return response.choices[0].message.content;
};

export const getAiResponseController = async (reqBody: { messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] }) => {
    const aiResp = await getAiResponse(reqBody.messages);
    return aiResp;
};
