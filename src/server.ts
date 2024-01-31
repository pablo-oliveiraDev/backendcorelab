import express from 'express';
import cors from 'cors';
import { router } from './routers/router';

const app = express();
const port = process.env.Port || 5080;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // ou substitua '*' pelo domínio específico do seu front-end
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    app.use(cors());
    next();
});
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
