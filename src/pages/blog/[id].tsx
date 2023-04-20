// pages/index.js
import Link from 'next/link';
import { client } from '@/libs/client';
import { GetStaticProps } from 'next';
import { Layout } from '@/components/Base';
import Image from 'next/image';

type Props = {
  blog: [{ id: string; title: string }];
};

const PER_PAGE = 4;

const Home: React.FC<Props> = ({ blog }) => {
  return (
    <Layout>
      <nav>
        <ul className="grid grid-cols-2 gap-4">
          {blog.map((blog: any) => (
            <li className="text-center bg-orange-400" key={blog.id}>
              <article>
                <Link
                  className="flex flex-col h-full p-4"
                  href={`/blog/post/${blog.id}`}
                >
                  <div className="relative aspect-square">
                    <Image src={blog.eyecatch.url} alt={blog.title} fill />
                  </div>
                  <span>{blog.title}</span>
                  <span>公開日:{blog.publishedAt.slice(0, 10)}</span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </nav>
      ;
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
