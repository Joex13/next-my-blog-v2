import React from 'react';
import { List } from '@/components/Base';
import { BlogCard } from '@/components/Feature';
import type { BlogType } from '@/types/blog';

type Props = {
  blog: BlogType[];
};

const BlogList = ({ blog }: Props) => {
  return (
    <List>
      {blog.map((blog: any) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </List>
  );
};

export default BlogList;
