import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
const app: Application = express();
const PORT = 6000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const test1 = require('./routes/testRoute');

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Hello World!',
  });
});

app.use('/test1', test1);

app.post('/post', async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  return res.status(200).send({
    message: 'Hello World from post!',
  });
});

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}
