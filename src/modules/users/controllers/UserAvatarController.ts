import AppError from '@shared/err/AppError';
import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateuserAvatarService';

export default class UserAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    if (!req.file?.filename) throw new AppError('Avatar file do not exists');

    const user = updateAvatar.execute({
      userId: req.user.id,
      avatarFileName: req.file.filename,
    });

    return res.json(user);
  }
}
