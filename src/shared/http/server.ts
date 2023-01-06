// prettier-ignore-start
import 'reflect-metadata';
// prettier-ignore-end
import AppError from '@shared/err/AppError';
import '@shared/typeorm';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ status: 'error', message: error.message });
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
