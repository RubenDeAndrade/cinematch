'use client';

import Link from 'next/link';
import { DefaultLayout } from './components/DefaultLayout';
import { trpc } from './_trpc/client';
import { getTokenFromUrl } from '~/utils/get-token-from-url';

export default function HomePage() {
  /*
  const postsQuery = trpc.post.list.useInfiniteQuery(
    {
      limit: 5,
    },
    {
      getNextPageParam(lastPage) {
        return lastPage.nextCursor;
      },
    },
  );
  */

  const pokemonsQuery = trpc.poke.list.useInfiniteQuery({
    limit: 50,
  }, {
    getNextPageParam(lastPage) {
      const nextCursor = parseInt(getTokenFromUrl(lastPage.next, 6), 10);
      return nextCursor.toString();
    }
  });

  const pokeIds = pokemonsQuery.data?.pages.map((page) => page.results.map((pokeRes) => parseInt(getTokenFromUrl(pokeRes.url, 8), 10))).flat() ?? [];
  const pokemons = trpc.useQueries((t) =>
    pokeIds?.map((id) => t.poke.getPokemonById({ id }))
  );

  return (
    <DefaultLayout>
      <div className="flex flex-col bg-gray-800 py-8">
        <h1 className="w-full text-center text-4xl font-bold">
          Pokédex
        </h1>

        <div className="mt-4 grid justify-center items-center content-center justify-items-center grid-flow-row grid-cols-[repeat(auto-fit,150px)] auto-rows-auto gap-4">
          {pokemons.map(({ data: pokemon }, index) => (
                <div
                  key={index + 1}
                  className="flex flex-col justify-center items-center rounded-md border border-gray-600 bg-gray-700 p-4 w-[150px] h-[200px]"
                >
                  <h2 className="max-w-[100%] text-[20px] font-bold capitalize truncate">{pokemon?.name}</h2>
                  {pokemon?.sprites.front_default && (
                    <img src={pokemon?.sprites.front_default ?? ''} className="max-w-[80px]" />
                  )}
                  <Link
                    href={`/pokemon/${pokemon?.id}`}
                    className="mt-2 inline-block text-center rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
                  >
                    View
                  </Link>
                </div>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <button
            className="rounded-md bg-indigo-500 px-4 py-2 mt-6 text-white hover:bg-indigo-600"
            onClick={() => void pokemonsQuery.fetchNextPage()}
            disabled={
              !pokemonsQuery.hasNextPage || pokemonsQuery.isFetchingNextPage
            }
          >
            {pokemonsQuery.isFetchingNextPage
              ? 'Loading more...'
              : pokemonsQuery.hasNextPage
                ? 'Load more'
                : 'No more pokémon'}
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}
