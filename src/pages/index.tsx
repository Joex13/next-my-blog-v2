import Link from 'next/link';
import { client } from '@/libs/client';
import { HomeHeading } from '@/components/Feature';

export default function Home({ blog }: any) {
  return (
    <>
      <HomeHeading>THIS IS HOME</HomeHeading>
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
