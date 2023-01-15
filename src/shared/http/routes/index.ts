import productsRouter from '@modules/products/routes/products.routes';
import userRouter from '@modules/users/routes/user.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

routes.use('/user', userRouter);

export default routes;
