// prettier-ignore-start
import 'reflect-metadata';
// prettier-ignore-end
import uploadConfig from '@configs/upload';
import AppError from '@shared/err/AppError';
import '@shared/typeorm';
import { errors } from 'celebrate';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import routes from './routes';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.use(errors());

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
