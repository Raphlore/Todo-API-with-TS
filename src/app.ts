import express, {Request, Response} from 'express'
import todoRouter from './routers/todo';

const app = express();

// Parse incomming json
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'REST API using node'
  })
})

app.use(todoRouter);



export default app;