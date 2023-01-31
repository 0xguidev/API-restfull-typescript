import AppError from '@shared/err/AppError';
import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
export default class UserTokensRepository extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    try {
      const userToken = await this.findOne({
        where: {
          token,
        },
      });

      return userToken;
    } catch ({ message }) {
      throw new AppError(`${message}`);
    }
  }

  public async generate(user_id: string): Promise<UserToken | undefined> {
    try {
      const userToken = await this.create({ user_id });

      await this.save(userToken);

      return userToken;
    } catch ({ message }) {
      console.error(message);
    }
  }
}
