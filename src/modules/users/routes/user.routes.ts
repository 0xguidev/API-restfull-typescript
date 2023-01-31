import uploadConfig from '@configs/upload';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import multer from 'multer';

import IsAuthenticated from '../../../shared/http/middleware/IsAutheticated';
import UserAvatarController from '../controllers/UserAvatarController';
import UsersController from '../controllers/UsersControllers';

const userRouter = Router();

const userController = new UsersController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

userRouter.get('/', IsAuthenticated, userController.index);

userRouter.patch(
  '/avatar',
  IsAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

userRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  userController.show,
);
userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.create,
);

userRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.update,
);
userRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  userController.delete,
);

export default userRouter;
