import { client } from '@/libs/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BlogPost } from '@/components/Page';
import type { BlogType } from '@/types/blog';

type Props = {
  blog: BlogType;
};

const BlogPostPage = ({ blog }: Props) => {
  return (
    <>
      <BlogPost blog={blog} />
    </>
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

export default BlogPostPage;
