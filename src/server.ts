import express from 'express';
import cors from 'cors';
import { router } from './routers/router';

const app = express();
const port = process.env.Port || 5080;
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // Se você estiver usando autenticação com credenciais (por exemplo, cookies)
        optionsSuccessStatus: 204
    })
);
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

app.use(router);
app.listen(port, async () =>
    console.log(`Aplicação iniciada na porta ${port}!`)
);
