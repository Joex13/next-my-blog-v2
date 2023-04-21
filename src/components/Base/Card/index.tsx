import React from 'react';
import Link from 'next/link';
import ImageFill from '../ImageFill';

type Props = {};

const Card = ({ blog }: any) => {
  return (
    <li className="text-center bg-orange-400">
      <article>
        <Link
          className="flex flex-col h-full p-4"
          href={`/blog/post/${blog.id}`}
        >
          <ImageFill src={blog.eyecatch.url} alt={blog.title} />
          <span>{blog.title}</span>
          <span>公開日:{blog.publishedAt.slice(0, 10)}</span>
        </Link>
      </article>
    </li>
  );
};

export default Card;
