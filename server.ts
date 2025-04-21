import express from 'npm:@types/express';
import cors from 'npm:cors';
import bodyParser from 'npm:body-parser';
import { getAiResponseController } from './constrollers/getAiResponse.ts';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health-check', (_req, res) => {
    res.status(200).send({message: 'ok'})
})

app.post('/api/v1/ai-assistance', async (req, res) => {
    const response = await getAiResponseController(req.body);
    res.status(200).send({ message: response });
});

app.listen(8000);
