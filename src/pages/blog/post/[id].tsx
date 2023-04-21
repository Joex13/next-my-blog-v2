import { client } from '@/libs/client';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {};

const Post = ({ blog }: any) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${blog.content}`,
      }}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      offset: 0,
      limit: 100,
    },
  });

  const paths = data.contents.map(
    (content: { id: string }) => `/blog/post/${content.id}`
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id as string;
  console.log(id);

  const data = await client.get({
    endpoint: 'blog',
    contentId: id,
  });

  return {
    props: {
      blog: data,
    },
  };
};

export default Post;
