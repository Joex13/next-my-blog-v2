import Link from 'next/link';
import { client } from '@/libs/client';

export default function Home({ blog }: any) {
  return (
    <>
      <h1>this is home</h1>
      <Link href="/blog/1">記事一覧へ</Link>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      offset: 0,
      limit: 4,
    },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};
