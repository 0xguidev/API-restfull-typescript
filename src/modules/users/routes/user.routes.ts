import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import UsersController from '../controllers/UsersControllers';

const userRouter = Router();

const userController = new UsersController();

userRouter.get('/', userController.index);
userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      avatar: Joi.string(),
    },
  }),
  userController.create,
);
<<<<<<< HEAD

export default userRouter;
=======
>>>>>>> 48b43466c0aa0ab79c383513ddc75eb29b04881a
