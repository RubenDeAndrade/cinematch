import { pokeRouter } from './routers/poke';
import { postRouter } from './routers/post';
//import { tmdbRouter } from './routers/tmdb';
import { createCallerFactory, publicProcedure, router } from './trpc';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),

  post: postRouter,
  //tmdb: tmdbRouter,
  poke: pokeRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
