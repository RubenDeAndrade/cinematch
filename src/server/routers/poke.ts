/**
 * POKE router with tRPC
 */

import { z } from 'zod';
import pokeApi from '~/libs/poke/api';
import { publicProcedure, router } from '~/server/trpc';

export const pokeRouter = router({
  /**
   * Get Pokemon details by ID
   */
  getPokemonById: publicProcedure
    .input(
      z.object({
        id: z.number().min(0),
      }),
    )
    .query(async ({ input }) => {
      return await pokeApi.pokemon.getPokeById(input.id);
    }),
});
