import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';

export default class SessionsControler {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createSession = new CreateSessionsService();

    const user = await createSession.execute({
      email,
      password,
    });

    return res.json(user);
  }
}
