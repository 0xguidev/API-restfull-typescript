import AppError from '@shared/err/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default class UpdateUserService {
  public async execute({ id, name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('user not found');
    }

    const hasedPassword = await hash(password, 8);

    user.name = name;
    user.email = email;
    user.password = hasedPassword;

    await usersRepository.save(user);

    return user;
  }
}
