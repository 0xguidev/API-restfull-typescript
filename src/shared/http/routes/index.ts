import { Router } from 'express';

const routes = Router();

routes.get('/', (_request, response) => {
  return response.json({ message: 'Hello World!' });
});

export default routes;
