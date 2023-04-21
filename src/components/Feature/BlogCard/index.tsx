import React from 'react';
import { Card } from '@/components/Base';
import type { Blog } from '@/types/blog';

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <>
      <Card blog={blog} />
    </>
  );
};

export default BlogCard;
