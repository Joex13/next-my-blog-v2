import React from 'react';
import { Heading } from '@/components/Base';
import type { Blog } from '@/types/blog';

type Props = {
  blog: Blog;
};

const BlogInfo = ({ blog }: Props) => {
  return (
    <>
      <div className="text-center [&>*]:mt-4">
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
