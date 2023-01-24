import uploadConfig from '@configs/upload';
import AppError from '@shared/err/AppError';
import fs from 'node:fs';
import path from 'node:path';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  userId: string;
  avatarFileName: string;
}

export default class UpdateUserAvatarService {
  public async execute({ avatarFileName, userId }: IRequest) {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findById(userId);

    if (!user) throw new AppError('User not found');

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFileName;

    await usersRepository.save(user);

    return user;
  }
}
