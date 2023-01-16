import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import SessionsControler from '../controllers/SessionController';

const sessionRouter = Router();

const sessionControler = new SessionsControler();

sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  sessionControler.create,
);

export default sessionRouter;
