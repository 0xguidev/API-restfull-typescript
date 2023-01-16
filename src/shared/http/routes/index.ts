import productsRouter from '@modules/products/routes/products.routes';
import sessionRouter from '@modules/users/routes/sessions.routes';
import userRouter from '@modules/users/routes/user.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

routes.use('/user', userRouter);

routes.use('/sessions', sessionRouter);

export default routes;
