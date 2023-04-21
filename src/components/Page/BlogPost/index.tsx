import { BlogInfo } from '@/components/Feature';

type Props = {};

const BlogPost = ({ blog }: any) => {
  return (
    <>
      <BlogInfo blog={blog} />
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
        className="mt-4"
      />
    </>
  );
};

export default BlogPost;