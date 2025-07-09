import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DefaultLayout } from '../../components/DefaultLayout';
import { serverTrpc } from '~/app/_trpc/server';
import type { Pokemon } from '~/libs/poke/dto/pokemon';

interface PokemonProps {
    pokemon: Pokemon
}

function PokemonRN(props: PokemonProps) {
  const { pokemon } = props;
  return (
    <div className="flex flex-col justify-center h-full px-8 ">
      <Link className="text-gray-300 underline mb-4" href="/">
        Home
      </Link>
      <h1 className="text-7xl font-bold w-full text-center capitalize">{pokemon.name}</h1>

      <img src={pokemon.sprites.front_default!} className='w-full max-w-[400px]' />

      <h2 className="text-2xl font-semibold py-2">Raw data:</h2>
      <pre className="bg-gray-900 p-4 rounded-xl overflow-x-scroll">
        {JSON.stringify(pokemon, null, 4)}
      </pre>
    </div>
  );
}

export default async function PokemonDetailPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);

  try {
    const pokemon = await serverTrpc.poke.getPokemonById({ id });

    return (
      <DefaultLayout>
        <PokemonRN pokemon={pokemon} />
      </DefaultLayout>
    );
  } catch {
    notFound();
  }
}
