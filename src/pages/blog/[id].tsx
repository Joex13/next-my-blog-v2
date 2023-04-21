// pages/index.js
import { client } from '@/libs/client';
import { GetStaticProps } from 'next';
import { Blog } from '@/components/Page';

type Props = {
  blog: [];
  totalCount: number;
  currentPage: number;
};

const PER_PAGE = 4;

const BlogPage: React.FC<Props> = ({ blog, totalCount, currentPage }) => {
  return (
    <>
      <Blog
        blog={blog}
        totalCount={totalCount}
        PER_PAGE={PER_PAGE}
        currentPage={currentPage}
      />
    </>
  );
};

export default BlogPage;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map(
    (page) => `/blog/${page}`
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = Number(context.params?.id);
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      offset: (id - 1) * 4,
      limit: 4,
    },
  });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      currentPage: data.offset / data.limit + 1,
    },
  };
};
