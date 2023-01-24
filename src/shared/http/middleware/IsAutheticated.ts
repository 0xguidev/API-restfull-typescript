import AppError from '@shared/err/AppError';
import { NextFunction, request, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authJwt from 'src/configs/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}
export default function IsAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) throw new AppError('TOKEN is missign.', 401);

  const [, token] = authHeaders.split(' ');

  try {
    const decodedToken = verify(token, authJwt.secret);
    const { sub } = decodedToken as ITokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid Token', 402);
  }
}
