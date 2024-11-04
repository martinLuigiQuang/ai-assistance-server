import express from "npm:express@4.21.1";
import cors from 'npm:cors@2.8.5';
import bodyParser from 'npm:body-parser@1.20.3';
import { getAiResponseController } from './constrollers/getAiResponse.ts';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/health-check', (_req, res) => {
    res.status(200).send({message:'ok'})
})

app.post('/api/v1/ai-assistance', async (req, res) => {
    console.log({ body: req.body });
    const response = await getAiResponseController(req.body);
    res.status(200).send(response);
});

app.listen(8000);
