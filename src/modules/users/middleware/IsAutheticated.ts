import AppError from '@shared/err/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authJwt from 'src/configs/auth';

export default function IsAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) throw new AppError('TOKEN is missign.', 401);

  const [, token] = authHeaders.split(' ');

  try {
    verify(token, authJwt.secret);
    return next();
  } catch {
    throw new AppError('Invalid Token', 402);
  }
}
