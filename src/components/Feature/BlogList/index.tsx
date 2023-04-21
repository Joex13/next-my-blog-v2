import React from 'react';
import { List } from '@/components/Base';
import { BlogCard } from '@/components/Feature';

type Props = {
  blog: [];
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