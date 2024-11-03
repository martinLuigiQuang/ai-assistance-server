import { getAiResponseController } from './constrollers/getAiResponse.ts';

const SERVER_DOMAIN = Deno.env.get('SERVER_DOMAIN');

const notImplemented = () => new Response('Not Implemented', { status: 404 })

const postRequestHandlers = (req: Request) => {
    switch(req.url) {
        case `${SERVER_DOMAIN}/api/v1/ai-assistance`:
            return getAiResponseController(req);
        default:
            return notImplemented();
    }
}

const requestHandlers = (req: Request) => {
    switch(req.method) {
        case 'POST':
            return postRequestHandlers(req);
        default:
            return notImplemented();
    }
}

Deno.serve(requestHandlers);