/**
 * TMDB router with tRPC
 */

import { z } from 'zod';
import { publicProcedure, router } from '~/server/trpc';
import tmdbApi from '~/libs/tmdb/api';

export const tmdbRouter = router({
  /**
   * Get popular movies with pagination
   */
  getPopularMovies: publicProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
      }),
    )
    .query(async ({ input }) => {
      return await tmdbApi.movies.getPopular(input.page);
    }),

  /**
   * Get movie details by ID
   */
  getMovieById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      return await tmdbApi.movies.getById(input.id);
    }),

  /**
   * Search for movies
   */
  searchMovies: publicProcedure
    .input(
      z.object({
        query: z.string().min(1),
        page: z.number().min(1).default(1),
      }),
    )
    .query(async ({ input }) => {
      return await tmdbApi.movies.search(input.query, input.page);
    }),

  /**
   * Get popular TV shows with pagination
   */
  getPopularTvShows: publicProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
      }),
    )
    .query(async ({ input }) => {
      return await tmdbApi.tv.getPopular(input.page);
    }),

  /**
   * Get TV show details by ID
   */
  getTvShowById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      return await tmdbApi.tv.getById(input.id);
    }),

  /**
   * Search for TV shows
   */
  searchTvShows: publicProcedure
    .input(
      z.object({
        query: z.string().min(1),
        page: z.number().min(1).default(1),
      }),
    )
    .query(async ({ input }) => {
      return await tmdbApi.tv.search(input.query, input.page);
    }),
});
