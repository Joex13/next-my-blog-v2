import React from 'react';

type Props = {};

const Card = ({ blog }: Props) => {
  return (
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
  );
};

export default Card;
