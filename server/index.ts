require('dotenv').config();

import * as Koa from 'koa';
import * as next from 'next';
import * as Router from 'koa-router';
import { initRoutes } from './routes';

const port = Number(process.env.PORT || 3000);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  initRoutes(router, app);
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
