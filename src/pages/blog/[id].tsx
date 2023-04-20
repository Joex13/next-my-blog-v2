// pages/index.js
import Link from 'next/link';
import { client } from '@/libs/client';
import { GetStaticProps } from 'next';
import { Layout } from '@/components/Base';
import BlogList from '@/components/Domain/BlogList';
import Image from 'next/image';

type Props = {
  blog: [];
};

const PER_PAGE = 4;

const Home: React.FC<Props> = ({ blog }) => {
  return (
    <Layout>
      <BlogList blog={blog} />
    </Layout>
  );
};

export default Home;

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

// データをテンプレートに受け渡す部分の処理を記述します
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
    },
  };
};
