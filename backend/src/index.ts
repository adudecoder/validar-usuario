import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

//rotas
app.use(cors());
app.use(routes);

app.listen(3333);