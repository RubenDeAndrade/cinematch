import { notFound } from 'next/navigation';
import { DefaultLayout } from '../../components/DefaultLayout';
import { serverTrpc } from '~/app/_trpc/server';
import PokemonRN from '~/app/components/Pokemon';

export default async function PokemonDetailPage({ params }: { params: { id: string } }) {
  const { id: idParam } = await params;
  
  const id = parseInt(idParam, 10);

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
