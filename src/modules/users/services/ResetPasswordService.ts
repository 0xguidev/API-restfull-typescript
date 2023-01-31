import AppError from '@shared/err/AppError';
import { hash } from 'bcryptjs';
import { addHours, isAfter } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import UserTokensRepository from '../typeorm/repositories/UserTokensRepository';

interface IRequest {
  password: string;
  token: string;
}

export default class ResetPasswordService {
  public async execute({ password, token }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokenRepo = getCustomRepository(UserTokensRepository);

    const userToken = await userTokenRepo.findByToken(token);
    if (!userToken) throw new AppError('User Token do not exists');

    const user = await usersRepository.findById(userToken.user_id);
    if (!user) throw new AppError('User does not exists');

    const userTokenCreateAt = userToken.created_at;
    const compareDate = addHours(userTokenCreateAt, 2);

    if (isAfter(Date.now(), compareDate)) throw new AppError('Token expired');

    user.password = await hash(password, 8);


  }
}
