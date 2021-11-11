import {  Router } from 'express';
import ContactController from './app/controllers/ContactController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth'


const routes = new Router();

routes.post('/register', ContactController.store);
routes.post('/session', SessionController.store)

routes.use(authMiddleware);

routes.put('/register', ContactController.update);

export default routes;