import { client } from '@/libs/client';
import { HomeAnchor, HomeHeading } from '@/components/Feature';

export default function Home({ blog }: any) {
  return (
    <div className="text-center">
      <HomeHeading>THIS IS HOME</HomeHeading>
      <HomeAnchor href="/blog/1">記事一覧へ</HomeAnchor>
    </div>
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
