import AppError from '@shared/err/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export default class UpdateUserService {
  public async execute({
    id,
    name,
    email,
    password,
    avatar,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('user not found');
    }

    user.name = name;
    user.email = email;
    user.password = password;
    user.avatar = avatar;

    await usersRepository.save(user);

    return user;
  }
}
