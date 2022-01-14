import express, { Request, Response } from 'express';
const bodyParser = require('body-parser');
import talkerRoute from './routes/talker';

const app: express.Application = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request: Request, response: Response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Rota /talker
app.use('/talker', talkerRoute);

app.listen(PORT, () => {
  console.log('Online');
});
