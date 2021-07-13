import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

app.use(logger());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

router.get('/', async (ctx, next) => {
  ctx.body = { message: 'Hello World!' };

  await next();
});

export default app;
