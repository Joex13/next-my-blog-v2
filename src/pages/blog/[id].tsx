// pages/index.js
import { client } from '@/libs/client';
import { GetStaticProps } from 'next';
import { Blog } from '@/components/Page';
import { BlogType } from '@/types/';

type Props = {
  blog: BlogType[];
  totalCount: number;
  totalPage: number;
  currentPage: number;
};

const PER_PAGE = 2;

const BlogPage: React.FC<Props> = ({
  blog,
  totalCount,
  currentPage,
  totalPage,
}) => {
  return (
    <>
      <Blog
        blog={blog}
        totalCount={totalCount}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </>
  );
};

export default BlogPage;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const paths = Array.from(
    { length: Math.ceil(data.totalCount / PER_PAGE) },
    (_, i) => `/blog/${i + 1}`
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
      offset: (id - 1) * PER_PAGE,
      limit: PER_PAGE,
    },
  });

  const currentPage = data.offset / data.limit + 1;
  const totalCount = data.totalCount;
  const totalPage = Math.ceil(totalCount / PER_PAGE);

  return {
    props: {
      blog: data.contents,
      totalCount,
      currentPage,
      totalPage,
    },
  };
};
