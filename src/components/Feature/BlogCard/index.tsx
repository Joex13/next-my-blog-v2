import React from 'react';
import { ImageFill, Card } from '@/components/Base';
import type { BlogType } from '@/types';
import Link from 'next/link';

type Props = {
  blog: BlogType;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <>
      <Card className="bg-orange-400">
        <article key={blog.id}>
          <Link
            className="flex flex-col h-full p-4 hover:opacity-70 duration-300"
            href={`/blog/post/${blog.id}`}
          >
            <ImageFill src={blog.eyecatch.url} alt={blog.title} aspectSquare />
            <span className="text-ellipsis overflow-hidden whitespace-nowrap font-bold mt-2">
              {blog.title}
            </span>
            <span>公開日:{blog.publishedAt.slice(0, 10)}</span>
          </Link>
        </article>
      </Card>
    </>
  );
};

export default BlogCard;
