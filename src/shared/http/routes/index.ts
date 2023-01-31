import productsRouter from '@modules/products/routes/products.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import sessionRouter from '@modules/users/routes/sessions.routes';
import userRouter from '@modules/users/routes/user.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

routes.use('/user', userRouter);

routes.use('/sessions', sessionRouter);

routes.use('/password', passwordRouter);

export default routes;
