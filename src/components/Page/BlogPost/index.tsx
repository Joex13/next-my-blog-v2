import { BlogInfo } from '@/components/Feature';
import { Post } from '@/components/Base';

type Props = {};

const BlogPost = ({ blog }: any) => {
  return (
    <>
      <BlogInfo blog={blog} />
      <Post blogContent={blog.content} />
    </>
  );
};

export default BlogPost;
