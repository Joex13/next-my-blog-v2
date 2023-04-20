import { Layout } from '@/components/Base';
import Link from 'next/link';
import { client } from '@/libs/client';
import Image from 'next/image';

export default function Home({ blog }: any) {
  console.log(blog);
  return (
    <Layout>
      <nav>
        <ul className="grid grid-cols-2 gap-4">
          {blog.map((blog: any) => (
            <li className="text-center bg-orange-400" key={blog.id}>
              <article>
                <Link
                  className="flex flex-col h-full p-4"
                  href={`/blog/${blog.id}`}
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
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
