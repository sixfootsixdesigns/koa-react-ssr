import * as Router from 'koa-router';
import * as next from 'next';

export const initRoutes = (rootRouter: Router, app: next.Server) => {
  const handle = app.getRequestHandler();

  rootRouter.get('/about', async ctx => {
    await app.render(ctx.req, ctx.res, '/about', ctx.query);
    ctx.respond = false;
  });

  rootRouter.get('/about/:id', async ctx => {
    await app.render(ctx.req, ctx.res, '/about', ctx.query);
    ctx.respond = false;
  });

  rootRouter.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
};
