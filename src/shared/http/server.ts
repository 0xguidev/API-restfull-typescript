import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
