import AppError from '@shared/err/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authJwt from 'src/configs/auth';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: User;
  token: string;
}

export default class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('user not found', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('user not found', 401);
    }

    const token = sign({}, authJwt.secret, {
      subject: user.id,
      expiresIn: authJwt.expiresIn,
    });

    return { user, token };
  }
}
