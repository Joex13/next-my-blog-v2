import React from 'react';
import { Heading, ImageFill } from '@/components/Base';
import type { BlogType } from '@/types/';

type Props = {
  blog: BlogType;
};

const BlogInfo = ({ blog }: Props) => {
  return (
    <>
      <div className="text-center [&>*]:mt-2">
        <ImageFill src={blog.eyecatch.url} alt={blog.title} className='mx-auto h-96' aspectSquare={false} />
        <Heading level={1} className="font-bold text-2xl">
          {blog.title}
        </Heading>
        <Heading level={2} className="font-bold text-2xl">
          {blog.publishedAt.slice(0, 10)}
        </Heading>
      </div>
    </>
  );
};

export default BlogInfo;
