import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DefaultLayout } from '../../components/DefaultLayout';
import { serverTrpc } from '~/app/_trpc/server';

function PostItem(props: {
  post: {
    id: string;
    title: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
  };
}) {
  const { post } = props;
  return (
    <div className="flex flex-col justify-center h-full px-8 ">
      <Link className="text-gray-300 underline mb-4" href="/">
        Home
      </Link>
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <em className="text-gray-400">
        Created {post.createdAt.toLocaleDateString('en-us')}
      </em>

      <p className="py-4 break-all">{post.text}</p>

      <h2 className="text-2xl font-semibold py-2">Raw data:</h2>
      <pre className="bg-gray-900 p-4 rounded-xl overflow-x-scroll">
        {JSON.stringify(post, null, 4)}
      </pre>
    </div>
  );
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const id = params.id;

  try {
    const post = await serverTrpc.post.byId({ id });

    return (
      <DefaultLayout>
        <PostItem post={post} />
      </DefaultLayout>
    );
  } catch {
    notFound();
  }
}
