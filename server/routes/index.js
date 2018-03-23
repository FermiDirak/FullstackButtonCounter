import express from 'express';
import counterRoute from './counterRoute'

const routes = express.Router();

routes.use('/counter', counterRoute);

export default routes;