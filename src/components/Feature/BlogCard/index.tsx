import React from 'react';
import { Card } from '@/components/Base';

type Props = {};

const BlogCard = ({ blog }: any) => {
  return (
    <>
      <Card blog={blog} />
    </>
  );
};

export default BlogCard;
