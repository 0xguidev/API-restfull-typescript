import { Request, Response } from 'express';
import SendForgotPasswordEmailService from '../services/SendForgotPasswordEmailSend';

export default class ForgotPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const sendForgotPasswordEmailService = new SendForgotPasswordEmailService();

    const { email } = req.body;

    await sendForgotPasswordEmailService.execute({ email });

    return res.status(204).json();
  }
}
